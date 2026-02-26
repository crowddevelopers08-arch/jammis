import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export const runtime = "nodejs"

interface LeadData {
  name: string
  phone: string
  email?: string
  condition?: string
  message?: string
  consent?: boolean
  source?: string
  formName?: string
  pincode?: string
  additionalContext?: string
}

/**
 * Build a readable string of all form data for TeleCRM notes
 */
function generateFormDataString(leadData: LeadData, liveUrl: string): string {
  const details: string[] = []

  if (leadData.name) details.push(`Name: ${leadData.name}`)
  if (leadData.phone) details.push(`Phone: ${leadData.phone}`)
  if (leadData.email) details.push(`Email: ${leadData.email}`)
  if (leadData.condition) details.push(`Condition: ${leadData.condition}`)
  if (leadData.pincode) details.push(`Pincode: ${leadData.pincode}`)
  
  // Add live URL information
  details.push(`Live URL: ${liveUrl}`)
  details.push(`Form Source Page: ${liveUrl}`)
  
  if (leadData.source) {
    details.push(`Source Field: ${leadData.source}`)
  }
  
  details.push(`Consent: ${leadData.consent ? "Yes" : "No"}`)

  if (leadData.message) {
    const messagePreview =
      leadData.message.length > 100
        ? `${leadData.message.substring(0, 100)}...`
        : leadData.message
    details.push(`Message: ${messagePreview}`)
  }

  // Add additional context if available
  if (leadData.additionalContext) {
    try {
      const context = JSON.parse(leadData.additionalContext)
      if (context.pageTitle) details.push(`Page Title: ${context.pageTitle}`)
      if (context.referrer) details.push(`Referrer: ${context.referrer}`)
      if (context.pathname) details.push(`Path: ${context.pathname}`)
    } catch {
      // If not JSON, just ignore
    }
  }

  return details.join(" | ")
}

/**
 * Send lead data to TeleCRM
 */
async function sendToTeleCRM(leadData: LeadData) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15000)

  const endpoint = process.env.TELECRM_API_URL

  if (!endpoint) {
    throw new Error("TELECRM_API_URL environment variable is not set")
  }

  if (!process.env.TELECRM_API_KEY) {
    throw new Error("TELECRM_API_KEY environment variable is not set")
  }

  try {
    // Use the live URL from source, or fallback to a default
    const liveUrl = leadData.source || "Unknown URL"
    const formDataString = generateFormDataString(leadData, liveUrl)
    const simpleFormName = leadData.formName || "Jammi Consultation Form"

    // Extract domain from URL for better categorization
    let domain = "unknown"
    try {
      if (liveUrl && liveUrl !== "Unknown URL") {
        const urlObj = new URL(liveUrl)
        domain = urlObj.hostname
      }
    } catch {
      // If URL parsing fails, use the source as is
      domain = liveUrl.substring(0, 50)
    }

    const telecrmPayload = {
      fields: {
        Id: "",
        name: leadData.name,
        email: leadData.email || "",
        phone: (leadData.phone || "").replace(/\D/g, ""),
        city_1: "",
        preferredtime: "",
        preferreddate: "",
        message: leadData.message || "",
        select_the_procedure: leadData.condition || "",

        Country: "",
        LeadID: "",
        CreatedOn: new Date().toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
        "Lead Stage": "",
        "Lead Status": "new",
        "Lead Request Type": "consultation",
        PageName: domain, // Store domain in PageName
        State: "",
        Age: "",
        FormName: simpleFormName,
        Pincode: leadData.pincode || "",
      },
      actions: [
        { type: "SYSTEM_NOTE", text: `Form Name: ${simpleFormName}` },
        { type: "SYSTEM_NOTE", text: `Live URL: ${liveUrl}` },
        { type: "SYSTEM_NOTE", text: `Domain: ${domain}` },
        { type: "SYSTEM_NOTE", text: `Complete Form Data: ${formDataString}` },
        {
          type: "SYSTEM_NOTE",
          text: `Lead Source URL: ${leadData.source || "Not provided"}`,
        },
        {
          type: "SYSTEM_NOTE",
          text: `Condition: ${leadData.condition || "Not specified"}`,
        },
        {
          type: "SYSTEM_NOTE",
          text: `Consent Given: ${leadData.consent ? "Yes" : "No"}`,
        },
      ],
    }

    // Add additional context if available
    if (leadData.additionalContext) {
      try {
        const context = JSON.parse(leadData.additionalContext)
        if (context.referrer && context.referrer !== "direct") {
          telecrmPayload.actions.push({
            type: "SYSTEM_NOTE",
            text: `Referrer: ${context.referrer}`,
          })
        }
      } catch {
        // Ignore parsing errors
      }
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TELECRM_API_KEY}`,
        "X-Client-ID": "nextjs-website-integration",
        Accept: "application/json",
      },
      body: JSON.stringify(telecrmPayload),
      signal: controller.signal,
    })

    const status = response.status
    const responseText = await response.text()

    let parsed: any = null
    try {
      parsed = responseText ? JSON.parse(responseText) : null
    } catch {
      parsed = null
    }

    // Log for debugging
    console.log("TeleCRM response (leads):", {
      status,
      ok: response.ok,
      url: liveUrl,
      domain,
      rawPreview: responseText.slice(0, 300),
    })

    if (!response.ok) {
      const msg =
        parsed?.message ||
        `TeleCRM HTTP ${status}: ${responseText.slice(0, 200)}`
      throw new Error(msg)
    }

    // Treat any 2xx (even HTML / non-JSON) as success
    clearTimeout(timeout)
    return (
      parsed || {
        status: "success",
        raw: responseText.slice(0, 300),
        httpStatus: status,
      }
    )
  } catch (error) {
    clearTimeout(timeout)
    throw error instanceof Error ? error : new Error(String(error))
  }
}

/**
 * POST /api/leads
 * Creates lead in Prisma + pushes to TeleCRM
 */
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LeadData

    if (!body.name || !body.phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: name, phone" },
        { status: 400 },
      )
    }

    const simpleFormName = body.formName || "Jammi Consultation Form"
    const cleanedPhone = (body.phone || "").replace(/\D/g, "")
    
    // Ensure we have a valid source (live URL)
    const liveSource = body.source || "Unknown URL"
    
    console.log("Processing lead with source URL:", liveSource)

    // 1) Create lead in DB
    const createdLead = await prisma.lead.create({
      data: {
        name: body.name,
        phone: cleanedPhone,
        email: body.email || null,
        course: body.condition || null, // store "Condition" in course field
        message: body.message || null,
        source: liveSource, // This now stores the live URL
        formName: simpleFormName,
        consent: body.consent ?? true,
        priority: "MEDIUM",
        status: "NEW",
      },
    })

    // 2) Send to TeleCRM (best-effort)
    let telecrmResponse: any = null
    let telecrmError: string | null = null
    let telecrmId: string | null = null

    try {
      telecrmResponse = await sendToTeleCRM({
        ...body,
        phone: cleanedPhone,
        formName: simpleFormName,
        source: liveSource, // Pass the live URL to TeleCRM
      })
      telecrmId =
        telecrmResponse?.id ||
        telecrmResponse?.data?.id ||
        telecrmResponse?.lead_id ||
        null
    } catch (err) {
      telecrmError = err instanceof Error ? err.message : String(err)
      console.error("TeleCRM error (leads):", telecrmError)
    }

    // 3) Update lead with TeleCRM sync info
    const updatedLead = await prisma.lead.update({
      where: { id: createdLead.id },
      data: {
        telecrmSynced: !telecrmError,
        telecrmId: telecrmId || undefined,
        telecrmError: telecrmError || undefined,
        syncedAt: !telecrmError ? new Date() : undefined,
      },
    })

    return NextResponse.json(
      {
        success: true,
        data: updatedLead,
        telecrmResponse,
        telecrmError,
        sourceUrl: liveSource, // Return the source URL in response
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Lead submission error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process lead",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

/**
 * GET /api/leads
 * Returns all leads for dashboard
 */
export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    })
    
    // Log source URLs for debugging
    const sourceUrls = leads.map(l => ({ id: l.id, source: l.source }))
    console.log("Lead source URLs:", sourceUrls)
    
    return NextResponse.json({ success: true, data: leads })
  } catch (error) {
    console.error("Error fetching leads:", error)
    return NextResponse.json(
      { success: false, error: "Failed to fetch leads", data: [] },
      { status: 500 },
    )
  }
}
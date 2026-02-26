// app/api/leads/[id]/route.ts
import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import type { LeadStatus } from "@prisma/client"

export const runtime = "nodejs"

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { status } = await request.json()

    const allowed: LeadStatus[] = [
      "NEW",
      "CONTACTED",
      "SCHEDULED",
      "CONVERTED",
      "LOST",
      "INVALID",
    ]

    if (!status || !allowed.includes(status)) {
      return NextResponse.json(
        { success: false, error: "Invalid status" },
        { status: 400 },
      )
    }

    const updated = await prisma.lead.update({
      where: { id: params.id },
      data: { status },
    })

    return NextResponse.json({ success: true, data: updated })
  } catch (error) {
    console.error("Error updating lead:", error)
    return NextResponse.json(
      { success: false, error: "Failed to update lead" },
      { status: 500 },
    )
  }
}

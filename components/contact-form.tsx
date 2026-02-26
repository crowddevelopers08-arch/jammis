// components/ContactSection.tsx
"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Mail, Phone } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

const ContactSection = () => {
  const { toast } = useToast()
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    condition: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Missing details",
        description: "Please fill name, phone and email.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          condition: formData.condition,
          message: formData.message,
          consent: true,
          source:  window.location.href, // Pass the live URL as source
          formName: "Jammi Consultation Form",
        }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        // Redirect to thank you page
        router.push('/thank-you')
      } else {
        console.error("Lead submit error:", data)
        toast({
          title: "Submission failed",
          description: data.error || "Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Lead submit error:", error)
      toast({
        title: "Submission failed",
        description: "Network or server error. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
      `}</style>
      <section
        id="contact"
        className="py-10 md:py-10 lg:py-10 max-[470px]:py-6 bg-[#f3f3f3] scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {/* Form Section */}
            <div id="form" className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#530d3c] mb-3 md:mb-4">
                  Book Your Ayurvedic Consultation
                </h2>
                <p className="text-[#530d3c]/80 text-sm md:text-base mb-6">
                  Fill in your details for a personalized consultation. Our
                  Ayurvedic doctors will contact you within 24 hours.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-[#530d3c] font-medium text-sm"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-white border-[#530d3c]/20 focus:border-[#fcb716] focus:ring-[#fcb716]/30 text-[#530d3c] h-10 md:h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-[#530d3c] font-medium text-sm"
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="bg-white border-[#530d3c]/20 focus:border-[#fcb716] focus:ring-[#fcb716]/30 text-[#530d3c] h-10 md:h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-[#530d3c] font-medium text-sm"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-white border-[#530d3c]/20 focus:border-[#fcb716] focus:ring-[#fcb716]/30 text-[#530d3c] h-10 md:h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="condition"
                    className="text-[#530d3c] font-medium text-sm"
                  >
                    Condition / Concern
                  </Label>
                  <Input
                    id="condition"
                    placeholder="e.g., PCOS, Fatty Liver, Kidney Stones"
                    value={formData.condition}
                    onChange={(e) =>
                      setFormData({ ...formData, condition: e.target.value })
                    }
                    className="bg-white border-[#530d3c]/20 focus:border-[#fcb716] focus:ring-[#fcb716]/30 text-[#530d3c] h-10 md:h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-[#530d3c] font-medium text-sm"
                  >
                    Additional Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your symptoms or concerns..."
                    rows={2}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-white border-[#530d3c]/20 focus:border-[#fcb716] focus:ring-[#fcb716]/30 text-[#530d3c] resize-none text-sm min-h-[80px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer bg-[#530d3c] hover:bg-[#530d3c]/90 text-white hover:text-[#fcb716] font-semibold py-5 md:py-5 text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Submit & Get a Call Back"}
                </Button>
              </form>
            </div>

            {/* Map & Contact Info Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#530d3c] mb-3 md:mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#fcb716]" />
                  Visit Our Clinic
                </h3>
                <p className="text-[#530d3c]/80 text-sm md:text-base mb-4">
                  Old no:20/ New no:14, Flat no 2B, Abhirami, 2nd Floor, Dr
                  Nair Rd, T. Nagar, Chennai, Tamil Nadu 600017
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#530d3c]" />
                    <span className="text-[#530d3c] text-sm">
                      +91 9043020764
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#530d3c]" />
                    <span className="text-[#530d3c] text-sm">
                      jammisclinic@gmail.com
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg border border-[#530d3c]/10 h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d59105.51929571574!2d80.1865728!3d13.074431999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a526700323541a5%3A0xe9ae64603fb0ea7f!2sOld%20no%3A20%2F%20New%20no%3A14%2C%20Flat%20no%202B%2C%20Abhirami%2C%202nd%20Floor%2C%20Dr%20Nair%20Rd%2C%20T.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600017!3m2!1d13.0407239!2d80.2404008!5e1!3m2!1sen!2sin!4v1764937561419!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jammi's Clinic Location"
                  className="bg-gray-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactSection
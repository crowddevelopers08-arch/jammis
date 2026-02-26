"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import ThankHeaderone from "@/components/thank-header";
import Script from "next/script";

const ThankYouPage = () => {
  return (
    <>
      <ThankHeaderone />
      
      {/* Google Ads Conversion Tracking Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=AW-17790479579`}
      />
      <Script
        id="google-ads-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'AW-17790479579');
            
            gtag('event', 'conversion', {
              'send_to': 'AW-17790479579/c_iTCLOwrtMbENvZlKNC',
              'value': 1.0,
              'currency': 'INR',
              'transaction_id': ''
            });
          `
        }}
      />

      <div className="min-h-screen mt-20 max-[470px]:mt-10 bg-gradient-to-b from-[#f3f3f3] to-white py-12 md:py-16">
        <div className="container px-4 sm:px-6 max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#d3315c]/20 rounded-full mb-4">
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-[#d3315c]" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1a1a1a] mb-3">
              Thank You
            </h1>
            <div className="w-16 h-1 bg-[#d3315c] mx-auto rounded-full mb-4"></div>
            <p className="text-base sm:text-lg text-gray-700">
              Your consultation request has been received.
            </p>
          </div>

          {/* Success Message */}
          <div className="bg-white rounded-xl shadow p-6 sm:p-8 mb-8 border border-gray-200">
            <div className="text-center">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                We'll Contact You Shortly
              </h2>
              <p className="text-gray-600 mb-6">
                Our Ayurvedic experts will call you within 24 hours to discuss your concerns and schedule your consultation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#d3315c]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-[#d3315c]">1</span>
                  </div>
                  <p className="text-sm text-gray-600">Personal consultation with our Ayurvedic doctor</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#d3315c]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-[#d3315c]">2</span>
                  </div>
                  <p className="text-sm text-gray-600">Customized treatment plan based on your needs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#d3315c]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-[#d3315c]">3</span>
                  </div>
                  <p className="text-sm text-gray-600">Follow-up support throughout your journey</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
              <div className="w-10 h-10 rounded-full bg-[#d3315c]/10 flex items-center justify-center mx-auto mb-3">
                <Phone className="w-5 h-5 text-[#d3315c]" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Call Us</h3>
              <a 
                href="tel:+919043020764" 
                className="text-base font-bold text-[#d3315c] hover:text-[#b32a50] hover:underline block"
              >
                +91 90430 20764
              </a>
              <p className="text-xs text-gray-500 mt-1">Mon-Sat, 9 AM - 8 PM</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
              <div className="w-10 h-10 rounded-full bg-[#d3315c]/10 flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-5 h-5 text-[#d3315c]" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Email Us</h3>
              <a 
                href="mailto:jammisclinic@gmail.com" 
                className="text-base font-bold text-[#d3315c] hover:text-[#b32a50] hover:underline block"
              >
                jammisclinic@gmail.com
              </a>
              <p className="text-xs text-gray-500 mt-1">Response within 2 hours</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link href="/">
              <Button 
                className="bg-gradient-to-r from-[#d3315c] to-pink-600 hover:from-[#b32a50] hover:to-[#d3315c] text-white font-medium py-5 px-8 text-base"
              >
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Clinic Information */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-xs">
              <strong className="text-gray-900">Clinic Address:</strong> Old no:20/ New no:14, Flat no 2B, Abhirami, 2nd Floor, Dr Nair Rd, T. Nagar, Chennai, Tamil Nadu 600017
            </p>
            <p className="text-gray-500 text-xs mt-1">
              125+ Years of Ayurvedic Heritage
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
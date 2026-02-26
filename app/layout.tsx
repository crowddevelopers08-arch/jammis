import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "Jammi's Ayurvedic",
  description:
    "Comprehensive Ayurvedic Care for PCOS, Liver, Kidney health and Other Lifestyle Diseases.",
  generator: 'Nextjs15',
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Jammi's Ayurvedic",
    description: "Comprehensive Ayurvedic Care for PCOS, Liver, Kidney health and Other Lifestyle Diseases.",
    url: "https://ayurveda.jammi.in",
    siteName: "Advanced Gloskin",
    locale: "en_IN",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P58RBSJ2');
            `
          }}
        />

        {/* Google Ads Conversion Tracking Scripts */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17790479579"
        />
        <Script
          id="google-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-17790479579');
              
              gtag('config', 'AW-17790479579/jl61CLXJqdMbENvZlKNC', {
                'phone_conversion_number': '7436856789'
              });
            `
          }}
        />

        {/* Additional Google Ads Tag */}
        <Script
          id="google-ads-async"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17790479579');
            `
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17790479579"
          strategy="afterInteractive"
        />

        {/* Structured Data for Local Business */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "Advanced Gloskin",
              "description": "Advanced skincare treatments including laser hair reduction, hydrafacial, brightening treatments, and anti-ageing solutions",
              "url": "https://advancedgloskin.com",
              "telephone": "+917436856789",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Second Floor Block, Sankaran Avenue, Plot No.31, 20, Pandian St",
                "addressLocality": "Velachery",
                "addressRegion": "Chennai",
                "postalCode": "600042",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "12.9784",
                "longitude": "80.2204"
              },
              "openingHours": "Mo,Tu,We,Th,Fr,Sa 09:00-20:00",
              "priceRange": "₹₹",
              "image": "https://advancedgloskin.com/og-image.jpg"
            })
          }}
        />
      </head>
      <body className="font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P58RBSJ2"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        
        {children}
      </body>
    </html>
  )
}
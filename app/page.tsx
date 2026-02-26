"use client";
import Headerone from "@/components/navbar";
import { WhyTrustSection } from "@/components/hair-loss-stages";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import FAQ from "@/components/faq";
import StudentSuccess from "@/components/comparison-section";
import YouTubeVideos from "@/components/video";
import MarqueeImageRow from "@/components/logoslider";
import ConsultationFormPopup from "@/components/popupform";
import Chatbot from "@/components/chatbot";
import HairCareBanner from "@/components/enrollment";
import ContactSection from "@/components/contact-form";
import FAQSection from "@/components/faq";
import TestimonialsSection from "@/components/enrollment";
import AboutSection from "@/components/comparison-section";
import TreatmentsSection from "@/components/chatbot";
import { Header } from "@radix-ui/react-accordion";
import Hero from "@/components/hero-section";
import WhyAyurdanAyurveda from "@/components/benefits-section";
import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '996506929389778');
              fbq('track', 'PageView');
            `
          }}
        />
        {/* End Meta Pixel Code */}
      </Head>

      {/* Meta Pixel Noscript */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=996506929389778&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      <Headerone />
      <main className="min-h-screen bg-background">
        <section id="hero">
          <Hero />
        </section>
        {/* <WhyAyurdanAyurveda /> */}
        <section id="why">
          <WhyTrustSection />
        </section>
               
        {/* <MarqueeImageRow /> */}
        <YouTubeVideos />
        <section id="treatment">
          <TreatmentsSection />
          </section>

        <section id="about">
          <AboutSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      
        <Footer />
      </main>
    </>
  );
}
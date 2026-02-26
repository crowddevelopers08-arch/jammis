"use client";
import Link from 'next/link';

export default function Aboutus() {
  return (
    <>
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
    `}</style>
    <div className="min-h-screen bg-[#101828] text-white"
          style={{fontFamily: "'Outfit', sans-serif"}}>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Our Vision & Mission
        </h1>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-10 shadow-xl border border-[#ff0279]/20">
          
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-[#d90f12] text-center">Our Vision</h2>
            <div className="bg-white/5 rounded-lg p-6 border-l-4 border-[#d90f12]">
              <p className="text-lg text-gray-300 leading-relaxed">
                Advanced Grohair Clinic aims to be a global cosmetics centre that is supported by a combination 
                of the best medical treatments with strong ethical principles and a culture of care and compassion. 
                This helps our vision to be a premier institution in our specialization areas.
              </p>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-[#d90f12] text-center">Our Mission</h2>
            <div className="bg-white/5 rounded-lg p-6 border-l-4 border-[#d90f12]">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                To enhance the patients' natural beauty by providing high quality aesthetic services with low cost, 
                safe, evidence based and less downtime procedures under one roof through transparent patient-centric care, 
                ensuring patient safety, privacy and dignity.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-semibold text-center">
                An institution where <span className="text-[#d90f12]">Every Hair Indeed Matters</span>.
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-[#d90f12] text-center">Our Core Values</h2>
            <div className="bg-white/5 rounded-lg p-6 border-l-4 border-[#d90f12]">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                <span className="text-white font-semibold">Ethic & Responsibility</span> is at the crux of everything we do. 
                Our main values are; ethical, up-to-date and patient-centered healthcare in all our services, 
                puts patients' and employees' welfare first, always respecting patients' rights, doctor-patient 
                confidentialities and the environment.
              </p>
              <div className="text-center">
                <p className="text-xl text-[#d90f12] font-bold italic">
                  That's why our clinic's mission is shaped by the basic value of
                </p>
                <p className="text-2xl text-white font-bold mt-2">
                  'Hair Care without Compromise'
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-600">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-white">Get in Touch</h3>
              <p className="text-gray-300 mb-2">Phone: +91 7436856789</p>
              <p className="text-gray-300">
                Experience the difference of ethical, patient-centered hair care today.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#101828] py-8 px-6 mt-12 border-t border-[#ff0279]/20">
        <div className="container mx-auto text-center">
          <p className="text-white">
            Copyright © 2025 Adgro Hair Royapuram | Powered by Adglo Skin Royapuram
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}
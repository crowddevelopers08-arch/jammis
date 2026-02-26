"use client";

import ThankHeaderone from "@/components/thank-header";

const PrivacyPolicy = () => {
  return (
    <>
    <ThankHeaderone />
   
    <div className="min-h-screen mt-20 max-[470px]:mt-10 bg-[#f3f3f3] py-12 md:py-16 lg:py-20">
      <div className="container px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-[#530d3c] mb-4">
            Privacy Policy
          </h1>
          <div className="w-20 h-1 bg-[#fcb716] mx-auto rounded-full"></div>
          <p className="text-[#530d3c]/70 mt-4 text-sm sm:text-base">
            Last Updated: {new Date().getFullYear()}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 border border-[#530d3c]/10">
          <div className="prose prose-lg max-w-none text-[#530d3c]/80">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#530d3c] mb-4">
                1. Introduction
              </h2>
              <p className="mb-4">
                Welcome to Jammi's Wellness & Livercure Clinic. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at <a href="mailto:info@jammis.com" className="text-[#fcb716] hover:underline">info@jammis.com</a>.
              </p>
              <p>
                When you visit our website <a href="https://www.jammis.in" className="text-[#fcb716] hover:underline">www.jammis.com</a>, use our services, or interact with us in any other way, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#530d3c] mb-4">
                2. Informations We Collect
              </h2>
              <h3 className="text-lg sm:text-xl font-semibold text-[#530d3c] mb-2">
                2.1 Personal Information You Disclose to Us
              </h3>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li><strong>Contact Information:</strong> Name, phone number, email address, residential address</li>
                <li><strong>Health Information:</strong> Medical history, symptoms, condition details, treatment preferences</li>
                <li><strong>Demographic Information:</strong> Age, gender, location</li>
                <li><strong>Consultation Details:</strong> Appointment history, doctor consultations, treatment plans</li>
                <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely through third-party payment processors)</li>
              </ul>
              
              <h3 className="text-lg sm:text-xl font-semibold text-[#530d3c] mb-2">
                2.2 Information Automatically Collected
              </h3>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li><strong>Usage Data:</strong> IP address, browser type, operating system, referring URLs, device information</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to access or store information</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#530d3c] mb-4">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">We use personal information collected via our Services for a variety of business purposes described below:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To provide and maintain our services, including to monitor the usage of our service</li>
                <li>To manage your account and registration as a user of the service</li>
                <li>For the performance of a contract with you</li>
                <li>To contact you regarding appointments, consultations, and treatment updates</li>
                <li>To provide you with news, special offers, and general information about other services we offer</li>
                <li>To manage your requests and inquiries</li>
                <li>For business transfers and legal obligations</li>
                <li>For data analysis, identifying usage trends, and evaluating and improving our services</li>
              </ul>
            </section>

            {/* Sharing Your Information */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#530d3c] mb-4">
                4. Sharing Your Information
              </h2>
              <p className="mb-4">We may share your information in the following situations:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>With Healthcare Professionals:</strong> Sharing medical information with our Ayurvedic doctors for treatment purposes</li>
                <li><strong>With Service Providers:</strong> Third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
                <li><strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business</li>
                <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent</li>
                <li><strong>For Legal Reasons:</strong> To comply with applicable law, governmental requests, judicial proceedings, court orders, or legal process</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#530d3c] mb-4">
                5. Data Security
              </h2>
              <p className="mb-4">
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk.
              </p>
              <p>
                We maintain administrative, technical, and physical safeguards designed to protect the personal information you provide against accidental, unlawful, or unauthorized destruction, loss, alteration, access, disclosure, or use.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#530d3c] mb-4">
                6. Data Retention
              </h2>
              <p>
                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). Medical records are retained for a minimum period as required by healthcare regulations.
              </p>
            </section>

            {/* Your Privacy Rights */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#530d3c] mb-4">
                7. Your Privacy Rights
              </h2>
              <p className="mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate personal information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to restrict processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to object to processing of your personal information</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at <a href="mailto:info@jammis.com" className="text-[#fcb716] hover:underline">info@jammis.com</a>. We will respond to your request within 30 days.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#530d3c] mb-4">
                8. Children's Privacy
              </h2>
              <p>
                Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
              </p>
            </section>

            {/* Updates to This Policy */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#530d3c] mb-4">
                9. Updates to This Policy
              </h2>
              <p>
                We may update this privacy notice from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#530d3c] mb-4">
                10. Contact Information
              </h2>
              <div className="bg-[#f3f3f3] rounded-lg p-4 sm:p-6">
                <p className="font-semibold mb-2">Jammi's Wellness & Livercure Clinic</p>
                <p className="mb-2">"Abhirami" 2B, Old No. 20, New No.14, Dr Nair Road, T.Nagar, Chennai - 600 017</p>
                <p className="mb-2">📞 <a href="tel:+919043020764" className="text-[#fcb716] hover:underline">+91 90430 20764</a></p>
                <p>📧 <a href="mailto:jammisclinic@gmail.com" className="text-[#fcb716] hover:underline">jammisclinic@gmail.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
     </>
  );
};

export default PrivacyPolicy;
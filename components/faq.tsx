"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "PCOS-Related FAQs",
    faqs: [
      {
        question: "How long does Ayurvedic PCOS treatment take?",
        answer: "Most patients begin seeing changes within 6–12 weeks, depending on cycle irregularity, metabolism, and chronicity.",
      },
      {
        question: "Can Ayurveda help with irregular periods and acne?",
        answer: "Yes. Treatment focuses on balancing hormones, improving digestion, and correcting underlying metabolic issues.",
      },
      {
        question: "Will I need to change my diet or lifestyle?",
        answer: "Small changes may be recommended based on your body type to support faster recovery.",
      },
    ],
  },
  {
    title: "Liver-Related FAQs",
    faqs: [
      {
        question: "Can Ayurveda help with fatty liver?",
        answer: "Yes. Ayurvedic herbs help detoxify the liver, reduce inflammation, and improve digestion and metabolism.",
      },
      {
        question: "Do I need tests before treatment?",
        answer: "Basic liver function tests are helpful but not mandatory; the doctor will guide you.",
      },
    ],
  },
  {
    title: "Kidney-Related FAQs",
    faqs: [
      {
        question: "Can Ayurveda reduce kidney stone recurrence?",
        answer: "Yes. Herbal formulations help flush out toxins and reduce the chances of recurring stone formation.",
      },
      {
        question: "Is Ayurvedic kidney treatment safe long-term?",
        answer: "Absolutely — our formulations are herbal, GMP-certified, and safe for continued support.",
      },
    ],
  },
  {
    title: "General Treatment FAQs",
    faqs: [
      {
        question: "How will the doctor decide my treatment plan?",
        answer: "After understanding your symptoms, lifestyle, body type, and medical history.",
      },
      {
        question: "Are the medicines safe?",
        answer: "Yes. All formulations are GMP-certified and made using classical Ayurvedic preparation methods.",
      },
      {
        question: "Can I continue my current medications?",
        answer: "In most cases, yes. Our doctors will advise how to integrate Ayurveda safely.",
      },
    ],
  },
];

const FAQSection = () => {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      <section 
        id="faq"
        className="py-10 md:py-10 lg:py-10 xl:py-10 max-[470px]:py-6 bg-white scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24"
        style={{fontFamily: "'Outfit', sans-serif"}}
      >
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto max-[470px]:mb-6 mb-10 md:mb-10 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#530d3c] mb-4 sm:mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-16 sm:w-20 h-1.5 bg-[#fcb716] mx-auto rounded-full mb-6" />
            <p className="text-[#530d3c]/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
              Get answers to common questions about our Ayurvedic treatments
            </p>
          </div>

          {/* FAQ Categories in Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {/* Left Column */}
            <div className="space-y-6 md:space-y-8 lg:space-y-10">
              {faqCategories.slice(0, 2).map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-[#530d3c]/10 shadow-sm h-fit">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#530d3c] mb-4 md:mb-6 pb-3 md:pb-4 border-b border-[#530d3c]/10">
                    {category.title}
                  </h3>
                  <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border border-[#530d3c]/20 rounded-lg md:rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300 bg-white"
                      >
                        <AccordionTrigger className="text-left font-semibold text-[#530d3c] hover:text-[#530d3c] hover:no-underline px-4 md:px-6 py-3 md:py-4 text-sm md:text-base lg:text-lg">
                          <span className="text-left flex-1 pr-4">{faq.question}</span>
                          <span className="text-[#fcb716] text-lg font-bold flex-shrink-0">+</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-[#530d3c]/80 px-4 md:px-6 pb-4 md:pb-6 pt-2 text-sm md:text-base leading-relaxed bg-[#f9f9f9]">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-6 md:space-y-8 lg:space-y-10">
              {faqCategories.slice(2, 4).map((category, categoryIndex) => (
                <div key={categoryIndex + 2} className="bg-white/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-[#530d3c]/10 shadow-sm h-fit">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#530d3c] mb-4 md:mb-6 pb-3 md:pb-4 border-b border-[#530d3c]/10">
                    {category.title}
                  </h3>
                  <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex + 2}-${faqIndex}`}
                        className="border border-[#530d3c]/20 rounded-lg md:rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300 bg-white"
                      >
                        <AccordionTrigger className="text-left font-semibold text-[#530d3c] hover:text-[#530d3c] hover:no-underline px-4 md:px-6 py-3 md:py-4 text-sm md:text-base lg:text-lg">
                          <span className="text-left flex-1 pr-4">{faq.question}</span>
                          <span className="text-[#fcb716] text-lg font-bold flex-shrink-0">+</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-[#530d3c]/80 px-4 md:px-6 pb-4 md:pb-6 pt-2 text-sm md:text-base leading-relaxed bg-[#f9f9f9]">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
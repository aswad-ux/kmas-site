"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you charge an installation fee?",
    answer: "No, we do not charge any installation fees. Our mobile installation service is completely free, meaning the price you see for your package is all you pay.",
  },
  {
    question: "Where do you install the tracking units?",
    answer: "We offer a convenient mobile fitment service. Our certified technicians will come directly to your home or office anywhere in Gauteng to install your unit.",
  },
  {
    question: "How long does the installation take?",
    answer: "A standard tracking unit installation takes approximately 45 to 60 minutes. We ensure a quick, seamless process without disrupting your day.",
  },
  {
    question: "Will installing a tracker void my vehicle's warranty?",
    answer: "Absolutely not. Our technicians are highly trained and all our installations are fully VESA-approved, meaning your vehicle's factory warranty remains completely intact.",
  },
  {
    question: "How quickly do I get my insurance certificate?",
    answer: "You will receive your VESA-compliant insurance certificate immediately upon completion of the installation, allowing you to forward it to your insurer right away.",
  },
  {
    question: "Do you only install tracking units?",
    answer: "While we are authorised resellers for Matrix and Tracker, we also specialize in smash-and-grab window tinting, dash cam installations, reverse cameras, and custom sound system upgrades.",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#09090B] py-16 lg:py-24 border-t border-[#27272a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#DC1B1B] mb-3">
            Common Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F9FAFB] leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-[#27272a] transition-colors ${openIndex === index ? 'bg-[#121212]' : 'bg-[#09090B] hover:border-[#DC1B1B]/50'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="font-semibold text-[#F9FAFB] pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`text-[#DC1B1B] transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-[#F9FAFB]/70 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

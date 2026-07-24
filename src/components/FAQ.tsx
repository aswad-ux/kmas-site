"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you charge an installation fee?",
    answer:
      "No, we do not charge any installation fees. Our mobile installation service is completely free, meaning the price you see for your package is all you pay.",
  },
  {
    question: "Where do you install the tracking units?",
    answer:
      "We offer a convenient mobile fitment service. Our certified technicians will come directly to your home or office anywhere in Gauteng to install your unit.",
  },
  {
    question: "How long does the installation take?",
    answer:
      "A standard tracking unit installation takes approximately 45 to 60 minutes. We ensure a quick, seamless process without disrupting your day.",
  },
  {
    question: "Will installing a tracker void my vehicle's warranty?",
    answer:
      "Absolutely not. Our technicians are highly trained and all our installations are fully VESA-approved, meaning your vehicle's factory warranty remains completely intact.",
  },
  {
    question: "How quickly do I get my insurance certificate?",
    answer:
      "You will receive your VESA-compliant insurance certificate immediately upon completion of the installation, allowing you to forward it to your insurer right away.",
  },
  {
    question: "Do you only install tracking units?",
    answer:
      "While we are authorised resellers for Matrix and Tracker, we also specialize in smash-and-grab window tinting, dash cam installations, reverse cameras, and custom sound system upgrades.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#09090B] py-16 lg:py-24 border-t border-[#27272a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#DC1B1B] mb-3">
            Common Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F9FAFB] leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-[#27272a] border border-[#27272a]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`transition-colors ${isOpen ? "bg-[#121212]" : "bg-[#09090B] hover:bg-[#0d0d0f]"}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[#F9FAFB] text-sm sm:text-base leading-snug pr-2">
                    {faq.question}
                  </span>

                  {/* +/- icon */}
                  <div
                    className={`flex-shrink-0 w-7 h-7 border flex items-center justify-center transition-colors ${
                      isOpen
                        ? "border-[#DC1B1B] bg-[#DC1B1B] text-white"
                        : "border-[#27272a] text-[#F9FAFB]/50 group-hover:border-[#DC1B1B] group-hover:text-[#DC1B1B]"
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                {/* Smooth sliding answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-64 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 text-[#F9FAFB]/65 text-sm leading-relaxed border-t border-[#27272a] pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

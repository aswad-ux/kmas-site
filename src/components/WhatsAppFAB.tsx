"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/27615242935"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 group"
    >
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#121212] border border-[#27272a] text-[#F9FAFB] text-xs font-semibold px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat on WhatsApp
      </span>

      {/* Button */}
      <div className="relative w-14 h-14 bg-[#DC1B1B] flex items-center justify-center shadow-2xl shadow-[#DC1B1B]/30 hover:bg-[#a81212] transition-colors">
        {/* Pulse ring */}
        <span className="absolute inset-0 bg-[#DC1B1B] opacity-30 animate-ping" />
        <MessageCircle size={24} className="text-white relative z-10" fill="white" strokeWidth={1} />
      </div>
    </a>
  );
}

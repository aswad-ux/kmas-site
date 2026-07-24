"use client";

import { Home, Wrench, Package, MessageCircle } from "lucide-react";

const navItems = [
  { href: "#", label: "Home", icon: Home },
  { href: "#services", label: "Services", icon: Wrench },
  { href: "#tracking", label: "Pricing", icon: Package },
  { href: "https://wa.me/27615242935", label: "WhatsApp", icon: MessageCircle, external: true },
];

export default function MobileBottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#09090B] border-t border-[#27272a] safe-area-inset-bottom"
      aria-label="Mobile navigation"
    >
      <div className="grid grid-cols-4 h-16">
        {navItems.map(({ href, label, icon: Icon, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={`flex flex-col items-center justify-center gap-1 text-[#F9FAFB]/50 hover:text-[#DC1B1B] transition-colors ${
              label === "WhatsApp"
                ? "text-[#DC1B1B]"
                : ""
            }`}
          >
            <Icon size={20} strokeWidth={1.5} />
            <span className="text-[9px] font-semibold tracking-widest uppercase">
              {label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}

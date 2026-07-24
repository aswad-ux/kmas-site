"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Fitment Centre", href: "/#services" },
  { label: "Vehicle Tracking", href: "/#tracking" },
  { label: "About Us", href: "/#about" },
  { label: "How It Works", href: "/#process" },
  { label: "Get a Quote", href: "#quote" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#09090B]/90 backdrop-blur-md border-b border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Kingsman Automotive Solutions"
              width={140}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#F9FAFB] hover:text-[#DC1B1B] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+27100167395"
              className="flex items-center gap-1.5 text-sm text-[#F9FAFB] border border-[#27272a] px-3 py-1.5 hover:border-[#DC1B1B] hover:text-[#DC1B1B] transition-colors"
            >
              <Phone size={14} />
              +27 10 016 7395
            </a>
            <a
              href="https://wa.me/27615242935"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#DC1B1B] text-white text-sm px-4 py-1.5 hover:bg-[#a81212] transition-colors"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-[#F9FAFB]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#09090B] border-t border-[#27272a] px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-[#F9FAFB] py-2 border-b border-[#27272a]"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <a
              href="tel:+27100167395"
              className="flex items-center justify-center gap-2 border border-[#27272a] py-2.5 text-sm text-[#F9FAFB]"
            >
              <Phone size={14} /> Call +27 10 016 7395
            </a>
            <a
              href="https://wa.me/27615242935"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#DC1B1B] text-white py-2.5 text-sm"
            >
              <MessageCircle size={14} /> WhatsApp +27 61 524 2935
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

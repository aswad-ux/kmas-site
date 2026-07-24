import Image from "next/image";
import { MapPin, Phone, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Vehicle Tracking", href: "#tracking" },
  { label: "Fitment Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "How It Works", href: "#process" },
  { label: "Get a Quote", href: "#quote" },
];

const services = [
  "Matrix Tracking Installation",
  "Tracker South Africa Installation",
  "Window Tinting & Smash‑and‑Grab",
  "Sound System Upgrades",
  "Dash Cams & Reverse Cameras",
  "Bull Bars, Towbars & Roll Bars",
];

export default function Footer() {
  return (
    <footer className="bg-[#09090B] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 border-b border-[#27272a] pb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="Kingsman Automotive Solutions"
                width={120}
                height={34}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              Kingsman Automotive Solutions — South Africa's authorised reseller
              and mobile installer of premium vehicle tracking and security
              systems.
            </p>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {["VESA Compliant", "Authorised Reseller", "Certified Fitment"].map((b) => (
                <span
                  key={b}
                  className="text-[10px] font-semibold tracking-widest uppercase border border-[#3f3f46] px-2 py-1 text-white/40"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#DC1B1B] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">
              Our Services
            </p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-white/60 hover:text-[#DC1B1B] transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-white/30">
            <p>
              © {new Date().getFullYear()} Kingsman Automotive Solutions. All rights reserved.
            </p>
            <a href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy (POPIA)
            </a>
          </div>
          <div className="flex gap-6">
            <span className="text-xs text-white/20">
              Authorised Matrix Reseller
            </span>
            <span className="text-xs text-white/20">
              Authorised Tracker SA Reseller
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}

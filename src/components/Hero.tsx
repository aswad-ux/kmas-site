import { CheckCircle, MessageCircle, Phone, MapPin } from "lucide-react";

const trustItems = [
  "VESA Compliant",
  "Instant Insurance Certificates",
  "24/7 Control Centre Backing",
  "Expert Mobile Technicians",
];

export default function Hero() {
  return (
    <section className="relative bg-[#F9FAFB] overflow-hidden">
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.35,
        }}
      />

      {/* Accent bar top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#DC1B1B]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Copy */}
          <div>
            {/* Pre-headline badge */}
            <div className="inline-flex items-center gap-2 border border-[#DC1B1B] px-3 py-1 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#DC1B1B] animate-pulse" />
              <span className="text-[#DC1B1B] text-xs font-semibold tracking-widest uppercase">
                Authorised Reseller · Matrix & Tracker South Africa
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#09090B] leading-tight tracking-tight">
              Complete Vehicle{" "}
              <span className="text-[#DC1B1B]">Protection</span>{" "}
              &amp; Fitment.
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#09090B]/80">
                Installed at Your Convenience.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 text-base sm:text-lg text-[#09090B]/70 max-w-xl leading-relaxed">
              Fast mobile tracking installation across Gauteng, instant
              insurance certificates, smash-and-grab protection, and premium
              aftermarket fitments — all from one authorised South African
              centre.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 bg-[#DC1B1B] text-white px-6 py-3 text-sm font-semibold hover:bg-[#a81212] transition-colors"
              >
                Get a Fitment Quote
              </a>
              <a
                href="https://wa.me/27615242935"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#09090B] px-6 py-3 text-sm font-semibold text-[#09090B] hover:bg-[#09090B] hover:text-white transition-colors"
              >
                <MessageCircle size={15} />
                WhatsApp +27 61 524 2935
              </a>
              <a
                href="tel:+27100167395"
                className="inline-flex items-center gap-2 border border-slate-300 px-6 py-3 text-sm font-medium text-[#09090B] hover:border-[#DC1B1B] hover:text-[#DC1B1B] transition-colors"
              >
                <Phone size={15} />
                +27 10 016 7395
              </a>
            </div>

            {/* Address */}
            <a
              href="https://maps.app.goo.gl/3JGSAd1yTZmLNECx8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-xs text-[#09090B]/50 hover:text-[#DC1B1B] transition-colors"
            >
              <MapPin size={12} />
              The Foundry Cnr, 21 Isando Rd, Lathe St, Kempton Park, 1619
            </a>
          </div>

          {/* Right – Stats panel */}
          <div className="hidden lg:block">
            <div className="border border-slate-200 bg-white p-8">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#09090B]/40 mb-6">
                Why KMAS?
              </p>
              <div className="grid grid-cols-2 gap-px bg-slate-200">
                {[
                  { value: "24/7", label: "Control Centre\nSupport" },
                  { value: "VESA", label: "Compliant\nCertification" },
                  { value: "Same Day", label: "Mobile\nInstallation" },
                  { value: "Instant", label: "Insurance\nCertificates" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#F9FAFB] p-6 flex flex-col gap-1"
                  >
                    <span className="text-2xl font-bold text-[#DC1B1B]">
                      {stat.value}
                    </span>
                    <span className="text-xs text-[#09090B]/60 whitespace-pre-line leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 border border-slate-200 p-4 bg-[#09090B]">
                <p className="text-xs text-white/60 mb-1 font-semibold uppercase tracking-widest">
                  Operating Hours
                </p>
                <p className="text-white text-sm">Mon – Fri: 08:00 – 17:00</p>
                <p className="text-white text-sm">Sat: 08:00 – 13:00</p>
                <p className="text-white/40 text-xs mt-1">After-hours emergencies via WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="relative border-t border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs font-medium text-[#09090B]/60"
              >
                <CheckCircle size={13} className="text-[#DC1B1B]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

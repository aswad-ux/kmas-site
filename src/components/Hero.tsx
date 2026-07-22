import { CheckCircle, MessageCircle, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const trustItems = [
  "VESA Compliant",
  "Instant Insurance Certificates",
  "24/7 Control Centre Backing",
  "Expert Mobile Technicians",
];

const stats = [
  { value: "24/7", label: "Control Centre\nSupport" },
  { value: "VESA", label: "Compliant\nCertification" },
  { value: "Same Day", label: "Mobile\nInstallation" },
  { value: "Instant", label: "Insurance\nCertificates" },
];

export default function Hero() {
  return (
    <section className="relative bg-[#09090B] overflow-hidden">
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.6,
        }}
      />

      {/* Accent bar top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#DC1B1B]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-0 lg:pt-20 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left – Copy */}
          <div className="pb-10 lg:pb-20">
            {/* Pre-headline badge */}
            <div className="inline-flex items-center gap-3 border border-[#DC1B1B] px-4 py-2 mb-6 flex-wrap">
              <span className="w-2 h-2 rounded-full bg-[#DC1B1B] animate-pulse flex-shrink-0" />
              <span className="text-[#DC1B1B] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
                Authorised Reseller · Matrix &amp; Tracker South Africa
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#F9FAFB] leading-tight tracking-tight">
              Complete Vehicle{" "}
              <span className="text-[#DC1B1B]">Protection</span>{" "}
              &amp; Fitment.
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-[#F9FAFB]/80">
                Installed at Your Convenience.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-5 text-sm sm:text-base text-[#F9FAFB]/70 max-w-xl leading-relaxed">
              Fast mobile tracking installation across Gauteng, instant
              insurance certificates, smash-and-grab protection, and premium
              aftermarket fitments — all from one authorised South African
              centre.
            </p>

            {/* CTAs — stacked on mobile, side by side from sm */}
            <div className="mt-7 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 bg-[#DC1B1B] text-white px-6 py-3.5 text-sm font-semibold hover:bg-[#a81212] transition-colors min-h-[48px]"
              >
                Get a Fitment Quote
              </a>
              <a
                href="https://wa.me/27615242935"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#F9FAFB] px-6 py-3.5 text-sm font-semibold text-[#F9FAFB] hover:bg-[#F9FAFB] hover:text-[#09090B] transition-colors min-h-[48px]"
              >
                <MessageCircle size={15} />
                WhatsApp Us
              </a>
              <a
                href="tel:+27100167395"
                className="inline-flex items-center justify-center gap-2 border border-[#27272a] px-6 py-3.5 text-sm font-medium text-[#F9FAFB] hover:border-[#DC1B1B] hover:text-[#DC1B1B] transition-colors min-h-[48px]"
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
              className="mt-5 inline-flex items-start gap-2 text-xs text-[#F9FAFB]/50 hover:text-[#DC1B1B] transition-colors"
            >
              <MapPin size={12} className="mt-0.5 flex-shrink-0" />
              <span>The Foundry Cnr, 21 Isando Rd, Lathe St, Kempton Park, 1619</span>
            </a>
          </div>

          {/* Right – Stats panel & Automotive Image */}
          <div className="pb-20 relative lg:mt-0 mt-8">
            <div className="relative w-full h-[250px] sm:h-[320px] xl:h-[400px] border border-[#27272a] mb-8 bg-[#09090B]">
              <Image
                src="/images/hero.png"
                alt="High-performance sports car dashboard interior"
                fill
                className="object-cover opacity-90"
                priority
              />
            </div>
            
            <div className="border border-[#27272a] bg-[#121212] p-6 xl:p-8 relative z-10 -mt-24 ml-10 shadow-2xl shadow-black/50">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#F9FAFB]/40 mb-6">
                Why KMAS?
              </p>
              <div className="grid grid-cols-2 gap-px bg-[#27272a]">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#09090B] p-5 xl:p-6 flex flex-col gap-1"
                  >
                    <span className="text-xl xl:text-2xl font-bold text-[#DC1B1B]">
                      {stat.value}
                    </span>
                    <span className="text-xs text-[#F9FAFB]/60 whitespace-pre-line leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 border border-[#27272a] p-4 bg-[#09090B]">
                <p className="text-xs text-white/60 mb-1 font-semibold uppercase tracking-widest">
                  Operating Hours
                </p>
                <p className="text-white text-sm">Mon – Fri: 08:00 – 17:00</p>
                <p className="text-white text-sm">Sat: 08:00 – 13:00</p>
                <p className="text-white/40 text-xs mt-1">
                  After-hours emergencies via WhatsApp
                </p>
              </div>
            </div>
          </div>

          {/* Stats shown as a horizontal strip on mobile/tablet only */}
          <div className="lg:hidden col-span-full -mx-4 sm:-mx-6 grid grid-cols-2 sm:grid-cols-4 border-t border-[#27272a]">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-4 sm:p-5 flex flex-col gap-0.5 bg-[#121212] ${
                  i < stats.length - 1 ? "border-r border-[#27272a]" : ""
                }`}
              >
                <span className="text-lg font-bold text-[#DC1B1B]">
                  {stat.value}
                </span>
                <span className="text-[10px] text-[#F9FAFB]/60 leading-snug">
                  {stat.label.replace("\n", " ")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="relative border-t border-b border-[#27272a] bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs font-medium text-[#F9FAFB]/60"
              >
                <CheckCircle size={12} className="text-[#DC1B1B] flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

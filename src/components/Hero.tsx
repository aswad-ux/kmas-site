import { Phone, MapPin } from "lucide-react";
import Image from "next/image";


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
          <div className="pb-10 lg:pb-20 reveal">
            {/* Pre-headline badge */}
            <div className="inline-flex items-center border border-[#27272a] bg-gradient-to-r from-[#09090B] to-[#121212] mb-6 shadow-sm overflow-hidden">
              <div className="bg-[#DC1B1B] px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              </div>
              <div className="px-4 py-2 sm:py-2.5 flex items-center border-l border-[#27272a]">
                <span className="text-[#F9FAFB] text-[10px] sm:text-xs font-semibold font-mono tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                  Authorised Reseller <span className="text-[#DC1B1B] mx-1.5 font-bold">|</span> Matrix &amp; Tracker SA
                </span>
              </div>
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
                className="btn-glow inline-flex items-center justify-center gap-2 bg-[#DC1B1B] text-white px-6 py-3.5 text-sm font-semibold hover:bg-[#a81212] transition-colors min-h-[48px]"
              >
                Get a Fitment Quote
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
              href="https://maps.google.com/?q=43+Harris+Ave,+Eden+Glen,+Edenvale,+1613"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-start gap-2 text-xs text-[#F9FAFB]/50 hover:text-[#DC1B1B] transition-colors"
            >
              <MapPin size={12} className="mt-0.5 flex-shrink-0" />
              <span>43 Harris Ave, Eden Glen, Edenvale, 1613</span>
            </a>
          </div>

          {/* Right – Stats panel & Automotive Image */}
          <div className="pb-20 relative lg:mt-0 mt-8">
            <div className="relative w-full h-[250px] sm:h-[320px] xl:h-[400px] border border-[#27272a] mb-8 bg-[#09090B] overflow-hidden">
              <Image
                src="/images/hero.png"
                alt="High-performance sports car dashboard interior"
                fill
                className="object-cover opacity-90"
                priority
              />
              {/* Dramatic red-to-dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#DC1B1B]/20 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

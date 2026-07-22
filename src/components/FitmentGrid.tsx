import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { fitmentServices } from "@/data/packages";

const iconMap: Record<string, React.ReactNode> = {
  "volume-2": <Image src="/icons/audio.svg" alt="Audio" width={24} height={24} className="w-6 h-6" />,
  shield: <Image src="/icons/tracking.svg" alt="Tracking" width={24} height={24} className="w-6 h-6" />,
  camera: <Image src="/icons/camera.svg" alt="Camera" width={24} height={24} className="w-6 h-6" />,
  truck: <Image src="/icons/fitment.svg" alt="Fitment" width={24} height={24} className="w-6 h-6" />,
};

export default function FitmentGrid() {
  return (
    <section id="services" className="bg-[#F9FAFB] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10 lg:mb-14 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#DC1B1B] mb-3">
              Fitment Centre
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#09090B] leading-tight mb-4">
              Expert Aftermarket
              <br />
              Installations
            </h2>
            <p className="text-[#09090B]/60 text-sm sm:text-base max-w-xl leading-relaxed">
              Every fitment is performed by certified technicians with the right
              tools for your specific vehicle. No shortcuts. No void warranties.
              Professional workmanship, guaranteed.
            </p>
          </div>
          <div className="relative h-48 sm:h-64 border border-[#09090B] bg-[#09090B] w-full">
            <Image 
              src="/images/fitment.png" 
              alt="Professional mechanic installing dashcam" 
              fill 
              className="object-cover opacity-90 grayscale-[20%]" 
            />
          </div>
        </div>

        {/* Mobile: card grid. Desktop: asymmetric row list */}
        {/* Mobile & tablet cards */}
        <div className="grid sm:grid-cols-2 gap-4 lg:hidden">
          {fitmentServices.map((service, i) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200 p-5 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-slate-200 flex items-center justify-center text-[#09090B]/60 flex-shrink-0">
                  {iconMap[service.icon]}
                </div>
                <span className="text-[10px] font-mono text-[#09090B]/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#09090B] leading-snug mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-[#09090B]/65 leading-relaxed">
                  {service.copy}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {service.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-[9px] font-semibold tracking-widest uppercase border border-slate-200 px-2 py-0.5 text-[#09090B]/50"
                  >
                    {kw}
                  </span>
                ))}
              </div>
              <a
                href="#quote"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DC1B1B] mt-1"
              >
                Get Quote <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>

        {/* Desktop: row list */}
        <div className="hidden lg:block divide-y divide-slate-200 border-t border-b border-slate-200">
          {fitmentServices.map((service, i) => (
            <div
              key={service.id}
              className="grid grid-cols-12 gap-6 py-8 group hover:bg-white transition-colors px-2"
            >
              {/* Number */}
              <div className="col-span-1 flex items-start pt-0.5">
                <span className="text-xs font-mono text-[#09090B]/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Icon */}
              <div className="col-span-1 flex items-start">
                <div className="w-10 h-10 border border-slate-200 flex items-center justify-center text-[#09090B]/60 group-hover:border-[#DC1B1B] group-hover:text-[#DC1B1B] transition-colors">
                  {iconMap[service.icon]}
                </div>
              </div>

              {/* Title + keywords */}
              <div className="col-span-3">
                <h3 className="text-sm font-semibold text-[#09090B] leading-snug">
                  {service.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {service.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="text-[10px] font-semibold tracking-widest uppercase border border-slate-200 px-2 py-0.5 text-[#09090B]/50"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Copy */}
              <div className="col-span-5">
                <p className="text-sm text-[#09090B]/65 leading-relaxed">
                  {service.copy}
                </p>
              </div>

              {/* CTA */}
              <div className="col-span-2 flex items-center justify-end">
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#09090B] border-b border-transparent group-hover:border-[#DC1B1B] group-hover:text-[#DC1B1B] transition-all whitespace-nowrap"
                >
                  Get Quote
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Volume2, Shield, Camera, Truck, ArrowRight } from "lucide-react";
import { fitmentServices } from "@/data/packages";

const iconMap: Record<string, React.ReactNode> = {
  "volume-2": <Volume2 size={20} strokeWidth={1.5} />,
  shield: <Shield size={20} strokeWidth={1.5} />,
  camera: <Camera size={20} strokeWidth={1.5} />,
  truck: <Truck size={20} strokeWidth={1.5} />,
};

export default function FitmentGrid() {
  return (
    <section id="services" className="bg-[#F9FAFB] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#DC1B1B] mb-3">
              Fitment Centre
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#09090B] leading-tight">
              Expert Aftermarket
              <br />
              Installations
            </h2>
          </div>
          <div className="lg:col-span-2 flex items-end">
            <p className="text-[#09090B]/60 text-base max-w-xl leading-relaxed">
              Every fitment is performed by certified technicians with the right
              tools for your specific vehicle. No shortcuts. No void warranties.
              Professional workmanship, guaranteed.
            </p>
          </div>
        </div>

        {/* Asymmetric services list */}
        <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
          {fitmentServices.map((service, i) => (
            <div
              key={service.id}
              className="grid md:grid-cols-12 gap-6 py-8 group hover:bg-white transition-colors"
            >
              {/* Number */}
              <div className="md:col-span-1 flex md:flex-col items-start gap-4">
                <span className="text-xs font-mono text-[#09090B]/30 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Icon */}
              <div className="md:col-span-1">
                <div className="w-10 h-10 border border-slate-200 flex items-center justify-center text-[#09090B]/60 group-hover:border-[#DC1B1B] group-hover:text-[#DC1B1B] transition-colors">
                  {iconMap[service.icon]}
                </div>
              </div>

              {/* Title */}
              <div className="md:col-span-3">
                <h3 className="text-base font-semibold text-[#09090B] leading-snug">
                  {service.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
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
              <div className="md:col-span-5">
                <p className="text-sm text-[#09090B]/65 leading-relaxed">
                  {service.copy}
                </p>
              </div>

              {/* CTA */}
              <div className="md:col-span-2 flex md:items-center md:justify-end">
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#09090B] border-b border-transparent group-hover:border-[#DC1B1B] group-hover:text-[#DC1B1B] transition-all"
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

import { ClipboardList, Wrench, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <ClipboardList size={22} strokeWidth={1.5} />,
    title: "Select & Quote",
    desc: "Choose your tracking package or fitment service online or via WhatsApp. We'll send you a clear, no-obligation quote within the hour.",
  },
  {
    number: "02",
    icon: <Wrench size={22} strokeWidth={1.5} />,
    title: "Mobile Installation or Fitment Booking",
    desc: "Our certified technician comes to your home, office, or workplace — or drop in at our Kempton Park fitment centre. Professional workmanship every time.",
  },
  {
    number: "03",
    icon: <ShieldCheck size={22} strokeWidth={1.5} />,
    title: "Drive Away Secured",
    desc: "Drive away with your vehicle fully protected. Your VESA-compliant insurance certificate is issued on the same day — no waiting.",
  },
];

export default function InstallationTimeline() {
  return (
    <section id="process" className="bg-[#09090B] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 lg:mb-14 reveal">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#DC1B1B] mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Three Steps to a
            <br />
            Secured Vehicle
          </h2>
        </div>

        {/* Steps — stacked on mobile, horizontal on md+ */}
        <div className="flex flex-col md:flex-row border border-[#27272a] reveal delay-2">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex-1 p-6 sm:p-8 lg:p-10 border-[#27272a] ${
                i < steps.length - 1
                  ? "border-b md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              {/* Step number + icon */}
              <div className="flex items-start justify-between mb-5">
                <span className="text-4xl sm:text-5xl font-bold text-[#27272a] font-mono select-none leading-none">
                  {step.number}
                </span>
                <div className="text-[#DC1B1B]">{step.icon}</div>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <a
            href="#quote"
            className="inline-flex items-center justify-center bg-[#DC1B1B] text-white px-8 py-3.5 text-sm font-semibold hover:bg-[#a81212] transition-colors w-full sm:w-auto min-h-[48px]"
          >
            Book Your Installation
          </a>
          <a
            href="https://wa.me/27615242935"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/50 hover:text-white transition-colors"
          >
            Or message us on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}

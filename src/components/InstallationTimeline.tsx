import { ClipboardList, Wrench, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <ClipboardList size={24} strokeWidth={1.5} />,
    title: "Select & Quote",
    desc: "Choose your tracking package or fitment service online or via WhatsApp. We'll send you a clear, no-obligation quote within the hour.",
  },
  {
    number: "02",
    icon: <Wrench size={24} strokeWidth={1.5} />,
    title: "Mobile Installation or Fitment Booking",
    desc: "Our certified technician comes to your home, office, or workplace — or drop in at our Kempton Park fitment centre. Professional workmanship every time.",
  },
  {
    number: "03",
    icon: <ShieldCheck size={24} strokeWidth={1.5} />,
    title: "Drive Away Secured",
    desc: "Drive away with your vehicle fully protected. Where applicable, your VESA-compliant insurance certificate is issued on the same day — no waiting.",
  },
];

export default function InstallationTimeline() {
  return (
    <section id="process" className="bg-[#09090B] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#DC1B1B] mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Three Steps to a
            <br />
            Secured Vehicle
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-0 border border-neutral-800">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`p-8 lg:p-10 border-neutral-800 ${
                i < steps.length - 1
                  ? "border-b md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              {/* Step number */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-5xl font-bold text-neutral-800 font-mono select-none">
                  {step.number}
                </span>
                <div className="text-[#DC1B1B]">{step.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {step.desc}
              </p>

              {/* Progress indicator */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rotate-45 border-t border-r border-neutral-700 bg-[#09090B] z-10" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-[#DC1B1B] text-white px-8 py-3 text-sm font-semibold hover:bg-[#a81212] transition-colors"
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

"use client";

import { useState } from "react";
import { Send, Phone, Loader2 } from "lucide-react";

const provinces = [
  "Gauteng",
  "Western Cape",
  "KwaZulu-Natal",
  "Eastern Cape",
  "Limpopo",
  "Mpumalanga",
  "North West",
  "Free State",
  "Northern Cape",
];

const services = [
  { value: "tracking-matrix", label: "Vehicle Tracking – Matrix" },
  { value: "tracking-tracker", label: "Vehicle Tracking – Tracker SA" },
  { value: "audio", label: "Sound System Installation" },
  { value: "tinting", label: "Window Tinting / Smash & Grab" },
  { value: "cameras", label: "Dash Cam / Reverse Camera" },
  { value: "bars", label: "Bull Bars / Towbars / Roll Bars" },
  { value: "other", label: "Other / Not Sure" },
];

export default function QuoteForm() {
  const [form, setForm] = useState({
    make: "",
    model: "",
    service: "",
    province: "",
    name: "",
    contact: "",
    callback: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch (_) {}
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="quote" className="bg-[#F9FAFB] py-20 lg:py-28 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto border border-slate-200 bg-white p-10 text-center">
            <div className="w-12 h-12 border-2 border-[#DC1B1B] flex items-center justify-center mx-auto mb-4">
              <Send size={22} className="text-[#DC1B1B]" />
            </div>
            <h3 className="text-xl font-bold text-[#09090B] mb-2">
              Quote Request Received
            </h3>
            <p className="text-sm text-[#09090B]/60 mb-6">
              We'll be in touch within the hour. For urgent enquiries, reach us
              on WhatsApp.
            </p>
            <a
              href="https://wa.me/27615242935"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#DC1B1B] text-white px-6 py-3 text-sm font-semibold hover:bg-[#a81212] transition-colors"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="bg-[#F9FAFB] py-20 lg:py-28 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left – Heading */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#DC1B1B] mb-3">
              Get a Quote
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#09090B] leading-tight mb-6">
              Book a Fitment
              <br />
              or Get a Quote
            </h2>
            <p className="text-sm text-[#09090B]/60 leading-relaxed mb-8 max-w-md">
              Fill in your details and we'll send you a clear quote within the
              hour. No pressure, no spam. Need faster? Message us on WhatsApp
              now.
            </p>

            {/* Contact options */}
            <div className="space-y-3">
              <a
                href="https://wa.me/27615242935"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border border-slate-200 bg-white p-4 hover:border-[#DC1B1B] transition-colors group"
              >
                <div className="w-10 h-10 bg-[#09090B] flex items-center justify-center text-white group-hover:bg-[#DC1B1B] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#09090B]">WhatsApp</p>
                  <p className="text-sm text-[#09090B]/60">+27 61 524 2935</p>
                </div>
              </a>
              <a
                href="tel:+27100167395"
                className="flex items-center gap-4 border border-slate-200 bg-white p-4 hover:border-[#DC1B1B] transition-colors group"
              >
                <div className="w-10 h-10 bg-[#09090B] flex items-center justify-center text-white group-hover:bg-[#DC1B1B] transition-colors">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#09090B]">Call Us</p>
                  <p className="text-sm text-[#09090B]/60">+27 10 016 7395</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right – Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="border border-slate-200 bg-white p-8 space-y-5"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#09090B]/50 mb-1.5">
                    Vehicle Make
                  </label>
                  <input
                    type="text"
                    name="make"
                    required
                    value={form.make}
                    onChange={handleChange}
                    placeholder="e.g. Toyota"
                    className="w-full border border-slate-200 px-3 py-2 text-sm text-[#09090B] bg-[#F9FAFB] focus:outline-none focus:border-[#DC1B1B] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#09090B]/50 mb-1.5">
                    Vehicle Model
                  </label>
                  <input
                    type="text"
                    name="model"
                    required
                    value={form.model}
                    onChange={handleChange}
                    placeholder="e.g. Hilux"
                    className="w-full border border-slate-200 px-3 py-2 text-sm text-[#09090B] bg-[#F9FAFB] focus:outline-none focus:border-[#DC1B1B] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-[#09090B]/50 mb-1.5">
                  Desired Service
                </label>
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="w-full border border-slate-200 px-3 py-2 text-sm text-[#09090B] bg-[#F9FAFB] focus:outline-none focus:border-[#DC1B1B] transition-colors"
                >
                  <option value="">Select a service…</option>
                  {services.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-[#09090B]/50 mb-1.5">
                  Province
                </label>
                <select
                  name="province"
                  required
                  value={form.province}
                  onChange={handleChange}
                  className="w-full border border-slate-200 px-3 py-2 text-sm text-[#09090B] bg-[#F9FAFB] focus:outline-none focus:border-[#DC1B1B] transition-colors"
                >
                  <option value="">Select province…</option>
                  {provinces.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#09090B]/50 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    className="w-full border border-slate-200 px-3 py-2 text-sm text-[#09090B] bg-[#F9FAFB] focus:outline-none focus:border-[#DC1B1B] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#09090B]/50 mb-1.5">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    required
                    value={form.contact}
                    onChange={handleChange}
                    placeholder="+27 …"
                    className="w-full border border-slate-200 px-3 py-2 text-sm text-[#09090B] bg-[#F9FAFB] focus:outline-none focus:border-[#DC1B1B] transition-colors"
                  />
                </div>
              </div>

              {/* Callback checkbox */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="callback"
                  checked={form.callback}
                  onChange={handleChange}
                  className="w-4 h-4 accent-[#DC1B1B]"
                />
                <span className="text-sm text-[#09090B]/60">
                  Request an immediate callback
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-[#DC1B1B] text-white py-3 text-sm font-semibold hover:bg-[#a81212] transition-colors disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={15} />
                )}
                {loading ? "Sending…" : "Submit Quote Request"}
              </button>

              <p className="text-[10px] text-center text-[#09090B]/30">
                We'll respond within the hour. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

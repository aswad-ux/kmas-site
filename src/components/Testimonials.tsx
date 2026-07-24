"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Thabo M.",
    location: "Centurion, Gauteng",
    vehicle: "Toyota Hilux",
    service: "Matrix Gold – Vehicle Tracking",
    rating: 5,
    text: "Booked online on Monday, the technician came to my office on Tuesday morning. Certificate was in my email before lunch. Absolutely professional from start to finish.",
  },
  {
    name: "Priya N.",
    location: "Sandton, Johannesburg",
    vehicle: "Hyundai Tucson",
    service: "Smash & Grab Tinting",
    rating: 5,
    text: "Outstanding service! The tinting on my Tucson looks incredible and the UV protection is amazing. No bubbles, no mess — just a flawless finish. Would 100% recommend KMAS.",
  },
  {
    name: "Gerhard V.",
    location: "Pretoria East",
    vehicle: "Ford Ranger",
    service: "Bull Bar + Towbar Fitment",
    rating: 5,
    text: "Had a bull bar and towbar fitted at the Kempton Park centre. Workmanship was excellent, price was fair, and the team was super knowledgeable about Ranger fitments specifically.",
  },
  {
    name: "Nomsa K.",
    location: "Midrand, Gauteng",
    vehicle: "VW Polo",
    service: "Tracker Protect",
    rating: 5,
    text: "My insurer required a certified tracker. KMAS sorted everything — they came to my home, installed in under an hour, and my VESA certificate was done the same day. Stress-free!",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-[#DC1B1B] fill-[#DC1B1B]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#121212] py-16 lg:py-24 border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 lg:mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#DC1B1B] mb-3">
            Customer Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F9FAFB] leading-tight">
            Trusted by Thousands
            <br />
            Across Gauteng
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#27272a]">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#09090B] p-6 sm:p-7 flex flex-col gap-4 hover:bg-[#121212] transition-colors group"
            >
              {/* Quote icon */}
              <div className="w-8 h-8 border border-[#27272a] flex items-center justify-center text-[#DC1B1B] group-hover:border-[#DC1B1B] transition-colors flex-shrink-0">
                <Quote size={14} />
              </div>

              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Review text */}
              <p className="text-sm text-[#F9FAFB]/70 leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="border-t border-[#27272a]" />

              {/* Author */}
              <div>
                <p className="text-sm font-semibold text-[#F9FAFB]">{t.name}</p>
                <p className="text-xs text-[#F9FAFB]/40 mt-0.5">{t.location}</p>
                <p className="text-[10px] font-mono text-[#DC1B1B] mt-1 tracking-wider uppercase">
                  {t.vehicle} · {t.service}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust note */}
        <p className="mt-5 text-xs text-[#F9FAFB]/30 text-center">
          All reviews from verified customers. Our technicians maintain a{" "}
          <span className="text-[#F9FAFB]/60 font-semibold">4.9 / 5 ★</span> average rating across Gauteng.
        </p>
      </div>
    </section>
  );
}

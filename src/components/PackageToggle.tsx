"use client";

import { useState } from "react";
import { CheckCircle, Tag } from "lucide-react";
import { matrixPackages, trackerPackages } from "@/data/packages";

type Tab = "matrix" | "tracker";

export default function PackageToggle() {
  const [active, setActive] = useState<Tab>("matrix");
  const packages = active === "matrix" ? matrixPackages : trackerPackages;

  return (
    <section id="tracking" className="bg-white py-20 lg:py-28 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#DC1B1B] mb-3">
              Vehicle Tracking
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#09090B] leading-tight">
              Track. Recover.
              <br />
              Insure.
            </h2>
          </div>
          <div className="lg:col-span-2 flex items-end">
            <p className="text-[#09090B]/60 text-base max-w-xl leading-relaxed">
              As an authorised reseller of both Matrix and Tracker South Africa,
              we supply, install, and certificate every unit. All packages
              include a VESA-compliant insurance certificate on the day of
              installation.
            </p>
          </div>
        </div>

        {/* Toggle tabs */}
        <div className="flex gap-0 border border-slate-200 w-fit mb-10">
          {(["matrix", "tracker"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-8 py-3 text-sm font-semibold tracking-wide uppercase transition-colors ${
                active === tab
                  ? "bg-[#09090B] text-white"
                  : "bg-white text-[#09090B]/60 hover:text-[#09090B]"
              }`}
            >
              {tab === "matrix" ? "Matrix" : "Tracker SA"}
            </button>
          ))}
        </div>

        {/* Package cards in table-style layout */}
        <div className="border border-slate-200 divide-y divide-slate-200">
          {/* Table header */}
          <div className="hidden md:grid grid-cols-12 bg-[#09090B] px-6 py-3">
            <div className="col-span-3 text-xs font-semibold tracking-widest uppercase text-white/60">
              Package
            </div>
            <div className="col-span-1 text-xs font-semibold tracking-widest uppercase text-white/60">
              Price
            </div>
            <div className="col-span-7 text-xs font-semibold tracking-widest uppercase text-white/60">
              Features Included
            </div>
            <div className="col-span-1" />
          </div>

          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="grid md:grid-cols-12 gap-4 px-6 py-6 bg-white hover:bg-[#F9FAFB] transition-colors group"
            >
              {/* Name + tag */}
              <div className="md:col-span-3">
                <div className="flex flex-wrap items-start gap-2">
                  <span className="font-semibold text-sm text-[#09090B]">
                    {pkg.name}
                  </span>
                  {pkg.tag && (
                    <span className="inline-flex items-center gap-1 bg-[#DC1B1B] text-white text-[10px] font-bold tracking-widest uppercase px-2 py-0.5">
                      <Tag size={9} />
                      {pkg.tag}
                    </span>
                  )}
                </div>
              </div>

              {/* Price */}
              <div className="md:col-span-1">
                <span className="text-sm font-bold text-[#DC1B1B] whitespace-nowrap">
                  {pkg.price}
                </span>
              </div>

              {/* Features */}
              <div className="md:col-span-7">
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-1.5 text-xs text-[#09090B]/70"
                    >
                      <CheckCircle
                        size={12}
                        className="text-[#DC1B1B] flex-shrink-0"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="md:col-span-1 flex md:justify-end items-center">
                <a
                  href="#quote"
                  className="text-xs font-semibold uppercase tracking-widest border border-[#09090B] px-3 py-1.5 text-[#09090B] group-hover:bg-[#DC1B1B] group-hover:border-[#DC1B1B] group-hover:text-white transition-colors whitespace-nowrap"
                >
                  Select
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-4 text-xs text-[#09090B]/40">
          * All prices are approximate monthly subscriptions. Installation is a
          once-off cost. Contact us for exact pricing.
        </p>
      </div>
    </section>
  );
}

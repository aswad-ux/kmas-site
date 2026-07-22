"use client";

import { useState } from "react";
import { CheckCircle, Tag } from "lucide-react";
import { matrixPackages, trackerPackages } from "@/data/packages";

type Tab = "matrix" | "tracker";

export default function PackageToggle() {
  const [active, setActive] = useState<Tab>("matrix");
  const packages = active === "matrix" ? matrixPackages : trackerPackages;

  return (
    <section id="tracking" className="bg-white py-16 lg:py-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 lg:mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#DC1B1B] mb-3">
            Vehicle Tracking
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#09090B] leading-tight">
              Track. Recover.
              <br />
              Insure.
            </h2>
            <p className="text-[#09090B]/60 text-sm sm:text-base max-w-xl leading-relaxed">
              As an authorised reseller of both Matrix and Tracker South Africa,
              we supply, install, and certificate every unit. All packages
              include a VESA-compliant insurance certificate on the day of
              installation.
            </p>
          </div>
        </div>

        {/* Toggle tabs — full width on mobile */}
        <div className="flex border border-slate-200 w-full sm:w-fit mb-8">
          {(["matrix", "tracker"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`flex-1 sm:flex-none sm:px-10 py-3 text-sm font-semibold tracking-wide uppercase transition-colors min-h-[48px] ${
                active === tab
                  ? "bg-[#09090B] text-white"
                  : "bg-white text-[#09090B]/60 hover:text-[#09090B]"
              }`}
            >
              {tab === "matrix" ? "Matrix" : "Tracker SA"}
            </button>
          ))}
        </div>

        {/* Package list */}
        <div className="border border-slate-200 divide-y divide-slate-200">
          {/* Table header — desktop only */}
          <div className="hidden lg:grid grid-cols-12 bg-[#09090B] px-6 py-3">
            <div className="col-span-3 text-xs font-semibold tracking-widest uppercase text-white/60">
              Package
            </div>
            <div className="col-span-2 text-xs font-semibold tracking-widest uppercase text-white/60">
              Price p/m
            </div>
            <div className="col-span-6 text-xs font-semibold tracking-widest uppercase text-white/60">
              Features Included
            </div>
            <div className="col-span-1" />
          </div>

          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white hover:bg-[#F9FAFB] transition-colors"
            >
              {/* Mobile layout */}
              <div className="lg:hidden p-5 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="font-semibold text-sm text-[#09090B] block">
                      {pkg.name}
                    </span>
                    <span className="text-base font-bold text-[#DC1B1B] mt-0.5 block">
                      {pkg.price}
                    </span>
                  </div>
                  {pkg.tag && (
                    <span className="inline-flex items-center gap-1 bg-[#DC1B1B] text-white text-[9px] font-bold tracking-widest uppercase px-2 py-1 whitespace-nowrap flex-shrink-0">
                      <Tag size={8} />
                      {pkg.tag}
                    </span>
                  )}
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-1.5 text-xs text-[#09090B]/70"
                    >
                      <CheckCircle size={11} className="text-[#DC1B1B] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center w-full border border-[#09090B] py-2.5 text-xs font-semibold uppercase tracking-widest text-[#09090B] hover:bg-[#DC1B1B] hover:border-[#DC1B1B] hover:text-white transition-colors min-h-[44px]"
                >
                  Select This Package
                </a>
              </div>

              {/* Desktop layout */}
              <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-6">
                {/* Name + tag */}
                <div className="col-span-3">
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
                <div className="col-span-2">
                  <span className="text-sm font-bold text-[#DC1B1B] whitespace-nowrap">
                    {pkg.price}
                  </span>
                </div>

                {/* Features */}
                <div className="col-span-6">
                  <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
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
                <div className="col-span-1 flex items-center justify-end">
                  <a
                    href="#quote"
                    className="text-xs font-semibold uppercase tracking-widest border border-[#09090B] px-3 py-2 text-[#09090B] group-hover:bg-[#DC1B1B] group-hover:border-[#DC1B1B] group-hover:text-white transition-colors whitespace-nowrap"
                  >
                    Select
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-[#09090B]/40">
          * All prices are approximate monthly subscriptions. Installation is a
          once-off cost. Contact us for exact pricing.
        </p>
      </div>
    </section>
  );
}

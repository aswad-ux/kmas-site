"use client";

import { MapPin, Phone, Clock, Navigation, ShieldCheck } from "lucide-react";

const coverageAreas = [
  "Eden Glen",
  "Edenvale",
  "Bedfordview",
  "Greenstone Hill",
  "Kempton Park",
  "Boksburg",
  "Benoni",
  "Germiston",
  "Sandton",
  "Rosebank",
  "Midrand",
  "Centurion",
  "Pretoria",
];

export default function ContactLocation() {
  return (
    <section id="contact" className="bg-[#09090B] py-16 lg:py-24 border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details & Service Areas */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#DC1B1B] mb-3">
              Workshop &amp; Mobile Service
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F9FAFB] leading-tight mb-8">
              Location &amp; Contact
            </h2>
            
            <div className="space-y-7">
              {/* Workshop Location */}
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <MapPin className="text-[#DC1B1B]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F9FAFB] mb-1">Workshop Fitment Centre</h3>
                  <p className="text-[#F9FAFB]/90 text-sm leading-relaxed">
                    43 Harris Ave<br />
                    Eden Glen, Edenvale, 1613<br />
                    Gauteng, South Africa
                  </p>
                  <p className="text-xs text-[#F9FAFB]/70 mt-1">
                    Centrally situated in Eden Glen with secure on-site fitment bays.
                  </p>
                </div>
              </div>

              {/* Mobile Service Zones */}
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <ShieldCheck className="text-[#DC1B1B]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F9FAFB] mb-1">
                    Free Mobile Fitment Across Gauteng
                  </h3>
                  <p className="text-[#F9FAFB]/90 text-sm leading-relaxed mb-3">
                    Can&apos;t make it to our Edenvale workshop? Our certified mobile technicians come directly to your home, office, or dealership with zero call-out fees.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {coverageAreas.map((area) => (
                      <span
                        key={area}
                        className="inline-block text-[11px] font-mono bg-[#18181b] border border-[#27272a] text-[#F9FAFB]/80 px-2.5 py-1"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Phone / WhatsApp */}
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Phone className="text-[#DC1B1B]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F9FAFB] mb-1">Direct Lines</h3>
                  <p className="text-[#F9FAFB]/90 text-sm leading-relaxed">
                    Phone: <a href="tel:+27100167395" className="hover:text-[#DC1B1B] transition-colors">+27 10 016 7395</a><br />
                    WhatsApp: <a href="https://wa.me/27615242935" target="_blank" rel="noopener noreferrer" className="hover:text-[#DC1B1B] transition-colors">+27 61 524 2935</a>
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Clock className="text-[#DC1B1B]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F9FAFB] mb-1">Operating Hours</h3>
                  <p className="text-[#F9FAFB]/90 text-sm leading-relaxed">
                    Monday – Friday: 08:00 – 17:00<br />
                    Saturday: 08:00 – 13:00<br />
                    Sunday &amp; Public Holidays: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/27615242935"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#DC1B1B] text-white px-7 py-3.5 font-bold tracking-widest text-xs hover:bg-[#a81212] transition-colors uppercase min-h-[44px]"
              >
                Send Us a WhatsApp
              </a>
              <a
                href="https://maps.google.com/?q=43+Harris+Ave,+Eden+Glen,+Edenvale,+1613"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#27272a] bg-[#121212] text-[#F9FAFB] px-6 py-3.5 font-bold tracking-widest text-xs hover:border-[#DC1B1B] hover:text-[#DC1B1B] transition-colors uppercase min-h-[44px]"
              >
                <Navigation size={14} />
                Get Directions
              </a>
            </div>
          </div>

          {/* Map with overlay header */}
          <div className="w-full h-[450px] lg:h-full min-h-[450px] border border-[#27272a] bg-[#121212] relative overflow-hidden flex flex-col">
            <div className="bg-[#121212] border-b border-[#27272a] px-4 py-3 flex items-center justify-between z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F9FAFB]/80 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#DC1B1B] animate-pulse" />
                43 Harris Ave, Eden Glen
              </span>
              <a
                href="https://maps.google.com/?q=43+Harris+Ave,+Eden+Glen,+Edenvale,+1613"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#DC1B1B] hover:underline font-mono"
              >
                Open Google Maps &rarr;
              </a>
            </div>
            <div className="relative flex-1">
              <iframe
                src="https://maps.google.com/maps?width=100%25&height=100%25&hl=en&q=43%20Harris%20Ave,%20Eden%20Glen,%20Edenvale,%201613+(Kingsman%20Automotive%20Solutions)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(80%) contrast(120%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Kingsman Automotive Solutions Location Map"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

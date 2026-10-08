"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactLocation() {
  return (
    <section id="contact" className="bg-[#09090B] py-16 lg:py-24 border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#DC1B1B] mb-3">
              Visit Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F9FAFB] leading-tight mb-8">
              Location &amp; Contact
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <MapPin className="text-[#DC1B1B]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F9FAFB] mb-1">Our Workshop</h3>
                  <p className="text-[#F9FAFB]/70 text-sm leading-relaxed">
                    43 Harris Ave<br />
                    Eden Glen<br />
                    Edenvale, 1613<br />
                    Gauteng, South Africa
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Phone className="text-[#DC1B1B]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F9FAFB] mb-1">Get in Touch</h3>
                  <p className="text-[#F9FAFB]/70 text-sm leading-relaxed">
                    Calls: +27 10 016 7395<br />
                    WhatsApp: +27 61 524 2935
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Clock className="text-[#DC1B1B]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F9FAFB] mb-1">Business Hours</h3>
                  <p className="text-[#F9FAFB]/70 text-sm leading-relaxed">
                    Monday - Friday: 08:00 - 17:00<br />
                    Saturday: 08:00 - 13:00<br />
                    Sunday &amp; Public Holidays: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="https://wa.me/27615242935"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#DC1B1B] text-white px-8 py-3.5 font-bold tracking-widest text-sm hover:bg-[#a81212] transition-colors uppercase w-full sm:w-auto"
              >
                Send us a WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[400px] lg:h-full min-h-[400px] border border-[#27272a] bg-[#121212] relative overflow-hidden">
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
            {/* The filter turns the map into a dark mode version that fits the stealth theme */}
          </div>
        </div>

      </div>
    </section>
  );
}

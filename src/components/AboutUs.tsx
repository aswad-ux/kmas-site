import { Shield, Award, Users } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="bg-[#121212] py-16 lg:py-24 border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left - Image Grid */}
          <div className="relative reveal">
            <div className="relative h-[400px] sm:h-[500px] w-full border border-[#27272a] bg-[#09090B] overflow-hidden">
              <Image 
                src="/images/fitment.png" 
                alt="Kingsman Automotive Solutions Technician" 
                fill 
                className="object-cover opacity-80 grayscale-[20%]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 sm:-right-8 bg-[#DC1B1B] text-white p-6 sm:p-8 border-4 border-[#121212] shadow-2xl">
              <div className="text-4xl sm:text-5xl font-black font-mono leading-none mb-1">10+</div>
              <div className="text-xs sm:text-sm font-semibold tracking-widest uppercase">Years of<br />Experience</div>
            </div>
          </div>

          {/* Right - Copy */}
          <div className="reveal delay-2 pt-8 lg:pt-0">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#DC1B1B] mb-3">
              Who We Are
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F9FAFB] leading-tight mb-6">
              Gauteng's Premier Mobile Fitment Specialists
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#F9FAFB]/70 leading-relaxed mb-10">
              <p>
                At Kingsman Automotive Solutions, we believe vehicle security and aftermarket enhancements shouldn't be an inconvenience. That's why we bring the fitment centre to you.
              </p>
              <p>
                Operating across Johannesburg, Pretoria, and the greater Gauteng region, our certified mobile technicians deliver dealership-quality workmanship right in your driveway or office parking lot. 
              </p>
              <p>
                As an authorised reseller for South Africa's leading tracking brands—Matrix and Tracker—we guarantee that every installation is 100% VESA compliant, ensuring your factory warranty remains intact and your insurance requirements are met instantly.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-[#27272a] bg-[#09090B] flex items-center justify-center text-[#DC1B1B] flex-shrink-0">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F9FAFB] mb-1">VESA Certified</h4>
                  <p className="text-xs text-[#F9FAFB]/50 leading-relaxed">Strict adherence to national security fitment standards.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-[#27272a] bg-[#09090B] flex items-center justify-center text-[#DC1B1B] flex-shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F9FAFB] mb-1">Authorised Reseller</h4>
                  <p className="text-xs text-[#F9FAFB]/50 leading-relaxed">Direct partner of Matrix and Tracker South Africa.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

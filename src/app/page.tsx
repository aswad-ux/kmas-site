import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import FitmentGrid from "@/components/FitmentGrid";
import PackageToggle from "@/components/PackageToggle";
import InstallationTimeline from "@/components/InstallationTimeline";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import ContactLocation from "@/components/ContactLocation";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function Home() {
  return (
    <main className="flex-1 pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <AboutUs />
      <FitmentGrid />
      <PackageToggle />
      <InstallationTimeline />
      <Testimonials />
      <FAQ />
      <QuoteForm />
      <ContactLocation />
      <Footer />
      <WhatsAppFAB />
      <MobileBottomNav />
    </main>
  );
}


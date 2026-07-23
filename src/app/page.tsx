import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FitmentGrid from "@/components/FitmentGrid";
import PackageToggle from "@/components/PackageToggle";
import InstallationTimeline from "@/components/InstallationTimeline";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import ContactLocation from "@/components/ContactLocation";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="flex-1 pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <FitmentGrid />
      <PackageToggle />
      <InstallationTimeline />
      <ContactLocation />
      <FAQ />
      <QuoteForm />
      <Footer />
    </main>
  );
}

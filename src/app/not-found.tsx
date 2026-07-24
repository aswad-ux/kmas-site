import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-32 px-4 text-center">
        <h1 className="text-8xl font-black text-[#DC1B1B] font-mono mb-4">404</h1>
        <h2 className="text-2xl font-bold text-[#F9FAFB] mb-6">Page Not Found</h2>
        <p className="text-[#F9FAFB]/60 max-w-md mx-auto mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link 
          href="/"
          className="btn-glow inline-flex items-center justify-center bg-[#DC1B1B] text-white px-8 py-3.5 text-sm font-semibold hover:bg-[#a81212] transition-colors"
        >
          Return Home
        </Link>
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#09090B] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 border-b border-[#27272a] pb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#F9FAFB] mb-4">Privacy Policy (POPIA)</h1>
            <p className="text-[#F9FAFB]/60 text-sm">Last Updated: {new Date().toLocaleDateString('en-ZA')}</p>
          </div>

          <div className="space-y-8 text-[#F9FAFB]/80 text-sm leading-relaxed">
            
            <section>
              <h2 className="text-xl font-semibold text-[#F9FAFB] mb-3 text-[#DC1B1B]">1. Introduction</h2>
              <p>
                Kingsman Automotive Solutions ("we", "us", "our") is committed to protecting your privacy and ensuring that your personal information is collected and used properly, lawfully, and transparently in accordance with the Protection of Personal Information Act (POPIA) of South Africa.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F9FAFB] mb-3 text-[#DC1B1B]">2. Information We Collect</h2>
              <p>We collect and process your personal information mainly to contact you for the purposes of understanding your requirements and delivering services accordingly. For this purpose we will collect contact details including your name, vehicle information, contact number, and province of residence.</p>
              <p className="mt-2">We collect information directly from you where you provide us with your personal details, for example when you submit our online quote form or contact us via WhatsApp.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F9FAFB] mb-3 text-[#DC1B1B]">3. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>To gather contact information for providing a fitment or tracking quote.</li>
                <li>To confirm and verify your identity or to verify that you are an authorised user for security purposes.</li>
                <li>For the detection and prevention of fraud, crime, money laundering or other malpractice.</li>
                <li>To conduct market or customer satisfaction research or for statistical analysis.</li>
                <li>For audit and record keeping purposes.</li>
                <li>In connection with legal proceedings.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F9FAFB] mb-3 text-[#DC1B1B]">4. Disclosure of Information</h2>
              <p>We may disclose your personal information to our service providers (e.g., Matrix, Tracker South Africa) who are involved in the delivery of products or services to you. We have agreements in place to ensure that they comply with the privacy requirements as required by the Protection of Personal Information Act.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F9FAFB] mb-3 text-[#DC1B1B]">5. Information Security</h2>
              <p>We are legally obliged to provide adequate protection for the personal information we hold and to stop unauthorised access and use of personal information. We will, on an on-going basis, continue to review our security controls and related processes to ensure that your personal information remains secure.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F9FAFB] mb-3 text-[#DC1B1B]">6. Your Rights</h2>
              <p>You have the right to request a copy of the personal information we hold about you. To do this, simply contact us at the numbers/addresses as provided on our website and specify what information you require.</p>
              <p className="mt-2">You have the right to ask us to update, correct or delete your personal information. We will require a copy of your ID document to confirm your identity before making changes to personal information we may hold about you.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F9FAFB] mb-3 text-[#DC1B1B]">7. Contact Us</h2>
              <p>If you have any queries about this policy; you need further information about our privacy practices; wish to withdraw consent; exercise preferences or access or correct your personal information, please contact us at the numbers/addresses listed on our website or email us directly.</p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ScrollRevealInit from "@/components/ScrollRevealInit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Kingsman Automotive Solutions – Mobile Tracker & Fitment | Kempton Park, Gauteng",
  description:
    "Premium VESA-approved vehicle tracking, smash-and-grab tinting, dash cams, sound upgrades & accessories. Free mobile installation across Gauteng. Call +27 10 016 7395.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "matrix tracker mobile installation Gauteng",
    "tracker south africa vehicle tracking Pretoria",
    "insurance approved vehicle tracking Johannesburg",
    "smash and grab window tinting Kempton Park",
    "VESA compliant tinting Gauteng",
    "dash cam installation mobile Midrand",
    "reverse camera fitment bakkie Gauteng",
    "sound system upgrade bakkie Johannesburg",
    "bull bar fitment Toyota Hilux Pretoria",
    "towbar installation mobile South Africa",
  ],
  authors: [{ name: "Kingsman Automotive Solutions" }],
  openGraph: {
    title: "Kingsman Automotive Solutions – Vehicle Tracking & Fitment",
    description:
      "Authorised Matrix & Tracker SA reseller. Free mobile installation, no fitment fees. Kempton Park, Gauteng.",
    type: "website",
    locale: "en_ZA",
    siteName: "Kingsman Automotive Solutions",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Kingsman Automotive Solutions",
      url: "https://kmas.co.za",
      telephone: "+27 10 016 7395",
      address: {
        "@type": "PostalAddress",
        streetAddress: "The Foundry Cnr, 21 Isando Road, Lathe St",
        addressLocality: "Kempton Park",
        postalCode: "1619",
        addressCountry: "ZA",
      },
      priceRange: "R",
      areaServed: {
        "@type": "Place",
        name: ["Johannesburg", "Pretoria", "Gauteng", "Midrand", "Kempton Park"],
      },
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-full flex flex-col bg-[#09090B] text-[#F9FAFB] antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CZYCNDYE1J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CZYCNDYE1J');
          `}
        </Script>
        <ScrollRevealInit />
        {children}
      </body>
    </html>
  );
}

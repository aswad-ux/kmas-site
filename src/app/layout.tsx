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
  metadataBase: new URL("https://www.kmas.online"),
  alternates: {
    canonical: "https://www.kmas.online",
  },
  title:
    "Kingsman Automotive Solutions – Vehicle Tracking & Fitment | Edenvale, Gauteng",
  description:
    "Authorised Matrix & Tracker SA reseller. VESA-approved vehicle tracking, smash-and-grab window tinting, dash cams, sound systems & accessories. Free mobile installation across Gauteng. Call +27 10 016 7395.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "vehicle tracking Edenvale",
    "matrix tracker installation Edenvale",
    "tracker south africa fitment Gauteng",
    "smash and grab tinting Edenvale",
    "insurance approved vehicle tracking Johannesburg",
    "mobile tracker fitment Kempton Park",
    "VESA compliant tracking Bedfordview",
    "dash cam installation mobile Midrand",
    "reverse camera fitment bakkie Gauteng",
    "sound system upgrade bakkie Johannesburg",
    "towbar installation Eden Glen",
  ],
  authors: [{ name: "Kingsman Automotive Solutions" }],
  openGraph: {
    title: "Kingsman Automotive Solutions – Vehicle Tracking & Fitment Centre",
    description:
      "Authorised Matrix & Tracker SA reseller. Free mobile installation, zero fitment fees, same-day insurance certificates. Workshop in Eden Glen, Edenvale.",
    url: "https://www.kmas.online",
    type: "website",
    locale: "en_ZA",
    siteName: "Kingsman Automotive Solutions",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Kingsman Automotive Solutions Edenvale",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["AutoRepair", "AutomotiveBusiness"],
      "@id": "https://www.kmas.online/#business",
      "name": "Kingsman Automotive Solutions (KMAS)",
      "alternateName": "KMAS",
      "url": "https://www.kmas.online",
      "logo": "https://www.kmas.online/images/logo.png",
      "image": "https://www.kmas.online/images/hero.png",
      "telephone": "+27 10 016 7395",
      "priceRange": "R179 - R2500",
      "description":
        "Authorised Matrix and Tracker SA reseller. VESA-compliant vehicle tracking, smash-and-grab window tinting, reverse cameras, dash cams, and automotive fitments with free mobile installation across Gauteng.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "43 Harris Ave, Eden Glen",
        "addressLocality": "Edenvale",
        "addressRegion": "Gauteng",
        "postalCode": "1613",
        "addressCountry": "ZA",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -26.130654,
        "longitude": 28.17883,
      },
      "hasMap":
        "https://maps.google.com/?q=43+Harris+Ave,+Eden+Glen,+Edenvale,+1613",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "08:00",
          "closes": "13:00",
        },
      ],
      "areaServed": [
        { "@type": "Place", "name": "Edenvale" },
        { "@type": "Place", "name": "Eden Glen" },
        { "@type": "Place", "name": "Bedfordview" },
        { "@type": "Place", "name": "Greenstone Hill" },
        { "@type": "Place", "name": "Kempton Park" },
        { "@type": "Place", "name": "Boksburg" },
        { "@type": "Place", "name": "Benoni" },
        { "@type": "Place", "name": "Germiston" },
        { "@type": "Place", "name": "Johannesburg" },
        { "@type": "Place", "name": "Sandton" },
        { "@type": "Place", "name": "Midrand" },
        { "@type": "Place", "name": "Centurion" },
        { "@type": "Place", "name": "Pretoria" },
        { "@type": "AdministrativeArea", "name": "Gauteng" },
      ],
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vehicle Tracking Installation (Matrix & Tracker SA)",
            "description":
              "Insurance-approved, VESA compliant tracking unit supply and mobile installation across Gauteng.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Smash and Grab Window Tinting",
            "description":
              "Premium automotive safety film and smash-and-grab protection reducing heat and blocking UV.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sound Systems & Dash Cams Fitment",
            "description":
              "Reverse cameras, front dash cams, speaker upgrades and custom subwoofer installations.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bull Bars, Towbars & Bakkie Accessories",
            "description":
              "Heavy-duty steel bull bars, towbars, nudge bars, and roll bars fitted for bakkies and SUVs.",
          },
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.kmas.online/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you charge an installation fee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "No, we do not charge any installation fees. Our mobile installation service is completely free, meaning the price you see for your package is all you pay.",
          },
        },
        {
          "@type": "Question",
          "name": "Where do you install the tracking units?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "We offer a convenient mobile fitment service. Our certified technicians will come directly to your home or office anywhere in Gauteng to install your unit.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does the installation take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "A standard tracking unit installation takes approximately 45 to 60 minutes. We ensure a quick, seamless process without disrupting your day.",
          },
        },
        {
          "@type": "Question",
          "name": "Will installing a tracker void my vehicle's warranty?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Absolutely not. Our technicians are highly trained and all our installations are fully VESA-approved, meaning your vehicle's factory warranty remains completely intact.",
          },
        },
        {
          "@type": "Question",
          "name": "How quickly do I get my insurance certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "You will receive your VESA-compliant insurance certificate immediately upon completion of the installation, allowing you to forward it to your insurer right away.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you only install tracking units?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "While we are authorised resellers for Matrix and Tracker, we also specialize in smash-and-grab window tinting, dash cam installations, reverse cameras, and custom sound system upgrades.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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

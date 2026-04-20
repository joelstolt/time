import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const heading = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://timeoutservice.se"),
  title: {
    default: "Timeout Service | Städfirma i Stockholm",
    template: "%s | Timeout Service",
  },
  description:
    "Professionell städfirma i Stockholm med 35 års erfarenhet. Hemstädning, flyttstädning, fönsterputs och företagsstädning. Nöjd-kund-garanti. Boka idag!",
  keywords: [
    "städfirma stockholm",
    "hemstädning stockholm",
    "flyttstädning stockholm",
    "fönsterputs stockholm",
    "kontorstädning stockholm",
    "städbolag stockholm",
    "professionell städning",
    "RUT-avdrag städning",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://timeoutservice.se",
    siteName: "Timeout Service",
    title: "Timeout Service | Professionell Städfirma i Stockholm",
    description:
      "Familjeägt städföretag med 35 års erfarenhet. Hemstädning, flyttstädning, fönsterputs och företagsstädning i Stockholm.",
    images: [
      {
        url: "/images/staff-kitchen.jpg",
        width: 1512,
        height: 2016,
        alt: "Timeout Service AB — Professionell städning i Stockholm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timeout Service | Städfirma i Stockholm",
    description:
      "Professionell städfirma i Stockholm med 35 års erfarenhet. Nöjd-kund-garanti. Boka idag!",
    images: ["/images/staff-kitchen.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "M4B6-3FGg6_JoIFcltftVM50lJ82X4DVkPrtSzoiehk",
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://timeoutservice.se",
    name: "Timeout Service AB",
    description:
      "Professionell städfirma i Stockholm med 35 års erfarenhet. Hemstädning, flyttstädning, fönsterputs och företagsstädning.",
    url: "https://timeoutservice.se",
    telephone: "08-37 71 76",
    email: "info@timeoutservice.se",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Terrängvägen 43",
      addressLocality: "Hägersten",
      postalCode: "129 48",
      addressCountry: "SE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 59.2965,
      longitude: 17.9827,
    },
    areaServed: {
      "@type": "City",
      name: "Stockholm",
    },
    serviceType: [
      "Hemstädning",
      "Flyttstädning",
      "Storstädning",
      "Fönsterputs",
      "Kontorstädning",
      "Visningsstädning",
      "Köksstädning",
      "Badrumsstädning",
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "4",
    },
  };

  return (
    <html lang="sv" className={`${heading.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        {/* Skip to content — accessibility */}
        <a href="#main-content" className="skip-to-content">
          Hoppa till innehåll
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}

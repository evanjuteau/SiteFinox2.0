import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatingWidget from "@/components/FloatingWidget";
import {
  defaultOgImage,
  localBusinessJsonLd,
  organizationJsonLd,
  siteUrl,
} from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Finox — Services Financiers",
    template: "%s — Finox",
  },
  description:
    "Cabinet multiservices au Québec. Assurance, investissement, planification financière et stratégies corporatives. Plus qu'un cabinet, un véritable partenaire.",
  keywords: [
    "Finox",
    "Services Financiers",
    "Québec",
    "Assurance vie",
    "Hypothèque",
    "Planification financière",
    "Cabinet AMF",
  ],
  authors: [{ name: "Finox" }],
  creator: "Finox Services Financiers",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: "/",
    siteName: "Finox",
    title: "Finox — Services Financiers",
    description:
      "Plus qu'un cabinet, un véritable partenaire. Pas de jargon. Pas de bullshit.",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Finox — Services Financiers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finox — Services Financiers",
    description:
      "Plus qu'un cabinet, un véritable partenaire. Pas de jargon. Pas de bullshit.",
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#080C14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable} ${bebas.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, localBusinessJsonLd]),
          }}
        />
        <SmoothScrollProvider>
          <CustomCursor />
          <Nav />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <FloatingWidget />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

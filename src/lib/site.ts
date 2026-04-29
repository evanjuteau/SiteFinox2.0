import type { Metadata } from "next";

export const siteUrl = "https://finox.ca";
export const defaultOgImage = "/opengraph-image";

// Mascouche coordinates (45.7472°N, 73.6082°W)
const geoCoordinates = {
  "@type": "GeoCoordinates",
  latitude: 45.7472,
  longitude: -73.6082,
};

// === Organisation principale (FinancialService) ===
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": `${siteUrl}/#organization`,
  name: "Finox — Services Financiers",
  alternateName: "Services Financiers Finox Inc.",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}${defaultOgImage}`,
  email: "service@finox.ca",
  telephone: "+1-438-258-7666",
  description:
    "Cabinet multiservices indépendant inscrit à l'AMF du Québec. Assurance, hypothèque, planification financière et stratégies corporatives à Mascouche, Rive-Nord, Lanaudière et partout au Québec.",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Québec" },
    { "@type": "AdministrativeArea", name: "Nouveau-Brunswick" },
    { "@type": "City", name: "Mascouche" },
    { "@type": "City", name: "Terrebonne" },
    { "@type": "City", name: "Montréal" },
    { "@type": "AdministrativeArea", name: "Lanaudière" },
    { "@type": "AdministrativeArea", name: "Laurentides" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "3235 Av. de la Gare",
    addressLocality: "Mascouche",
    addressRegion: "QC",
    postalCode: "J7K 3C1",
    addressCountry: "CA",
  },
  geo: geoCoordinates,
  founder: [
    {
      "@type": "Person",
      name: "Evan Juteau Lapierre",
      jobTitle: "Associé & Courtier Senior",
    },
    {
      "@type": "Person",
      name: "Dany Michaud",
      jobTitle: "Associé & Courtier Hypothécaire",
    },
  ],
  employee: [
    {
      "@type": "Person",
      name: "Étienne Lejeune",
      jobTitle: "Directeur Développement & Planification",
    },
  ],
  slogan: "Plus qu'un cabinet, un véritable partenaire.",
  knowsAbout: [
    "Assurance vie",
    "Assurance invalidité",
    "Assurance collective",
    "Hypothèque",
    "Refinancement hypothécaire",
    "REER",
    "CELI",
    "CELIAPP",
    "REEE",
    "Planification financière",
    "Planification successorale",
    "Stratégies corporatives",
    "Vie participante",
    "Convention d'actionnaires",
    "Assurance voyage",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services Finox",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Assurance vie & invalidité",
          description:
            "Assurance vie individuelle, corporative et clé-homme. Couverture invalidité pour entrepreneurs et travailleurs autonomes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Financement hypothécaire",
          description:
            "Accès à plus de 50 prêteurs. Premier achat, refinancement, projet immobilier résidentiel et commercial.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Planification financière",
          description:
            "Plan complet de retraite, optimisation REER/CELI/CELIAPP, stratégies de décaissement.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Stratégies corporatives",
          description:
            "Vie participante, convention d'actionnaires, assurance clé-homme, planification successorale.",
        },
      },
    ],
  },
};

// === Bureau local (LocalBusiness) ===
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#mascouche`,
  name: "Finox — Bureau de Mascouche",
  url: siteUrl,
  image: `${siteUrl}${defaultOgImage}`,
  email: "service@finox.ca",
  telephone: "+1-438-258-7666",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3235 Av. de la Gare",
    addressLocality: "Mascouche",
    addressRegion: "QC",
    postalCode: "J7K 3C1",
    addressCountry: "CA",
  },
  geo: geoCoordinates,
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Mascouche" },
    { "@type": "City", name: "Terrebonne" },
    { "@type": "City", name: "Repentigny" },
    { "@type": "City", name: "Blainville" },
    { "@type": "City", name: "Laval" },
    { "@type": "AdministrativeArea", name: "Lanaudière" },
  ],
};

// === FAQ pour GEO (Generative Engine Optimization) ===
export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qui distingue Finox d'une banque?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Finox est un cabinet multiservices indépendant. Contrairement aux banques liées à un seul assureur, Finox magasine parmi plus de 50 assureurs et prêteurs pour trouver la meilleure solution pour chaque client. Aucun quota de vente, aucun produit imposé.",
      },
    },
    {
      "@type": "Question",
      name: "Où est situé le bureau de Finox?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Finox est situé au 3235 Av. de la Gare à Mascouche, Québec (J7K 3C1). Le cabinet dessert Mascouche, Terrebonne, la Rive-Nord, Lanaudière, les Laurentides, Montréal et tout le Québec.",
      },
    },
    {
      "@type": "Question",
      name: "Finox est-il inscrit à l'AMF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Services Financiers Finox Inc. est un cabinet multiservices inscrit à l'Autorité des marchés financiers (AMF) du Québec. Une licence pour le Nouveau-Brunswick est en cours d'obtention.",
      },
    },
    {
      "@type": "Question",
      name: "Quels services offre Finox?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Finox offre l'assurance vie et invalidité, l'assurance collective pour PME, la planification successorale, l'investissement et l'épargne (REER, CELI, CELIAPP), l'assurance voyage, les stratégies corporatives (vie participante, convention d'actionnaires) et le financement hypothécaire avec accès à plus de 50 prêteurs.",
      },
    },
    {
      "@type": "Question",
      name: "Comment Finox est-il rémunéré?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Finox est rémunéré par commission versée par les assureurs et les prêteurs avec qui les clients font affaire — comme la majorité des cabinets indépendants au Québec. Aucuns frais directs au client pour la consultation initiale.",
      },
    },
    {
      "@type": "Question",
      name: "Qui sont les associés de Finox?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Finox est dirigé par Evan Juteau Lapierre (Associé & Courtier Senior, spécialisé en assurance et croissance) et Dany Michaud (Associé & Courtier Hypothécaire, spécialisé en financement et stratégie). Étienne Lejeune complète l'équipe comme Directeur Développement & Planification.",
      },
    },
  ],
};

export function toIsoDate(date: string) {
  const months: Record<string, string> = {
    janvier: "01",
    février: "02",
    fevrier: "02",
    mars: "03",
    avril: "04",
    mai: "05",
    juin: "06",
    juillet: "07",
    août: "08",
    aout: "08",
    septembre: "09",
    octobre: "10",
    novembre: "11",
    décembre: "12",
    decembre: "12",
  };

  const [day, month, year] = date.toLowerCase().split(" ");
  const monthNumber = months[month];

  if (!day || !monthNumber || !year) return date;

  return `${year}-${monthNumber}-${day.padStart(2, "0")}`;
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = title.includes("Finox") ? title : `${title} — Finox`;

  return {
    title: title.includes("Finox") ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [defaultOgImage],
    },
  };
}

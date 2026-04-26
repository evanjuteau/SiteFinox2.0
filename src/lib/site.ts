import type { Metadata } from "next";

export const siteUrl = "https://finox.ca";
export const defaultOgImage = "/opengraph-image";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": `${siteUrl}/#organization`,
  name: "Finox — Services Financiers",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}${defaultOgImage}`,
  email: "service@finox.ca",
  telephone: "+1-438-258-7666",
  areaServed: ["Québec", "Nouveau-Brunswick"],
  founder: [
    { "@type": "Person", name: "Evan Juteau Lapierre" },
    { "@type": "Person", name: "Dany Michaud" },
  ],
  employee: [{ "@type": "Person", name: "Étienne" }],
  slogan: "Plus qu'un cabinet, un véritable partenaire.",
};

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
  priceRange: "$$",
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

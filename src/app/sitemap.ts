import { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { siteUrl, toIsoDate } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/cabinet",
    "/services",
    "/reseau",
    "/equipe",
    "/histoire",
    "/chronique",
    "/contact",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date("2026-04-26"),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...articles.map((article) => ({
      url: `${siteUrl}/chronique/${article.slug}`,
      lastModified: new Date(toIsoDate(article.date)),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}

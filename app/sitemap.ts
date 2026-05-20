import type { MetadataRoute } from "next";
import { absoluteUrl } from "./lib/site";

const routes = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/cases", priority: 0.8, changeFrequency: "monthly" },
  { path: "/consultation", priority: 0.9, changeFrequency: "monthly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

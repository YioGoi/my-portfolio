import type { MetadataRoute } from "next";

import { profile } from "@/content/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/experience", "/about", "/skills", "/blog", "/contact", "/education"];

  return routes.map((route) => ({
    url: `${profile.portfolio}${route}`,
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/projects" ? 0.9 : 0.7,
  }));
}


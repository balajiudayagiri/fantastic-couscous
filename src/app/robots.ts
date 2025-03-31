import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/private/",
      },
    ],
    sitemap: "https://balajiudayagiri.vercel.app/sitemap.xml",
    host: "https://balajiudayagiri.vercel.app",
  };
}

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/", "/*.ico$"],
      },
    ],
    sitemap: "https://balajiudayagiri.vercel.app/sitemap.xml",
  };
}

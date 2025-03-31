import { MetadataRoute } from "next";
import { researchBlogs } from "@b/_customComponents/_app/_research-blogs/researchBlogs";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static routes with custom configurations
  const staticRoutes = [
    {
      url: "https://balajiudayagiri.vercel.app",
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: "https://balajiudayagiri.vercel.app/blogs",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://balajiudayagiri.vercel.app/projects",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: "https://balajiudayagiri.vercel.app/research-blogs",
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://balajiudayagiri.vercel.app/terms",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    },
    {
      url: "https://balajiudayagiri.vercel.app/work",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
  ];

  // Dynamic routes from research blogs
  const blogRoutes = researchBlogs.map((blog) => ({
    url: `https://balajiudayagiri.vercel.app/research-blogs/${blog.id}`,
    lastModified:
      blog.updatedAt || blog.publishedAt || new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...blogRoutes];
}

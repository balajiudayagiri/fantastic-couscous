import { MetadataRoute } from "next";
import { researchBlogs } from "@b/_customComponents/_app/_research-blogs/researchBlogs";
import { StudyNotesList } from "@b/_customComponents/_app/_study-notes/constant";
import { createSlug } from "@b/utilities/createSlug";

// Helper function to ensure valid date format
function formatDate(date: string | Date | undefined): string {
  try {
    if (!date) {
      return new Date().toISOString().split("T")[0]; // Returns YYYY-MM-DD
    }
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return new Date().toISOString().split("T")[0];
    }
    return parsedDate.toISOString().split("T")[0];
  } catch {
    return new Date().toISOString().split("T")[0];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Static routes with custom configurations
  const staticRoutes = [
    {
      url: "https://balajiudayagiri.vercel.app",
      lastModified: formatDate(new Date()),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: "https://balajiudayagiri.vercel.app/blogs",
      lastModified: formatDate(new Date()),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://balajiudayagiri.vercel.app/projects",
      lastModified: formatDate(new Date()),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: "https://balajiudayagiri.vercel.app/research-blogs",
      lastModified: formatDate(new Date()),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://balajiudayagiri.vercel.app/terms",
      lastModified: formatDate(new Date()),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    },
    {
      url: "https://balajiudayagiri.vercel.app/work",
      lastModified: formatDate(new Date()),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
  ];

  // Dynamic routes from research blogs
  const blogRoutes = researchBlogs.map((blog) => ({
    url: `https://balajiudayagiri.vercel.app/research-blogs/${blog.id}`,
    lastModified: formatDate(blog.updatedAt || blog.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));
  const studyRoutes = StudyNotesList.map((note) => ({
    url: `https://balajiudayagiri.vercel.app/study-notes/${createSlug(
      note.title
    )}-${note.id}`,
    lastModified: formatDate(new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));
  return [...staticRoutes, ...blogRoutes, ...studyRoutes];
}

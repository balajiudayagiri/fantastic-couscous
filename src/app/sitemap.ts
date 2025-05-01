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
  const baseUrl = "https://balajiudayagiri.vercel.app";

  // Primary routes with high priority
  const primaryRoutes = [
    {
      url: baseUrl,
      lastModified: formatDate(new Date()),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/research-blogs`,
      lastModified: formatDate(new Date()),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ];

  // Content routes
  const contentRoutes = [
    {
      url: `${baseUrl}/blogs`,
      lastModified: formatDate(new Date()),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: formatDate(new Date()),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
  ];

  // Dynamic content routes with enhanced metadata
  const blogRoutes = researchBlogs.map((blog) => ({
    url: `${baseUrl}/research-blogs/${blog.id}`,
    lastModified: formatDate(blog.updatedAt || blog.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const studyRoutes = StudyNotesList.map((note) => ({
    url: `${baseUrl}/study-notes/${createSlug(note.title)}-${note.id}`,
    lastModified: formatDate(new Date()),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  // Supporting pages
  const supportingRoutes = [
    {
      url: `${baseUrl}/terms`,
      lastModified: formatDate(new Date()),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: formatDate(new Date()),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  return [
    ...primaryRoutes,
    ...contentRoutes,
    ...blogRoutes,
    ...studyRoutes,
    ...supportingRoutes,
  ];
}

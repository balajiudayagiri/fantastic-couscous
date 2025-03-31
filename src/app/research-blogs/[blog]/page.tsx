import BlogPost from "@b/_customComponents/_app/_research-blogs/_blog/BlogPost";
import { researchBlogs } from "@b/_customComponents/_app/_research-blogs/researchBlogs";
import type { Metadata } from "next";
import Script from "next/script";

export async function generateMetadata({
  params,
}: {
  params: { blog: string };
}): Promise<Metadata> {
  const blogPost = researchBlogs.find((post) => post.id === params.blog);
  const title =
    blogPost?.title || decodeURIComponent(params.blog).replace(/-/g, " ");

  return {
    title: `${title} | Research & Technical Insights`,
    description:
      blogPost?.description ||
      `In-depth technical analysis and insights about ${title}`,
    keywords: [
      title,
      "technical research",
      "software development",
      "web development",
      "programming insights",
      ...(blogPost?.content.keyPoints || []),
    ],
    authors: [{ name: "Balaji Udayagiri" }],
    openGraph: {
      title: title,
      description: blogPost?.description,
      type: "article",
      publishedTime: blogPost?.publishedAt,
      modifiedTime: blogPost?.updatedAt,
      authors: ["Balaji Udayagiri"],
      tags: blogPost?.content.keyPoints,
      // images: [
      //   {
      //     url: blogPost?.coverImage || "/images/default-blog-og.png",
      //     width: 1200,
      //     height: 630,
      //     alt: title,
      //   },
      // ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: blogPost?.description,
      // images: [blogPost?.coverImage || "/images/default-blog-og.png"],
    },
  };
}

export default function BlogPostPage({ params }: { params: { blog: string } }) {
  interface BlogPostData {
    id: string;
    title: string;
    description?: string;
    tags?: string[];
    publishedAt?: string;
    updatedAt?: string;
    coverImage?: string;
  }

  const blogPost: BlogPostData | undefined = researchBlogs.find(
    (post: BlogPostData) => post.id === params.blog
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blogPost?.title,
    description: blogPost?.description,
    author: {
      "@type": "Person",
      name: "Balaji Udayagiri",
      jobTitle: "Frontend Lead Engineer",
    },
    datePublished: blogPost?.publishedAt,
    dateModified: blogPost?.updatedAt,
    image: blogPost?.coverImage,
    keywords: blogPost?.tags?.join(", "),
    publisher: {
      "@type": "Person",
      name: "Balaji Udayagiri",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://balajiudayagiri.vercel.app/research-blogs/${params.blog}`,
    },
  };

  return (
    <>
      <Script
        id="blog-post-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main
        className="blog-post-page container mx-auto px-4 py-8"
        itemScope
        itemType="https://schema.org/BlogPosting">
        <BlogPost slug={params.blog} />
      </main>
    </>
  );
}

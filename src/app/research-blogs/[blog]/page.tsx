import BlogPost from "@b/_customComponents/_app/_research-blogs/_blog/BlogPost";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { blog: string };
}): Promise<Metadata> {
  const title = decodeURIComponent(params.blog).replace(/-/g, " ");
  return {
    title: `${title}`,
    description: `Read about ${title} in detail.`,
  };
}

export default function Page({ params }: { params: { blog: string } }) {
  return <BlogPost slug={params.blog} />;
}

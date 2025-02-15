import BlogPost from "@b/_customComponents/_app/_research-blogs/_blog/BlogPost";

export default async function Page({
  params,
}: {
  params: Promise<{ blog: string }>;
}) {
  const slug = (await params).blog;
  return <BlogPost slug={slug} />;
 
}

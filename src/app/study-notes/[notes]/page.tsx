import NotesRender from "@b/_customComponents/_app/_study-notes/NotesRender";
import React from "react";

import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { notes: string };
}): Promise<Metadata> {
  const formattedTitle = params.notes
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${formattedTitle} | Study Notes | Balaji Udayagiri`,
    description: `Explore my study notes and insights about ${formattedTitle}, including detailed explanations and key concepts.`,
    keywords: [
      formattedTitle.toLowerCase(),
      "study notes",
      "web development notes",
      "programming notes",
      "software engineering study",
    ],
    alternates: {
      canonical: `https://balajiudayagiri.vercel.app/study-notes/${params.notes}`,
    },
    openGraph: {
      title: `${formattedTitle} | Study Notes | Balaji Udayagiri`,
      description: `Detailed study notes and insights about ${formattedTitle}. Part of my learning journey in software development.`,
      type: "article",
      url: `https://balajiudayagiri.vercel.app/study-notes/${params.notes}`,
    },
  };
}

async function page({ params }: { params: Promise<{ notes: string }> }) {
  const { notes } = await params;

  return (
    <div className="min-h-screen pt-12">
      <NotesRender title={notes} />
    </div>
  );
}

export default page;

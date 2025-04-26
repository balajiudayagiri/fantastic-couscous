import StudyNotesList from "@b/_customComponents/_app/_study-notes/StudyNotesList";
import React from "react";

export const metadata = {
  title: "Study Notes",
  description: "A collection of study notes to help you learn effectively.",
  keywords: [
    "study notes",
    "web development notes",
    "programming notes",
    "software engineering study",
  ],
  alternates: {
    canonical: "https://balajiudayagiri.vercel.app/study-notes",
  },
};

function page() {
  return (
    <div className="min-h-screen">
      <StudyNotesList />
    </div>
  );
}

export default page;

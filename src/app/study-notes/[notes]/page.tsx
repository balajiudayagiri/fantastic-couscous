import NotesRender from "@b/_customComponents/_app/_study-notes/NotesRender";
import React from "react";

async function page({ params }: { params: Promise<{ notes: string }> }) {
  const { notes } = await params;

  return (
    <div className="min-h-screen pt-12">
      <NotesRender title={notes} />
    </div>
  );
}

export default page;

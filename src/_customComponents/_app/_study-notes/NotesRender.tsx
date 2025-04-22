"use client";
import React from "react";
import { StudyNotesList } from "./constant";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import RedmeRenderer from "@b/components/readme-viewer/RedmeRenderer";

interface ParsedParams {
  id: string;
  slug: string;
}

function parseSlugAndId(param: string): ParsedParams | null {
  const match = param.match(/^(.+)-(\d+)$/);
  if (!match) return null;
  return {
    slug: match[1],
    id: match[2],
  };
}

function NotesRender({ title }: { title: string }) {
  const noteSlug = title;
  // Early return for invalid URL
  if (!noteSlug) {
    return <div>Note not found</div>;
  }

  const parsedParams = parseSlugAndId(noteSlug);

  // Find the matching note
  const note = parsedParams
    ? StudyNotesList.find((note) => note.id === Number(parsedParams.id))
    : null;

  if (!note) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Note not found
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            The note you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link
            href="/study-notes"
            className="inline-flex items-center text-indigo-500 hover:text-indigo-600">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Study Notes
          </Link>
        </div>
      </div>
    );
  }

  const formatTitle = (title: string) => {
    const parts = title.split(/(`[^`]+`)/);

    return parts.map((part, index) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-4xl font-bold font-mono 
                bg-gradient-to-r from-violet-500/10 to-indigo-500/10 text-indigo-700 
                dark:text-indigo-300 border border-indigo-500/20">
            {part.slice(1, -1)}
          </motion.span>
        );
      }
      return part;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-12 md:max-w-4xl  pt-18">
      {/* Navigation */}
      <div className="mb-8">
        <Link
          href="/study-notes"
          className="inline-flex items-center text-indigo-500 hover:text-indigo-600">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Study Notes
        </Link>
      </div>

      {/* Content */}
      <article className="prose prose-lg dark:prose-invert prose-indigo max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          {formatTitle(note.title)}
        </h1>
        {/* <div dangerouslySetInnerHTML={{ __html: note.data }} className="mt-8" /> */}
        <RedmeRenderer markdown={note.data} />
      </article>
    </motion.div>
  );
}

export default NotesRender;

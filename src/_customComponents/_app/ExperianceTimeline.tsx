import { Timeline } from "@b/components/ui/timeline";
// import Image from "next/image";
import React from "react";
import { experiences } from "./HomePageConstants";
import Link from "next/link";
import { createSlug } from "@b/utilities/createSlug";
import { Check, CircleCheck } from "lucide-react";

export function ExperianceTimeline() {
  const timelineData = experiences.map((experience) => ({
    title: experience.period, // Now title is a string
    content: (
      <div className="">
        <h3 className="text-neutral-800 dark:text-neutral-200 text-xl md:text-4xl font-bold mb-4">
          {experience.title} at {experience.company}
        </h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
          {experience.description}
        </p>
        <div className="space-y-2 mb-4">
          {experience.responsibilities.map((responsibility, index) => (
            <div
              key={index}
              className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <CircleCheck className="min-h-1 min-w-1 text-green-500" />
              {responsibility}
            </div>
          ))}
        </div>
        <Link
          href={`/work?section=${createSlug(experience.title)}`}
          className="hover:text-blue-500 hover:underline transition-colors duration-500">
          View more
        </Link>
      </div>
    ),
  }));

  return (
    <div className="w-full">
      <Timeline data={timelineData} />
    </div>
  );
}

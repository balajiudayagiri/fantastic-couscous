import { NPMIcon } from "@b/_icons";
import Link from "next/link";
import React from "react";

const ProjectsTile = () => {
  return (
    <Link href="/projects">
      <div className="cursor-pointer border p-5 h-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <span className="flex items-center gap-3">
          <NPMIcon size="50px" className="mb-3" />
          <h1 className="text-xl md:text-2xl font-bold mb-2">
            Empyrean<span className="text-yellow-500">UI</span>
          </h1>
        </span>
        <h2 className="text-lg font-bold mb-2">My Projects</h2>
        <p className="text-sm mb-4">
          I have worked on various projects including EmpyreanUI, a robust UI
          library, and other innovative solutions. Click here to explore all the
          projects and see how I&apos;ve applied my skills to deliver high-quality
          results.
        </p>
        <p className="text-sm mb-4">
          Click on the tile to view all my projects
        </p>
      </div>
    </Link>
  );
};

export default ProjectsTile;

import React from "react";
import { calculateExperience } from "@b/utilities/calculateExperience";
import Cards from "@b/app/about/Cards";
import "./about.css";

function page() {
  return (
    <div className=" xl:px-36 lg:px-16 md:px-8 sm:px-5 px-4 py-2">
      <h1
        className={
          "md:text-6xl sm:text-5xl text-4xl font-extrabold leading-tight mb-10 "
        }>
        I live in Hyderabad City, where I design my world
      </h1>
      <p className={""}>
        Welcome to my digital abode! I&apos;m a{" "}
        <span className="dark:text-cyan-500 text-cyan-600 font-bold">
          Software Engineer{" "}
        </span>
        with a knack for transforming innovative ideas into tangible tech
        solutions. I find joy in the elegant dance of code, creating
        applications that not only function seamlessly but also bring a touch of
        delight to the user experience.
      </p>
      <p className="mt-6">
        My journey into the realm of software engineering kicked off{" "}
        {calculateExperience("November 2020")}, armed with a passion for all
        things tech. It&apos;s been an exhilarating ride, filled with projects
        that challenged me, teams that inspired me, and a continuous stream of
        opportunities to learn and grow. Each project, each line of code, has
        been a step in my evolution as a tech enthusiast.
      </p>
      <p className="mt-6">
        Collaborating with diverse teams, learning from challenges, and
        embracing opportunities for growth, my journey has been a blend of hard
        work, creativity, and a dash of spontaneity.
      </p>
      <h1 className="my-8 font-bold text-3xl">My Key skills</h1>

      <Cards />
    </div>
  );
}

export default page;

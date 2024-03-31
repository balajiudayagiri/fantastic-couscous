import React from "react";
import { calculateExperience } from "@b/utilities/calculateExperience";
import "./about.css";
import { CharminarIcon, IndiaGateIcon, IndiaIcon } from "@b/_icons";

function About() {
  return (
    <div className=" xl:px-36 lg:px-16 md:px-8 sm:px-5 px-4 py-2 pt-24">
      <div className="flex items-center md:flex-row flex-col-reverse">
        <h1
          className={
            "md:text-7xl sm:text-6xl text-4xl font-extrabold leading-tight md:mb-0 mb-10 "
          }>
          I live in Hyderabad City, where I design my world
        </h1>
        <CharminarIcon size={"250px"} />
      </div>
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
      <div className="flex items-center md:flex-row flex-col my-6">
        <IndiaIcon size={"250px"} />
        <p className="mt-6">
          <span className="md:text-6xl sm:text-5xl text-4xl font-extrabold leading-tight md:mb-0 mb-10 ">
            India
          </span>{" "}
          holds a special place in my heart, not only as my homeland but also as
          a wellspring of inspiration and cultural richness. Growing up
          surrounded by the vibrant tapestry of Indian traditions, I&apos;ve
          cultivated a deep appreciation for its diversity and heritage.
        </p>
      </div>
      <div className="flex items-center md:flex-row flex-col my-6">
        <p className="mt-6">
          Beyond my role as a Software Engineer, I&apos;ve also honed various talents
          and skills rooted in the Indian ethos. From classical arts such as
          music and dance to the culinary delights of Indian cuisine, I bring a
          blend of cultural fluency and creativity to everything I do.
        </p>
        <IndiaGateIcon size={"250px"} />
      </div>
    </div>
  );
}

export default About;

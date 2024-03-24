import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@b/components/ui/accordion";
import { calculateExperience } from "@b/utilities/calculateExperience";
import React from "react";

function page() {
  return (
    <div className=" xl:mx-36 lg:mx-16 md:mx-8 sm:mx-5 mx-4 mt-16">
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
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default page;

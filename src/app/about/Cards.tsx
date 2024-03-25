"use client";
import { BackgroundGradient } from "@b/components/ui/background-gradient";
import React from "react";
import { articles } from "./constant";

function Cards() {
  return (
    <div className="flex flex-wrap mt-14 justify-between gap-9">
      {articles?.map((item, index) => {
        // Splitting the title to get the first word
        const firstWord = item.title.split(" ")[0];
        // Constructing the value attribute
        const value = `${firstWord}-${index}`;

        return (
          // <AccordionItem
          //   key={index}
          //   value={value}
          //   // className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          //   <AccordionTrigger>{item.title}</AccordionTrigger>
          //   <AccordionContent>{item.summary}</AccordionContent>
          // </AccordionItem>
          <BackgroundGradient
            className="overflow-hidden rounded-md h-full"
            containerClassName="rounded-md flex flex-col xl:w-[30%] lg:w-[47%] md:w-[47%] sm:w-full"
            key={value}>
            <div className="dark:bg-black bg-white p-5 rounded-3xl h-full">
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm">{item.summary}</p>
            </div>
          </BackgroundGradient>
        );
      })}
    </div>
  );
}

export default Cards;

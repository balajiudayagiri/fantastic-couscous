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
          <BackgroundGradient
            className="overflow-hidden rounded-md h-full"
            containerClassName="rounded-md flex flex-col xl:w-[30%] lg:w-[47%] md:w-[47%] sm:w-full"
            key={value}>
            <div className="dark:bg-black bg-white p-5 rounded-3xl h-full cursor-pointer">
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

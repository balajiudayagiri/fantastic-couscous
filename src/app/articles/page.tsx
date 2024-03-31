import React from "react";
import Cards from "@b/app/articles/Cards";

function Articles() {
  return (
    <div className="container">
      <section className="articles-section xl:px-36 lg:px-16 md:px-8 sm:px-5 px-4 py-2 pt-24">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-extrabold leading-tight md:mb-0 mb-10 ">
          Explore My Articles
        </h1>
        <p className="mt-6">
          Welcome to my collection of articles where I share insights,
          tutorials, and reflections on various topics related to software
          engineering, technology, and beyond.
        </p>
        <Cards />
      </section>
    </div>
  );
}

export default Articles;

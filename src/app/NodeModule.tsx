import { NPMIcon } from "@b/_icons";
import React from "react";

const NodeModuleTile = () => {
  return (
    <a
      href="https://www.npmjs.com/package/@balajiudy/dsui"
      target="_blank"
      rel="noopener noreferrer"
      className="">
      <div className="cursor-pointer border p-5">
        <NPMIcon size="50px" />
        <h2 className="text-lg font-bold">DSUI</h2>
        <p className="text-sm">
          DSUI is a robust JavaScript library that facilitates the building of
          interactive user interfaces. It provides a comprehensive suite of
          hooks and UI components designed to enhance productivity and bring
          consistency to development workflows. Each component is meticulously
          crafted to offer flexible configuration options, ensuring that they
          meet the specific needs of your projects. Best-in-class practices are
          implemented to maintain performance and accessibility standards,
          making DSUI an essential toolkit for modern web development.
        </p>
      </div>
    </a>
  );
};

export default NodeModuleTile;

import { NPMIcon } from "@b/_icons";
import React from "react";

const NodeModuleTile = () => {
  return (
    <a
      href="https://www.npmjs.com/package/@empyreanui/core"
      target="_blank"
      rel="noopener noreferrer"
      className="">
      <div className="cursor-pointer border p-5 h-full">
        <NPMIcon size="50px" />
        <h2 className="text-lg font-bold">EmpyreanUi</h2>
        <p className="text-sm">
          EmpyreanUi is a robust UI library offering a range of components,
          hooks, and animating wrappers to streamline development and ensure
          consistent, high-quality user interfaces.
        </p>
      </div>
    </a>
  );
};

export default NodeModuleTile;

import { NPMIcon } from "@b/_icons";
import Image from "next/image";
import React from "react";

function EmpyreanUI_NPM_Section() {
  return (
    <div className="bg-background rounded-lg shadow-lg overflow-hidden md:flex md:flex-row max-h-auto md:max-h-80">
      <Image
        src={"/images/empyreanuinpmscreenshot.png"}
        width={300}
        height={200}
        className="w-full md:w-1/2 h-auto"
        alt="EmpyreanUI_NPM_Section"
      />
      <div className="p-4 md:w-1/2 md:p-6">
        <NPMIcon size="50px" />
        <a
          href="https://www.npmjs.com/package/@empyreanui/core"
          target="_blank"
          rel="noopener noreferrer"
          className="block">
          <h1 className="text-xl md:text-2xl font-bold mb-2">
            @<span className="text-yellow-500">empyreanui</span>/core
          </h1>
        </a>
        <p className="text-base md:text-lg mb-4">
          The @empyreanui/core package provides a comprehensive set of UI
          components, hooks, and utilities designed to streamline your
          development process. With a focus on flexibility and ease of use,
          EmpyreanUI ensures that you can build consistent, high-quality user
          interfaces with minimal effort.
        </p>
        <a
          href="https://www.npmjs.com/package/@empyreanui/core"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:underline">
          Visit
        </a>
      </div>
    </div>
  );
}

export default EmpyreanUI_NPM_Section;

import Image from "next/image";
import React from "react";

function EmpyreanUISection() {
  return (
    <div className="bg-background rounded-lg shadow-lg overflow-hidden md:flex md:flex-row max-h-auto md:max-h-80">
      <Image
        src={"/images/empyreanuiscreenshot.png"}
        width={300}
        height={200}
        className="w-full md:w-1/2 h-auto"
        alt="EmpyreanUISection"
      />
      <div className="p-4 md:w-1/2 md:p-6">
        <a
          href="https://empyreanui.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block">
          <h1 className="text-xl md:text-2xl font-bold mb-2">
            Empyrean<span className="text-yellow-500">UI</span>
          </h1>
        </a>
        <p className="text-base md:text-lg mb-4">
          EmpyreanUI is a robust UI library offering a range of components,
          hooks, and animating wrappers to streamline development and ensure
          consistent, high-quality user interfaces.
        </p>
        <a
          href="https://empyreanui.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline">
          Visit
        </a>
      </div>
    </div>
  );
}

export default EmpyreanUISection;

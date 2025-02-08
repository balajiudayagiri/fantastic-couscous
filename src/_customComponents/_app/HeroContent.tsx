import React from "react";

export function HeroContent() {
  return (
    <div className="text-center md:text-left z-30 relative flex items-center justify-center h-dvh">
      <div className="absolute z-10 h-dvh w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="z-30 relative max-w-4xl mx-auto px-6">
        <h1 className="font-bold mb-4 md:text-7xl text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Balaji Udayagiri
        </h1>
        <p className="md:text-2xl text-lg mb-8 text-muted-foreground">
          Front-End Lead Engineer at PureCode Software
        </p>
        <p className="md:text-xl text-md max-w-2xl mx-auto">
          Transforming Figma designs into production-ready code with AI-powered
          solutions
        </p>
      </div>
    </div>
  );
}

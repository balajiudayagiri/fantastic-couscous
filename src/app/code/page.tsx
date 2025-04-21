import React from "react";
import CodePreview from "@b/_customComponents/_app/_code/CodePreview";

export const metadata = {
  title: "Code Examples",
  description:
    "Explore a collection of beautiful UI components and animations. Each example includes HTML, CSS, and JavaScript code that you can view, interact with, and use in your projects.",
};
export const dynamic = "force-dynamic"; // This page should always be revalidated to show the latest code examples.

function Page() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className=" pt-24 bg-gradient-to-b from-purple-900 to-background text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Beautiful Code Examples
          </h1>
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-sm font-medium text-purple-200 backdrop-blur-sm ring-1 ring-white/10">
              Interactive Examples
            </span>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
            Explore a collection of beautiful UI components and animations. Each
            example includes HTML, CSS, and JavaScript code that you can view,
            interact with, and use in your projects.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
              <span className="h-3 w-3 rounded-full bg-[#E44D26]"></span>
              <span className="text-gray-300">HTML</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
              <span className="h-3 w-3 rounded-full bg-[#264DE4]"></span>
              <span className="text-gray-300">CSS</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
              <span className="h-3 w-3 rounded-full bg-[#F7DF1E]"></span>
              <span className="text-gray-300">JavaScript</span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">6+</div>
              <div className="text-gray-400">Examples</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">100%</div>
              <div className="text-gray-400">Interactive</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">Copy</div>
              <div className="text-gray-400">Ready to Use</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">Free</div>
              <div className="text-gray-400">Open Source</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto py-12 max-w-screen-xl">
        <CodePreview />
      </div>
    </div>
  );
}

export default Page;

// Beautiful Code Examples
// Ready to Use Components
// Explore a collection of beautiful UI components and animations. Each example includes HTML, CSS, and JavaScript code that you can view, interact with, and use in your projects.

"use client";

import React, { useEffect, useRef, useState } from "react";
import codeData from "./data.json";
// import CodePreviewItem from "./CodePreviewItem";
import dynamic from "next/dynamic";

const DynamicCodePreviewItem = dynamic(() => import("./CodePreviewItem"), {
  ssr: false,
});
const CodePreview = () => {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const observers = useRef<{ [key: string]: IntersectionObserver }>({});

  useEffect(() => {
    const initialVisibleItems = new Set(codeData.map((item) => item.id));
    setVisibleItems(initialVisibleItems);

    codeData.forEach((item) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set(prev.add(entry.target.id)));
            }
          });
        },
        { threshold: 0.1, rootMargin: "50px" }
      );
      observers.current[item.id] = observer;
    });

    return () => {
      Object.values(observers.current).forEach((observer) =>
        observer.disconnect()
      );
    };
  }, []);

  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Example Components
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of interactive components. Click on
            any example to view the code and live preview.
          </p>
        </div>

        {/* Grid of Components */}
        <div className="grid gap-8 md:gap-12">
          {[...codeData].reverse().map((item) => (
            <DynamicCodePreviewItem
              key={item.id}
              item={item}
              observerRef={(el) =>
                el && observers.current[item.id]?.observe(el)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodePreview;

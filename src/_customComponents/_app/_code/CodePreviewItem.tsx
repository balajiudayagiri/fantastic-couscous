"use client";

import React, { useState } from "react";
import { CodeBlock } from "@b/components/ui/code-block";

type TabType = "preview" | "html" | "css" | "javascript";

interface CodePreviewItemProps {
  item: {
    id: string;
    title: string;
    description: string;
    html: string;
    css: string;
    javascript: string;
  };
  observerRef: (el: HTMLDivElement | null) => void;
}

const CodePreviewItem = ({ item, observerRef }: CodePreviewItemProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("preview");

  const combineCode = (): string => {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${item.title}</title>
          <style>
            ${item.css}
          </style>
        </head>
        <body>
          ${item.html}
          ${item.javascript ? `<script>${item.javascript}</script>` : ""}
        </body>
      </html>
    `;
  };

  const TabButton = ({
    tab,
    onClick,
  }: {
    tab: TabType;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`
        px-6 py-2.5 text-sm font-medium transition-all duration-200
        ${
          activeTab === tab
            ? " bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
            : "text-muted-foreground hover:bg-white/10 "
        } rounded-t-lg backdrop-blur-sm
      `}>
      {tab.charAt(0).toUpperCase() + tab.slice(1)}
    </button>
  );

  return (
    <div
      ref={observerRef}
      id={item.id}
      className="relative group rounded-2xl backdrop-blur-sm shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
      {/* Component Header */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
        <p className="text-primary/60">{item.description}</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex bg-background">
        <TabButton tab="preview" onClick={() => setActiveTab("preview")} />
        <TabButton tab="html" onClick={() => setActiveTab("html")} />
        <TabButton tab="css" onClick={() => setActiveTab("css")} />
        {item.javascript && (
          <TabButton
            tab="javascript"
            onClick={() => setActiveTab("javascript")}
          />
        )}
      </div>

      {/* Content Area */}
      <div className="relative w-full bg-background">
        {activeTab === "preview" ? (
          <div className="h-[400px]">
            <iframe
              className="w-full h-full border-0"
              srcDoc={combineCode()}
              title={item.title}
              sandbox="allow-scripts"
            />
          </div>
        ) : (
          <div className="h-[400px] overflow-auto ">
            <CodeBlock
              language={activeTab}
              code={
                activeTab === "html"
                  ? item.html
                  : activeTab === "css"
                  ? item.css
                  : item.javascript || ""
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CodePreviewItem;

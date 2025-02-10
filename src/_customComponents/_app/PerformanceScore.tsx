"use client";
import React, { useState, memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type ProgressCircleProps = {
  value: number;
  label: string;
  strokWidth?: string;
};

const ProgressCircle: React.FC<ProgressCircleProps> = memo(
  ({ value, label, strokWidth }) => {
    ProgressCircle.displayName = "ProgressCircle";
    const radius = 45; // Smaller radius to reduce circle size
    const circumference = 2 * Math.PI * radius;

    return (
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="relative">
          <svg
            width="70"
            height="70"
            viewBox="0 0 100 100"
            className="rotate-90">
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="#e0e0e0"
              strokeWidth={strokWidth}
              fill="none"
            />
            {/* Animated Progress Circle */}
            <motion.circle
              cx="50"
              cy="50"
              r={radius}
              stroke="#4CAF50"
              strokeWidth={strokWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (value / 100) * circumference}
              strokeLinecap="round"
              initial={{ strokeDashoffset: circumference }}
              animate={{
                strokeDashoffset: circumference - (value / 100) * circumference,
              }}
              transition={{ duration: 1 }}
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="text-xl font-semibold text-green-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}>
              {value}
            </motion.div>
          </div>
        </div>
        <div className="text-xs text-white/70">{label}</div>
      </div>
    );
  }
);

const PerformanceScore: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"mobile" | "desktop">("mobile");
  const strokWidth = "7";
  // Scores for mobile and desktop
  const mobileScores = {
    performance: 92,
    accessibility: 95,
    bestPractices: 100,
    seo: 100,
  };

  const desktopScores = {
    performance: 99,
    accessibility: 95,
    bestPractices: 100,
    seo: 100,
  };

  const scores = activeTab === "mobile" ? mobileScores : desktopScores;

  return (
    <div className="p-6 max-w-screen-lg mx-auto">
      {/* Tab Buttons */}
      <div className="flex space-x-4 mb-6 items-center justify-center">
        <div className="relative">
          <button
            className={`px-4 py-2 w-28 font-semibold ${
              activeTab === "mobile" ? "text-blue-400" : "text-white/70"
            }`}
            onClick={() => setActiveTab("mobile")}>
            Mobile
          </button>
          <button
            className={`px-4 py-2 w-28 font-semibold ${
              activeTab === "desktop" ? "text-blue-400" : "text-white/70"
            }`}
            onClick={() => setActiveTab("desktop")}>
            Desktop
          </button>

          {/* Sliding Active Tab Indicator */}
          <motion.div
            className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500 rounded-tl-lg rounded-tr-lg"
            animate={{
              left: activeTab === "mobile" ? "0%" : "50%",
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Performance Scores */}
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        <ProgressCircle
          value={scores.performance}
          label="Performance"
          strokWidth={strokWidth}
        />
        <ProgressCircle
          value={scores.accessibility}
          label="Accessibility"
          strokWidth={strokWidth}
        />
        <ProgressCircle
          value={scores.bestPractices}
          label="Best Practices"
          strokWidth={strokWidth}
        />
        <ProgressCircle
          value={scores.seo}
          label="SEO"
          strokWidth={strokWidth}
        />
      </div>

      {/* Link to the PageSpeed Insights Report */}
      <div className="text-center">
        <Link
          href="https://pagespeed.web.dev/analysis/https-balajiudayagiri-vercel-app/oagtob7b60"
          target="_blank"
          className="text-blue-500 hover:underline">
          View Performance Report as Proof
        </Link>
      </div>
    </div>
  );
};

export default PerformanceScore;

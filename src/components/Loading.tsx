"use client";
import React from "react";

// 1. Spinner
function Spinner() {
  return (
    <div className="flex flex-col items-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-600 mb-4"></div>
      <span className="text-white text-lg font-semibold">Loading...</span>
    </div>
  );
}


// 11. SVG PathDrawing
function PathDrawing({ duration = 1.5 }: { duration?: number }) {
  return (
    <div className="flex flex-col items-center">
      <svg width="64" height="74" viewBox="0 0 84 96" className="mb-4">
        <g transform="translate(-8.000000, -2.000000)">
          <g transform="translate(11.000000, 5.000000)">
            <polygon
              stroke="#911005"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="39 0 0 22 0 67 39 90 78 68 78 23"
              strokeDasharray="300"
              strokeDashoffset="300"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="300"
                to="0"
                dur={`${duration}s`}
                repeatCount="1"
                fill="freeze"
              />
            </polygon>
            <path
              d="M28,30 L50,30 L50,35 L33,35 L33,43 L48,43 L48,48 L33,48 L33,56 L50,56 L50,61 L28,61 Z"
              fill="#911005"
              opacity="0"
            >
              <animate
                attributeName="opacity"
                values="0;0;1;1;0"
                keyTimes="0;0.83;0.84;0.99;1"
                dur={`${duration}s`}
                repeatCount="1"
                fill="freeze"
              />
            </path>
          </g>
        </g>
      </svg>
      
    </div>
  );
}
 

export default function Loading({ duration }: { duration?: number }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 overflow-y-auto">
      <div className="flex flex-col items-center space-y-10">
        <PathDrawing duration={duration} />
      </div>
    </div>
  );
} 
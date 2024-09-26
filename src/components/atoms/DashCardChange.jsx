import React from "react";
import ArrowUp from "../../assets/svgs/ArrowUp";

/**
 *
 */
export default function DashCardChange({ value }) {
  return (
    <div className="flex items-start sm:items-center gap-2 whitespace-nowrap">
      <div className="flex items-center">
        <ArrowUp />
        <span className="text-sm font-medium text-green-400">{value}</span>
      </div>

      <span className="text-sm font-medium text-gray-300">vs last 7 days</span>
    </div>
  );
}

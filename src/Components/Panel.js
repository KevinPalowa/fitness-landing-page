import React from "react";

export default function Panel({ main, secondary, color }) {
  return (
    <div className="bg-[#1a1a1a] px-7 py-5 rounded-[1.25rem]">
      <p className={`text-4xl font-semibold ${color}`}>{main}</p>
      <p className="text-sm">{secondary}</p>
    </div>
  );
}

import React from "react";

export default function Chip() {
  return (
    <div className="bg-[#191919] w-3/12 flex p-1 mt-32 rounded-full items-center space-x-4">
      <div className="rounded-full font-semibold text-[10px] py-2 px-4 tracking-widest uppercase bg-[#25ab75]">
        NEW
      </div>
      <p className="text-xs">High Intensity workout to burn calories</p>
    </div>
  );
}

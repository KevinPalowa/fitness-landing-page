import React from "react";
import Cards from "./Cards";

export default function PopularSection() {
  return (
    <div className="space-y-12">
      <div className="flex justify-between items-center mt-[11.875rem]">
        <p className="font-semibold text-[35px]">Popular Exercises</p>
        <p className="text-xs uppercase opacity-70">SEE MORE EXERCISES</p>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <Cards />
      </div>
    </div>
  );
}

import React from "react";
import Button from "./Button";

export default function Trainer() {
  return (
    <div className="flex justify-between mt-[11.875rem]">
      <div className="w-5/12">
        <p className="font-semibold z-10 relative text-[120px] tracking-tight leading-[120px]">
          Workout Program Made For You
        </p>
        <img className="relative -left-7 bottom-28" src="/img/art.png" />
      </div>
      <div className="w-5/12 space-y-12">
        <p className="opacity-70 text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur
          adipiscing.
        </p>
        <Button bg="#25ab75">Get Started</Button>
      </div>
    </div>
  );
}

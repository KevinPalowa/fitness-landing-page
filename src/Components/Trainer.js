import React from "react";
import Button from "./Button";

function Profile() {
  return (
    <div className="flex relative h-[700px]">
      <div className="w-3/12">
        <img className="w-full" src="/img/samantha.png" />
        <div className="mt-5">
          <p className="font-medium text-xl">Samantha William</p>
          <p className="opacity-50 text-sm">Trainer</p>
        </div>
      </div>
      <div className="w-3/12 relative top-[192px] lg:top-[256px] xl:top-[320px] 2xl:top-[384px]">
        <img className="w-full" src="/img/karen.png" />
        <div className="mt-5">
          <p className="font-medium text-xl">Karen Summer</p>
          <p className="opacity-50 text-sm">Trainer</p>
        </div>
      </div>
      <div className="w-6/12 -top-[163px] lg:-top-[216px] xl:-top-[270px] 2xl:-top-[324px] relative">
        <img className="w-full" src="/img/jonathan.png" />
        <div className="mt-5 ml-5">
          <p className="font-medium text-xl">Jonathan Wise</p>
          <p className="opacity-50 text-sm">Trainer</p>
        </div>
      </div>
    </div>
  );
}
export default function Trainer() {
  return (
    <>
      <div className="relative mt-[11.875rem] pt-[100px] h-[733px]">
        <div className="flex justify-between ">
          <div className="w-5/12">
            <p className="font-semibold z-10 relative text-[120px] tracking-tight leading-[120px]">
              Workout Program Made For You
            </p>
            <img className="relative -left-7 bottom-28" src="/img/art.png" />
          </div>
          <div className="w-5/12 space-y-12">
            <p className="opacity-70 text-2xl leading-[50px] tracking-[0.5px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              consectetur adipiscing.
            </p>
            <Button bg="#25ab75">Get Started</Button>
          </div>
        </div>
        <div className="bg-white/10 w-full absolute -right-1/4 top-0 h-full overflow-hidden"></div>
      </div>
      <Profile />
    </>
  );
}

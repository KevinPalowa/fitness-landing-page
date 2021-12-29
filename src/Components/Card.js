import React from "react";

export default function Card({ title, duration, calories, img }) {
  return (
    <div className="relative hover:scale-110 transition-all cursor-pointer">
      <img
        alt={title}
        className="w-full object-cover object-top rounded-xl  h-[250px]"
        src={`/img/${img}`}
      />
      <div className="pl-5 z-10 font-semibold flex flex-col w-full relative -top-8 space-y-4">
        <div className="font-semibold flex justify-between w-full">
          <p className="text-5xl">{title}</p>
          <p className="text-xl p-[0.625rem] rounded-2xl bg-black">
            {duration}
          </p>
        </div>
        <p className="opacity-70 text-sm">{calories} est calories</p>
      </div>
      <div
        className="absolute top-0 h-[250px] w-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 80%, #000000 100%)",
        }}
      ></div>
    </div>
  );
}

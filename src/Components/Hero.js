import Button from "./Button";
import Chip from "./Chip";
import NavBar from "./NavBar";

export default function Hero() {
  return (
    <>
      <NavBar />
      <Chip />
      <div className="flex mt-8">
        <p className="font-semibold text-[200px] text-white tracking-tight leading-[10.625rem]">
          Cardio Exercise
        </p>
        <div className="space-y-5">
          <div className="bg-[#1a1a1a] px-7 py-5 rounded-[1.25rem]">
            <p className="text-4xl font-semibold text-[#ffe642]">38:14</p>
            <p className="text-sm">TIME</p>
          </div>
          <div className="bg-[#1a1a1a] px-7 py-5 rounded-[1.25rem]">
            <p className="text-4xl font-semibold text-[#FB1351]">165</p>
            <p className="text-sm">EST Calories</p>
          </div>
        </div>
      </div>
      <img
        className="absolute right-[31px] top-[21px]"
        src="/img/img_ccexpress.png"
      />
      {/* <div className="bg-hero w-full h-[2000px]"></div> */}
      <p className="opacity-70 mt-12 w-5/12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex space-x-7 mt-12">
        <Button bg="#25ab75">Get Started</Button>
        <Button bg="#191919">Preview</Button>
      </div>
    </>
  );
}

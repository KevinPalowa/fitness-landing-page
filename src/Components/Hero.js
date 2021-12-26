import Button from "./Button";
import Chip from "./Chip";
import NavBar from "./NavBar";
import Panel from "./Panel";

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
          <Panel main="38:14" color="#ffe642" secondary="TIME" />
          <Panel main="165" color="#FB1351" secondary="EST Calories" />
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

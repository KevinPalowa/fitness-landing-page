import { ArrowRightIcon } from "@heroicons/react/solid";
export default function Lists() {
  return (
    <div>
      <ol className="divide-y-2 divide-slate-200/40">
        <li className="py-12 flex items-center justify-between">
          <p className="opacity-40 font-semibold text-2xl">01</p>
          <div className="w-6/12">
            <p className="text-[3.125rem]">Workout at Home</p>
            <p className="text-sm opacity-50">15 videos</p>
          </div>
          <ArrowRightIcon className="h-7 w-5" />
        </li>
        <li className="py-12 flex items-center justify-between">
          <p className="opacity-40 font-semibold text-2xl">01</p>
          <div className="w-6/12">
            <p className="text-[3.125rem]">Stay Strong and Fit</p>
            <p className="text-sm opacity-50">45 videos</p>
          </div>
          <ArrowRightIcon className="h-7 w-5" />
        </li>
        <li className="py-12 flex items-center justify-between">
          <p className="opacity-40 font-semibold text-2xl">01</p>
          <div className="w-6/12">
            <p className="text-[3.125rem]">High Intencity</p>
            <p className="text-sm opacity-50">15 videos</p>
          </div>
          <ArrowRightIcon className="h-7 w-5" />
        </li>
      </ol>
    </div>
  );
}

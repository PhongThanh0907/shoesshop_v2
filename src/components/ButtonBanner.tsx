import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

type Props = {};

const ButtonBanner = (props: Props) => {
  return (
    <div className="flex gap-x-2 items-center px-6 py-4 mainColor bg-opacity-90 rounded-[40px] group font-medium relative cursor-pointer">
      <span className="z-10">Shopping Now!!!</span>
      <div className="absolute right-2 w-11 h-11 mainColor-2 bg-opacity-90 rounded-full group-hover:w-full group-hover:right-0 group-hover:h-full group-hover:duration-500 duration-300"></div>
      <div className="z-10 pl-3">
        <ArrowLongRightIcon className="h-4 w-4" />
      </div>
    </div>
  );
};

export default ButtonBanner;

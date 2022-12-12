import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { HeaderMenu } from "../constants/selectOption";
type Props = {};

const Header = (props: Props) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="bg-black">
      <div className="grid grid-cols-3 max-w-7xl mx-auto items-center px-5 lg:px-0 z-40">
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="cursor-pointer relative"
        >
          <div
            className={`${
              openMenu ? "absolute opacity-0 -translate-x-3" : "opacity-100"
            } lg:h-[5px] lg:w-[40px] h-[4px] w-[35px] mainColor  duration-300`}
          />
          <div
            className={`${
              openMenu ? "absolute rotate-45 -top-2" : ""
            } lg:h-[5px] lg:w-[40px] h-[4px] w-[35px] my-2 mainColor opacity-100 duration-300`}
          />
          <div
            className={`${
              openMenu ? "absolute -rotate-45" : ""
            } lg:h-[5px] lg:w-[40px] h-[4px] w-[35px] mainColor opacity-100 duration-300`}
          />
          {openMenu ? (
            <div className="absolute top-12 w-80 lg:w-96 mainColor opacity-100 px-10 -translate-x-6 lg:-translate-x-32 h-60 lg:h-44 p-4 space-y-2 text-lg duration-300 z-50">
              {/* <div className="relative my-3">
                <input
                  type="text"
                  className="h-8 w-60 focus:outline-none px-8 rounded-lg text-white"
                />
                <MagnifyingGlassIcon className="absolute top-1 left-1 h-6 w-6 text-textColor" />
              </div> */}
              {HeaderMenu.map((item) => (
                <h4 className="text-white" key={item.value}>
                  {item.label}
                </h4>
              ))}
            </div>
          ) : (
            <div className="absolute top-12 w-96 mainColor opacity-0 h-60 lg:h-44 -translate-x-[400px] p-4 space-y-2 text-lg duration-300 z-50">
              {HeaderMenu.map((item) => (
                <h4 className="text-white" key={item.value}>
                  {item.label}
                </h4>
              ))}
            </div>
          )}
        </div>

        <div className="mx-auto">
          <img
            className="rounded-full h-24 w-24 lg:h-32 lg:w-32 object-cover"
            src={Logo}
            alt="logo"
          />
        </div>
        <div className="flex gap-8 items-center justify-end">
          <div className="hidden lg:relative lg:inline">
            <input
              type="text"
              className="h-8 w-60 focus:outline-none px-8 mainColor-2 rounded-lg text-white"
            />
            <MagnifyingGlassIcon className="absolute top-1 left-1 h-6 w-6 text-textColor" />
          </div>
          <UserCircleIcon className="h-9 w-9 text-textColor hidden lg:inline" />
          <div className="relative">
            <span className="absolute text-white right-0 px-1 rounded-3xl bg-red-500 top-0">
              0
            </span>
            <ShoppingBagIcon className="h-9 w-9 text-textColor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

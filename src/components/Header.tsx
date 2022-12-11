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
      <div className="grid grid-cols-3 max-w-7xl mx-auto items-center">
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="cursor-pointer relative"
        >
          <div
            className={`${
              openMenu ? "absolute opacity-0 -translate-x-3" : "opacity-100"
            } h-[5px] w-[40px] mainColor  duration-300`}
          />
          <div
            className={`${
              openMenu ? "absolute rotate-45 -top-2" : ""
            } h-[5px] my-2 w-[40px] mainColor opacity-100 duration-300`}
          />
          <div
            className={`${
              openMenu ? "absolute -rotate-45" : ""
            } h-[5px] w-[40px] mainColor opacity-100 duration-300`}
          />
          {openMenu ? (
            <div className="absolute top-16 w-56 mainColor opacity-100 h-44 p-4 space-y-2 text-lg duration-300">
              {HeaderMenu.map((item) => (
                <h4 className="text-white" key={item.value}>
                  {item.label}
                </h4>
              ))}
            </div>
          ) : (
            <div className="absolute w-56 mainColor opacity-0 h-0 -translate-y-20 p-4 space-y-2 text-lg duration-300">
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
            className="rounded-full h-32 w-32 object-cover"
            src={Logo}
            alt="logo"
          />
        </div>
        <div className="flex gap-8 items-center justify-end">
          <div className="relative">
            <input
              type="text"
              className="h-8 w-60 focus:outline-none px-8 mainColor-2 rounded-lg text-white"
            />
            <MagnifyingGlassIcon className="absolute top-1 left-1 h-6 w-6 text-textColor" />
          </div>
          <UserCircleIcon className="h-9 w-9 text-textColor" />
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

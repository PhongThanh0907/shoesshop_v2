import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

import background from "../assets/banner-sale-1.jpg";
import Product from "../assets/sneaker-sale-2.jpg";
import ButtonColor from "./ButtonColor";
import CountDown from "./CountDown";
import Glitch from "./Glitch";
import TextLight from "./TextLight";

type Props = {};

const Promotion = (props: Props) => {
  return (
    <div className="relative h-[500px]">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={background}
        alt="background"
      />
      <div className="bg-black opacity-90 absolute inset-0 w-full h-full" />
      <AnimationOnScroll className="h-full" animateIn="animate__flipInX ">
        <div className="relative z-10 text-white grid grid-cols-2 h-full py-10 max-w-7xl mx-auto gap-10">
          <div className="flex  justify-center">
            <Glitch title={"BEST DEAL IN DAY"} />
            <div className="py-20 text-center">
              <CountDown hours={1} minutes={50} seconds={10} />
              <p className="text-xl font-semibold my-2">SALE 35%</p>
              <TextLight title="NIKE AIR MAX ULTRA" />
              <p className="text-red-600 text-3xl font-bold my-2">1,900,000đ</p>
              <p className="line-through py-4">2,400,000đ</p>
              <Link to="/product">
                <ButtonColor name="Buy Now" id="" />
              </Link>
            </div>
          </div>
          <div>
            <div className="">
              <img className="rounded-lg" src={Product} alt="img" />
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Promotion;

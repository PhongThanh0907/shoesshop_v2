import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

import { listTypeProudct } from "../constants/selectOption";
import background from "../assets/background.webp";
import { Link } from "react-router-dom";

type Props = {};

const TypeProduct = (props: Props) => {
  return (
    <div className="relative h-[400px] py-6">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={background}
        alt=""
      />
      <AnimationOnScroll animateIn="animate__bounceIn">
        <div className="grid grid-cols-4 z-10 text-lightBlue relative">
          {listTypeProudct.map((item) => (
            <Link to="/product">
              <div
                className="h-80 relative custom-item group cursor-pointer"
                key={item.value}
              >
                <img className="h-full object-cover" src={item.img} alt="img" />
                <div className="brand-style group-hover:opacity-100 text-3xl">
                  <h1>{item.label}</h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default TypeProduct;

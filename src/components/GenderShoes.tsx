import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Man from "../assets/men.jpg";
import Woman from "../assets/women.jpg";
import ButtonColor from "./ButtonColor";

type Props = {};

const GenderShoes = (props: Props) => {
  return (
    <div className="bg-white py-16">
      <div className="grid grid-cols-2 gap-16">
        <AnimationOnScroll animateIn="animate__lightSpeedInLeft">
          <div className="relative">
            <img className="rounded-tr-[60px]" src={Man} alt="" />
            <div className="absolute inset-0 flex items-center justify-center">
              <ButtonColor name="MEN" id="#" />
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__lightSpeedInRight">
          <div className="relative">
            <img className="rounded-bl-[60px]" src={Woman} alt="" />
            <div className="absolute inset-0  flex items-center justify-center">
              <ButtonColor name="WOMEN" id="#" />
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default GenderShoes;

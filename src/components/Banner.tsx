import React, { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

import ButtonBanner from "./ButtonBanner";
import background from "../assets/background.webp";
import { ListImageBanner } from "../constants/selectOption";

type Props = {};

const Banner = (props: Props) => {
  const [changeImage, setChangeImage] = useState<number>(1);
  const [text] = useTypewriter({
    words: ["Just Do It", "Let's Run", "Best Choice"],
    loop: 0,
    delaySpeed: 2000,
  });
  return (
    <AnimationOnScroll animateIn="animate__backInDown">
      <div className="relative h-[550px] lg:h-[700px]">
        <img
          className="absolute w-full object-cover h-full"
          src={background}
          alt=""
        />

        <div className="relative h-full grid lg:grid-cols-2 lg:pt-36 z-0 lg:px-20">
          <h3 className="absolute top-40 lg:top-72 left-2/4 -translate-x-2/4 -translate-y-2/4 text-[150px] lg:text-[400px] font-semibold text-blue-800 text-opacity-30">
            NIKE
          </h3>
          <div className="w-full h-full top-44 lg:-top-10  items-center mx-auto flex flex-col absolute lg:relative lg:items-start justify-center text-white z-10">
            <div className="text-3xl lg:text-[80px] hidden lg:inline">
              <span className=" font-semibold h-24">{text}</span>
              <Cursor cursorColor="#BF40BF" />
            </div>
            <p className="my-4 lg:my-8">
              You'll be amazed to find the best price shoes
            </p>
            <div className="">
              <ButtonBanner />
            </div>
          </div>
          <div className="w-full absolute gap-10 -top-28 lg:relative flex lg:flex-col lg:gap-y-14 items-end justify-center z-10">
            {ListImageBanner.map((item) => (
              <img
                onClick={() => setChangeImage(item.value)}
                className="lg:w-20 lg:h-20 w-16 h-16  cursor-pointer hover:scale-110 transition-all hover:rotate-45 duration-300"
                key={item.value}
                src={item.img}
                alt="img"
              />
            ))}
          </div>
          <div className="absolute -top-56 lg:top-32 flex items-center justify-center w-full">
            <img
              className="z-10 w-[52%] lg:w-[20%] lg:h-[20%] transition-all animation-banner"
              src={ListImageBanner.find((c) => c.value === changeImage)?.img}
              alt="img1"
            />
          </div>
          <div className="circle-effect h-[320px] w-[320px] lg:h-[480px] lg:w-[480px] top-44 lg:top-72"></div>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Banner;

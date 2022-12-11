import React from "react";
import ButtonBanner from "./ButtonBanner";
import Sneaker01 from "../assets/sneaker1.png";
import Sneaker02 from "../assets/sneaker2.png";
import Sneaker03 from "../assets/sneaker3.png";
import background from "../assets/background.webp";

type Props = {};

const Banner = (props: Props) => {
  const listImage = [Sneaker01, Sneaker02, Sneaker03];
  return (
    <div className="relative h-[700px]">
      <img
        className="absolute w-full object-cover h-full"
        src={background}
        alt=""
      />

      <div className="relative grid grid-cols-2 pt-20 z-0 px-20">
        <h3 className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-[400px] font-semibold text-blue-800 text-opacity-30">
          NIKE
        </h3>
        <div className="w-full h-full flex flex-col  items-start justify-center text-white z-10">
          <h3 className="text-[80px] font-semibold ">
            LET'S <br /> RUN
          </h3>
          <p className="my-8">You'll be amazed to find the best price shoes</p>
          <ButtonBanner />
        </div>
        <div className="py-5 w-full h-full flex flex-col lg:gap-y-[60px] md:gap-y-[40px] gap-y-[15px] items-end justify-center max-md:justify-end text-white z-10">
          {listImage.map((item, index) => (
            <img
              className="lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] sm:w-[70px] sm:h-[70px] w-[65px] h-[65px] cursor-pointer hover:scale-110 transition-all sweezy-custom-cursor-hover"
              key={index}
              src={item}
              alt="img"
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center w-full banner-product">
          <img
            className="lg:w-[32%] md:w-[35%] sm:w-[40%] w-[60%] z-10 transition-all banner-product-img"
            src={Sneaker01}
            alt="img1"
          />
        </div>
        <div className="circle-effect"></div>
      </div>
    </div>
  );
};

export default Banner;

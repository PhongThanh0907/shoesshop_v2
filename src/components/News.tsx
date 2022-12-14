import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { listNewPage } from "../constants/selectOption";

type Props = {};

const News = (props: Props) => {
  return (
    <div className="py-20">
      <AnimationOnScroll animateIn="animate__fadeInTopRight">
        <h1 className="text-white text-[50px] text-center my-10">Tin Tức</h1>
        <div className="text-white grid grid-cols-4 gap-4">
          {listNewPage.map((item) => (
            <div className="">
              <div className="box-zoom-transfer overflow-hidden relative rounded-lg">
                <img
                  className="h-64 w-full object-cover hover:scale-125 transition-all duration-500 hover:rotate-6 rounded-xl hover:rounded-xl"
                  src={item.img}
                  alt=""
                />
              </div>
              <div>
                <p className="text-sm text-gray-400">{item.timeLine}</p>
                <h4 className="my-2">{item.label}</h4>
              </div>
            </div>
          ))}
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default News;

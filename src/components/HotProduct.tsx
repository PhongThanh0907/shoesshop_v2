import React, { useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

import { Product } from "../interfaces/Product";
import sneakerAPI from "../features/product/productAPI";
import ItemProduct from "./ItemProduct";
import { Link } from "react-router-dom";

type Props = {};

const HotProduct = (props: Props) => {
  const [productList, setProductList] = useState<Product[]>([]);

  const getListProduct = async () => {
    const res = await sneakerAPI.getSneakerList();
    setProductList(res);
  };

  useEffect(() => {
    getListProduct();
  }, []);

  return (
    <div className="text-white py-20 px-10">
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className="grid grid-cols-4 gap-8">
          {productList.slice(8, 12).map((item) => (
            <div
              className={`${
                item.id === 9 || item.id === 11
                  ? "animationUp"
                  : "animationDown"
              } cursor-pointer`}
            >
              <div className="box-zoom-transfer overflow-hidden relative rounded-lg">
                <img
                  className="w-full h-[350px] object-cover rounded-lg  hover:scale-125 transition-all duration-500 hover:rotate-6 hover:rounded-xl"
                  src={item.image}
                  alt="img"
                />
              </div>

              <div className="mx-4">
                <h1 className="text-xl truncate text-textColor font-bold my-2">
                  {item.nameProduct}
                </h1>
                <p className="py-1 text-lg font-semibold">
                  {item.priceProduct.toLocaleString("vn-VN")}đ
                </p>
                <div className="text-right">
                  <Link to="/product">
                    <button className="mainColor py-2 px-8 rounded-3xl text-lightBlue font-semibold my-4">
                      Buy Now!!!
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default HotProduct;

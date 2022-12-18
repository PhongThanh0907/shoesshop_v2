import React, { useEffect, useState } from "react";

import Background from "../../assets/background.webp";
import Icon from "../../assets/icon.gif";
import ItemProduct from "../../components/ItemProduct";
import sneakerAPI from "../../features/product/productAPI";
import { Product } from "../../interfaces/Product";
type Props = {};

const ProductPage = (props: Props) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);

  const getListProduct = async () => {
    const res = await sneakerAPI.getSneakerList();
    setProductList(res);
  };

  useEffect(() => {
    getListProduct();
  }, []);
  return (
    <div className="relative h-[1650px]">
      <img className="h-full" src={Background} alt="background" />
      <div className="absolute inset-0 my-10">
        <div className="relative overflow-hidden h-60 group">
          <img
            className="object-cover h-full w-full"
            src="https://allgoodtales.com/wp-content/uploads/2018/10/Nike-Header-min.jpg"
            alt="logo"
          />
          <div className="absolute w-[20%] h-full top-0 left-[50%] skew-x-[45deg] bottom-0 bg-white banner-left group-hover:-left-32 group-hover:opacity-20 opacity-0"></div>
          <div className="absolute w-[20%] h-full top-0 right-[50%] skew-x-[45deg] bottom-0 bg-white banner-right group-hover:-right-32 group-hover:opacity-20 opacity-0"></div>
          <img
            className="absolute top-10 bottom-10 h-[60%] left-10"
            src={Icon}
            alt=""
          />
        </div>

        <h1 className="pt-20 pb-10 text-center text-3xl text-textColor font-bold">
          New Sneaker
        </h1>
        <div>
          <div></div>
          <div className="grid grid-cols-4 px-16 gap-8">
            {productList
              ?.slice((page - 1) * pageSize, page * pageSize)
              .map((item, index) => (
                <ItemProduct key={index} item={item} />
              ))}
          </div>
          <div className="flex justify-center items-center mt-10 gap-8">
            {Array(Math.ceil(productList.length / pageSize))
              .fill(0)
              .map((_, i) => (
                <span
                  key={i}
                  className={`${
                    i + 1 === page
                      ? "mainColor text-white"
                      : "text-white border"
                  }  hover:border-blue-400 p-1 px-2 rounded text-base mx-1 cursor-pointer`}
                  onClick={() => {
                    setPage(i + 1);
                  }}
                >
                  {i + 1}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

import React from "react";
import { Product } from "../interfaces/Product";

interface Props {
  item: Product;
}

const ItemProduct = ({ item }: Props) => {
  console.log(item);
  return (
    <div className={`cursor-pointer border border-gray-400 rounded-lg`}>
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
          <button className="mainColor py-2 px-8 rounded-3xl text-lightBlue font-semibold my-4">
            Buy Now!!!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;

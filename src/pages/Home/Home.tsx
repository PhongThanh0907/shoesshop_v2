import React from "react";
import Banner from "../../components/Banner";
import GenderShoes from "../../components/GenderShoes";
import News from "../../components/News";
import Promotion from "../../components/Promotion";
import TypeProduct from "../../components/TypeProduct";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="bg-black">
      <Banner />
      <TypeProduct />
      <GenderShoes />
      <Promotion />
      <News />
    </div>
  );
};

export default Home;

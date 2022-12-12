import React from "react";
import Banner from "../../components/Banner";
import TypeProduct from "../../components/TypeProduct";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Banner />
      <TypeProduct />
    </>
  );
};

export default Home;

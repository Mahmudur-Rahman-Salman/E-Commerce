import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Categories from "../../components/Categories/Categories";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";
import BestSelling from "../../components/BestSelling/BestSelling";
import Offers from "../../components/Offers/Offers";

const Home = () => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <Categories></Categories>
      <Offers></Offers>
      <FeatureProducts></FeatureProducts>
      <BestSelling></BestSelling>
    </>
  );
};

export default Home;

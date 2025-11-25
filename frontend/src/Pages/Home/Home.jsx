import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Categories from "../../components/Categories/Categories";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";
import BestSelling from "../../components/BestSelling/BestSelling";


const Home = () => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <Categories></Categories>
      <FeatureProducts></FeatureProducts>
      <BestSelling></BestSelling>
    </>
  );
};

export default Home;

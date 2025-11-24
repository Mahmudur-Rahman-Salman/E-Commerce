import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Categories from "../../components/Categories/Categories";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";


const Home = () => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <Categories></Categories>
      <FeatureProducts></FeatureProducts>
    </>
  );
};

export default Home;

import React, { useState } from "react";
import Cover from "../components/Cover";
import FeatureProductList from "../components/FeatureProductList";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";





function Home() {

  return (
    <div>
      <Cover />
      <FeatureProductList/>
      <Categories/>
      <Newsletter/>
    </div>
  );
}

export default Home;

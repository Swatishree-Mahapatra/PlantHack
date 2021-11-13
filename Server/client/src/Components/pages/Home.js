import React from "react";
import Hero from "./Hero";
import Store from "./Store";
import { productData} from './Store/data';


const Home = () => {
  return (
    <>
    <Hero />
    <Store heading='WELCOME to our Mini Store!' data={productData} />
    </>
  );
};

export default Home;

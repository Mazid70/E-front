import React from "react";
import Navone from "../Component/Navone";
import SearchBox from "../Component/SearchBox";
import Banner from "../Component/Banner";
import Navtwo from "../Component/Navtwo";
import Cards from "../Component/Cards";

const Home = () => {
  return (
    <main className="">
      <Navone />
   
      <div className="w-3/5 mx-auto">
      <SearchBox />
      </div>
      <Navtwo />
      <div className="w-3/5 mx-auto">
    <Banner />
    <Cards/>
      </div>
     
      
    </main>
  );
};

export default Home;

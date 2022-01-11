import React from "react";
/* import { NavLink } from "react-router-dom"; */
import home1 from "../src/images/home1.png";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={home1}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;

import React from "react";
/* import { NavLink } from "react-router-dom"; */
import ser from "../src/images/ser.png";

import Common from "./Common";
const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={ser}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default About;

import React from "react";
import About from "./About";
import AllServices from "./AllServices";
import Contact from "./Contact";
// import Footer from './Footer'
import Home from "./Home";

const Homepage = () => {
  return (
    <div>
      <Home />
      <About />
      <AllServices />
      <Contact />
      {/* <Footer/> */}
    </div>
  );
};

export default Homepage;

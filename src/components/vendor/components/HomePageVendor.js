import React from "react";
import About from "../../About";
import AllServices from "../../AllServices";
import Contact from "../../Contact";
import VendorHome from "./VendorHome";

function HomePageVendor() {
  return (
    <div>
      <VendorHome />
      <About />
      <AllServices />
      <Contact />
    </div>
  );
}

export default HomePageVendor;

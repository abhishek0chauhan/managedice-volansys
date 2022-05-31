import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import Userprofile from "./components/Userprofile";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import SignupVendor from "./components/vendor/components/SignupVendor";
// import EditUserProfile from "./components/EditUserProfile";
import AllServices from "./components/AllServices";
import Homepage from "./components/Homepage";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VendorHome from "./components/vendor/components/VendorHome";
import LoginVendor from "./components/vendor/components/LoginVendor";
import HomePageVendor from "./components/vendor/components/HomePageVendor";
import ServiceVendorForm from "./components/vendor/components/ServiceVendorForm";
import Birthday from "./components/Birthday";
import IndividualServiceCard from "./components/IndividualServiceCard";
import PackageComponent from "./components/PackageComponent";
import SubServiceMainCard from "./components/SubServiceMainCard";
import CakePage from "./components/CakePage";
import Cart from "./components/Cart";
import UserOrder from "./components/UserOrder";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignupVendor" element={<SignupVendor />} />
        {/* <Route path="/Userprofile" element={<Userprofile />} /> */}
        {/* <Route path="/EditUserProfile" element={<EditUserProfile />}/> */}
        <Route path="/AllServices" element={<AllServices />} />
        <Route path="/VendorHome" element={<VendorHome />} />
        <Route path="/LoginVendor" element={<LoginVendor />} />
        <Route path="/HomePageVendor" element={<HomePageVendor />} />
        <Route path="/ServiceVendorForm" element={<ServiceVendorForm />} />
        <Route path="/Birthday" element={<Birthday />} />
        <Route
          path="/IndividualServiceCard"
          element={<IndividualServiceCard />}
        />
        <Route path="/PackageComponent" element={<PackageComponent />} />
        <Route path="/SubServiceMainCard" element={<SubServiceMainCard />} />
        <Route path="/cakepage" element={<CakePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/userorder" element={<UserOrder />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

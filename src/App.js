import React from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import Userprofile from "./components/Userprofile";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
// import SignupVendor from "./components/vendor/components/SignupVendor";
// import EditUserProfile from "./components/EditUserProfile";
import AllServices from "./components/AllServices";
import Homepage from "./components/Homepage";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
        {/* <Route path="/SignupVendor" element={<SignupVendor />} /> */}
        {/* <Route path="/Userprofile" element={<Userprofile />} /> */}
        {/* <Route path="/EditUserProfile" element={<EditUserProfile />}/> */}
        <Route path="/AllServices" element={<AllServices />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

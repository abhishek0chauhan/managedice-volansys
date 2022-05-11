import React from "react";
import aboutImg from "../images/about.svg";
import "./Css/About.css"

const About = () => {
  return(
    <div id="about" className="container about-container" data-aos="fade-right">
      <div className="row">
        <div className="col-sm">
          <div>
            <h1 className="aboutH1">About</h1>
          </div>
          <div>
            <p className="aboutFirstletter">
              ManageDice is your one-stop destination for an event planner and
              management coordination. We take the headache out of trying to
              choose professionals, developing an event that everyone will
              remember. Creating Extraordinary events is our specialty.
              ManageDice delivers resonance to the wow factor while saving our
              clients valuable time and money.
            </p>
          </div>
        </div>
        <div className="col-sm">
          <img className="aboutImg" src={aboutImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;

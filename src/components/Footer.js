import React from "react";
import "./Css/Footer.css";
import { Link as ReactLink } from "react-router-dom";

function Footer() {
  const handleReload = () => {
    localStorage.setItem("vendor", true);
    window.localStorage.reload();
  };

  return (
    <footer>
      <div class="footer-wrap">
        <div class="second_class">
          <div class="container second_class_bdr">
            <div class="row">
              <div class="col-md-4 col-sm-6">
                <div class="footer-logo">
                  <h1 className="managedice-logo-footer">
                    Manage<i class="fas fa-dice"></i>
                  </h1>
                </div>
                <p>
                  ManageDice is your one-stop destination for an event planner
                  and management coordination. We take the headache out of
                  trying to choose professionals, developing an event that
                  everyone will remember. Creating Extraordinary events is our
                  specialty. ManageDice delivers resonance to the wow factor
                  while saving our clients valuable time and money.
                </p>
              </div>
              <div class="col-md-2 col-sm-6">
                <h3>Quick LInks</h3>
                <ul class="footer-links">
                  <li>
                    <ReactLink to="/">Home</ReactLink>
                  </li>
                  <li>
                    <ReactLink to="/about">About us</ReactLink>
                  </li>
                  <li>
                    <ReactLink to="/contactus">Contact Us</ReactLink>
                  </li>
                  <li>
                    <ReactLink
                      onClick={() => handleReload()}
                      to="/HomePageVendor"
                    >
                      Vendor Page
                    </ReactLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="container-fluid">
            <div class="copyright">
              {" "}
              Copyright 2022 | All Rights Reserved by ManageDice Pvt. Ltd.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

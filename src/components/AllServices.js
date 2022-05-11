import React, { useEffect } from "react";
import "./Css/AllServices.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Service from "./Services";
import { Link } from "react-router-dom";
import BirthdayImg from "../images/birthday.jpg";
import venueBooking from "../images/venueBooking.jpg";
import workshop from "../images/workshop.jpg";
import seminar from "../images/seminar.jpg";
import promotionalEvent from "../images/promotionalEvent.jpg";
import wedding from "../images/wedding.jpg";

function AllServices() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="services" class="service-container" data-aos="fade-right">
      <div class="container">
        <div class="row">
          <div class="col">
            <div>
              <h1 className="serviceH1">Services</h1>
            </div>
            <div>
              <h2 className="serviceFirstletter">
                Event services we offer
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div class="service-item-container">
        <div class="service-item">
          <Link to="/services/birthday">
            <Service
              serviceName="Birthday"
              status="New"
              styless="success"
              serviceImg={BirthdayImg}
            />
          </Link>
        </div>
        <div class="service-item">

            <Service
              serviceName="Venue Booking"
              status="Coming Soon"
              styless="danger"
              serviceImg={venueBooking}
            />
          
        </div>
        <div class="service-item">
          <Service
            serviceName="Workshop"
            status="Coming Soon"
            styless="danger"
            serviceImg={workshop}
          />
        </div>
        <div class="service-item">
          <Service
            serviceName="Seminar"
            status="Coming Soon"
            styless="danger"
            serviceImg={seminar}
          />
        </div>
        <div class="service-item">
          <Service
            serviceName="Promotional Event"
            status="Coming Soon"
            styless="danger"
            serviceImg={promotionalEvent}
          />
        </div>
        <div class="service-item">
          <Service
            serviceName="Wedding"
            status="Coming Soon"
            styless="danger"
            serviceImg={wedding}
          />
        </div>
      </div>
    </div>
  );
}

export default AllServices;

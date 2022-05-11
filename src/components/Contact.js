import React, { useEffect } from "react";
import "./Css/Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div id="contact" class="contact-container" data-aos="fade-right">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div>
                                <h1 className="contactH1">Contact Us</h1>
                            </div>
                            <div>
                                <p className="contactFirstletter">
                                    Plan A Event In Surat and Vadodara
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-flex-container">
                    <div className="contact-child-container">
                        <h1>
                            Call Us <i class="fas fa-phone-alt"></i>
                        </h1>
                        <h4>
                            <a href="tel:+919879081819">+91 9879081819</a>
                        </h4>
                        <h4>
                            <a href="tel:+919714348649">+91 9714348649</a>
                        </h4>
                    </div>
                    <div className="contact-child-container">
                        <ul>
                            <li>
                                First company to provide event planning & management at one place.
                            </li>
                            <li>
                                Explore, customize and choose packages as per your convenient.
                            </li>
                            <li>Track your ongoing event progress.</li>
                            <li>Never have a bad event.</li>
                        </ul>
                    </div>
                </div>
                <div class="ocean">
                    <div class="wave"></div>
                    <div class="wave"></div>
                </div>
            </div>

        </>
    );
}

export default Contact;

import React from "react";
import "./Css/Home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Home = () => {

  
  const onScrollMainPage = () => {
    window.scrollTo(0, 750);
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="backgroundImg home" data-aos="zoom-in">
      <div className="flex-item flex-item-1">
        <p>ManageDice</p>
      </div>
      <div className="flex-item flex-item-2">
        <p>Never have a bad event</p>
        <hr />
      </div>
      <div className="flex-item flex-item-3">
        Plan your event with ManageDice
      </div>
      <div
        className="flex-item flex-item-4 scrollIcon"
        onClick={onScrollMainPage}
      >
        {/* <Link className="topLinks" to="about" spy={true} smooth={true}>
      <div className="scrollIcon"></div>
      </Link> */}
      </div>
    </div>
  );
};

export default Home;

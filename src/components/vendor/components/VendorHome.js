import React from "react";
import "../../Css/VendorHome.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AllServices from "../../AllServices";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function VendorHome() {
  const navigate = useNavigate();
  localStorage.setItem("vendor", true);
  const onScrollMainPage = () => {
    window.scrollTo(0, 750);
  };

  const navigationService = () => {
    navigate(<AllServices />);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
    // window.location.reload(1);
  }, []);
  return (
    <div className="backgroundImg1 home" data-aos="zoom-in">
      <div className="flex-item flex-item-11">
        <p>ManageDice</p>
      </div>
      <div className="flex-item flex-item-21">
        <p>Never have a bad event</p>
        <hr />
      </div>
      <div className="flex-item flex-item-31">
        Provide your services on ManageDice
      </div>
      <button class="btn btn-vendor" onClick={() => navigationService()}>
        Find what you can provide to our users?
      </button>
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
}

export default VendorHome;

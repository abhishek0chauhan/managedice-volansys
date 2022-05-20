import React, { useEffect, useState } from "react";
import "./Css/CakePage.css";
// import SubServiceMainCard from "../SubServiceMainCard/SubServiceMainCard";
import SubServiceMainCard from "./SubServiceMainCard";
import IndividualServiceCard from "./IndividualServiceCard";
// import PackageComponent from "./PackageComponent";
// import DatePicker from "react-datepicker";
// import subDays from "date-fns/subDays";
import "react-datepicker/dist/react-datepicker.css";
// import cake from "../images/birthday/cake.jpg";
// import catering from "../images/birthday/catering.jpg";
// import decoration from "../images/birthday/decoration.jpg";
// import dj from "../images/birthday/dj.jpg";
// import invitation from "../images/birthday/invitation.jpg";
// import photography from "../images/birthday/photography.jpg";
// import venue from "../images/birthday/venue.jpg";
// import {Link } from "react-router-dom"

function CakePage() {
  const service_array = [];
  //   const [price, setPrice] = useState("");
  //   const [Total, setTotal] = useState(0);
  const [service, setService] = useState("");
  const [price, setPrice] = useState("");
  //   const [startDate, setStartDate] = useState(null);
  //   const [basicPackage] = useState(["Cake", "Decoration"]);
  //   const [standardPackage] = useState(["Cake", "Decoration", "Food"]);
  //   const [plusPackage] = useState(["Cake", "Decoration", "Food", "DJ"]);

  //   const calculateTotal = (input, checked) => {
  //     let total = Total;
  //     if (checked) {
  //       total += input;
  //     } else {
  //       total -= input;
  //     }
  //     setTotal(total);
  //   };

  useEffect(() => {
    fetch(`http://localhost:5000/vendorservice/all`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // setUser(data);
        console.log(data);
        setService(data);
        // console.log(data[3].servicee[0].service_price);
        // setPrice(data[0].servicee[0].service_price);
      });
  }, []);

  const handlePrice = () => {
    setPrice();
  };

  for (let item = 0; item < service.length; item++) {
    const element = service[item];
    // service_array.push(element);
    let name_service = element.servicee[0].service_name;
    // console.log("name_service", name_service);
    // console.log(name_service);
    // name_service = toLowerCase(name_service);
    // console.log(element);
    if (name_service == "cake" || name_service == "Cake") {
      //   localStorage.setItem("service_name", "cake");
      console.log(element.servicee[0].service_name);
      service_array.push(element);
    }
  }

  console.log(service_array);
  //   console.log(user[0].servicee[0]);

  return (
    <>
      <div className="birthday-body">
        <SubServiceMainCard
          serviceName="Cake"
          serviceImg="https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
      <div class="containerr">
        <div className="row orderSummaryCardd">
          <div className="col-sm-8">
            {/* <IndividualServiceCard
              IndividualServiceName="Birthday Cake ₹300 for 0.5KG"
              value={300}
              id="s1"
              calculate={calculateTotal}
            />
            <IndividualServiceCard
              IndividualServiceName="Decoration"
              value={5}
              calculate={calculateTotal}
              id="s2"
            />
            <IndividualServiceCard
              IndividualServiceName="Birthday Cake3"
              value={5}
              calculate={calculateTotal}
              id="s3"
            />
            <IndividualServiceCard
              IndividualServiceName="Birthday Cake4"
              value={5}
              calculate={calculateTotal}
              id="s4"
            />
            <IndividualServiceCard
              IndividualServiceName="Birthday Cake5"
              value={5}
              calculate={calculateTotal}
              id="s5"
            />
            <IndividualServiceCard
              IndividualServiceName="Birthday Cake6"
              value={5}
              calculate={calculateTotal}
              id="s6"
            /> */}

            {service_array.map((item) => (
              <div class="row">
                <div class="col-sm" style={{ cursor: "pointer" }}>
                  <IndividualServiceCard
                    subServiceImage={item.servicee[0].service_image}
                    subServiceName={item.servicee[0].service_name}
                    cost={item.servicee[0].service_price}
                  />
                </div>
              </div>
            ))}
          </div>
          <br />
        </div>
      </div>
      <hr />
    </>
  );
}

export default CakePage;

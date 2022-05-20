import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Css/Birthday.css";
// import SubServiceMainCard from "../SubServiceMainCard/SubServiceMainCard";
import SubServiceMainCard from "./SubServiceMainCard";
import IndividualServiceCard from "./IndividualServiceCard";
import PackageComponent from "./PackageComponent";
import DatePicker from "react-datepicker";
import subDays from "date-fns/subDays";
import "react-datepicker/dist/react-datepicker.css";
import cake from "../images/birthday/cake.jpg";
import catering from "../images/birthday/catering.jpg";
import decoration from "../images/birthday/decoration.jpg";
import dj from "../images/birthday/dj.jpg";
import invitation from "../images/birthday/invitation.jpg";
import photography from "../images/birthday/photography.jpg";
import venue from "../images/birthday/venue.jpg";
// import {Link } from "react-router-dom"

function Birthday() {
  const [price, setPrice] = useState("");
  const [Total, setTotal] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [basicPackage] = useState(["Cake", "Decoration"]);
  const [standardPackage] = useState(["Cake", "Decoration", "Food"]);
  const [plusPackage] = useState(["Cake", "Decoration", "Food", "DJ"]);

  const calculateTotal = (input, checked) => {
    let total = Total;
    if (checked) {
      total += input;
    } else {
      total -= input;
    }
    setTotal(total);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/vendorservices`, {
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
        // console.log(data[3].servicee[0].service_price);
        setPrice(data[0].servicee[0].service_price);
      });
  }, []);
  //   console.log(user[0].servicee[0]);

  return (
    <div className="birthday-body">
      <SubServiceMainCard
        serviceName="Birthday"
        serviceImg="https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      <div class="container">
        <div className="row orderSummaryCard">
          <div className="col-sm-8">
            <label for="city">Choose a City</label>
            <div class="select">
              <select name="city" id="city">
                <option value="vadodara">Vadodara, Gujarat</option>
                <option value="surat">Surat, Gujarat</option>
              </select>
            </div>
          </div>
          <div className="col-sm-4">
            <label for="birthdate">Choose event date</label>
            <DatePicker
              selected={startDate}
              dateFormat="dd-MM-yyyy"
              onChange={(date) => setStartDate(date)}
              minDate={subDays(new Date(), -10)}
              placeholderText="Select a Birthdate"
              className="myDatePicker"
            />
          </div>
        </div>

        <div className="row orderSummaryCard">
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

            <div class="row">
              <div class="col-sm" style={{ cursor: "pointer" }}>
                <Link to="/cakepage">
                  <IndividualServiceCard
                    subServiceImage={cake}
                    subServiceName="Cake"
                    cost={price}
                  />
                </Link>
              </div>
              <div class="col-sm" style={{ cursor: "pointer" }}>
                <IndividualServiceCard
                  subServiceImage={decoration}
                  subServiceName="Decoration"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-sm" style={{ cursor: "pointer" }}>
                <IndividualServiceCard
                  subServiceImage={catering}
                  subServiceName="Catering"
                />
              </div>
              <div class="col-sm" style={{ cursor: "pointer" }}>
                <IndividualServiceCard
                  subServiceImage={venue}
                  subServiceName="Venue"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-sm" style={{ cursor: "pointer" }}>
                <IndividualServiceCard
                  subServiceImage={dj}
                  subServiceName="Dj"
                />
              </div>
              <div class="col-sm" style={{ cursor: "pointer" }}>
                <IndividualServiceCard
                  subServiceImage={photography}
                  subServiceName="Photography"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6" style={{ cursor: "pointer" }}>
                <IndividualServiceCard
                  subServiceImage={invitation}
                  subServiceName="Invitation"
                  cost="Free"
                />
              </div>
            </div>
          </div>
          <br />
          <div className="col-sm-4" style={{ marginTop: "30px" }}>
            <div class="card positionSticky" style={{ width: "auto" }}>
              <div class="card-body">
                <p class="card-text">Order Summary</p>
                <hr />
                <h4></h4>
                <h1>Total ₹{Total}</h1>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="orDivide">OR</div>
        <hr />
        <PackageComponent
          basic={basicPackage}
          standard={standardPackage}
          plus={plusPackage}
          basicPrice="100"
          standardPrice="500"
          plusPrice="1000"
        />
      </div>
      {/* <h1>{user.vendor_id}h</h1> */}
    </div>
  );
}

export default Birthday;

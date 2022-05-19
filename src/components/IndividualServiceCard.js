import React, { useState, useEffect } from "react";
import "./Css/IndividualCard.css";
// import cake from "../../../images/Birthday/cake.jpg";

function IndividualServiceCard(props) {
  // const [checked, setChecked] = useState(false);
  const [didLoad, setLoad] = useState(false);

  const style = didLoad ? {} : { visibility: "hidden" };

  return (
    <div>
      <div class="row mt-4">
        <div class="col">
          {/* <div class="jumbotron"> */}
          {/* <label>
              <input
                type="checkbox"
                value={checked}
                onClick={() => {
                    setChecked(!checked)

                  props.calculate(props.value, !checked);
                }}
                name="demo"
                class="card-input-element d-none"
                id={props.id}
              />
              <div class="card card-body bg-light d-flex flex-row justify-content-between align-items-center">
                {props.IndividualServiceName}
              </div>
            </label> */}
          {/* <div className="serviceCard"> */}
          <div class="outer">
            <div class="inner">
              <img
                src={props.subServiceImage}
                alt="Birthday services"
                style={style}
                loading="lazy"
                onLoad={() => {
                  setLoad(true);
                }}
              />
            </div>
            <div class="item">
              <div class="item-name">
                <h4>{props.subServiceName}</h4>
                <p>New</p>
              </div>
              <div class="item-price">
                <p>&#8377; {props.cost}</p>
                <div class="rating">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>

          {/* </div> */}

          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default IndividualServiceCard;

import React from "react";
import "./Css/AllServices.css";


function Service(props) {
  return (
    <div>
      <div class="card" style={{ width: "15rem" }}>
        <img src={props.serviceImg} class="card-img-top" alt="..." loading="lazy" />
        <div class="card-body">
          <h5 class="card-title" style={{color: "black"}}>{props.serviceName}
          <span class={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${props.styless}`} style={{fontSize: "10px"}}>{props.status}</span>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Service;

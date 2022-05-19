import React from "react";
// import { propTypes } from "react-bootstrap/esm/Image";
import "./Css/PackageComponent.css";

function PackageComponent(props) {
  return (
    <div>
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="card bg-success mb-5 mb-lg-0 rounded-lg shadow">
                <div class="card-header">
                  <h5 class="card-title text-white-50 text-uppercase text-center">
                    Basic
                  </h5>
                  <h6 class="h1 text-white text-center">
                    ₹ {props.basicPrice}
                  </h6>
                </div>
                <div class="card-body bg-light rounded-bottom">
                  <ul class="list-unstyled mb-4">
                    {props.basic.map((item) => {
                      return (
                        <li class="mb-3">
                          <span class="mr-3">
                            <i class="fas fa-check text-success"></i>
                          </span>
                          &nbsp;&nbsp;{item}
                        </li>
                      );
                    })}
                  </ul>
                  <a
                    href="#"
                    class="btn btn-block btn-primary text-uppercase rounded-lg py-3"
                  >
                    Buy now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card bg-warning mb-5 mb-lg-0 rounded-lg shadow">
                <div class="card-header">
                  <h5 class="card-title text-white-50 text-uppercase text-center">
                    Standard
                  </h5>
                  <h6 class="h1 text-white text-center">
                    ₹ {props.standardPrice}
                    {/* <span clas<>
      <section style={{ backgroundColor: "#E4EFE7" }}>
        <div className="card mb-4" style={{backgroundColor: "#E4EFE7"}}>
          <div className="card-body text-center">
            <h5 className="my-3">{user.first_name + " " + user.last_name}</h5>
            <p className="text-muted mb-4">{user.address}</p>
            <div className="d-flex justify-content-center mb-2">
              <button type="button" className="btn btn-outline-primary ms-1">
                edit
              </button>
            </div>
          </div>
        </div>

        <div className="card-body" >
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0 ">User Name</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{user.username}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0 ">First Name</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{user.first_name}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0 ">Last Name</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{user.last_name}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Email</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{user.email}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Phone</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">(097) 234-5678</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Address</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{user.address}</p>
            </div>
          </div>
        </div>
      </section>
    </>s="h6 text-white-50">/month</span> */}
                  </h6>
                </div>
                <div class="card-body bg-light rounded-bottom">
                  <ul class="list-unstyled mb-4">
                    {props.standard.map((item) => {
                      return (
                        <li class="mb-3">
                          <span class="mr-3">
                            <i class="fas fa-check text-warning"></i>
                          </span>
                          &nbsp;&nbsp;{item}
                        </li>
                      );
                    })}
                  </ul>
                  <a
                    href="#"
                    class="btn btn-block btn-primary text-uppercase rounded-lg py-3"
                  >
                    Buy now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card bg-danger mb-5 mb-lg-0 rounded-lg shadow">
                <div class="card-header">
                  <h5 class="card-title text-white-50 text-uppercase text-center">
                    Plus
                  </h5>
                  <h6 class="h1 text-white text-center">₹ {props.plusPrice}</h6>
                </div>
                <div class="card-body bg-light rounded-bottom">
                  <ul class="list-unstyled mb-4">
                    {props.plus.map((item) => {
                      return (
                        <li class="mb-3">
                          <span class="mr-3">
                            <i class="fas fa-check text-danger"></i>
                          </span>
                          &nbsp;&nbsp;{item}
                        </li>
                      );
                    })}
                  </ul>
                  <a
                    href="#"
                    class="btn btn-block btn-primary text-uppercase rounded-lg py-3"
                  >
                    Buy now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PackageComponent;

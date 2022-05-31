import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import { useParams } from "react-router-dom";
import "./Css/Profile.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Profile = () => {
  // const {order} = props
  let navigate = useNavigate();
  const [user, setUser] = useState("");
  const [user_order, setUser_order] = useState([]);

  //   let { user_email } = useParams();

  //navigate to edit user profile when click to edit
  // const handleUserEdit = () => {
  //   if(localStorage.getItem('token')){
  //     navigate("/Login");
  //   }
  //   else{
  //     navigate("/EditUserProfile");
  //   }
  // };

  useEffect(() => {
    Aos.init({ duration: 1000 });
    fetch("http://localhost:5000/api/auth/getuser", {
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
        setUser(data);
        // console.log("sajhdfvad", data);
      });
  }, []);

  console.log("user_email", user.email);

  const handleUserOrder = () => {
    fetch(`http://localhost:5000/getuserorder/${user.email}`, {
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
        setUser_order(data);
        console.log("data", data);
      });

    // console.log("orderrrrrr", user_order);
  };
  const order_items = [];

  //   if (user.email != null) {
  useEffect(() => {
    console.log("user_order", user_order);
    {
      user_order.forEach((element) => {
        order_items.push(element.order);
      });
    }
    console.log(order_items);
  }, [handleUserOrder]);

  return (
    <>
      {localStorage.getItem("token") ? (
        <div className="container align-items-center">
          <div className="row">
            <div>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      alt="Admin"
                      className="rounded-circle p-1 bg-primary"
                      width="110"
                    />
                    <div className="mt-3">
                      <h4 className="profile">
                        {user.first_name + " " + user.last_name}
                      </h4>
                      <p className="text-muted font-size-sm">{user.address}</p>
                      {/* <button onClick={handleUserOrder}>show order</button> */}

                      <button
                        onClick={handleUserOrder}
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalCenter"
                      >
                        show orders
                      </button>

                      <div
                        className="modal fade"
                        id="exampleModalCenter"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalCenterTitle"
                        aria-hidden="true"
                      >
                        <div
                          className="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLongTitle"
                              >
                                Modal title
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            {/* ------------ */}
                            {order_items.map((items) => (
                              <div className="modal-body">{items[0]}</div>
                            ))}

                            {/* <div className="modal-body">things</div> */}
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <p className="text-secondary mb-1"></p> */}
                    </div>
                    <hr className="my-2" />
                    <div className="col-lg-8">
                      <div className="card-body">
                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Username</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="text"
                              className="form-control"
                              value={user.username}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">First Name</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="text"
                              className="form-control"
                              value={user.first_name}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Last Name</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="text"
                              className="form-control"
                              value={user.last_name}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="text"
                              className="form-control"
                              value={user.email}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Address</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="text"
                              className="form-control"
                              value={user.address}
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-3"></div>
                          {localStorage.getItem("token") ? (
                            <Link className="navbar-brand" to="/EditProfile">
                              <div className="col-sm-9 text-secondary">
                                <input
                                  type="button"
                                  className="btn btn-primary px-4"
                                  value="edit"
                                />
                              </div>
                            </Link>
                          ) : (
                            navigate("/Login")
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        navigate("/Login")
      )}
    </>
  );
};

export default Profile;

// <!-- Button trigger modal -->
// <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
//   Launch demo modal
// </button>

// <!-- Modal -->
// <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//   <div className="modal-dialog modal-dialog-centered" role="document">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
//         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div className="modal-body">
//         ...
//       </div>
//       <div className="modal-footer">
//         <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//         <button type="button" className="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>

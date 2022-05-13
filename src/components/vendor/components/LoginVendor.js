import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginVendor() {
  let navigate = useNavigate();
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();
    // let navigate = useNavigate();
    // console.warn(username, email, password);
    let items = { email, password };
    // console.log(items);

    let result = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      body: JSON.stringify(items),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    // console.log(result);

    //trying to redirect Vendor user not to show user home page
    if (result.success && result.admin) {
      //redirect to home page ans save token in localstorage
      localStorage.setItem("token", result.token);
      localStorage.setItem("admin", result.admin);
      //to redirect use useNavigate Hook from react-router-dom
      navigate("/HomePageVendor");
    } else {
      alert("Invalid credential");
    }
  };
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign in
                    </p>

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="email">
                            Your Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            label="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            placeholder="email"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            label="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            placeholder="password"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div
                        data-testid="form"
                        className="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                      >
                        <button
                          onClick={handleSignin}
                          type="button"
                          // role="button"
                          className="btn btn-primary btn-lg"
                        >
                          SignIn
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginVendor;

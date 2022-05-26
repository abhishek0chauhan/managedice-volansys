import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Css/Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");

    //making redirect to login as per admin is true and false
    const admin = localStorage.getItem("admin");
    if (!admin) {
      navigate("/Login");
    } else if (admin) {
      localStorage.removeItem("admin");
      navigate("/LoginVendor");
    } else {
      navigate("/");
    }
  };

  const handleReload = () => {
    localStorage.removeItem("vendor");
    window.localStorage.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <Link onClick={() => handleReload()} className="navbar-brand" to="/">
          ManageDice
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="navbar-elements">
            <li className="nav-item">
              {localStorage.getItem("vendor") ? (
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/HomePageVendor"
                >
                  Home
                </Link>
              ) : (
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              )}
              {/* <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link> */}
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/AllServices"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Profile">
                Profile
              </Link>
            </li> */}
            {localStorage.getItem("token") ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/Profile">
                    Profile
                  </Link>
                </li>
                {!localStorage.getItem("admin") ? (
                  <Link className=" nav-cart" to="/cart">
                    <i class="fa badgee fa-lg" value={items.length}>
                      &#xf07a;
                    </i>
                    {/* cart <span>{items.length}</span> */}
                  </Link>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <></>
            )}
            {localStorage.getItem("admin") ? (
              <li className="nav-item">
                <Link className="nav-link" to="/ServiceVendorForm">
                  Add Service
                </Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
          {!localStorage.getItem("token") ? (
            <div>
              {localStorage.getItem("vendor") ? (
                <>
                  <Link
                    className="btn btn-primary mx-1"
                    to="/SignupVendor"
                    role="button"
                  >
                    SignUp
                  </Link>
                  <Link
                    className="btn btn-primary mx-1"
                    to="/LoginVendor"
                    role="button"
                  >
                    SignIn
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    className="btn btn-primary mx-1"
                    to="/SignUp"
                    role="button"
                  >
                    SignUp
                  </Link>
                  <Link
                    className="btn btn-primary mx-1"
                    to="/Login"
                    role="button"
                  >
                    SignIn
                  </Link>
                </>
              )}
              {/* <Link className="btn btn-primary mx-1" to="/SignUp" role="button">
                SignUp
              </Link>
              <Link className="btn btn-primary mx-1" to="/Login" role="button">
                SignIn
              </Link> */}
            </div>
          ) : (
            <button onClick={handleLogout} className="btn btn-success">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

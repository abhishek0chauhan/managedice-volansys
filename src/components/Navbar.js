import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/Login");
  };

  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/AllServices">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
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
              <li className="nav-item">
                <Link className="nav-link" to="/Profile">
                  Profile
                </Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
          {!localStorage.getItem("token") ? (
            <div>
              <Link className="btn btn-primary mx-1" to="/SignUp" role="button">
                SignUp
              </Link>
              <Link className="btn btn-primary mx-1" to="/Login" role="button">
                SignIn
              </Link>
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

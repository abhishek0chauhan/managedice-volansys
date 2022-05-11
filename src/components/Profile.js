import React from 'react'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Css/Profile.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Profile = () => {

    let navigate = useNavigate();
    const [user, setUser] = useState("");

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
                // console.log(data);
            });
    }, []);



    // useEffect(() => {
    //     Aos.init({ duration: 1000 });
    // }, []);
    return (
        <>
        {localStorage.getItem("token")?(
            <div class="container align-items-center">
            <div class="row">
                <div >
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex flex-column align-items-center text-center">
                                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" class="rounded-circle p-1 bg-primary" width="110" />
                                <div class="mt-3">
                                    <h4 className='profile'>{user.first_name + " " + user.last_name}</h4>
                                    {/* <p class="text-secondary mb-1"></p> */}
                                    <p class="text-muted font-size-sm">{user.address}</p>
                                </div>
                                <hr class="my-2" />
                                <div class="col-lg-8">
                                    <div class="card-body">
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Username</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control" value={user.username} />
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">First Name</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control" value={user.first_name} />
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Last Name</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control" value={user.last_name} />
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Email</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control" value={user.email} />
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Address</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control" value={user.address} />
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-sm-3"></div>
                                            {localStorage.getItem("token") ? (
                                                <Link className='navbar-brand' to="/EditProfile">
                                                    <div class="col-sm-9 text-secondary">
                                                        <input type="button" class="btn btn-primary px-4" value="edit" />
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
):(
    navigate("/Login")
)}
        </>
        
        
    )
}

export default Profile
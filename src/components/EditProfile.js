import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const EditProfile = () => {

    const [, setUser] = useState("");
    const [username, setUsername] = useState("");
    const [first_name, setFirstname] = useState("");
    const [last_name, setLastname] = useState("");
    const [address, setAddress] = useState("");
    const [_id, set_id] = useState("");
    

    let navigate = useNavigate();
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
          setUsername(data.username);
          setFirstname(data.first_name);
          setLastname(data.last_name);
          setAddress(data.address);
          set_id(data._id);
          // console.log(data);
        });
    }, []);
  
    const handleEditProfileSubmit = async (e) => {
      e.preventDefault();
      let items = {username, first_name, last_name, address };
      // alert(_id);
      fetch(`http://localhost:5000/api/auth/${_id}`,{
        method: 'PUT',
        headers:{
          'Content-Type':'application/json',
          token: localStorage.getItem("token"),
        },
        body:JSON.stringify(items)
      }).then((result)=>{
        result.json().then((res)=>{
          console.warn(res);
          navigate("/Profile")
        })
      })
     
      
    };

    return (
        <>
        {localStorage.getItem("token")?(
            <div class="col-lg-8">
            <div class="card-body">
                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Username</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input onChange={(e)=>setUsername(e.target.value)} type="text" class="form-control" value={username} />
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0">First Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input onChange={(e)=>setFirstname(e.target.value)} type="text" class="form-control" value={first_name} />
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Last Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input onChange={(e)=>setLastname(e.target.value)} type="text" class="form-control" value={last_name} />
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input onChange={(e)=>setAddress(e.target.value)} type="text" class="form-control" value={address} />
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-3"></div>
        
                            <div class="col-sm-9 text-secondary">
                                <input onClick={handleEditProfileSubmit} type="button" class="btn btn-primary px-4" value="submit" />
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

export default EditProfile
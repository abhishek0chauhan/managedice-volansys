// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// const EditUserProfile = () => {
//   const [user, setUser] = useState("");
//   const [username, setUsername] = useState("");
//   const [first_name, setFirstname] = useState("");
//   const [last_name, setLastname] = useState("");
//   const [address, setAddress] = useState("");
//   const [_id, set_id] = useState("");

//   let navigate = useNavigate();
//   useEffect(() => {
//     fetch("http://localhost:5000/api/auth/getuser", {
//       method: "GET",
//       headers: {
//         "Content-type": "application/json",
//         token: localStorage.getItem("token"),
//       },
//     })
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         setUser(data);
//         setUsername(data.username);
//         setFirstname(data.first_name);
//         setLastname(data.last_name);
//         setAddress(data.address);
//         set_id(data._id);
//         // console.log(data);
//       });
//   }, []);

//   const handleEditProfileSubmit = async (e) => {
//     e.preventDefault();
//     let items = {username, first_name, last_name, address };
//     // alert(_id);
//     fetch(`http://localhost:5000/api/auth/${_id}`,{
//       method: 'PUT',
//       headers:{
//         'Content-Type':'application/json',
//         token: localStorage.getItem("token"),
//       },
//       body:JSON.stringify(items)
//     }).then((result)=>{
//       result.json().then((res)=>{
//         console.warn(res);
//         navigate("/Userprofile")
//       })
//     })
   
    
//   };

//   return (
//     <>
//     {localStorage.getItem("token")?(
//       <>
//     <h3 id="user-welcome-edit">Hi!! {user.first_name} you can edit Your profile here!</h3>
//     <hr id="hr-edit" />
//       <form className="edit-form">
//         <div className="mb-3">
//           <label className="form-label">Username</label>
//           <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" className="form-control" id="username"/>
//         </div>
//         <div className="mb-3">
//           <label className="form-label">First Name</label>
//           <input onChange={(e)=>setFirstname(e.target.value)} value={first_name} type="text" className="form-control" id="first-name" />
//         </div>
//         <div className="mb-3">
//           <label  className="form-label">Last Name</label>
//           <input onChange={(e)=>setLastname(e.target.value)} value={last_name} type="text" className="form-control" id="last-name"/>
//         </div>
//         <div className="mb-3">
//           <label  className="form-label">Address</label>
//           <input onChange={(e)=>setAddress(e.target.value)} value={address} type="text" className="form-control" id="address"/>
//         </div>
//         <button onClick={handleEditProfileSubmit} type="submit" className="btn btn-primary">Submit</button>
//       </form>
//       </>):(
//                 navigate("/Login")
//               )
// }
//     </>

//   );
// };

// export default EditUserProfile;
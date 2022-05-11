// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// // import React, { useContext } from "react";
// // import Usercontext from "../context/user/userContext";

// // const Userprofile = () => {
// //   const context = useContext(Usercontext);
// //   const { user } = context;
// //   //   const [user, setUser] = useState(userInitial);
// //   return (
// //     <div>
// //       {/* {context.map((u) => {
// //         return u.email;
// //       })} */}
// //       {user}
// //       <h1>Hello</h1>
// //     </div>
// //   );
// // };

// // export default Userprofile;

// const Userprofile = () => {
//   let navigate = useNavigate();
//   const [user, setUser] = useState("");

//   //navigate to edit user profile when click to edit
//   // const handleUserEdit = () => {
//   //   if(localStorage.getItem('token')){
//   //     navigate("/Login");
//   //   }
//   //   else{
//   //     navigate("/EditUserProfile");
//   //   }
//   // };

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
//         // console.log(data);
//       });
//   }, []);





//   //trying
//   // {localStorage.getItem("token") ? (
//   //   <li className="nav-item">
//   //     <Link className="nav-link" to="/Userprofile">
//   //       Userprofile
//   //     </Link>
//   //   </li>
//   // ) : (
//   //   <></>
//   // )}
//   // return (
//   //   <div className="user-profile">
//   //     <h1>user profile</h1>
//   //     <h2>{user.email}</h2>
//   //   </div>
//   // );

//   return (
//     <>
//       {/* <div className="dashboard-container">
//         <div>
//           <h3>Hello {user.username} 👋</h3>
//           <h3>WELCOME TO</h3>
//           <h1>ManageDice</h1>
//         </div>
//       </div> */}
//       <section style={{ backgroundColor: "#E4EFE7" }}>
//         <div className="card mb-4" style={{ backgroundColor: "#E4EFE7" }}>
//           <div className="card-body text-center">
//             <div className=" dashboard-container">
//               <h3 className="my-3">Hello {user.first_name + " " + user.last_name} 👋</h3>
//               <h3 className="text-muted mb-4">WELCOME TO</h3>
//               <h1>ManageDice</h1>
//             </div>
//             <div className="d-flex justify-content-center mb-1">
//               {localStorage.getItem("token") ? (
//                 <Link className="navbar-brand" to="/EditUserProfile">
//                   <button type="button" className="btn btn-outline-primary">
//                     edit
//                   </button>
//                 </Link>
//               ) : (
//                 navigate("/Login")
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="card-body" >
//           <div className="row">
//             <div className="col-sm-3">
//               <p className="mb-0 ">User Name</p>
//             </div>
//             <div className="col-sm-9">
//               <p className="text-muted mb-0">{user.username}</p>
//             </div>
//           </div>
//           <hr />
//           <div className="row">
//             <div className="col-sm-3">
//               <p className="mb-0 ">First Name</p>
//             </div>
//             <div className="col-sm-9">
//               <p className="text-muted mb-0">{user.first_name}</p>
//             </div>
//           </div>
//           <hr />
//           <div className="row">
//             <div className="col-sm-3">
//               <p className="mb-0 ">Last Name</p>
//             </div>
//             <div className="col-sm-9">
//               <p className="text-muted mb-0">{user.last_name}</p>
//             </div>
//           </div>
//           <hr />
//           <div className="row">
//             <div className="col-sm-3">
//               <p className="mb-0">Email</p>
//             </div>
//             <div className="col-sm-9">
//               <p className="text-muted mb-0">{user.email}</p>
//             </div>
//           </div>
//           <hr />
//           <div className="row">
//             <div className="col-sm-3">
//               <p className="mb-0">Phone</p>
//             </div>
//             <div className="col-sm-9">
//               <p className="text-muted mb-0">(097) 234-5678</p>
//             </div>
//           </div>
//           <hr />
//           <div className="row">
//             <div className="col-sm-3">
//               <p className="mb-0">Address</p>
//             </div>
//             <div className="col-sm-9">
//               <p className="text-muted mb-0">{user.address}</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Userprofile;

// import React, { useState } from "react";
// import "./Css/Birthday.css";
// // import SubServiceMainCard from "../SubServiceMainCard/SubServiceMainCard";
// import SubServiceMainCard from "./SubServiceMainCard";
// import IndividualServiceCard from "./IndividualServiceCard";
// import PackageComponent from "./PackageComponent";
// import DatePicker from "react-datepicker";
// import subDays from "date-fns/subDays";
// import "react-datepicker/dist/react-datepicker.css";
// import cake from "../images/birthday/cake.jpg";
// import catering from "../images/birthday/catering.jpg";
// import decoration from "../images/birthday/decoration.jpg";
// import dj from "../images/birthday/dj.jpg";
// import invitation from "../images/birthday/invitation.jpg";
// import photography from "../images/birthday/photography.jpg";
// import venue from "../images/birthday/venue.jpg";
// // import {Link } from "react-router-dom"

// function Birthday() {
//   const [Total, setTotal] = useState(0);
//   const [startDate, setStartDate] = useState(null);
//   const [basicPackage] = useState(["Cake", "Decoration"]);
//   const [standardPackage] = useState(["Cake", "Decoration", "Food"]);
//   const [plusPackage] = useState(["Cake", "Decoration", "Food", "DJ"]);

//   const calculateTotal = (input, checked) => {
//     let total = Total;
//     if (checked) {
//       total += input;
//     } else {
//       total -= input;
//     }
//     setTotal(total);
//   };

//   return (
//     <div className="birthday-body">
//       <SubServiceMainCard
//         serviceName="Birthday"
//         serviceImg="https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//       />
//       <div class="container">
//         <div className="row orderSummaryCard">
//           <div className="col-sm-8">
//             <label for="city">Choose a City</label>
//             <div class="select">
//               <select name="city" id="city">
//                 <option value="vadodara">Vadodara, Gujarat</option>
//                 <option value="surat">Surat, Gujarat</option>
//               </select>
//             </div>
//           </div>
//           <div className="col-sm-4">
//             <label for="birthdate">Choose event date</label>
//             <DatePicker
//               selected={startDate}
//               dateFormat="dd-MM-yyyy"
//               onChange={(date) => setStartDate(date)}
//               minDate={subDays(new Date(), -10)}
//               placeholderText="Select a Birthdate"
//               className="myDatePicker"
//             />
//           </div>
//         </div>

//         <div className="row orderSummaryCard">
//           <div className="col-sm-8">
//             {/* <IndividualServiceCard
//               IndividualServiceName="Birthday Cake ₹300 for 0.5KG"
//               value={300}
//               id="s1"
//               calculate={calculateTotal}
//             />
//             <IndividualServiceCard
//               IndividualServiceName="Decoration"
//               value={5}
//               calculate={calculateTotal}
//               id="s2"
//             />
//             <IndividualServiceCard
//               IndividualServiceName="Birthday Cake3"
//               value={5}
//               calculate={calculateTotal}
//               id="s3"
//             />
//             <IndividualServiceCard
//               IndividualServiceName="Birthday Cake4"
//               value={5}
//               calculate={calculateTotal}
//               id="s4"
//             />
//             <IndividualServiceCard
//               IndividualServiceName="Birthday Cake5"
//               value={5}
//               calculate={calculateTotal}
//               id="s5"
//             />
//             <IndividualServiceCard
//               IndividualServiceName="Birthday Cake6"
//               value={5}
//               calculate={calculateTotal}
//               id="s6"
//             /> */}

//             <div class="row">
//               <div class="col-sm" style={{ cursor: "pointer" }}>
//                 <IndividualServiceCard
//                   subServiceImage={cake}
//                   subServiceName="Cake"
//                 />
//               </div>
//               <div class="col-sm" style={{ cursor: "pointer" }}>
//                 <IndividualServiceCard
//                   subServiceImage={decoration}
//                   subServiceName="Decoration"
//                 />
//               </div>
//             </div>
//             <div class="row">
//               <div class="col-sm" style={{ cursor: "pointer" }}>
//                 <IndividualServiceCard
//                   subServiceImage={catering}
//                   subServiceName="Catering"
//                 />
//               </div>
//               <div class="col-sm" style={{ cursor: "pointer" }}>
//                 <IndividualServiceCard
//                   subServiceImage={venue}
//                   subServiceName="Venue"
//                 />
//               </div>
//             </div>
//             <div class="row">
//               <div class="col-sm" style={{ cursor: "pointer" }}>
//                 <IndividualServiceCard
//                   subServiceImage={dj}
//                   subServiceName="Dj"
//                 />
//               </div>
//               <div class="col-sm" style={{ cursor: "pointer" }}>
//                 <IndividualServiceCard
//                   subServiceImage={photography}
//                   subServiceName="Photography"
//                 />
//               </div>
//             </div>
//             <div class="row">
//               <div class="col-sm-6" style={{ cursor: "pointer" }}>
//                 <IndividualServiceCard
//                   subServiceImage={invitation}
//                   subServiceName="Invitation"
//                   cost="Free"
//                 />
//               </div>
//             </div>

//             <>
//               <section style={{ backgroundColor: "#E4EFE7" }}>
//                 <div
//                   className="card mb-4"
//                   style={{ backgroundColor: "#E4EFE7" }}
//                 >
//                   <div className="card-body text-center">
//                     <h5 className="my-3">
//                       {/* {user.first_name + " " + user.last_name} */}
//                     </h5>
//                     {/* <p className="text-muted mb-4">{user.address}</p> */}
//                     <div className="d-flex justify-content-center mb-2">
//                       <button
//                         type="button"
//                         className="btn btn-outline-primary ms-1"
//                       >
//                         edit
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="card-body">
//                   <div className="row">
//                     <div className="col-sm-3">
//                       <p className="mb-0 ">User Name</p>
//                     </div>
//                     <div className="col-sm-9">
//                       {/* <p className="text-muted mb-0">{user.username}</p> */}
//                     </div>
//                   </div>
//                   <hr />
//                   <div className="row">
//                     <div className="col-sm-3">
//                       <p className="mb-0 ">First Name</p>
//                     </div>
//                     <div className="col-sm-9">
//                       {/* <p className="text-muted mb-0">{user.first_name}</p> */}
//                     </div>
//                   </div>
//                   <hr />
//                   <div className="row">
//                     <div className="col-sm-3">
//                       <p className="mb-0 ">Last Name</p>
//                     </div>
//                     <div className="col-sm-9">
//                       {/* <p className="text-muted mb-0">{user.last_name}</p> */}
//                     </div>
//                   </div>
//                   <hr />
//                   <div className="row">
//                     <div className="col-sm-3">
//                       <p className="mb-0">Email</p>
//                     </div>
//                     <div className="col-sm-9">
//                       {/* <p className="text-muted mb-0">{user.email}</p> */}
//                     </div>
//                   </div>
//                   <hr />
//                   <div className="row">
//                     <div className="col-sm-3">
//                       <p className="mb-0">Phone</p>
//                     </div>
//                     <div className="col-sm-9">
//                       <p className="text-muted mb-0">(097) 234-5678</p>
//                     </div>
//                   </div>
//                   <hr />
//                   <div className="row">
//                     <div className="col-sm-3">
//                       <p className="mb-0">Address</p>
//                     </div>
//                     <div className="col-sm-9">
//                       {/* <p className="text-muted mb-0">{user.address}</p> */}
//                     </div>
//                   </div>
//                 </div>
//               </section>
//             </>
//           </div>
//           <br />
//           <div className="col-sm-4" style={{ marginTop: "30px" }}>
//             <div class="card positionSticky" style={{ width: "auto" }}>
//               <div class="card-body">
//                 <p class="card-text">Order Summary</p>
//                 <hr />
//                 <h1>Total ₹{Total}</h1>
//                 <hr />
//               </div>
//             </div>
//           </div>
//         </div>
//         <hr />
//         <div className="orDivide">OR</div>
//         <hr />
//         <PackageComponent
//           basic={basicPackage}
//           standard={standardPackage}
//           plus={plusPackage}
//           basicPrice="100"
//           standardPrice="500"
//           plusPrice="1000"
//         />
//       </div>
//     </div>
//   );
// }

// export default Birthday;

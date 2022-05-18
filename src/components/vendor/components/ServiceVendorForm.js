import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Css/ServiceVendorForm.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function ServiceVendorForm() {
  const notify = () => toast("Service Added successfully!");
  const [, setUser] = useState("");
  const [service_name, setService_name] = useState("");
  const [service_price, setService_price] = useState("");
  const [service_category, setService_category] = useState("birthday");
  const [service_image, setService_image] = useState({
    file: [],
  });
  const [vendor_id, setVendor_id] = useState("");
  // const [name, setName] = useState([]);

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
        setVendor_id(data._id);
      });
  }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // console.warn(username, email, password);
  //   let items = {
  //     service_name,
  //     service_price,
  //     service_category,
  //     service_image,
  //     vendor_id,
  //   };
  //   console.log(items);

  //   let result = await fetch("http://localhost:5000/vendor/addservice", {
  //     method: "POST",
  //     body: JSON.stringify(items),
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       token: localStorage.getItem("token"),
  //     },
  //   });
  //   result = await result.json();
  //   console.log(result);
  //   if (result.success) {
  //     console.log(result);

  //     //to redirect use useNavigate Hook from react-router-dom
  //     // navigate("/LoginVendor");
  //   } else {
  //     alert("Invalid credential");
  //   }
  // };

  const handleInputChange = (e) => {
    setService_image({
      ...service_image,
      file: e.target.files[0],
    });
  };

  const handleSubmit = async () => {
    const formdata = new FormData();
    formdata.append("service_image", service_image.file);
    formdata.append("service_price", service_price);
    formdata.append("service_name", service_name);
    formdata.append("service_category", service_category);
    formdata.append("vendor_id", vendor_id);

    axios
      .post("http://localhost:5000/vendor/addservice", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.warn(res);
      });
  };

  return (
    <>
      <form class="form-vendor row g-3" onSubmit={handleSubmit}>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Service Name
          </label>
          <input
            onChange={(e) => setService_name(e.target.value)}
            type="text"
            class="form-control"
            id="inputservicename"
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Price
          </label>
          <input
            onChange={(e) => setService_price(e.target.value)}
            placeholder="₹"
            type="text"
            class="form-control"
            id="inputprice"
          />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">
            Category
          </label>
          <select
            value={service_category}
            onChange={(e) => setService_category(e.target.value)}
            id="inputState"
            class="form-select"
            // value={"birthday"}
          >
            <option value={"birthday"}>Birthday</option>
            <option disabled>Wedding</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="formFileMultiple" class="form-label">
            Add Images
          </label>
          <input onChange={handleInputChange} type="file" />
        </div>
        <div class="col-12">
          <button onClick={notify} type="submit" class="btn btn-primary">
            Submit
          </button>
          <ToastContainer />
        </div>
      </form>
    </>
  );
}

export default ServiceVendorForm;

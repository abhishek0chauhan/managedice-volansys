import React, { useState } from "react";
import "../../Css/ServiceVendorForm.css";

function ServiceVendorForm() {
  const [text, setText] = useState("");
  return (
    <>
      <form class="form-vendor row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Service Name
          </label>
          <input
            onChange={(e) => setText(e.target.value)}
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
            onChange={(e) => setText(e.target.value)}
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
            onChange={(e) => setText(e.target.value)}
            id="inputState"
            class="form-select"
          >
            <option selected>Birthday</option>
            <option disabled>Wedding</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="formFileMultiple" class="form-label">
            Add Images
          </label>
          <input
            onChange={(e) => setText(e.target.value)}
            class="form-control"
            type="file"
            id="formFileMultiple"
            multiple
          />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default ServiceVendorForm;

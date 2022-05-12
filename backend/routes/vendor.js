const express = require("express");
const Service = require("../models/Services");
const router = express.Router();
// const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchUser");

router.post("/addservice", fetchuser, async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return res.status(400).json({ errors: errors.array() });
  //   }
  try {
    // Create a new service
    let service = await Service.create({
      service_name: req.body.service_name,
      service_price: req.body.service_price,
      service_image: req.body.service_image,
      vendor_id: req.body.vendor_id,
    });
    console.log(service);
    // const data = {
    //   service: {
    //     id: service.id,
    //   },
    // };
    // const token = jwt.sign(data, JWT_SECRET);

    // res.json(service);
    success = true;
    res.json({ success, service });
  } catch (error) {
    success = false;
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

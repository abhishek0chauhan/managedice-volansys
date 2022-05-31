const express = require("express");
const Service = require("../models/Services");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { uploadFile } = require("../s3");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../" + "uploads"),
  filename: function(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});
const upload = multer({
  storage: storage,
});

const router = express.Router();
// const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchUser");

// https://vendor-service-image.s3.amazonaws.com/logo512.png

router.post(
  "/addservice",
  fetchuser,
  upload.single("service_image"),

  async (req, res) => {
    const url = req.protocol + "://" + req.get("host");
    const file = req.file;
    const result = await uploadFile(file);
    console.log(result);
    console.log(req.file);
    let success = false;
    try {
      // Create a new service
      let service = await Service.create({
        servicee: {
          service_name: req.body.service_name,
          service_price: req.body.service_price,
          service_image: `https://vendor-service-image.s3.amazonaws.com/${req.file.filename}`,
          service_category: req.body.service_category,
        },
        // service_name: req.body.service_name,
        // service_price: req.body.service_price,
        // // service_image: url + "/uploads/" + req.body.service_image,
        // service_image: `http://localhost:5000/uploads/${req.file.filename}`,

        // service_category: req.body.service_category,
        vendor_id: req.body.vendor_id,
      });

      // console.log(service.servicee.service_name);

      success = true;
      res.json({ success, service });
    } catch (error) {
      success = false;
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//get service fo perticular vendor
// router.get("/vendorservices/:id", fetchuser, async (req, res) => {
router.get("/vendorservices", fetchuser, async (req, res) => {
  try {
    // const userId = req.user.id;

    const id = req.user.id;
    // const id = req.params.id;
    // const vendorServiceDetail = await Service.find();
    const vendorServiceDetail = await Service.find({
      $or: [{ vendor_id: { $regex: id } }],
    });

    console.log(vendorServiceDetail);
    res.send(vendorServiceDetail);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
  // console.log("hy");
});

//get all service of vendors
router.get("/vendorservice/all", async (req, res) => {
  try {
    // const userId = req.user.id;

    // const id = req.user.id;
    // const id = req.params.id;
    // const vendorServiceDetail = await Service.find();
    const vendorServiceDetail = await Service.find();

    console.log(vendorServiceDetail);
    res.send(vendorServiceDetail);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
  // console.log("hy");
});

module.exports = router;

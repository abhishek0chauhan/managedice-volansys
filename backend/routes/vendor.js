const express = require("express");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({ storage: storage });
const Service = require("../models/Services");
const router = express.Router();
// const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchUser");

router.post(
  "/addservice",
  fetchuser,
  upload.single("service_image"),
  async (req, res) => {
    console.log(req.file);
    let success = false;

    try {
      // Create a new service
      let service = await Service.create({
        service_name: req.body.service_name,
        service_price: req.body.service_price,
        service_image: req.file.path,
        service_category: req.body.service_category,
        vendor_id: req.body.vendor_id,
      });
      console.log(service);

      success = true;
      res.json({ success, service });
    } catch (error) {
      success = false;
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// router.get("/vendorservices", fetchuser, async (req, res) => {
//   try{
//     const userId = req.user.id;
//     const  =
//   }
// })

module.exports = router;

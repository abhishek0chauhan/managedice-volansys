// const express = require("express");
// const Cart = require("../models/cart");
// const router = express.Router();
// // const { body, validationResult } = require("express-validator");
// // const bcrypt = require("bcryptjs");
// // var jwt = require("jsonwebtoken");
// // const fetchuser = require("../middleware/fetchUser");
// // const JWT_SECRET = process.env.JWT_SECRET_TOKEN;

// router.post("/addcart", async (req, res) => {
//   let success = false;
//   // If there are errors, return Bad request and the errors
//   try {
//     // Create a new user
//     let order = await Cart.create({
//       order: req.body.order,
//     });
//     // res.json(user)
//     success = true;
//     res.json({ success, order });
//   } catch (error) {
//     success = false;
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });

// module.exports = router;

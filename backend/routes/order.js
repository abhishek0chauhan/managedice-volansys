const express = require("express");
const Order = require("../models/Order");
const Service = require("../models/Services");
const router = express.Router();
// const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchUser");
const JWT_SECRET = process.env.JWT_SECRET_TOKEN;

router.post("/order/:email", async (req, res) => {
  let order = Order.order;
  let success = false;
  const userEmail = req.params.email;
  // If there are errors, return Bad request and the errors
  try {
    // Create a new user
    let myorder = await Order.findOne({ userEmail });
    console.log("hello", myorder);
    if (myorder) {
      success = true;
      myorder.order.push({
        order: req.body.order,
      });
      myorder = await myorder.save();
      return res.status(201).send(myorder);
    } else {
      let orderr = await Order.create({
        user_email: req.body.user_email,
        order: req.body.order,
        total_price: req.body.total_price,
      });
      // res.json(user)
      success = true;
      res.json({ success, orderr });
    }

    // let order = await Order.create({
    //   user_email: req.body.user_email,
    //   order: req.body.order,
    //   total_price: req.body.total_price,
    // });
    // // res.json(user)
    // success = true;
    // res.json({ success, order });
  } catch (error) {
    success = false;
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/getuserorder/:email", fetchuser, async (req, res) => {
  userEmail = req.params.email;
  // var query = { user_email: req.params.email };
  try {
    const order_list = await Order.find({ userEmail }); // not include password
    const user_order_list = [];
    // if (order_list.)
    order_list_length = order_list.length;
    for (let i = 0; i < order_list_length; i++) {
      if (req.params.email == order_list[i].user_email) {
        user_order_list.push(order_list[i]);
      }
    }
    res.send(user_order_list);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

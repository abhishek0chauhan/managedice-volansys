const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchUser");
// var fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = process.env.JWT_SECRET_TOKEN;
//1: Create a User using: POST "/api/auth/createuser"
router.post(
  "/register",
  [
    body("first_name", "Enter a valid name").isLength({ min: 3 }),
    body("last_name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // Check whether the user with this email exists already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "A user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Create a new user
      user = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: secPass,
        email: req.body.email,
        isAdmin: false,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, JWT_SECRET);

      // res.json(user)
      success = true;
      res.json({ success, token });
    } catch (error) {
      success = false;
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//SignUp for Vendor user
//1: Create a User using: POST "/api/auth/createuser"
// router.post(
//   "/register/vendor",
//   [
//     body("first_name", "Enter a valid name").isLength({ min: 3 }),
//     body("last_name", "Enter a valid name").isLength({ min: 3 }),
//     body("email", "Enter a valid email").isEmail(),
//     body("password", "Password must be at least 5 characters").isLength({
//       min: 5,
//     }),
//   ],
//   async (req, res) => {
//     let success = false;
//     // If there are errors, return Bad request and the errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     try {
//       // Check whether the user with this email exists already
//       let user = await User.findOne({ email: req.body.email });
//       if (user) {
//         return res
//           .status(400)
//           .json({ error: "A user with this email already exists" });
//       }
//       const salt = await bcrypt.genSalt(10);
//       const secPass = await bcrypt.hash(req.body.password, salt);

//       // Create a new user
//       user = await User.create({
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         password: secPass,
//         email: req.body.email,
//         isAdmin: true,
//       });
//       const data = {
//         user: {
//           id: user.id,
//           isAdmin: user.isAdmin,
//         },
//       };
//       const token = jwt.sign(data, JWT_SECRET);

//       // res.json(user)
//       success = true;
//       res.json({ success, token });
//     } catch (error) {
//       success = false;
//       console.error(error.message);
//       res.status(500).send("Internal Server Error");
//     }
//   }
// );

//2: Authenticate a User using: POST "/api/auth/login"
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials",
        });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, token });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//3: Get loggedin User Details
router.get("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password"); // not include password
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Login for Vendor User
//3: Get loggedin User Details
// router.get("/vendor", fetchuser, async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const user = await User.findById(userId).select("-password"); // not include password
//     res.send(user);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });

//4: Update User Details
router.put("/:id", fetchuser, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//5: Get all User
router.get("/alluser", fetchuser, async (req, res) => {
  try {
    const user = await User.find(); // not include password
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

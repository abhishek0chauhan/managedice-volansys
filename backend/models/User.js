const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
      default: null,
    },
    last_name: {
      type: String,
      required: true,
      default: null,
    },
    address: {
      type: String,
      required: false,
      default: null,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    //   date: {
    //     type: Date,
    //     default: Date.now,
    //   },
  },
  { timestamps: true }
);

// timestamps: true

const User = mongoose.model("user", UserSchema);
module.exports = User;

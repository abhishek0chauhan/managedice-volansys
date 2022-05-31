const mongoose = require("mongoose");
const { Schema } = mongoose;

const ServiceSchema = new Schema(
  {
    user_email: {
      type: String,
    },
    order: {
      type: Array,
    },
    total_price: {
      type: String,
    },
  },
  { timestamps: true }
);

// timestamps: true

const Order = mongoose.model("order", ServiceSchema);
module.exports = Order;

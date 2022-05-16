const mongoose = require("mongoose");
const { Schema } = mongoose;

const ServiceSchema = new Schema(
  {
    service_name: {
      type: String,
      required: true,
    },
    service_price: {
      type: String,
      required: true,
    },
    vendor_id: {
      type: String,
      default: null,
    },
    service_category: {
      type: String,
      default: null,
      unique: true,
    },
    service_image: {
      type: String,
      required: true,
      // data: Buffer,
      // contentType: String,
    },
  },
  { timestamps: true }
);

// timestamps: true

const Service = mongoose.model("service", ServiceSchema);
module.exports = Service;

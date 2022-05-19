const mongoose = require("mongoose");
const { Schema } = mongoose;

// const ServiceSchema = new Schema(
//   {
//     service_name: {
//       type: String,
//       required: true,
//     },
//     service_price: {
//       type: String,
//       required: true,
//     },
//     vendor_id: {
//       type: String,
//       default: null,
//     },
//     service_category: {
//       type: String,
//       default: null,
//     },
//     service_image: {
//       type: String,
//       // data: Buffer,
//       default: "",
//       // contentType: String,
//     },
//   },
//   { timestamps: true }
// );

const ServiceSchema = new Schema(
  {
    vendor_id: {
      type: String,
      default: null,
    },
    servicee: [
      {
        service_name: {
          type: String,
          required: true,
        },
        service_price: {
          type: String,
          required: true,
        },
        service_category: {
          type: String,
          default: null,
        },
        service_image: {
          type: String,
          // data: Buffer,
          default: "",
          // contentType: String,
        },
      },
    ],
  },
  { timestamps: true }
);

// timestamps: true

const Service = mongoose.model("service", ServiceSchema);
module.exports = Service;

//middleware
// app.use(express.json());
// app.use(helmet());
// app.use(morgan("common"));

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "/ public/images");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname.replace(/\.[^/.]+$/, "") + '_' + Date.now() + path.extname(file.originalname));
// }
// });

// const upload = multer({ storage: storage });
// console.log("000000000000");
// app.post("/api/upload", upload.single('file'), (req, res) => {
//   console.log("111111111");
//   try {
//     console.log(__dirname)
//     return res.status(200).json("File uploded successfully");
//   } catch (error) {
//     console.error("upload error ======= ",error);
//   }
// });

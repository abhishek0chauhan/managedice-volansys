require("dotenv").config();
const express = require("express");
var cors = require("cors");
const vendor = require("./routes/vendor");
const order = require("./routes/order");
// const cartt = require("./routes/cartt");

//database connection
const connectToMongo = require("./db");
connectToMongo();

//express app and port setup
const app = express();
const port = 5000;

//jason use to show json data
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/auth", require("./routes/auth"));

app.use(vendor);

app.use(order);

// app.use(cartt);

app.use("/uploads", express.static("uploads"));

//listen port
app.listen(port, () => {
  console.log(` backend listening at http://localhost:${port}`);
});

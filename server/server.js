// server.js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const route = require("./business.route");
const dotenv = require("dotenv");
dotenv.config();

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to db"))
  .catch((err) => console.log(err));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/business", route);

app.listen(PORT, function () {
  console.log("Server is running at : ", PORT);
});

// server.js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const route = require("./business.route");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URI || process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to db"))
  .catch((err) => console.log(err));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/business", route);
// for deployîng in heroko
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
app.listen(PORT, function () {
  console.log("Server is running at : ", PORT);
});

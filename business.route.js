const express = require("express");
const businessRoutes = express.Router();

let Business = require("./business.model");

// add route
businessRoutes.route("/add").post(function (req, res) {
  let business = new Business(req.body);
  business
    .save()
    .then((business) => {
      res.status(200).json({ business: "business is saved successfully." });
    })
    .catch((err) => {
      res.status(400).json({ business: "failed to add business." });
    });
});

// home route
businessRoutes.route("/").get(function (req, res) {
  Business.find(function (err, businesses) {
    if (err) {
      console.log(err);
    } else {
      res.json(businesses);
    }
  });
});

// get edit object data route
businessRoutes.route("/edit/:id").get(function (req, res) {
  let id = req.params.id;
  Business.findById(id, function (err, business) {
    res.json(business);
  });
});

// edit route
businessRoutes.route("/edit/update/:id").post(function (req, res) {
  let id = req.params.id;
  Business.findById(id, function (err, business) {
    if (!business) {
      res.status(400).send("Data is not Found !!");
    } else {
      business.person_name = req.body.person_name;
      business.business_name = req.body.business_name;
      business.business_gst_name = req.body.business_gst_name;

      business.save().then((business) => {
        res.json("update complete");
      });
    }
  })
    .clone()
    .catch((err) => {
      console.log(err);
    });
});

// delete route
businessRoutes.route("/delete/:id").get(function (req, res) {
  Business.findByIdAndRemove({ _id: req.params.id }, function (err, business) {
    if (err) res.json(err);
    else res.json("successfully removed");
  });
});
module.exports = businessRoutes;

const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.selectAll(function(data) {
    var hbsObject = { burgers: data };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne(req.body.burger_name, function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  var condition =  "id = " + req.params.id;
  console.log("condition", condition); // Do I need this
  burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
    if (result.changedRows == 0) { return res.status(404).end(); } else { res.status(200).end(); }
  });
});

// Bonus delete f(x)
router.delete("api/burgers/:id", (req, res) => {
  var condition = "id = " + req.params.id;
  burgers.delete(condition, function(result) {
    if (results.effectedRows === 0) {return res.status(404).end(); } else { res.status(200).end(); }
  });
});

module.exports = router;

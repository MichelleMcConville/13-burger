const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    var hbsObject = { burgers: data };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (result) => {
  //burger.insertOne(req.body.burger_name, (result) => {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  var condition =  "id = " + req.params.id;
  console.log("condition", condition);
  burger.updateOne({ devoured: req.body.devoured }, condition, (result) => {
    if (result.changedRows == 0) { return res.status(404).end(); } else { res.status(200).end(); }
  })
});

// Bonus delete f(x)
router.delete("api/burgers/:id", (req, res) => {
  var condition = "id = " + req.params.id;
  burger.deleteOne(condition, (result) => {
    if (results.effectedRows === 0) {return res.status(404).end(); } else { res.status(200).end(); }
  });
});

module.exports = router;

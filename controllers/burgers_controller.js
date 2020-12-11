const express = require("express");

const router = express.Router();

// Import the model to use its database functions
const burger = require("../models/burger.js");

// Create all routes & set up logic within those routes where required
router.get("/", (req, res) => {
  burger.selectAll(function (data) {
    const hbrObj = { burgers: data };
    console.log(hbrObj);
    res.render("index", hbrObj);
  });
});

router.post("/api/burger", (req, res) => {
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
    res.json({ id: result.insertID });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.updateOne({ devoured: req.body.devoured }, condition, function (result) {
    if (result.changedRows == 0) { return res.status(404).end(); } else { res.status(200).end(); }
  });
});

// Optional delete f(x)
// router.delete("api/burgers/:id", (req, res) => {
//   const condition = "id = " + req.params.id;
//   burgers.delete(condition, function(results) {
//     if (results.effectedRows === 0) {return res.status(404).end(); } else { res.status(200).end(); }
//   });
// });

// Export routes for server.js to use
module.exports = router;

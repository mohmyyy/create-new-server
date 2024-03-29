const express = require("express");

const path = require("path");

const rootDir = require("../util/path");

const router = express.Router(); //this router is like a mini express app pluggable to the other express app, which we can export.

router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;

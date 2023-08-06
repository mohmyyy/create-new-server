const path = require("path");
const express = require("express");

const router = express.Router();

const rootDir = require("../util/path");

router.get("/", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  // __dirname => this is a global var which simply hold absolute path on our OS to this project folder.
  // we're using path join because this will automatically build the path in a way that works on bth linux and windows because on linux we have path like - /user/products and on windows we use \user\products because therefore if we manually constaruct with slashes it wont work on windows or linux
  // next();
});

module.exports = router;

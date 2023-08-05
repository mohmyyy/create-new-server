const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("<h3>i am on root page</h3>");
  // next();
});

module.exports = router;

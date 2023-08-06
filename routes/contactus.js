const express = require("express");

const path = require("path");

const rootDir = require("../util/path");

const routes = express.Router();

routes.get("/contactus", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
});

routes.post("success", (req, res, next) => {
  res.redirect("/success");
});

module.exports = routes;

const express = require("express");

const path = require("path");

const rootDir = require("../util/path");

const routes = express.Router();
const contactusController = require("../controllers/contactus");

routes.get("/contactus", contactusController.getContact);

routes.post("success", contactusController.postContact);

module.exports = routes;

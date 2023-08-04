const http = require("http");

const express = require("express");

const app = express();
app.use((req, res, next) => {
  next();
});

app.use((req, res, next) => {
  res.send({ key1: "value" });
  // res.send("<h3>Hello</h3>");
});

const server = http.createServer(app);
server.listen(3000);

// npm install --save ----> used to save the package for development purpose.
// npm install --save-dev ----> used to save the package required for the application run.

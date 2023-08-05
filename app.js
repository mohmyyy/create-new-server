const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
// app.use(express.json());
app.use(express.urlencoded());

app.use("/admin", adminRoutes);

app.use("/shop", shopRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .send('<h1>Page Not Fount</h1> <a href="/"> Go to home page <a>');
});

app.listen(3000);

// npm install --save ----> used to save the package for development purpose.
// npm install --save-dev ----> used to save the package required for the application run.

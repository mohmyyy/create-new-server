const express = require("express");
const path = require("path");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactusRoutes = require("./routes/contactus");
// app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use(contactusRoutes);
app.use(shopRoutes);
// app.use("/success", successRoutes);
const sucessController = require("./controllers/sucess");

app.use("/success", sucessController.getSuccess);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);

// npm install --save ----> used to save the package for development purpose.
// npm install --save-dev ----> used to save the package required for the application run.

const express = require("express");

const app = express();

// app.use(express.json());
app.use(express.urlencoded());

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" placeholder="product Title"><input type="text" name="size" placeholder="product size"><button tpe="submit">Add Product</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h3>i am on root page</h3>");
  // next();
});

app.use((req, res, next) => {
  // res.send("<h3>Hello</h3>");
});

// const server = h ttp.createServer(app);

app.listen(3000);

// npm install --save ----> used to save the package for development purpose.
// npm install --save-dev ----> used to save the package required for the application run.

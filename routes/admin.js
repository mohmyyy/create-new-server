const express = require("express");

const router = express.Router(); //this router is like a mini express app pluggable to the other express app, which we can export.

router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/product" method="POST"><input type="text" name="title" placeholder="product Title"><input type="text" name="size" placeholder="product size"><button tpe="submit">Add Product</button></form>'
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;

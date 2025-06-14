const express = require("express");
const router = express.Router();

let products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 }
];


router.get("/", (req, res) => {
  res.json(products);
});


router.get("/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (product) res.json(product);
  else res.status(404).json({ message: "Product not found" });
});


router.post("/", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

router.put("/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (product) {
    if (req.body.name) product.name = req.body.name;
    if (req.body.price) product.price = req.body.price;
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});


router.delete("/:id", (req, res) => {
  const index = products.findIndex(p => p.id == req.params.id);
  if (index !== -1) {
    products.splice(index, 1);
    res.json({ message: "Product deleted" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

module.exports = router;

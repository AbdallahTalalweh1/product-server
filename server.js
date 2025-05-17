const express = require("express");
const app = express();
const productRoutes = require("./routes/products");

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});

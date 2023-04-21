const express = require("express");
const dbConnect = require("./dbConnect");
const app = express();
app.use(express.json());
const productsController = require("./controllers/productsController");
const Product = require("./models/ProductModel");
const port = 4000;

//api to save all data to the database(data fetched from an external api into my database)
app.get("/products", productsController.fetchData);

//api to get all data from database
app.get("/allProducts", async (req, res) => {
  try {
    let result = await Product.find();
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});

// api to find data based on search filters
app.get("/search/:key", async (req, res) => {
  let result = await Product.find({
    $or: [
      { title: { $regex: req.params.key } },
      { description: { $regex: req.params.key } },
      { price: { $regex: req.params.key } },
    ],
  });
  res.send(result);
});

app.get("/", async (req, res) => {
  res.send("Hello from server");
});

dbConnect();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

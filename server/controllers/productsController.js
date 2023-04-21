const Product = require("../models/ProductModel");

//Fetching data from an external api into my database
const fetchData = async (req, res) => {
  try {
    const result = await fetch("https://api.escuelajs.co/api/v1/products");
    const resData = await result.json();
    resData.map(async (item) => {
      await Product.create({
        title: item.title,
        price: item.price,
        description: item.description,
        image: item.images[0],
      });
    });
    res.send("title");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { fetchData };

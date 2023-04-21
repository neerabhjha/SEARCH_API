const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("products", productSchema);

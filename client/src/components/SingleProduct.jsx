import React from "react";
import { Card } from "antd";
import "../stylesheets/SingleProduct.css";

function SingleProduct({ product }) {
  //returning a card with image title description and price of the product
  return (
    <Card
      className="div-card"
      hoverable
      cover={
        <img className="productImg" src={product.image} alt={product.title} />
      }
    >
      <div className="product-info">
        <h3> {product.title}</h3>
        <p className="margin-top">{product.description}</p>
        <h4 className="margin-top">Rs.{product.price}/-</h4>
      </div>
    </Card>
  );
}

export default SingleProduct;

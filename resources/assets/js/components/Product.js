import React from "react";

const Product = ({ product }) => {
  const divStyle = {};

  if (!product) {
    return <div style={divStyle}>Product doenst exist</div>;
  }

  return (
    <div style={divStyle}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>Status {product.availibility ? "Available" : "Our of stock"}</h3>
      <h3>Price: {product.price}</h3>
    </div>
  );
};

export default Product;

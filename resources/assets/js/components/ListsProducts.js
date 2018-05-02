import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Product from "./Product";

class ListsProducts extends Component {
  constructor() {
    super();
    //initialize the state in the constructor
    this.state = {
      products: [],
      currentProduct: null
    };
  }
  componentDidMount() {
    axios.get("/api/products").then(response => {
      this.setState({ products: response.data });
    });
  }

  renderProducts() {
    return this.state.products.map(product => {
      return (
        <li onClick={() => this.handleClick(product)} key={product.id}>
          {product.title}
        </li>
      );
    });
  }
  handleClick(product) {
    this.setState({ currentProduct: product });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h3>All products</h3>
          <ul>{this.renderProducts()}</ul>
        </div>
        <div className="col-md-6">
          <Product product={this.state.currentProduct} />
        </div>
      </div>
    );
  }
}

if (document.getElementById("list-products")) {
  ReactDOM.render(<ListsProducts />, document.getElementById("list-products"));
}

import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Product from "./Product";
import AddProduct from "./AddProduct";

class ListsProducts extends Component {
  constructor() {
    super();
    //initialize the state in the constructor
    this.state = {
      products: [],
      currentProduct: null
    };
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
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

  handleAddProduct(product) {
    product.price = Number(product.price);
    axios
      .post("/api/products/", product)
      .then(response => {
        this.setState(prevState => ({
          products: prevState.products.concat(response.data),
          currentProduct: response.data
        }));
      })
      .then(data => {});
  }

  handleDelete() {
    const currentProduct = this.state.currentProduct;
    axios.delete("/api/products/" + currentProduct.id).then(response => {
      var array = this.state.products.filter(function(item) {
        return item !== currentProduct;
      });

      this.setState({ products: array, currentProduct: null });
    });
  }

  handleUpdate(product) {
    const currentProduct = this.state.currentProduct;
    axios.put("/api/products/" + currentProduct.id, product).then(response => {
      var array = this.state.products.filter(function(item) {
        return item !== currentProduct;
      });
      this.setState(prevState => ({
        products: array.concat(product),
        currentProduct: product
      }));
    });
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
          <AddProduct onAdd={this.handleAddProduct} />
        </div>
      </div>
    );
  }
}

if (document.getElementById("list-products")) {
  ReactDOM.render(<ListsProducts />, document.getElementById("list-products"));
}

import React, { Component } from "react";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProduct: {
        title: "",
        description: "",
        price: 0,
        availibility: 0
      }
    };
    //Boilerplate code for binding methods withc 'this'
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  //this method dynamically accepts inputs and stores it in the state
  handleInput(key, e) {
    let state = Object.assign({}, this.state.newProduct);
    state[key] = e.target.value;
    this.setState({ newProduct: state });
  }
  //this method is invoked when submit button is prossed
  handleSubmit(e) {
    e.preventDefault();
    /**
     * A call back to the add props the current state is passe as a param
     */
    this.props.onAdd(this.state.newProduct);
  }

  render() {
    const divStyle = {};
    return (
      <div>
        <h2>Add new Product</h2>
        <div style={divStyle}>
          <form onSubmit={this.handleSubmit}>
            <label>
              Title:
              <input type="text" onChange={e => this.handleInput("title", e)} />
            </label>

            <label>
              Description:
              <input
                type="text"
                onChange={e => this.handleInput("description", e)}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddProduct;

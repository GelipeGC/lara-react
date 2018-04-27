import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    let count = this.state.count;
    count++;
    this.setState({ count: count });
  }

  decrement() {
    let count = this.state.count;
    count--;
    this.setState({ count: count });
  }
  render() {
    return (
      <div className="container">
        <span>{this.state.count}</span>
        <button onClick={this.increment} className="btn btn-primary">
          +
        </button>
        <button onClick={this.decrement} className="btn btn-danger">
          -
        </button>
      </div>
    );
  }
}
if (document.getElementById("counter")) {
  ReactDOM.render(<Counter />, document.getElementById("counter"));
}

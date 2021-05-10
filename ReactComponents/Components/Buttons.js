import React, { Component } from "react";

class Buttons extends Component {
  state = { count: 0 };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleHello() {
    alert("Hello Member!");
  }
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  handleWelcome(welcome) {
    alert("Welcome");
  }
  handleClickOnMe() {
    alert("I was clicked");
  }
  render() {
    return (
      <div style={{ textAlign: "left" }}>
        <span>{this.state.count}</span> <br></br>
        <button
          onClick={() => {
            this.handleIncrement();
            this.handleHello();
          }}
        >
          Increment
        </button>
        <br></br>
        <button onClick={this.handleDecrement}>Decrement</button>
        <br></br>
        <button onClick={this.handleWelcome}>Say Welcome</button>
        <br></br>
        <button onClick={this.handleClickOnMe}>Click on me</button>
      </div>
    );
  }
}

export default Buttons;
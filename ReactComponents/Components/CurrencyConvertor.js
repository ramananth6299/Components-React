import React, { Component } from "react";

class CurrencyConvertor extends Component {
  state = {};
  handleSubmit = () => {
    
    const x = this.state.amount;
    const curr = this.state.currency;
    let ans = 0;
    
    if(curr === "euro"){
      ans = x*88.67;
    }else if(curr === "dollar"){
      ans = x*100;
    }
    
    alert("Converting to "+ `${curr}`+ "Amount is "+ `${ans}`);
    
  };
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ [e.target.currency]: e.target.value });
  };
  render() {
    return (
      <div style={{ textAlign: "left" }}>
        <h1 style={{ color: "green", textAlign: "left" }}>
          Currency Convertor!!!
        </h1>
        <table>
          <tr>
            <td>
              <label>Amount </label>
            </td>
            <td>
              <input
                type="textbox"
                name="amount"
                onChange={this.handleInputChange}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>Currency </label>
            </td>
            <td>
              <input type="textbox"
              name="currency"
              onChange={this.handleInputChange}></input>
            </td>
          </tr>
          <tr>
            <td>
            </td>
            <td>
            <button onClick={this.handleSubmit}>Submit</button>
            </td>
          </tr>
        </table>
        
      </div>
    );
  }
}

export default CurrencyConvertor;
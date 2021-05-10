import React from "react";

export class ListofIndianPlayers extends React.Component {
  render() {
    return (
      <ul>
        {this.props.IndianPlayers.map((item) => {
          return <li>Mr. {item}</li>;
        })}
      </ul>
    );
  }
}
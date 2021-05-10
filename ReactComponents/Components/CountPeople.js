import React from "react";

export class CountPeople extends React.Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0,
      c: 0,
    };
  }

  updateEntry = () => {
    this.setState((prevState, props) => ({
      entrycount: prevState.entrycount + 1,
    }));
  };

  updateExit = () => {
    this.setState((prevState, props) => ({
      exitcount: prevState.exitcount + 1,
    }));
  };
  render() {
    return (
      <div style={{ padding: "10px" }}>
        <table>
          <tr>
            <td>
              <button
                style={{ backgroundColor: "#90EE90" }}
                onClick={this.updateEntry}
              >
                Login
              </button>
              <p>{this.state.entrycount} People Entered!!</p>
            </td>
            <td>
              <button
                style={{ backgroundColor: "#90EE90" }}
                onClick={this.updateExit}
              >
                Exit
              </button>
              <p>{this.state.exitcount} People Left!!</p>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
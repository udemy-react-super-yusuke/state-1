import React from "react";
import { render } from "react-dom";

import "./App.css";

class H2O extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 15 };
  }

  getH2Ostate(temp) {
    if (temp <= 0) {
      return "ice";
    }

    if (100 <= temp) {
      return "steam";
    }

    return "water";
  }

  render() {
    const H2Ostate = this.getH2Ostate(this.state.temp);

    return (
      <div>
        <div className={this.getH2Ostate(this.state.temp)}>
          {H2Ostate} temp:{this.state.temp} ℃
        </div>
        <button onClick={this.onClickPlus}>+1</button>
        <button onClick={this.onClickPlus10}>+10</button>
        <button onClick={this.onClickMinus}>-1</button>
        <button onClick={this.onClickMinus10}>-10</button>
      </div>
    );
  }

  onClickPlus = () => {
    this.setState({ temp: this.state.temp + 1 });
  };

  onClickPlus10 = () => {
    this.setState({ temp: this.state.temp + 10 });
  };

  onClickMinus = () => {
    this.setState({ temp: this.state.temp - 1 });
  };

  onClickMinus10 = () => {
    this.setState({ temp: this.state.temp - 10 });
  };
}

render([<H2O />, <H2O />, <H2O />], document.getElementById("root"));

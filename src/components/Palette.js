import React, { Component } from "react";

import "./Palette.css";

import NavBar from "./NavBar";
import BoxColor from "./BoxColor";

class Palette extends Component {
  state = { level: 500 };

  changeLevel = (level) => {
    this.setState({ level });
  };

  render() {
    const { palette } = this.props;
    const { level } = this.state;

    const colorBoxes = palette.colors[level].map((color) => (
      <BoxColor background={color.hex} name={color.name} />
    ));

    return (
      <div className="Palette">
        <NavBar level={level} changeLevel={this.changeLevel} />
        <div className="palette-colors">{colorBoxes}</div>
        <footer>OK</footer>
      </div>
    );
  }
}

export default Palette;

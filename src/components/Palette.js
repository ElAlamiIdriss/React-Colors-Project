import React, { Component } from "react";
import "./Palette.css";

import BoxColor from "./BoxColor";

class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color) => (
      <BoxColor background={color.color} name={color.name} />
    ));

    return (
      <div className="Palette">
        <h1 className="palette-title">Palette</h1>
        <div className="palette-colors">{colorBoxes}</div>
        <footer>OK</footer>
      </div>
    );
  }
}

export default Palette;

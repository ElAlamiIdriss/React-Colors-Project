import React, { Component } from "react";
import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import "./Palette.css";

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
        <div className="slider">
          <Slider
            min={100}
            max={900}
            step={100}
            value={level}
            onChange={this.changeLevel}
          />
        </div>

        <h1 className="palette-title">Palette</h1>
        <div className="palette-colors">{colorBoxes}</div>
        <footer>OK</footer>
      </div>
    );
  }
}

export default Palette;

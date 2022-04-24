import React, { Component } from "react";

import "./Palette.css";

import NavBar from "./NavBar";
import BoxColor from "./BoxColor";

class Palette extends Component {
  state = { level: 500, format: "hex" };

  changeLevel = (level) => {
    this.setState({ level });
  };

  changeFormat = (format) => {
    this.setState({ format });
  };

  render() {
    const { palette } = this.props;
    const { level, format } = this.state;

    const colorBoxes = palette.colors[level].map((color) => {
      console.log(format);
      return <BoxColor background={color[format]} name={color.name} />;
    });

    console.log(format);

    return (
      <div className="Palette">
        <NavBar
          level={level}
          format={format}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
        />
        <div className="palette-colors">{colorBoxes}</div>
        <footer>OK</footer>
      </div>
    );
  }
}

export default Palette;

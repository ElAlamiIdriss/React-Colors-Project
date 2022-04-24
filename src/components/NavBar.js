import React, { Component } from "react";
import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    const { level, changeLevel } = this.props;

    return (
      <div className="NavBar">
        <div className="logo">
          <a href="#">reactpickercolor</a>
        </div>
        <div className="slider-container">
          <span>level {level}</span>
          <div className="slider">
            <Slider
              min={100}
              max={900}
              step={100}
              value={level}
              onChange={changeLevel}
            />
          </div>
        </div>
        <div className="colors">colors</div>
      </div>
    );
  }
}

export default NavBar;

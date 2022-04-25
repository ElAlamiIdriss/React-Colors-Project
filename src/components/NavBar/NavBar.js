import React, { Component } from "react";
import Slider from "rc-slider";
import { Link } from "react-router-dom";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "rc-slider/assets/index.css";
import "./NavBar.css";

class NavBar extends Component {
  handleChange = (e) => {
    this.props.changeFormat(e.target.value);
  };

  render() {
    const { level, format, changeLevel } = this.props;

    return (
      <div className="NavBar">
        <div className="logo">
          <Link to="/">reactpickercolor</Link>
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

        <div className="select-container">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="format" style={{ fontWeight: "700" }}>
              format
            </InputLabel>
            <Select
              id="format"
              value={format}
              onChange={this.handleChange}
              style={{
                fontWeight: "500",
                fontSize: "1.1rem",
                marginTop: "0.8rem",
              }}
            >
              <MenuItem value={"hex"}>HEX</MenuItem>
              <MenuItem value={"rgb"}>RGB</MenuItem>
              <MenuItem value={"rgba"}>RGBA</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default NavBar;

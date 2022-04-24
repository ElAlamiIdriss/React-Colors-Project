import React, { Component } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import "./Palette.css";

import NavBar from "./NavBar";
import BoxColor from "./BoxColor";

class Palette extends Component {
  state = { level: 500, format: "hex", openSnackbar: false };

  changeLevel = (level) => {
    this.setState({ level });
  };

  changeFormat = (format) => {
    this.setState({ format, openSnackbar: true });
  };

  closeSnackBar = () => {
    this.setState({ openSnackbar: false });
  };

  render() {
    const { palette } = this.props;
    const { level, format, openSnackbar } = this.state;

    const colorBoxes = palette.colors[level].map((color) => (
      <BoxColor background={color[format]} name={color.name} key={color.id} />
    ));

    return (
      <div className="Palette">
        <NavBar
          level={level}
          format={format}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
        />
        <div className="palette-colors">{colorBoxes}</div>
        <footer className="footer">
          {palette.paletteName}{" "}
          <span className="footer-emoji">{palette.emoji}</span>
        </footer>

        {/* Snack Bar for format*/}
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={openSnackbar}
          autoHideDuration={1000}
          onClose={this.closeSnackBar}
          message={
            <span id="message-id" className="snack-bar-message">
              Format Changed to {format.toUpperCase()}
            </span>
          }
          ContentProps={{ "aria-describedby": "message-id" }}
          action={
            <IconButton
              onClick={this.closeSnackBar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          }
        />
      </div>
    );
  }
}

export default Palette;

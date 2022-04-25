import React, { Component } from "react";
import { Link } from "react-router-dom";
import seedColors from "../../data/seedColors";

class PaletteList extends Component {
  render() {
    return (
      <div className="PaletteList">
        {seedColors.map((palette) => {
          return (
            <p>
              <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
            </p>
          );
        })}
      </div>
    );
  }
}

export default PaletteList;

import React, { Component } from "react";
import "./App.css";

import { generatePalette } from "./helpers/ColorHelpers";

import Palette from "./components/Palette";
import seedColors from "./seedColors";

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));

    return (
      <div className="App">
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}

export default App;

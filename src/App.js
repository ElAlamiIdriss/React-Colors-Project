import React, { Component } from "react";
import "./App.css";

import { generatePalette } from "./helpers/ColorHelpers";
import seedColors from "./seedColors";

import Palette from "./components/Palette";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;

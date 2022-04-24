import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import { generatePalette } from "./helpers/ColorHelpers";
import seedColors from "./data/seedColors";

import Palette from "./components/Palette/Palette";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route
            path="/palette"
            element={<Palette palette={generatePalette(seedColors[1])} />}
          />
        </Routes>
        {/* <Palette palette={generatePalette(seedColors[1])} /> */}
      </div>
    );
  }
}

export default App;

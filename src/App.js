import React, { Component } from "react";
import { Route, Routes, Navigate, useParams } from "react-router-dom";
import "./App.css";

import { generatePalette } from "./helpers/ColorHelpers";
import seedColors from "./data/seedColors";

import HomePage from "./components/HomePage/HomePage";
import Palette from "./components/Palette/Palette";

class App extends Component {
  render() {
    const PaletteWrapper = () => {
      const params = useParams();
      const palette = seedColors.find((palette) => palette.id === params.id);
      return <Palette palette={generatePalette(palette)} />;
    };

    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/palette/:id" element={<PaletteWrapper />} />
        </Routes>
      </div>
    );
  }
}

export default App;

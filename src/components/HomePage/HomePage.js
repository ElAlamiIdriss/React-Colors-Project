import React, { Component } from "react";
import PaletteList from "../PaletteList/PaletteList";

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <h1>react colors</h1>
        <PaletteList />
      </div>
    );
  }
}

export default HomePage;

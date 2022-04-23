import React, { Component } from "react";
import "./BoxColor.css";

class BoxColor extends Component {
  render() {
    return (
      <div className="BoxColor" style={{ background: this.props.background }}>
        <h1>{this.props.name}</h1>
        <span>more</span>
      </div>
    );
  }
}

export default BoxColor;

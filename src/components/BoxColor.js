import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./BoxColor.css";

class BoxColor extends Component {
  render() {
    const { background, name } = this.props;

    return (
      <CopyToClipboard text={background}>
        <div className="BoxColor" style={{ background }}>
          <p className="box-color_text">{name}</p>
          <span className="see-more">more</span>
          <button className="copy-btn">copy</button>
        </div>
      </CopyToClipboard>
    );
  }
}

export default BoxColor;

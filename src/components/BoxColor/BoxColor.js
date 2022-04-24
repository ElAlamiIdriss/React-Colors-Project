import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./BoxColor.css";

class BoxColor extends Component {
  state = { copied: false };

  handleCopyChange = () => {
    this.setState({ copied: true }, () =>
      setTimeout(() => this.setState({ copied: false }), 1000)
    );
  };

  render() {
    const { background, name } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.handleCopyChange}>
        <div className="BoxColor" style={{ background }}>
          <div
            className={`copy-overlay ${copied && "show"}`}
            style={{ background }}
          ></div>

          <div className={`copy-text ${copied && "show"}`}>
            <h2>copied !!</h2>
            <p>{background}</p>
          </div>

          <p className="box-color_text">{name}</p>

          <span className="see-more">more</span>

          <button className="copy-btn">copy</button>
        </div>
      </CopyToClipboard>
    );
  }
}

export default BoxColor;

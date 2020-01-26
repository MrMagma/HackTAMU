import React, { Component } from "react";
import logo from "./logo.png";

class Load extends Component {
  loadStyle = {
    backgroundColor: "#282828",
    color: "white",
    textAlign: "center",
    opacity: this.props.opacity
  };

  imageStyle = {
    marginTop: "30%",
    width: "60%",
    height: "auto"
  };

  render() {
    return (
      <div style={this.loadStyle}>
        <img style={this.imageStyle} src={logo} alt="failed to load"></img>
      </div>
    );
  }
}

export default Load;

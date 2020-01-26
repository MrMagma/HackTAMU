import React, { Component } from "react";
import { Line, Circle } from "rc-progress";

class Results extends Component {
  displayTopEmotions(i) {
    let red = (1 - i.value) * 255;
    let green = i.value * 255;
    let rgb = "rgb(" + red + "," + green + ",50)";

    const lowBound = Math.pow(0.5, 1.5);
    let scalar = Math.pow(i.value, 1.5);
    if (scalar < lowBound) scalar = lowBound;

    const emotionStyle = {
      fontSize: 50 * scalar,
      color: rgb
    };
    if (i.value < 0.1) return;

    const lineStyle = {
      width: "90%"
    };

    let name = i.name;
    if (name == "happiness")
      name = "happy"

    return (
      <div style={emotionStyle}>
        <div onClick={this.handleClick()}>
          {name} {Math.round(i.value * 100)}%
        </div>
        <br></br>
        <Line
          percent={i.value * 100}
          strokeWidth="2"
          trailWidth="2"
          strokeColor={rgb}
          trailColor="#282828"
          strokeLinecap="square"
          style={lineStyle}
        />
      </div>
    );
  }

  handleClick() {}

  render() {
    const resultsStyle = {
      backgroundColor: "#282828",
      textAlign: "center",
      padding: "5%",
      lineHeight: "90%",
      position: "absolute",
      bottom: 0,
      height: "12em",
      width: "100%"
    };

    console.log("Props emotions: ", this.props.emotions)
    if (this.props.emotions[0] == null) {
      return <div style={resultsStyle}></div>;
    }

    return (
      <div style={resultsStyle} className="container">
        <div>{this.displayTopEmotions(this.props.emotions[0])}</div>
        <br></br>
        <div>{this.displayTopEmotions(this.props.emotions[1])}</div>
        <br></br>
        <div>{this.displayTopEmotions(this.props.emotions[2])}</div>
        <br></br>
      </div>
    );
  }
}
export default Results;

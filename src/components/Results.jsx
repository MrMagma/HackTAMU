import React, { Component } from "react";
import { Line, Circle } from "rc-progress";
import "bootstrap/dist/css/bootstrap.css";

class Results extends Component {
  getSortedEmotions() {
    var emotionsList = [];
    let emotions = Object.keys(this.props.emotions);
    for (let i = 0; i < emotions.length; i++) {
      let emotion = {};
      emotion.name = emotions[i];
      emotion.value = this.props.emotions[emotions[i]];
      emotionsList.push(emotion);
    }
    emotionsList.sort((a, b) => {
      if (a.value > b.value) return -1;
      return 1;
    });
    let topThree = [];
    for (let i = 0; i < 3; i++) {
      topThree.push(emotionsList[i]);
    }
    return topThree;
  }

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

    return (
      <div style={emotionStyle}>
        <div onClick={this.handleClick()}>
          {i.name} {Math.round(i.value * 100)}%
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
      height: "15em",
      width: "100%"
    };
    if (this.props.emotions == null) {
      return <div style={resultsStyle}></div>;
    }
    let topEmotions = this.getSortedEmotions();

    return (
      <div style={resultsStyle} className="container">
        <div>{this.displayTopEmotions(topEmotions[0])}</div>
        <br></br>
        <div>{this.displayTopEmotions(topEmotions[1])}</div>
        <br></br>
        <div>{this.displayTopEmotions(topEmotions[2])}</div>
        <br></br>
      </div>
    );
  }
}
export default Results;

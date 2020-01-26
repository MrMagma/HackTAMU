import React, { Component } from "react";

class Results extends Component {
  getSortedEmotions() {
    var emotionsList = [];
    let emotions = Object.keys(this.props.emotions);
    for (let i = 0; i < emotions.length; i++) {
      console.log(i, emotions[i]);
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
    console.log(rgb);

    const lowBound = Math.pow(0.5, 1.5);
    let scalar = Math.pow(i.value, 1.5);
    if (scalar < lowBound) scalar = lowBound;
    const emotionStyle = {
      fontSize: 50 * scalar,
      color: rgb
    };
    if (i.value < 0.1) return;
    return (
      <div style={emotionStyle}>
        {i.name} {i.value}
      </div>
    );
  }

  render() {
    let topEmotions = this.getSortedEmotions();
    const resultsStyle = {
      backgroundColor: "#282828",
      textAlign: "center"
    };
    return (
      <div style={resultsStyle}>
        <div>{this.displayTopEmotions(topEmotions[0])}</div>
        <div>{this.displayTopEmotions(topEmotions[1])}</div>
        <div>{this.displayTopEmotions(topEmotions[2])}</div>
      </div>
    );
  }
}
export default Results;

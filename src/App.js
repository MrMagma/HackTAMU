import React from "react";
import "./App.css";
import Info from "./components/Info";
import CameraView from "./components/CameraView";
import Results from "./components/Results";

const emotions = {
  anger: 0.06484969587,
  contempt: 0.0247392,
  disgust: 0.0367696,
  fear: 0.2,
  happiness: 0.8,
  neutral: 0.0,
  sadness: 0.0,
  surprise: 0.0
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <Results emotions={emotions}></Results>
      </div>
    );
  }
}

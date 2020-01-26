import React from "react";
import "./App.css";
import Info from "./components/Info";
import CameraView from "./components/CameraView";
import Results from "./components/Results";

import controller from "./controller.js";

const emotions = {
  Angry: 0.1,
  Happiness: 0.0,
  Sadness: 0.1,
  Contempt: 0.9,
  emotion5: 0.1
};
// const emotions = null;

export default class App extends React.Component {
  state = {
    data: {
      name: "",
      id: "",
      emotion: "",
      notes: ""
    }
  };

  render() {
    return (
      <div>
        <CameraView></CameraView>
        <br></br>
        <Info data={this.state.data}></Info>
        <Results emotions={emotions} />
      </div>
    );
  }

  componentDidMount() {
    controller.onEmoteReceived(data => {
      this.setState({ data: data });
    });
  }
}

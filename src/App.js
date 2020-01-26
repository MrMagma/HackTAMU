import React from "react";
import "./App.css";
import Info from "./components/Info";
import CameraView from "./components/CameraView";
import Results from "./components/Results";

import controller from "./controller.js";
import data from "./data.json";

export default class App extends React.Component {
    state = {
        name: "",
        id: "",
        emotions: {
            Angry: 0.1,
            Happiness: 0.0,
            Sadness: 0.1,
            Contempt: 0.9,
            emotion5: 0.1
        },
        notes: ""
    };

    static getDerivedStateFromProps(props, state) {
        return {
            emotions: Object.keys(state.emotions)
                .sort((a, b) => (state.emotions[b] - state.emotions[a]))
                .map(key => { return { name: key, value: data.emotionMap[state.emotions[key]] }; })
        };
    }

    render() {
        console.log(this.state);
        return (
        <div>
            <CameraView></CameraView>
            <Info data={this.state}></Info>
            <Results emotions={this.state.emotions} />
        </div>
        );
    }

    componentDidMount() {
        controller.onEmoteReceived(data => {
            this.setState(data);
        });
    }
}

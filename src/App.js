import React from "react";
import "./App.css";
import Info from "./components/Info";
import CameraView from "./components/CameraView";
import Results from "./components/Results";
import Quiz from "./components/Quiz"

import controller from "./controller.js";
import data from "./data.json";
import Navbar from "./components/Navbar";

export default class App extends React.Component {
    state = {
        name: "",
        id: "a",
        mode: "defakklt",
        guessEmotion: "",
        emotions: {
            Angry: 0.1,
            Happiness: 0.0,
            Sadness: 0.1,
            Happiness: 0.9,
            emotion5: 0.1
        },

        notes: ""
    };

    static getDerivedStateFromProps(props, state) {
        return {
            emotions: Object.keys(state.emotions)
                .sort((a, b) => (state.emotions[b] - state.emotions[a]))
                .map(key => { return { name: key, value: state.emotions[key] }; })
        };
    }

    renderMenu() {
        if (this.state.mode == "default")
            return <Results emotions={this.state.emotions} />;
        else
            return (
                <Quiz
                    onClick={this.handleEmotionChange}
                    emotions={this.state.emotions}
                    result={this.state.guessEmotion === this.state.emotions[0] ? "win" : "waiting"}
                    correct={this.state.emotions[0]}
                ></Quiz>
            );
    }

    handleEmotionChange = emotion => {
        this.setState({ guessEmotion: emotion });
    };

    render() {
        console.log(this.state);
        return (
        <div>
            <CameraView></CameraView>
            <Info data={this.state}></Info>
            <Navbar></Navbar>
            {this.renderMenu()}
        </div>
        );
    }

    componentDidMount() {
        controller.onEmoteReceived(data => {
            this.setState({ emotions: data });
        });
    }
}

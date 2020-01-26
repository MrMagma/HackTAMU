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
            "anger": null,
            "contempt": null,
            "disgust": null,
            "fear": null,
            "happiness": null,
            "neutral": null,
            "sadness": null,
            "surprise": null,
        },
        notes: ""
    };

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

    handleModeChange = () => {
        let newMode;
        if (this.state.mode == "default") 
            newMode = "quiz"
        else
            newMode = "default"
        this.setState({mode: newMode})
    }

    render() {
        console.log(this.state);
        return (
        <div>
            <CameraView></CameraView>
            <Info data={this.state}></Info>
            <Navbar onClick={this.handleModeChange}></Navbar>
            {this.renderMenu()}
        </div>
        );
    }

    componentDidMount() {
        controller.onEmoteReceived(data => {
            this.setState({ emotions: Object.keys(data)
                .sort((a, b) => (data[b] - data[a]))
                .map(key => { return { name: key, value: data[key] }; }) });
        });
    }
}

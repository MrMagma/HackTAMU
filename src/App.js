import React from 'react';
import './App.css';
import Info from './components/Info';
import CameraView from './components/CameraView';

import controller from "./controller.js";

export default class App extends React.Component {
    state = {
        data: {
            name: "",
            id: "",
            emotion: "",
            notes: ""
        }
    }

    render() {
        return <div>
            <CameraView></CameraView>
            <Info data={this.state.data}></Info>
        </div>
    }
    componentDidMount() {
        controller.onEmoteReceived((data) => {
            this.setState({ data: data });
        })
    }
};

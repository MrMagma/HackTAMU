import React from 'react';
import './CameraView.css';

export default class CameraView extends React.Component {
    render() {
        return <div className="camera-view">
            <video
                autoPlay
                id="camera-output"
                class="camera-output"
            ></video>
        </div>
    }
    componentDidMount() {
        const video = document.getElementById("camera-output");

        navigator.mediaDevices.getUserMedia({
            video: true
        }).then((stream) => { video.srcObject = stream; })
    }
}
import React from 'react';
import './CameraView.css';

import controller from "../controller.js";

const WIDTH = 800;
const HEIGHT = 800;

let video, canvas;

export default class CameraView extends React.Component {
    render() {
        return <div className="camera-view">
            <video
                autoPlay
                id="camera-output"
                className="camera-output"
            ></video>
            <canvas id="image-output" className="image-output"></canvas>
        </div>
    }
    componentDidMount() {
        canvas = document.getElementById("image-output");
        video = document.getElementById("camera-output");

        navigator.mediaDevices.getUserMedia({
            video: true
        }).then((stream) => { video.srcObject = stream; });

        video.oncanplay = () => {
            setInterval(CameraView.sendData, 3000);
        };
    }
    static sendData() {
        let context = canvas.getContext("2d");
        canvas.width = WIDTH;
        canvas.height = HEIGHT;
        context.drawImage(video, 0, 0, WIDTH, HEIGHT);
        
        canvas.toBlob(controller.sendImage, "image/jpeg");
    }
}
import React from 'react';
import './CameraView.css';

export default class CameraView extends React.Component {
    render() {
        return <div className="camera-view">
            <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            ></img>
        </div>
    }
}
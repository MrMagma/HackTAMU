import React from 'react';
import './App.css';
import Info from './components/Info';
import CameraView from './components/CameraView';

export default class App extends React.Component {
    render() {
        return <div>
            <CameraView></CameraView>
            <Info></Info>
        </div>
    }
};

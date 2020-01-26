import React from 'react';
import './App.css';
import Info from './components/Info';
import CameraView from './components/CameraView';

export default class App extends React.Component {
    render() {
        return <div>
            <CameraView></CameraView>
            <Info data={{
                name: "Bob",
                id: "aaaaaaaa",
                emotion: "Angery",
                notes: "Bob is angery"
            }}></Info>
        </div>
    }
};

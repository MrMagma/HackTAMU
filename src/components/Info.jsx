import React from 'react';
import './Info.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";

import controller from "../controller.js";

export default class Info extends React.Component {
    constructor() {
        super();

        this.state = {
            open: false,
            data: {
                name: "",
                id: "",
                emotions: ["Emotion"],
                notes: ""
            }
        }
        setInterval(() => {
            if (this.state.data.emotions.length && !this.state.open) {
                controller.getNotes(this.state.data.emotions[0].name, (data) => {
                    if (data.length == 0) data = "{'content': ''}";
                    data = JSON.parse(data);
                    if (!this.state.open) {
                        this.state.data.notes = data.content;
                        this.forceUpdate();
                    }
                });
            }
        }, 500);

        controller.onToggleInfo(this.toggle.bind(this));
    }
    static getDerivedStateFromProps(props, state) {
        if (!state.open) {
            return {
                data: props.data
            }
        }
        
        return null;
    }
    render() {
        if (!this.state.data.emotions.length) return <div></div>;
        return <div
            className={`info-box ${this.state.open ? "open" : "closed"}`}
        >
            <div
                className="info-box-content"
            >
                <nav
                style={{
                    opacity: 0
                }}
                className="navbar navbar-light bg-light"
            >
                <img src="./logo.png" height="30" className="d-inline-block align-top float-right" alt=""></img>
            </nav>
                <div
                    className="container"
                >
                    <div
                        className="row"
                    >
                        <div
                            className="col-12"
                        >
                            <h1>
                                <input
                                    className="info-name form-control"
                                    onChange={ this.handleNameChange.bind(this) }
                                    placeholder="Name"
                                    value={ this.state.data.name }
                                ></input>
                            </h1>
                            <h2><small>{this.state.data.emotions[0].name}</small></h2>
                        </div>
                    </div>
                    <div
                        className="row"
                    >
                        <div
                            className="col-12"
                        >
                            <form>
                                <div
                                    className="form-group"
                                >
                                    <label
                                        htmlFor="person-notes"
                                    >Notes</label>
                                    <textarea
                                        className="form-control"
                                        id="person-notes"
                                        placeholder="Notes"
                                        value={ this.state.data.notes }
                                        onChange={ this.handleNotesChange.bind(this) }
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div
                        className="row"
                    >
                        <div
                            className="col-12"
                        >
                            <button
                                className="btn btn-block btn-primary"
                                disabled={!this.state.data.name.length}
                                onClick={this.handleSubmit.bind(this)}
                            >
                                Save Notes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
    toggle() {
        this.setState({open: !this.state.open});
    }
    handleSubmit() {
        controller.saveNotes(this.state.data);
        controller.toggleInfo();
    }
    handleNameChange(evt) {
        this.setState({
            data: {
                ...this.state.data,
                name: evt.target.value
            }
        });
    }
    handleNotesChange(evt) {
        this.setState({
            data: {
                ...this.state.data,
                notes: evt.target.value
            }
        })
    }
}
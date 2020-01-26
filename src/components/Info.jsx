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

        
    }
    static getDerivedStateFromProps(props, state) {
        if (props.data.id != state.data.id && !state.open) {
            return {
                data: props.data
            }
        }
        
        return null;
    }
    render() {
        return <div
            className={`info-box ${this.state.open ? "open" : "closed"}`}
        >
            <div
                className="info-box-content"
            >
                <div
                    className="container"
                >
                    <div
                        className="row"
                    >
                        <div
                            className="col close-icon"
                            style={{
                                opacity: this.state.open ? 1 : 0
                            }}
                        >
                            <FontAwesomeIcon
                                icon={ faTimes }
                                onClick={this.toggle.bind(this)}
                            ></FontAwesomeIcon>
                        </div>
                    </div>
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
                            <h2><small>{this.state.data.emotions[0]}</small></h2>
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
            <div
                className="container"
            >
                <div
                    className="row"
                >
                    <div
                        className="col-12"
                        style={{
                            display: this.state.open ? "none" : "block"
                        }}
                    >
                        <div
                            className="open-icon"
                            style={{
                                opacity: !this.state.data.id.length ? 1 : 0
                            }}
                        >
                            <FontAwesomeIcon
                                icon={ faPen }
                                onClick={ this.toggle.bind(this) }
                            ></FontAwesomeIcon>
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
        this.toggle();
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
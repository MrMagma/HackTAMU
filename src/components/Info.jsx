import React from 'react';
import './Info.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";

export default class Info extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
            nameFocused: false,
            data: {
                name: "",
                id: "",
                emotion: "Emotion",
                notes: ""
            }
        }
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
                            <h2><small>Emotion</small></h2>
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
    handleNameChange(evt) {
        this.setState({
            data: {
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
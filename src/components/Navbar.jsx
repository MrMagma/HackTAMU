import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import controller from '../controller';

export default class Navbar extends React.Component {
    state = {
        infoOpen: false
    }

    constructor() {
        super();

        controller.onToggleInfo(this.toggle.bind(this));
    }

    render() {
        return <nav
            className="navbar navbar-light bg-light"
        >
            <a
                className="navbar-brand"
                href="javascript:void(0);"
            >
                <FontAwesomeIcon
                    icon={ this.state.infoOpen ? faTimes : faPen }
                    onClick={ () => controller.toggleInfo() }
                ></FontAwesomeIcon>
            </a>
            <button onClick={this.props.onClick} className="btn btn-sm btn-primary">MODE</button>
            <img src="./logo.png" height="30" className="d-inline-block align-top float-right" alt=""></img>
        </nav>
    }
    toggle() {
        this.setState({ infoOpen: !this.state.infoOpen });
    }
}
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../NavBar.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="nav nav-pills nav-justified">
                <Link className="nav-link" to="/new">New Contact</Link>
                <Link className="nav-link" to="/">List Contacts</Link>
            </nav>
        );
    }
}

export default NavBar;

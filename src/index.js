import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactList from "./contact/ContactList";
import NavBar from "./nav/NavBar";
import ContactForm from "./contact/ContactForm";


ReactDOM.render((
    <Router>
        <div>
            <NavBar/>
            <Route exact path="/new" component={ContactForm} />
            <Route exact path="/" component={ContactList} />
        </div>
    </Router>
), document.querySelector("#root"))

registerServiceWorker();

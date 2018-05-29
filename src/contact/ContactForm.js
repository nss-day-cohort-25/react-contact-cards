import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactForm.css';
import BootstrapInput from "./BootstrapInput";

class ContactForm extends Component {
    constructor(props) {
        super(props)

        // Define initial state
        this.state = {
            firstName: "",
            lastName: "",
            emailAddress: "",
            phoneNumber: "",
        }
    }


    // Handler for changing state when user types into input field
    handleSubmit = function (evt) {
        evt.preventDefault()

        const newContactInfo = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            emailAddress: this.state.emailAddress
        }

        this.setState(prevState => ({
            firstName: "",
            lastName: "",
            phoneNumber: "",
            emailAddress: ""
        }))

        fetch("http://localhost:5000/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newContactInfo)
        })
        .then(r => r.json())
        .then(newContact => console.log(newContact))

    }.bind(this)


    // Handler for changing state when user types into input field
    handleFormFieldChange = function (evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }.bind(this)


    render() {
        return (
            <div>
                <form className="contactform" onSubmit={this.handleSubmit}>
                    <BootstrapInput val={this.state.firstName}
                        id="firstName"
                        handler={this.handleFormFieldChange}
                        placeholder="Enter your first name"
                    />
                    <BootstrapInput val={this.state.lastName}
                        id="lastName"
                        handler={this.handleFormFieldChange}
                        placeholder="Enter your last name"
                    />
                    <BootstrapInput val={this.state.emailAddress}
                        id="emailAddress"
                        handler={this.handleFormFieldChange}
                        placeholder="Enter your email address"
                    />
                    <BootstrapInput val={this.state.phoneNumber}
                        id="phoneNumber"
                        handler={this.handleFormFieldChange}
                        placeholder="Enter your phone number"
                    />

                    <button>Add Contact</button>
                </form>
            </div>
        );
    }
}

export default ContactForm;

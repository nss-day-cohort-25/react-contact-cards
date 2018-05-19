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

        // Bind event handler context to this component
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFormFieldChange = this.handleFormFieldChange.bind(this)
    }

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
    }

    handleFormFieldChange(evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value

        this.setState(stateToChange)
    }

    render() {
        return (
            <div>
                <form className="contactform" onSubmit={this.handleSubmit}>
                    <BootstrapInput val={this.state.firstName}
                        handler={this.handleFormFieldChange}
                        placeholder="Enter your first name"
                    />
                    <BootstrapInput val={this.state.lastName}
                        handler={this.handleFormFieldChange}
                        placeholder="Enter your last name"
                    />
                    <BootstrapInput val={this.state.emailAddress}
                        handler={this.handleFormFieldChange}
                        placeholder="Enter your email address"
                    />
                    <BootstrapInput val={this.state.phoneNumber}
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

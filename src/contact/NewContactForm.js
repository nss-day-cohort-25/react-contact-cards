import React, { Component } from "react";

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
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        value={this.state.firstName}
                        onChange={this.handleFormFieldChange}
                        className="form-control"
                        placeholder="Enter your first name" id="firstName" />

                    <input type="text"
                        value={this.state.lastName}
                        onChange={this.handleFormFieldChange}
                        className="form-control"
                        placeholder="Enter your last name" id="lastName" />

                    <input type="text"
                        value={this.state.phoneNumber}
                        onChange={this.handleFormFieldChange}
                        className="form-control"
                        placeholder="Enter your phoneNumber" id="phoneNumber" />

                    <input type="text"
                        value={this.state.emailAddress}
                        onChange={this.handleFormFieldChange}
                        className="form-control"
                        placeholder="Enter your email address" id="emailAddress" />

                    <button>Add Contact</button>
                </form>
            </div>
        );
    }
}

export default ContactForm;

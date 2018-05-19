import React, { Component } from 'react';
import "./ContactList.css"
import Contact from './Contact';

class ContactList extends Component {
    constructor (props) {
        super(props)

        // Create a new instance of the generator
        this.uuid = this.uuidGenerator()

        // Define initial state
        this.state = {
            contactList: [],
            remoteURL: "http://localhost:5000/contacts",
            contactLoadingMsg: "Loading contacts...",
            loadingClassName: "alert alert-info"
        }
    }

    loadContacts() {
        fetch(this.state.remoteURL).then(r => r.json()).then(contacts => {
            setTimeout(() => {
                this.setState({
                    contactList: contacts,
                    contactLoadingMsg: "",
                    loadingClassName: ""
                })
            }, 3000)
        })
    }

    componentDidMount() {
        this.loadContacts()
    }

    uuidGenerator = function* () {
        while (true) {
            let time = new Date().getTime()
            let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
                const random = (time + Math.random() * 16) % 16 | 0
                return (char === 'x' ? random : (random & 0x3 | 0x8)).toString(16)
            })
            yield uuid
        }
    }

    render() {
        return (
            <div className="contactlist">
                <div className={this.state.loadingClassName} role="alert">
                    {this.state.contactLoadingMsg}
                </div>
                {this.state.contactList.map(c => (
                    <Contact firstName={c.firstName}
                             lastName={c.lastName}
                             emailAddress={c.emailAddress}
                             phoneNumber={c.phoneNumber}
                             key={this.uuid.next().value} />
                ))}
            </div>
        );
    }
}

export default ContactList;

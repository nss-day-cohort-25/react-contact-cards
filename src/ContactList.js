import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
    constructor (props) {
        super(props)
        this.uuid = this.uuidGenerator()
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
            <div>
                {this.props.loadingMsg}
                {this.props.contactList.map(c => (
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

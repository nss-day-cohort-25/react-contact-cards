import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.contactList.map(c => (
                    <Contact firstName={c.firstName}
                            lastName={c.lastName}
                            emailAddress={c.emailAddress}
                            phoneNumber={c.phoneNumber}
                            id={c.phoneNumber} />
                ))}
            </div>
        );
    }
}

export default ContactList;

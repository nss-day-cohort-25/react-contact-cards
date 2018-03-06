import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
        <div>
            <h3>{this.props.firstName} {this.props.lastName}</h3>
            <h4>{this.props.phoneNumber}</h4>
            <h5>{this.props.emailAddress}</h5>
        </div>
    );
  }
}

export default Contact;

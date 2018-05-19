import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

class Contact extends Component {
    render() {
        return (
            <article className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.firstName} {this.props.lastName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.emailAddress}</h6>
                    <p className="card-text">{this.props.phoneNumber}</p>
                    <a href="#" className="card-link">Remove</a>
                    <a href="#" className="card-link">Edit</a>
                </div>
            </article>
    );
    }
}

export default Contact;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './Contact';
import ContactList from './ContactList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contactList: [],
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
      contactList: prevState.contactList.concat(newContactInfo)
    }))
  }

  handleChange (evt) {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value

    this.setState(stateToChange)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome, NSS students, to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 value={this.state.firstName}
                 onChange={this.handleChange}
                 placeholder="Enter your first name" id="firstName" />

          <input type="text"
                 value={this.state.lastName}
                 onChange={this.handleChange}
                 placeholder="Enter your last name" id="lastName" />

          <input type="text"
                 value={this.state.phoneNumber}
                 onChange={this.handleChange}
                 placeholder="Enter your phoneNumber" id="phoneNumber" />

          <input type="text"
                 value={this.state.emailAddress}
                 onChange={this.handleChange}
                 placeholder="Enter your email address" id="emailAddress" />


          <button>Add Contact</button>
        </form>
        <ContactList contactList={this.state.contactList} />
      </div>
    );
  }
}

export default App;

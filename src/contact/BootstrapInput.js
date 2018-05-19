import React, { Component } from "react";

class BootstrapInput extends Component {

    render() {
        return (
            <input type="text"
                value={this.props.val}
                onChange={this.props.handler}
                className="form-control"
                placeholder={this.props.placeholder} />

        );
    }
}

export default BootstrapInput;

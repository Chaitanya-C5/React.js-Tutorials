import React, { Component } from "react";

class ChildComponent extends Component {

    call = ()=> {
        this.props.changeMessage("Deo Deo diska disaka")
    }

    render() {
        return (
            <div>
            <button onClick={this.call}>Click to change message</button>
            </div>
        )
    }
}

export default ChildComponent;
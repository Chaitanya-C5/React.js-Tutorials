import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
    constructor() {
        super();
        this.state = {
            message: "Hello"
        }
    }

    changeMsg = (msg) => {
        this.setState({
            message: `Child msg: ${msg}`
        })
    }

    render() {
        return(
            <div>
            <p>{this.state.message}</p>
            <ChildComponent changeMessage={this.changeMsg}/>
            </div>
        )
    }
}

export default ParentComponent;
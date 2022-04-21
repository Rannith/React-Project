import React, { Component } from "react";
import ForwardRef from "./ForwardRef";

class ForwardRefParent extends Component {

    constructor(probs) {
        super()
        this.refInput = React.createRef();
    }

    render() {
        return (
            <div>
                <ForwardRef />
                <button onClick={this.handleClick} >Get Value</button>
            </div>
        )
    }
}

export default ForwardRefParent
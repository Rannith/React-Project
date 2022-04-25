import React, { Component } from "react";
import ForwardRef from "./ForwardRef";

class ForwardRefParent extends Component {

    constructor(probs) {
        super()
        this.refInput = React.createRef();
    }

    handleClick = () => {
        this.refInput.current.focus();
    }

    render() {
        return (
            <div>
                <ForwardRef ref={this.refInput} />
                <button onClick={this.handleClick} >Focus Input</button>
            </div>
        )
    }
}

export default ForwardRefParent
import React, { Children, Component, Fragment } from "react";

class ErrorBoundary extends Component {

    constructor(probs) {
        super(probs)

        this.state = {
            hasError : false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError : true
        }
    }

    render() {
        if(this.state.hasError) {
            return (
                <div>
                    <h3>Error : Something went wrong</h3>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
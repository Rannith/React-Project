import React, { Component } from "react";

const CounterFunction = WrappedComponent => {
    class CounterFunction extends Component {

        constructor(props) {
            super(props);

            this.state = {
                count : 0
            }
        }

        incrementCount = () => {
            this.setState(previousState => {
                return {count : previousState.count + 1}
            })
        }

        render() {
            return (
                <div>
                    <WrappedComponent count = {this.state.count} incrementCount = {this.incrementCount} />
                </div>
            )
        }
    }

    return CounterFunction
}

export default CounterFunction
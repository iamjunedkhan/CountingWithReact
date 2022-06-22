import React, { Component } from "react";
import { ThemeContext } from "./App";

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.initialState,
            amount: 1
        };
    }

    changeCounter(amount) {
        console.log('change counter');
        amount = Number(amount)
        this.setState(prevState => {
            return { counter: prevState.counter + amount }
        })

    }
    changeAmount(event) {

        console.log(this.state.amount);
        console.log('ehhloo');
        this.setState({
            amount: event.target.value
        })
    }
    render() {
        return <>
            <ThemeContext.Consumer>
                {value => {
                    return <div>
                        <button style={value} onClick={() => this.changeCounter(-this.state.amount)}>-</button>
                        <span>{this.state.counter}</span>
                        <button style={value} onClick={() => this.changeCounter(this.state.amount)} >-</button>
                        <input type="number"  onChange={this.changeAmount.bind(this)} />
                    </div>

                }}
            </ThemeContext.Consumer>
            {/* <h1>counter</h1> */}
        </>
    }


}
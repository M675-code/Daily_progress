import React,{ Component } from "react";
import logo from "./logo.svg";
import "./StateReactapp.css";

class StateReact_app extends Component{
    constructor(){
        super();

        this.state = {
            count: 0
        };

        this.incrementCounter = this.incrementCounter.bind(this);

    }

    incrementCounter(){
        let count = this.state.count;
        this.setState({
            count: ++count
        });
    }

    render(){
        return (
            <div className="StateReact_app">
                {this.state.count}  
                <div>
                    <button onClick={this.incrementCounter}> Add Counter</button> 
                </div>
            </div>
        );
    }
}

export default StateReact_app;

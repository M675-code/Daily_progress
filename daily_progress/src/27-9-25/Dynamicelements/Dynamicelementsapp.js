import React,{ Component } from "react";
import logo from "./logo.svg";
import "./Reactapp.css";

import Counter from '../Props/Counter'

class DynamicelementsReact_app extends Component{
    constructor(){
        super();

        this.state = {
            count: 0,
            fruits: ["banana","Apple","Oranges"]
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
            <ul className="DynamicelementsReact_app">
                {this.state.fruits.map((fruit, index) => {
                    return <li key={index}>{fruit}</li>
                })}    
            </ul>
        );
    }
}

export default DynamicelementsReact_app;

import React,{ Component } from "react";
import logo from "./logo.svg";
import "./Reactapp.css";

import Counter from './Props/Counter'

class PropsReact_app extends Component{
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
            <div className="PropsReact_app">
                <Counter 
                count={this.state.count} 
                incrementCounter={this.incrementCounter}
                />    
            </div>
        );
    }
}

export default PropsReact_app;

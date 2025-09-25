import React from 'react';
import ReactDOM from 'react-dom'
import './deepdivejsx.css';

class HelloWorld extends React.Component{
    getName(){
        return "Shoaib";
    }
    constructor(){
        super();
        this.name="Shoaib";
    }
    render(){
        return(
            <div>
                <section>
                    {this.name}
                </section>
                <section>
                    <input type="text" /> 
                </section>
            </div>
        )
    }
}

ReactDOM.render(<HelloWorld />,document.getElementById('root'))
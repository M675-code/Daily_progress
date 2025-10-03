import React from 'react'
import "./App.css";
import Counter from './Counter';

class App extends React.Component{
    state = {
        isMounted: true
    };

    toggleMount = () => {
        const { isMounted } = this.state;
        this.setState({ isMounted: !isMounted });
    };

    render(){
        const { isMounted } = this.state;

        return(
            <div>
                {isMounted && <Counter />}
                <button onClick={this.toggleMount}>Toggle</button>
            </div>
        );
    }
}
export default App;
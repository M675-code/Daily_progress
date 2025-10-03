import React from "react";

class Counted extends React.Component{
    state = {
        count: 0
    };

    componentDidMount() {
        console.log("Counter Mounted");

        rhis.interval = setInterval(() => {
            this.setState({ count: this.state.count + 1});
        }, 1000);
    }

    componentWillUnmount(){
        console.log("Counter UnMounted");
        clearInterval(this.interval); 
    }

    render() {
        const { count } = this.state;
        return <div>{count}</div>;
    }
}

export default Counted;
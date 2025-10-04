import React, { Component } from "react"

import Hover from "./ComponeList/Hover";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Hover>
                    {({hovered, bind}) => (<section>
                        <button style={{
                            backgroundColor: hovered ? "green" : "blue"
                        }} {...bind}>Hover Me</button>
                        {hovered ? "hovering" : "not hovering"}
                    </section>
                )}
                </Hover>

            </div>
        );
    }
}

export default App
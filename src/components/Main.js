import React, { Component } from "react";
import LeftSide from "./LeftSide";
import Education from "./Education"

//Tengo que hacer todos los imports aca
class Main extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <div>
                    <LeftSide />
                </div>

                <div>
                    <Education />
                </div>
            </div>
        );
    }
}

export default Main;

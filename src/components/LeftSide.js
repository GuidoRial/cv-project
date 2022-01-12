import React, { Component } from "react";
import Info from "./Info";
import Skills from "./Skills";

class LeftSide extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="side">
                <Info />
                <Skills />
            </div>
        );
    }
}

export default LeftSide;

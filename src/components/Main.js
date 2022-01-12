import React, { Component } from "react";
import LeftSide from "./LeftSide";

//Tengo que hacer todos los imports aca
class Main extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <LeftSide />
            </div>
        );
    }
}

export default Main;

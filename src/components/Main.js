import React, { Component } from "react";
import LeftSide from "./LeftSide";
import Education from "./Education"
import WorkExperience from "./WorkExperience";
import styles from "../styles/Main.css";
//Tengo que hacer todos los imports aca
class Main extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="main-container">
                <div className="left-side">
                    <LeftSide />
                </div>

                <div className="right-side">
                    <Education />
                    <WorkExperience />
                </div>
            </div>
        );
    }
}

export default Main;

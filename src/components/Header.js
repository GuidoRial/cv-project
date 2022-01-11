/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import styles from "../styles/Header.css";

class Header extends Component {
    constructor() {
        super();
    }
    remder() {
        return (
            <div className="header">
                <h1>CV Generator</h1>
            </div>
        );
    }
}

export default Header;

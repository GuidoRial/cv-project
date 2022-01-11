/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import LinkedinLogo from "../img/linkedin-logo.png";
import GithubLogo from "../img/github-logo.png";
import styles from "../styles/Footer.css";

class Footer extends Component {
    constructor() {
        super();
    }
    openGithub = function () {
        window.open("https://github.com/GuidoRial", "_blank");
    };

    openLinkedin = function () {
        window.open(
            "https://www.linkedin.com/in/guido-rial-275552221/",
            "_blank"
        );
    };

    render() {
        return (
            <div className="footer">
                Created by GuidoRial
                <img
                    src={LinkedinLogo}
                    alt="Linkedin Logo"
                    onClick={this.openLinkedin}
                ></img>
                <img
                    src={GithubLogo}
                    alt="Github Logo"
                    onClick={this.openGithub}
                ></img>
            </div>
        );
    }
}

export default Footer;

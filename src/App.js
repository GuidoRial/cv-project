import React, { Component } from "react";
import styles from "./styles/App.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import CVPreview from "../src/components/CVPreview";

class App extends Component {
    constructor() {
        super();
        this.state = {
            cvContent: {
                text: "",
            },
        };
    }

    handleChange = (e) => {
        this.setState({
            cvContent: {
                text: e.target.value,
            },
        });
    };

    onSubmitContent = (e) => {
        e.preventDefault();
        this.setState({
            cvContent: {
                text: "",
            },
        });
    };

    render() {
      const { cvContent } = this.state;
        return (
            <div className="app">
                <Header />
                <div className="main-container">
                    <div className="form-wrapper">
                        <form onSubmit={this.onSubmitContent}>
                            <label>Personal Details</label>
                            <input onChange={this.handleChange} type="text" placeholder="Name" />
                            <input onChange={this.handleChange} type="text" placeholder="Title" />
                            <input type="text" placeholder="Phone" />
                            <input type="text" placeholder="E-mail" />
                            <input type="text" placeholder="Location" />
                            <input
                                type="text"
                                placeholder="Presentation letter..."
                            />
                            <label>Work Experience</label>
                            <input type="text" placeholder="Company" />
                            <input type="text" placeholder="Position" />
                            <input type="text" placeholder="Start Date" />
                            <input type="text" placeholder="End Date" />
                            <input type="text" placeholder="Description..." />
                            <div className="button-wrapper">
                                <button type="submit">Delete</button>
                                <button type="submit">Add</button>
                            </div>
                            <label>Education</label>
                            <input type="text" placeholder="Course/Program" />
                            <input type="text" placeholder="University" />
                            <input type="text" placeholder="Start Date" />
                            <input type="text" placeholder="End Date" />
                            <input type="text" placeholder="Description..." />
                            <div className="button-wrapper">
                                <button type="submit">Delete</button>
                                <button type="submit">Add</button>
                            </div>
                        </form>
                    </div>
                    <div className="form-display">
                      <CVPreview cvContent={cvContent} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;

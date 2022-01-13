import React, { Component } from "react";
import uniqid from "uniqid";

class WorkExperience extends Component {
    constructor() {
        super();
        this.state = {
            company: "",
            position: "",
            date: "",
            description: "",
            experience: [
                {
                    id: uniqid(),
                    company: "Personal Projects",
                    position: "JR Front End Developer",
                    date: "Sep 2021 - Today",
                    description:
                        "Completed multiple projects that showcase my abilities with HTML, CSS, JavaScript and React. Live Preview and my code are available in my GitHub account, as well as a description of what I learned with each project",
                },
            ],
            edit: false,
        };
    }

    handleCompanyChange = (e) => {
        this.setState({
            company: e.target.value,
        });
    };

    handlePositionChange = (e) => {
        this.setState({
            position: e.target.value,
        });
    };

    handleDateChange = (e) => {
        this.setState({
            date: e.target.value,
        });
    };

    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value,
        });
    };

    onSubmitWorkExperience = (e) => {
        e.preventDefault();
        this.setState({
            experience: this.state.experience.concat({
                id: uniqid(),
                company: this.state.company,
                position: this.state.position,
                date: this.state.date,
                description: this.state.description,
            }),
            company: "",
            position: "",
            date: "",
            description: "",
        });
        this.toggleEdit();
    };

    toggleEdit = () => {
        this.setState((prevState) => ({
            edit: !prevState.edit,
        }));
    };

    handleRemove = (key) => {
        const newExp = this.state.experience.filter(
            (experience) => experience.id !== key
        );

        this.setState({
            experience: newExp,
        });
    };

    render() {
        const { company, position, date, description, experience, edit } =
            this.state;
        return (
            <div id="experience">
                <h2>Work Experience</h2>
                {experience.map((exp) => {
                    return (
                        <div
                            key={exp.id}
                            onClick={() => this.handleRemove(exp.id)}
                        >
                            <div>
                                <p>{exp.date}</p>
                                <p>{exp.position}</p>
                            </div>
                            <div>
                                <p>{exp.company}</p>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    );
                })}
                <button onClick={this.toggleEdit} className="edit-toggle">
                    Add Experience
                </button>

                {edit && (
                    <form>
                        <label htmlFor="newCompany">Add Company</label>
                        <input
                            id="newCompany"
                            placeholder="Add a Company..."
                            onChange={this.handleCompanyChange}
                        />
                        <label htmlFor="newPosition">Position</label>
                        <input
                            id="newPosition"
                            placeholder="Add a position..."
                            onChange={this.handlePositionChange}
                        />
                        <label htmlFor="newDate">Date</label>
                        <input
                            id="newDate"
                            placeholder="Add a Date..."
                            onChange={this.handleDateChange}
                        />
                        <label htmlFor="newDescription">Description</label>
                        <input
                            id="newDescription"
                            placeholder="Add a description..."
                            onChange={this.handleDescriptionChange}
                        />
                        <button onClick={this.onSubmitWorkExperience}>
                            Submit work experience
                        </button>
                        <button
                            className="edit-toggle"
                            onClick={this.toggleEdit}
                        >
                            Cancel
                        </button>
                    </form>
                )}
            </div>
        );
    }
}

export default WorkExperience;

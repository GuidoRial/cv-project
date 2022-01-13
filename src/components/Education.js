import React, { Component } from "react";
import uniqid from "uniqid";
import "../styles/Education.css"

class Education extends Component {
    constructor() {
        super();
        this.state = {
            school: "",
            degree: "",
            date: "",
            location: "",
            description: "",
            education: [
                {
                    id: uniqid(),
                    school: "The Odin Project",
                    degree: "Web Development",
                    date: "Sep 2021 - Today",
                    location: "Argentina",
                    description:
                        "I dedicated the last months learning about different technologies to be able to work in web development",
                },
            ],
            edit: false,
        };
    }

    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value,
        });
    };

    handleSchoolChange = (e) => {
        this.setState({
            school: e.target.value,
        });
    };

    handleDegreeChange = (e) => {
        this.setState({
            degree: e.target.value,
        });
    };

    handleDateChange = (e) => {
        this.setState({
            date: e.target.value,
        });
    };

    handleLocationChange = (e) => {
        this.setState({
            location: e.target.value,
        });
    };

    onSubmitEducation = (e) => {
        e.preventDefault();
        this.setState({
            education: this.state.education.concat({
                id: uniqid(),
                school: this.state.school,
                degree: this.state.degree,
                date: this.state.date,
                location: this.state.location,
                description: this.state.description,
            }),
            school: "",
            degree: "",
            date: "",
            location: "",
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
        const newEdu = this.state.education.filter(
            (education) => education.id !== key
        );

        this.setState({
            education: newEdu,
        });
    };

    render() {
        const { school, degree, date, location, education, edit } = this.state;
        return (
            <div id="education">
                <h2>Education</h2>

                {education.map((edu) => {
                    return (
                        <div
                            key={edu.id}
                            onClick={() => this.handleRemove(edu.id)}
                        className="education-container">
                            <div>
                                <p>{edu.date}</p>
                                <p>{edu.degree}</p>
                            </div>
                            <div>
                                <p>{edu.school}</p>
                                <p>{edu.location}</p>
                                <p>{edu.description}</p>
                            </div>
                        </div>
                    );
                })}
                <button onClick={this.toggleEdit} className="edit-toggle">
                    Add Education
                </button>

                {edit && (
                    <form id="educationEdit">
                        <label htmlFor="addSchool">School</label>
                        <input
                            id="newSchool"
                            placeholder="School Name..."
                            onChange={this.handleSchoolChange}
                        />

                        <label htmlFor="addDate">Date</label>
                        <input
                            id="newDate"
                            placeholder="Add date..."
                            onChange={this.handleDateChange}
                        />
                        <label htmlFor="addDate">Degree</label>
                        <input
                            id="newDegree"
                            placeholder="Add a degree..."
                            onChange={this.handleDegreeChange}
                        />
                        <label htmlFor="newLocation"> Location</label>
                        <input
                            id="newLocation"
                            placeholder="Add location..."
                            onChange={this.handleLocationChange}
                        />
                        <label htmlFor="newDescription">Description</label>
                        <input
                            id="newDescription"
                            placeholder="Add a description..."
                            onChange={this.handleDescriptionChange}
                        />
                        <button onClick={this.onSubmitEducation}>
                            Submit education
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

export default Education;

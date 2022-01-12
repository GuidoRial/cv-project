import React, { Component } from "react";
import uniqid from "uniqid";

class Skills extends Component {
    constructor() {
        super();

        this.state = {
            skill: "",
            skills: [
                {
                    id: uniqid(),
                    skill: "HTML",
                },
                {
                    id: uniqid(),
                    skill: "CSS",
                },
                {
                    id: uniqid(),
                    skill: "JavaScript",
                },
                {
                    id: uniqid(),
                    skill: "React",
                },
                {
                    id: uniqid(),
                    skill: "Communication",
                },
                {
                    id: uniqid(),
                    skill: "Problem Solving",
                },
                {
                    id: uniqid(),
                    skill: "Team player",
                },
                {
                    id: uniqid(),
                    skill: "Simplify complex concepts",
                },
            ],
            edit: false,
        };
    }
    handleSkillChange = (e) => {
        this.setState({
            skill: e.target.value,
        });
    };

    onSubmitSkill = (e) => {
        e.preventDefault();
        this.setState({
            skills: this.state.skills.concat({
                id: uniqid(),
                skill: this.state.skill,
            }),
            skill: "",
        });

        this.toggleEdit();
    };

    toggleEdit = () => {
        this.setState((prevState) => ({
            edit: !prevState.edit,
        }));
    };

    handleRemove = (key) => {
        const newSkills = this.state.skills.filter((skill) => skill.id !== key);
        this.setState({
            skills: newSkills,
        });
    };

    render() {
        const { skill, skills, edit } = this.state;
        return (
            <div id="skills">
                <h2>Skills</h2>
                <ul>
                    {skills.map((skill) => {
                        return (
                            <li
                                key={skill.id}
                                onClick={() => this.handleRemove(skill.id)}
                            >
                                {skill.skill}
                            </li>
                        );
                    })}
                </ul>
                <button className="edit-toggle" onClick={this.toggleEdit}>
                    Add Skill
                </button>

                {edit && (
                    <form id="skillEdit">
                        <label htmlFor="New Skill">New Skill</label>
                        <input
                            id="newSkill"
                            placeholder="Add a skill..."
                            onChange={this.handleSkillChange}
                        />
                        <button onClick={this.onSubmitSkill}>Add Skill</button>
                        <button
                            className="edit-toggle"
                            onClick={this.toggleEdit}
                        >
                            Close Edit
                        </button>
                    </form>
                )}
            </div>
        );
    }
}

export default Skills;

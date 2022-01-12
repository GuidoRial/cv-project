import React, { Component } from "react";

class Info extends Component {
    constructor() {
        super();

        this.state = {
            adress: "",
            phone: "",
            email: "",
            website: "",
            linkedin: "",
            github: "",
            edit: false,
        };
    }

    handleAdressChange = (e) => {
        this.setState({
            adress: e.target.value,
        });
    };

    handlePhoneChange = (e) => {
        this.setState({
            phone: e.target.value,
        });
    };

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        });
    };

    handleWebsiteChange = (e) => {
        this.setState({
            website: e.target.value,
        });
    };

    handleLinkedinChange = (e) => {
        this.setState({
            linkedin: e.target.value,
        });
    };

    handleGithubChange = (e) => {
        this.setState({
            github: e.target.value,
        });
    };

    toggleEdit = () => {
        this.setState((prevState) => ({
            edit: !prevState.edit,
        }));
    };

    render() {
        const { adress, phone, email, website, linkedin, github, edit } =
            this.state;

        return (
            <div id="info">
                <div className="adress">
                    <h2>Adress</h2>
                    <p>{adress ? adress : "42 Wallaby Way, Sydney"}</p>
                </div>
                <div className="phone">
                    <h2>Phone</h2>
                    <p>{phone ? phone : "+54 9 341 718 2338"}</p>
                </div>
                <div className="email">
                    <h2>E-mail</h2>
                    <p>{email ? email : "rialguido@gmail.com"}</p>
                </div>
                <div className="more">
                    <h2>Know more</h2>
                    <p>{website ? website : "website.com.ar"}</p>
                    <p>
                        linkedin.com/in/
                        {linkedin ? linkedin : "guido-rial-275552221"}
                    </p>
                    <p>github.com/{github ? github : "GuidoRial"}</p>
                </div>
                <button className="edit-toggle" onClick={this.toggleEdit}>
                    Edit
                </button>
                {edit && (
                    <form id="infoEdit">
                        <label htmlFor="adress">Adress </label>
                        <input
                            id="adress"
                            type="text"
                            placeholder="Adress..."
                            onChange={this.handleAdressChange}
                        />
                        <label htmlFor="phone">Phone </label>
                        <input
                            id="phone"
                            type="text"
                            placeholder="Phone number..."
                            onChange={this.handlePhoneChange}
                        />
                        <label htmlFor="email">E-mail </label>
                        <input
                            id="email"
                            type="text"
                            placeholder="E-mail..."
                            onChange={this.handleEmailChange}
                        />
                        <label htmlFor="website">Website Link </label>
                        <input
                            id="website"
                            type="text"
                            placeholder="Website link..."
                            onChange={this.handleWebsiteChange}
                        />
                        <label htmlFor="linkedin">LinkedIn User Name </label>
                        <input
                            id="linkedin"
                            type="text"
                            placeholder="LinkedIn User Name..."
                            onChange={this.handleLinkedinChange}
                        />
                        <label htmlFor="github">GitHub User Name </label>
                        <input
                            id="github"
                            type="text"
                            placeholder="github"
                            onChange={this.handleGithubChange}
                        />
                        <button
                            type="button"
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

export default Info;

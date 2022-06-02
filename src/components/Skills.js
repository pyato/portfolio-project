import "../App.css";
import "./Skills.css";
import React from "react";
import js from "../images/skills/js.png";
import html from "../images/skills/html.png";
import css from "../images/skills/css.png";
import java from "../images/skills/java.png";
import react from "../images/skills/react.png";
import nodejs from "../images/skills/nodejs.png";
import mongodb from "../images/skills/mongodb.png";
import vscode from "../images/skills/vscode.png";

function Skills() {

    return (
        <div className="container">
            <div id="skills-head">
                <p>SKILLS</p>
            </div>
            <div className="skills-img-con">
                <div data-aos="fade-up" data-aos-duration="400">
                    <img src={js} />
                    <img src={html} />
                    <img src={css} />
                    <img src={java} />
                </div>
                <div data-aos="fade-up" data-aos-duration="400">
                    <img src={react} />
                    <img src={nodejs} />
                    <img src={mongodb} />
                </div>
                <div data-aos="fade-up" data-aos-duration="400">
                    <img src={vscode} />
                </div>
            </div>
        </div>
    )
}

export default Skills;
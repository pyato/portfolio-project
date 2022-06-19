import "../App.css";
import "../assets/css/Skills.css";
import React from "react";
import js from "../assets/images/skills/js.png";
import html from "../assets/images/skills/html.png";
import css from "../assets/images/skills/css.png";
import java from "../assets/images/skills/java.png";
import react from "../assets/images/skills/react.png";
import nodejs from "../assets/images/skills/nodejs.png";
import mongodb from "../assets/images/skills/mongodb.png";
import vscode from "../assets/images/skills/vscode.png";

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
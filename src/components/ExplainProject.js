import "../App.css";
import "../assets/css/ExplainProject.css";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

function ExplainProject({ explain, gitUrl, externalLink }) {

    return (
        <div className="explain-con">
            {explain}
            <div className="explain-link">
                <a href={gitUrl} target="_blank"><FaGithub color="#27E8A7" size={20} /></a>
                <a href={externalLink} target="_blank"><BiLinkExternal color="#27E8A7" size={23} /></a>
            </div>
        </div>
    )
}

export default ExplainProject;
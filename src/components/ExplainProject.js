import "../App.css";
import "./ExplainProject.css";
import React from "react";

function ExplainProject({explain}) {

    return (
        <div className="explain-con">
            {explain}
        </div>
    )
}

export default ExplainProject;
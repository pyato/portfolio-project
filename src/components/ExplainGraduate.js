import "../App.css";
import "./ExplainGraduate.css";
import React from "react";
import work1_1 from "../images/work/work1_1.PNG";
import work1_2 from "../images/work/work1_2.PNG";

function ExplainGraduate() {

    return (
        <div className="container">
            <div className="explain-graduate-con">
                <div className="explain-graduate-user-con">
                    <div>
                        <img src={work1_1} />
                    </div>
                    <div>
                        <p>
                            The user dashboard displays sensor data from the kale plot. can control valve and can chat with admin
                            The various displays seen in the dash board will request from servers.
                        </p>
                    </div>
                </div>
                <div className="explain-graduate-admin-con">
                    <div>
                        <img src={work1_2} />
                    </div>
                    <div>
                        <p>
                            The admin page will be able to chat with all user.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExplainGraduate;
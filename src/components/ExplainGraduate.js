import "../App.css";
import "../assets/css/ExplainGraduate.css";
import React, { useState, useContext } from "react";
import overview from "../assets/images/work/graduate_project/overview.png";
import boxcontrol from "../assets/images/work/graduate_project/boxcontrol.jpg";
import kaleplot from "../assets/images/work/graduate_project/kaleplot.jpg";
import webuser from "../assets/images/work/graduate_project/webuser.PNG";
import webadmin from "../assets/images/work/graduate_project/webadmin.PNG";
import webapp from "../assets/images/work/graduate_project/webapp.jpg";
import server from "../assets/images/work/graduate_project/server.jpg";
import { ImCross } from 'react-icons/im';
import { ExperienceContext } from '../contexts/experienceContext';

function ExplainGraduate() {
    const [radio, setRadio] = useState(1);
    const expContext = useContext(ExperienceContext);

    return (
        <div id="graduate-con">
            <div className="graduate-header">
                <p>KaleCare</p>
                <ImCross
                    color="#DEDEDE"
                    style={{ cursor: "pointer" }}
                    onClick={() => expContext.setViewMore(false)}
                />
            </div>
            <input type="radio" id="overview" value={1} onClick={(e) => setRadio(e.target.value)} checked={radio == 1} />
            <input type="radio" id="hardware" value={2} onClick={(e) => setRadio(e.target.value)} checked={radio == 2} />
            <input type="radio" id="software" value={3} onClick={(e) => setRadio(e.target.value)} checked={radio == 3} />
            <div className="graduate-list">
                <label for="overview">Overview</label>
                <label for="hardware">Hardware</label>
                <label for="software">Software</label>
            </div>
            {radio == 1 ?
                <div className="overview-con">
                    <div className="overview-img">
                        <img src={overview} />
                    </div>
                    <p>
                        KaleCare is divided into three parts: client site, server site and farm site. In the client site, user can control the farm operations with a web application that send data to the server using an API. In the KaleCare server, developed with an express framework It is used to communicate a web application, controlling box and mongoDB. In the farm site, there is a main control box installed on the kale plot.
                    </p>
                    <p>
                        System function
                    </p>
                    <ol>
                        <li>watering system</li>
                        <li>fertilizing system</li>
                        <li>weekly report system</li>
                        <li>contact admin system</li>
                        <li>pest detection system</li>
                    </ol>
                </div>
                :
                radio == 2 ?
                    <div className="hardware-con">
                        <div className="hardware-img">
                            <img src={boxcontrol} />
                            <img src={kaleplot} />
                        </div>
                        <p>
                            The hardware design part is the details about a designed IoT device. This study selects a Raspberry Pi as a microcontroller that is used to connect and control other electronic components that details are described. Firstly, a USB-RS485 works in conjunction with soil moisture sensors, which are used to calculate a quantity of water in an automatic mode. Secondly, a webcam is used to take a picture for the proposed pest detection model. The position of the webcam is an oblique angle that can capture an overall farm. Thirdly, a relay is used to control the solenoid valves and a buzzer beep alarm. Solenoid valves are electronic valves to control water and fertilizer while a buzzer beep alarm is a notification system when the device has a problem. Fourthly, a switching power supply is used to convert alternating current with high voltage to direct current with low voltage. Next, a radar float switch is used to measure the amount of fertilizer in the tank. In addition, a terminal block is used to organize electronic wires for safety. Finally, a waterproof box is used to store all electronic components except radar float switch and soil moisture sensors.
                        </p>
                        <p>
                            All the electronic components inside the waterproof box In addition, there are two tanks for storing water and fertilizer. The hardware for the overall system monitoring in this study was tested on a designed kale farm with sizes 30 centimeters wide and 80 centimeters long.
                        </p>
                    </div>
                    :
                    <div className="software-con">
                        <p>
                            KaleCare web application developed with react that is available for both user and admin by both sections login with google account
                        </p>
                        <div className="software-user">
                            <img src={webuser} />
                            <div className="software-user-text">
                                <p>User</p>
                                <p>
                                    The user dashboard displays sensor data from the kale plot. can control valve and can chat with admin The various displays seen in the dash board will request from servers.
                                </p>
                                <p>
                                    web application function
                                </p>
                                <ol>
                                    <li>watering</li>
                                    <li>fertilizing</li>
                                    <li>sensor report</li>
                                    <li>weekly report</li>
                                    <li>chat with admin</li>
                                    <li>notification</li>
                                </ol>
                            </div>
                        </div>
                        <div className="software-admin">
                            <img src={webadmin} />
                            <div className="software-admin-text">
                                <p>Admin</p>
                                <p>
                                    The admin page will be able to chat with all user.
                                </p>
                            </div>
                        </div>
                        <div className="library-img">
                            <div>
                                <p>Web application</p>
                                <img src={webapp} />
                            </div>
                            <div>
                                <p>Server</p>
                                <img src={server} />
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default ExplainGraduate;
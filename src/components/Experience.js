import "../App.css";
import "../assets/css/Experience.css";
import React, { useContext, useState } from "react";
import work1 from "../assets/images/work/work1.PNG";
import work2 from "../assets/images/work/work2.PNG";
import work3 from "../assets/images/work/work3.PNG";
import work4 from "../assets/images/work/work4.PNG";
import work5 from "../assets/images/work/work5.PNG";
import award1 from "../assets/images/awards/award1.PNG";
import award2 from "../assets/images/awards/award2.jpg";
import ExplainProject from "./ExplainProject";
import ExplainGraduate from "./ExplainGraduate";
import { BsTriangle } from 'react-icons/bs';
import Card from "./Card";
import { ExperienceContext } from '../contexts/experienceContext';

function Experience() {
    const expContext = useContext(ExperienceContext);

    return (
        <div className="container">
            <div id="experience-head">
                <p>EXPERIENCE</p>
            </div>
            <div className="graduate-project-con">
                <div className="graduate-project-img">
                    <Card nameWork="KaleCare" workImage={work1} />
                </div>
                <div className="graduate-project-text">
                    <p>
                        <BsTriangle style={{ transform: "rotate(90deg)" }} color={"#27E8A7"} />
                        <span> Graduate Project</span>
                    </p>
                    <p>This project is an automatic kale plot management system. It used weather forecast data to calculate appropriate quantity of water. A server application is developed with an express framework. It is used to communicate a web application, controlling box and mongoDB. A web application is developed with react library.</p>
                    <div className="graduate-project-btn">
                        <button onClick={() => expContext.setViewMore(!expContext.viewMore)}><a href="#graduate-con">View More</a></button>
                    </div>
                </div>
            </div>
            {expContext.viewMore ? <ExplainGraduate /> : <></> }
            <div className="experience-border-right"><div></div></div>
            <div className="project-con">
                <div>
                    <p>
                        <BsTriangle style={{ transform: "rotate(90deg)" }} color={"#27E8A7"} />
                        <span> My projects</span>
                        <p>these project I built to improve my skills</p>
                    </p>
                </div>

                <div className="project-con-card">
                    <div>
                        <Card nameWork="CRUD" workImage={work2} gitUrl="https://github.com/pyato/crud-project"/>
                        <div>
                            <ExplainProject explain="CRUD (create, read, update, delete) is a project that connects to the database to perform the above actions, server is developed with node js, client is developed with react and mongo db is database." />
                        </div>
                    </div>
                    <div>
                        <Card nameWork="Recipe" workImage={work3} gitUrl="https://github.com/pyato/recipe-project"/>
                        <div>
                            <ExplainProject explain="This project is developed to improve skill for UI design and skill to develop responsive website with react." />
                        </div>
                    </div>
                    <div>
                        <Card nameWork="Weather" workImage={work4} gitUrl="https://github.com/pyato/weather-project"/>
                        <div>
                            <ExplainProject explain="This project is a weather dashboard that reports current weather and daily forecast for 7 days with information provided from the openweathermap API. and this project developed with react." />
                        </div>
                    </div>
                    <div>
                        <Card nameWork="Portfolio" workImage={work5} gitUrl="https://github.com/pyato/portfolio-project"/>
                        <div>
                            <ExplainProject explain="My portfolio website describes me. And will collect the work I've done and this website is developed with react as well." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="experience-border-left"></div>
            <div className="awards-con">
                <p>
                    <BsTriangle style={{ transform: "rotate(90deg)" }} color={"#27E8A7"} />
                    <span> Awards</span>
                </p>
                <div className="award-con">
                    <div className="award-img">
                        <img src={award1} />
                    </div>
                    <div>
                        <p>Silver Medal Innovation Awards of Higher Education in Thailand Research Expo 2021</p>
                        <p><BsTriangle style={{ transform: "rotate(90deg)" }} color={"#27E8A7"} /> Smart Kale Farm with Disease Detection System</p>
                    </div>
                </div>
                <div className="award-con">
                    <div>
                        <p>Thailand National Software Contest (NSC) 2021 3rd place award</p>
                        <p><BsTriangle style={{ transform: "rotate(90deg)" }} color={"#27E8A7"} /> Smart Kale Farm with Disease Detection System</p>
                    </div>
                    <div>
                        <img src={award2} />
                    </div>
                </div>
            </div>
            <div className="experience-border-right"><div></div></div>
            <div className="publications-con">
                <p>
                    <BsTriangle style={{ transform: "rotate(90deg)" }} color={"#27E8A7"} />
                    <span> Publications</span>
                </p>
                <div>
                    <p>International proceeding (IEEE and Scopus index)</p>
                    <p><BsTriangle style={{ transform: "rotate(90deg)" }} color={"#27E8A7"} /> KaleCare: Smart Farm for Kale with Pests Detection System using Machine Learning</p>
                </div>
                <div>
                    <p>National proceeding</p>
                    <p><BsTriangle style={{ transform: "rotate(90deg)" }} color={"#27E8A7"} /> SmartKale Farming with an Automatic Watering System based on Weather Forecastin</p>
                </div>
            </div>
            <div className="experience-border-left"></div>
        </div>
    )
}

export default Experience;
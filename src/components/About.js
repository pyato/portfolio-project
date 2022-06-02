import "../App.css";
import "./About.css";
import React from "react";
import profile from "../images/profile.jpg";
import { BsTriangle } from 'react-icons/bs';

function About() {

    return (
        <div className="container">
            <div id="about-con">
                <div className="about-con-in">
                    <div className="about-img">
                        <img src={profile} data-aos="fade-right" />
                        <div className="about-img-bg" data-aos="fade-up"></div>
                    </div>
                    <div className="about-text">
                        <p data-aos="fade-up" data-aos-duration="400">Hi, my name is</p>
                        <p data-aos="fade-up" data-aos-duration="500">Peeraphat Yato</p>
                        <p data-aos="fade-up" data-aos-duration="600">I'm a fresh graduate interested in a frontend developer job. I'm passionate about creating beautiful web pages. and user friendly</p>

                        <p data-aos="fade-up" data-aos-duration="700">EDUCATION</p>
                        <p data-aos="fade-up" data-aos-duration="800"><BsTriangle style={{ transform: "rotate(90deg)" }} color={"#27E8A7"} /> B.Sc. (Computer Science), Major in Learning Technology, Minor in Data Science, Thammasat University (GPAX3.26)</p>
                        <p data-aos="fade-up" data-aos-duration="900"><BsTriangle style={{ transform: "rotate(90deg)" }} color={"#27E8A7"} /> Science-Math Program, Petpittayakom School, March 2018. (GPAX 3.69)</p>
                    </div>
                </div>
            </div>
            <div className="scroll-con">
                <div className="scroll"></div>
                <div className="scroll-obj"><BsTriangle style={{ transform: "rotate(180deg)" }} color={"#27E8A7"} /></div>
            </div>
        </div>
    )
}

export default About;
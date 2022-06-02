import "../App.js";
import "./Card.css";
import React from "react";
import { FaGithub } from "react-icons/fa";

function Card({nameWork, workImage, gitUrl}) {

    return (
        <div className="container">
            <div className="card-img">  
                <img src={workImage}/>
                {nameWork === "KaleCare" ? <div className="card-img-bg"></div> : <></>}
                <div className="card-img-front">
                    <p>{nameWork}</p>
                    {nameWork === "KaleCare" ? <></> : <a href={gitUrl}><FaGithub size={25} color="#27E8A7" /> </a>}
                </div>              
            </div>
        </div>
    )
}

export default Card;
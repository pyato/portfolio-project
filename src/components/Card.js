import "../App.js";
import "../assets/css/Card.css";
import React from "react";

function Card({ nameWork, workImage, externalLink }) {

    return (
        <div className="container">
            <a href={externalLink} target="_blank" >
                <div className="card-img" >
                    <img src={workImage} />
                    {nameWork === "KaleCare" ? <div className="card-img-bg"></div> : <></>}
                    <div className="card-img-front">
                        <p>{nameWork}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Card;
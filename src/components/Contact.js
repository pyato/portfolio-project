import "../App.css";
import "./Contact.css";
import React from "react";
import { FaFacebookSquare } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {

    return (
        <div className="container">
            <div id="contact-head">
                <div className="contact-icon-con">
                    <a href="https://web.facebook.com/perapat.yato"><FaFacebookSquare color="#ffff" size={30} /></a>
                    <a href="https://www.instagram.com/perapatyato/"><BsInstagram color="#ffff" size={30} /></a>
                    <a href="https://github.com/pyato?tab=repositories"><FaGithub color="#ffff" size={30} /></a>
                </div>
                <div className="contact-email">
                    <p>Email: peeraphat.yato@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;
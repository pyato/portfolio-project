import "../assets/css/Navbar.css";
import React, { useEffect, useState } from "react";
import { FaStream } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';


function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [widthScreen, setWidthScreen] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidthScreen(window.innerWidth);
        }
        window.addEventListener("resize", handleResize)
    }, [])

    return (
        <div className="navbar-bg">
            <div className="navbar-con">
                <div className="navbar-logo">
                    <a href="#">Peeraphat</a>
                </div>
                <ul className={mobileMenu ? "navbar-menu activate" : "navbar-menu"}>
                    {widthScreen <= 450 && mobileMenu === true ?
                        <div className="cross-icon" onClick={() => setMobileMenu(!mobileMenu)}>
                            <ImCross color="#ffff" />
                        </div>
                        :
                        <></>
                    }
                    <li><a href="#about-con" onClick={() => setMobileMenu(false)}>About</a></li>
                    <li><a href="#skills-head" onClick={() => setMobileMenu(false)}>Skills</a></li>
                    <li><a href="#experience-head" onClick={() => setMobileMenu(false)}>Experience</a></li>
                    <li><a href="#contact-head" onClick={() => setMobileMenu(false)}>Contact</a></li>
                </ul>
                <div className="navbar-icon-menu" onClick={() => setMobileMenu(!mobileMenu)}>
                    <FaStream color="#ffff" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
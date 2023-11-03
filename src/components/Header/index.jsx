import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa";
import "./index.scss"

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavState = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className="header-div">
            <div className='desktop-view'>
                <div className='logo-div'><a href="/">&lt;Oghenefejiro /&gt;</a></div>
                <nav>
                    <a href="/about"><span className="span">01.</span> About</a>
                    <a href="/services "><span className="span">02.</span> Portfolio</a>
                    <a href="/contact "><span className="span">03.</span> Contact</a>
                    <a href="/"><button className='btn'>Resume</button></a>
                </nav>
                <div class="icons-div">
                    <a href="#" className='icons fa-faceobok'><FaFacebookF /></a>
                    <a href="#" class="icons fa-instagram"><FaInstagram /></a>
                    <a href="#" class="icons fa-linkedin"><FaLinkedinIn /></a>
                    <a href="#" class="icons fa-behance"><FaBehance /></a>
                </div>
            </div>
            <div class="mobile-view">
                <div class="logo">
                    <div className='logo-div'><a href="/">&lt;Oghenefejiro /&gt;</a></div>
                </div>
                <div>
                    <div onClick={handleNavState} class="hamburger">
                        <img src="/src/assets/hamburger-svgrepo-com.svg" alt="hamburger" />
                    </div>
                    {isNavOpen && (
                        <div id="myNav" className="overlay">
                            <div>
                                <a
                                    href="javascript:void(0)"
                                    className="closebtn"
                                    onClick={handleNavState}
                                >
                                    &times;
                                </a>
                            </div>
                            <div className="overlay-content">
                                <a className="nav" href='/'>
                                    About
                                </a>
                                <a href='/' className="nav">
                                    Portfolio
                                </a>
                                <a href='/' className="nav">
                                    Contact
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa";
import "./index.scss"

const Header = () => {
    return (
        <div className="header-div">
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
            {/* <div class="mobile-view">
                <div class="logo">
                    <img src="/images/logo.png" class="logo-img" />
                </div>
                <div class="hamburger">
                    <div id="openNav">
                        <img src="/images/hamburger-svgrepo-com.svg" />
                    </div>
                    <div id="myNav" class="overlay">
                        <div id="closeNav">
                            <a href="javascript:void(0)" class="closebtn"> &times;</a>
                        </div>
                        <div class="overlay-content" id="myNav">
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/services ">Services</a>
                            <a href="/contact ">Contact</a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Header;
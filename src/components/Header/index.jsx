import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
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
                    <a href="https://docs.google.com/document/d/1s6VcLwpPEn1rnLGbSvJBFMHH5lKRXPBd/edit?usp=sharing&ouid=104089593542692863323&rtpof=true&sd=true" target='blank'><button className='btn'>Resume</button></a>
                </nav>
                <div className="icons-div">
                    <a href="https://facebook.com/gbajeeva" target='blank' className='icons fa-faceobok'><FaFacebookF /></a>
                    <a href="https://instagram.com/mz_evaaa" target='blank' className="icons fa-instagram"><FaInstagram /></a>
                    <a href="https://ng.linkedin.com/in/oghenefejirogbaje?trk=public_profile_browsemap" target='blank' className="icons fa-linkedin"><FaLinkedinIn /></a>
                    <a href="#" className="icons fa-behance"><FaBehance /></a>
                </div>
            </div>
            <div className="mobile-view">
                <div className="logo">
                    <div className='logo-div'><a href="/">&lt;Oghenefejiro /&gt;</a></div>
                </div>
                <div>
                    <div onClick={handleNavState} className="hamburger">
                        {/* <img src="/src/assets/hamburger-svgrepo-com.svg" alt="hamburger" /> */}
                        <HiMenuAlt2 />
                    </div>
                </div>
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
    )
}

export default Header;
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import './index.scss'

const Footer = () => {
    return (
        <div className="footer">
            <p>© 2023 Oghenefejiro Gbaje</p>
            <div className="footer-icons">
                <a href="https://facebook.com/gbajeeva" target='blank' className='icons fa-faceobok'><FaFacebookF /></a>
                <a href="https://instagram.com/mz_evaaa" target='blank' className="icons fa-instagram"><FaInstagram /></a>
                <a href="https://ng.linkedin.com/in/oghenefejirogbaje?trk=public_profile_browsemap" target='blank' className="icons fa-linkedin"><FaLinkedinIn /></a>
                <a href="https://github.com/evaloper" target='blank' className="icons fa-behance"><FaGithub /></a>
            </div>
        </div>
    )
}

export default Footer
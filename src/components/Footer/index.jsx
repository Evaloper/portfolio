import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa";
import './index.scss'

const Footer = () => {
    return (
        <div class="footer">
            <p>© 2022 Evaloper</p>
            <div class="footer-icons">
                <a href="#" className='icons fa-faceobok'><FaFacebookF /></a>
                <a href="#" class="icons fa-instagram"><FaInstagram /></a>
                <a href="#" class="icons fa-linkedin"><FaLinkedinIn /></a>
                <a href="#" class="icons fa-behance"><FaBehance /></a>
            </div>
        </div>
    )
}

export default Footer
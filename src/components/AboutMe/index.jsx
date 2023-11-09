import React from 'react'
import AboutImage from '../../assets/Aboutme.jpg'
import './index.scss'

const AboutMe = () => {
    return (
        <div className='aboutme'>
            <h2> <span className='span'>01.</span>About Me</h2>
            <div className='aboutme-details'>
                <div className='aboutme-para'>
                    <p>
                        My name is Oghenefejiro Evarista Gbaje. I am a Software Engineer from Souhern part of Nigeria, Warri to be precise. I've worked using
                        different technologies, both backend and frontend. I'm currently working using Spring Boot
                        et JavaScript. My goal is to build highly performant applications that solve real-world problems
                        and provide users with an awesome experience. You can read more about me on my LinkedIn page,
                        or Check my Github for some cool things.Here are a few technologies I’ve been working with recently:
                    </p>
                </div>
                <div className='aboutme-img'>
                    <div className="wrapper">
                        <img src={AboutImage} alt="My Display Picture" className='image' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
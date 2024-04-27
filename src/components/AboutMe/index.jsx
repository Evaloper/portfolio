import React from 'react'
import AboutImage from '../../assets/Aboutme.jpg'
import JSIcon from '../../assets/js-svgrepo-com.svg'
import ReactIcon from '../../assets/react-svgrepo-com.svg'
import Tailwind from '../../assets/tailwind-svgrepo-com.svg'
import GitHub from '../../assets/github-color-svgrepo-com.svg'
import SassIcon from '../../assets/brand-sass-svgrepo-com.svg'
import Astro from '../../assets/astro-svgrepo-com.svg'
import Java from '../../assets/java-logo-svgrepo-com.svg'
import CircleCi from '../../assets/circleci-svgrepo-com.svg'
import Cypress from '../../assets/cypress-svgrepo-com.svg'
import Docker from '../../assets/docker-svgrepo-com.svg'
import Grafana from '../../assets/grafana-svgrepo-com.svg'
import Swagger from '../../assets/swagger-svgrepo-com.svg'
import PostMan from '../../assets/postman-icon-svgrepo-com.svg'
import MySQL from '../../assets/mysql-svgrepo-com.svg'
import PostgreSQL from '../../assets/postgresql-svgrepo-com.svg'
import TheProcess from '../TheProcess'
import './index.scss'

const AboutMe = () => {
    return (
        <>
            <div className='aboutme' id='about'>
                <h2> <span className='span'>01.</span>About Me</h2>
                <div className='aboutme-details'>
                    <div className='aboutme-para'>
                        <p>
                            I'm Oghenefejiro Evarista Gbaje, a Java and JavaScript Developer with a BSc in Criminology and Security Studies.
                            I am on the lookout for exciting opportunities.
                            <br />
                            <br />
                            With a Bachelor's degree in Criminology and Security Studies,
                            you might wonder how I found my way into the world of software engineering.
                            Well, let me tell you—it's all about problem-solving, pattern recognition,
                            and understanding human behavior. Combining this with my expertise in Software engineering,
                            I offer a unique blend of technical skills, soft skills, critical thinking, problem-solving abilities, and an Agile mindset. This diverse skill set enables me to tackle coding challenges from various perspectives.
                            <br />
                            <br />
                            I'm eager to contribute positively and collaborate with visionary leaders and
                            innovative technologists across various fields. You can explore my professional journey on
                            LinkedIn or delve into some of my projects on GitHub. Here's a snapshot of the technologies I specialize in:


                        </p>
                        <div className='tech-icon-div'>
                            <div className='tech-div'>
                                <img src={Java} alt="React Icon" className='tech-icon' />
                                <p>Java</p>
                            </div>
                            <div className='tech-div'>
                                <img src={ReactIcon} alt="React Icon" className='tech-icon' />
                                <p>Reactjs</p>
                            </div>
                            <div className='tech-div'>
                                <img src={JSIcon} alt="React Icon" className='tech-icon' />
                                <p>Vanilla JS</p>
                            </div>
                            <div className='tech-div'>
                                <img src={GitHub} alt="React Icon" className='tech-icon' />
                                <p>Git/GitHub</p>
                            </div>
                            <div className='tech-div'>
                                <img src={Tailwind} alt="React Icon" className='tech-icon' />
                                <p>Tailwind</p>
                            </div>
                            <div className='tech-div'>
                                <img src={SassIcon} alt="React Icon" className='tech-icon' />
                                <p>SASS</p>
                            </div>
                            <div className='tech-div'>
                                <img src={Astro} alt="React Icon" className='tech-icon' />
                                <p>Astro</p>
                            </div>
                            <div className='tech-div'>
                                <img src={CircleCi} alt="React Icon" className='tech-icon' />
                                <p>CircleCI</p>
                            </div>
                            <div className='tech-div'>
                                <img src={Swagger} alt="React Icon" className='tech-icon' />
                                <p>Swagger</p>
                            </div>
                            <div className='tech-div'>
                                <img src={PostMan} alt="React Icon" className='tech-icon' />
                                <p>Postman</p>
                            </div>
                            <div className='tech-div'>
                                <img src={Cypress} alt="React Icon" className='tech-icon' />
                                <p>Cypress</p>
                            </div>
                            <div className='tech-div'>
                                <img src={Docker} alt="React Icon" className='tech-icon' />
                                <p>Docker</p>
                            </div>
                            <div className='tech-div'>
                                <img src={Grafana} alt="React Icon" className='tech-icon' />
                                <p>Grafana</p>
                            </div>
                            <div className='tech-div'>
                                <img src={MySQL} alt="React Icon" className='tech-icon' />
                                <p>MySQL</p>
                            </div>
                            <div className='tech-div'>
                                <img src={PostgreSQL} alt="React Icon" className='tech-icon' />
                                <p>PostgreSQL</p>
                            </div>
                        </div>
                    </div>
                    <div className='aboutme-img'>
                        <div className="wrapper">
                            <img src={AboutImage} alt="My Display Picture" className='image' />
                        </div>
                    </div>
                </div>
            </div>
            <TheProcess />
        </>
    )
}

export default AboutMe
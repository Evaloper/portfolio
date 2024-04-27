import React from 'react'
import AboutImage from '../../assets/Aboutme.jpg'
import JSIcon from '../../assets/js-svgrepo-com.svg'
import ReactIcon from '../../assets/react-svgrepo-com.svg'
import HTMLIcon from '../../assets/html-5-svgrepo-com.svg'
import Tailwind from '../../assets/tailwind-svgrepo-com.svg'
import CSSIcon from '../../assets/css-3-svgrepo-com.svg'
import Git from '../../assets/git-svgrepo-com.svg'
import GitHub from '../../assets/github-color-svgrepo-com.svg'
import SassIcon from '../../assets/brand-sass-svgrepo-com.svg'
import Astro from '../../assets/astro-svgrepo-com.svg'
import Java from '../../assets/java-logo-svgrepo-com.svg'
import CircleCi from '../../assets/circleci-svgrepo-com.svg'
import Cypress from '../../assets/cypress-svgrepo-com.svg'
import Docker from '../../assets/docker-svgrepo-com.svg'
import Grafana from '../../assets/grafana-svgrepo-com.svg'
import Jira from '../../assets/Jira-svgrepo-com.svg'
// import Mongodb from '../../assets/mongodb-svgrepo-com.svg'
// import MySQL from '../../assets/mysql-svgrepo-com.svg'
// import PostgreSQL from '../../assets/postgresql-svgrepo-com.svg'
import './index.scss'
import TheProcess from '../TheProcess'

const AboutMe = () => {
    return (
        <>
            <div className='aboutme' id='about'>
                <h2> <span className='span'>01.</span>About Me</h2>
                <div className='aboutme-details'>
                    <div className='aboutme-para'>
                        <p>
                            My name is Oghenefejiro Evarista Gbaje. I am a Frontend Developer from Southern part of Nigeria, Warri to be precise.
                            I've worked using different frontend technologies, I am quite conservant with few backend terminologies,
                            also included some in my projects. My goal is to build highly performant applications that solve real-world problems
                            and provide users with an awesome experience. You can read more about me on my LinkedIn page,
                            or Check my Github for some projects I have done. Here are a few technologies I’ve been working with recently:
                        </p>
                        <div className='tech-icon-div'>
                            <div className='tech-div'>
                                <img src={ReactIcon} alt="React Icon" className='tech-icon' />
                                <p>Reactjs</p>
                            </div>
                            <div className='tech-div'>
                                <img src={HTMLIcon} alt="React Icon" className='tech-icon' />
                                <p>HTML 5</p>
                            </div>
                            <div className='tech-div'>
                                <img src={JSIcon} alt="React Icon" className='tech-icon' />
                                <p>Vanilla JS</p>
                            </div>
                            <div className='tech-div'>
                                <img src={GitHub} alt="React Icon" className='tech-icon' />
                                <p>GitHub</p>
                            </div>
                            <div className='tech-div'>
                                <img src={CSSIcon} alt="React Icon" className='tech-icon' />
                                <p>CSS 3</p>
                            </div>
                            <div className='tech-div'>
                                <img src={Tailwind} alt="React Icon" className='tech-icon' />
                                <p>Tailwind</p>
                            </div>
                            <div className='tech-div'>
                                <img src={Git} alt="React Icon" className='tech-icon' />
                                <p>Git</p>
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
                                <img src={Java} alt="React Icon" className='tech-icon' />
                                <p>Java</p>
                            </div>
                            <div className='tech-div'>
                                <img src={CircleCi} alt="React Icon" className='tech-icon' />
                                <p>CircleCI</p>
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
                                <img src={Jira} alt="React Icon" className='tech-icon' />
                                <p>Jira</p>
                            </div>
                            {/* <div className='tech-div'>
                                <img src={Mongodb} alt="React Icon" className='tech-icon' />
                                <p>MongoDB</p>
                            </div>
                            <div className='tech-div'>
                                <img src={MySQL} alt="React Icon" className='tech-icon' />
                                <p>MySQL</p>
                            </div>
                            <div className='tech-div'>
                                <img src={PostgreSQL} alt="React Icon" className='tech-icon' />
                                <p>PostgreSQL</p>
                            </div> */}
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
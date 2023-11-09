import React from 'react'
import Header from '../Header'
import "./index.scss"

const Hero = () => {
    return (
        <div className='showcase-div'>
            <div className='showcase-para-div'>
                <p className='showcase-para'>&lt;Oghenefejiro /&gt;</p>
                <div className='showcase-para2'>
                    <p className='para2'>Hey there, fellow internet adventurer!</p>
                    <div className="container">
                        <h3 className='para3'>Welcome to my digital portfolio</h3>
                    </div>
                    <p className='para4'>
                        With an eye for design and a passion for coding, I craft the visual and
                        interactive aspects of websites that not only look stunning but also work seamlessly.
                        Whether you're a business looking to enhance your online presence or a fellow developer
                        seeking collaboration, you've come to the right place.
                    </p>
                    <div className="btn-div">
                        <a href='https://docs.google.com/document/d/1s6VcLwpPEn1rnLGbSvJBFMHH5lKRXPBd/edit?usp=sharing&ouid=104089593542692863323&rtpof=true&sd=true' target='blank'><button className='btn'>View Resume</button></a>
                        <a href=''><button className='btn'>View Portfolio</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
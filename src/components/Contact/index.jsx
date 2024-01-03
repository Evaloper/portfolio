import React from 'react'
import './index.scss'

const Contact = () => {
    return (
        <div className='contact-div' id='contact'>
            <h2><span className='span'>03.</span>Contact</h2>
            <div>
                <p>
                    Feel free to contact me for business, collaboration,
                    whether you have a question, just want to create
                    your next idea, or just want to chat.
                </p>
                <p className='magic'>Let's make Magic happen</p>
            </div>
            <a href="mailto:oghenefejirogbaje@gmail.com" rel='noopener noreferrer' className='email-link' target='_blank'>Say Hello</a>
        </div>
    )
}

export default Contact
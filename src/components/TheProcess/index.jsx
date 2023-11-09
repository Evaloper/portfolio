import React from 'react'
import './index.scss'

const TheProcess = () => {
    return (
        <div>
            <h2>My Approach</h2>
            <div>
                <div className='discover'>
                    <h3>Discover</h3>
                    <p>Conducted competitor analysis to understand the current landscape and identify potential opportunities for differentiation.</p>
                </div>
                <div className='define'>
                    <h3>Define</h3>
                    <p>Defined the project's objectives, goals.
                        Identified the specific user needs the portfolio website should address.</p>
                </div>
                <div className='Design'>
                    <h3>Design</h3>
                    <p>Brainstormed and generated multiple design concepts and ideas, considering different layouts, color schemes,, typography, and overall visual styles. Collaborated with the client to refine and select the most suitable concepts</p>
                </div>
                <div className='Develop'>
                    <h3>Develop</h3>
                    <p>Developed interactive prototypes to test and validate the user experience, allowing for iterative improvements.</p>
                </div>
            </div>
        </div>
    )
}

export default TheProcess
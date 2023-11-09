import React from 'react'
import './index.scss'

const TheProcess = () => {
    return (
        <div className='process-div'>
            <h3>My Creative Process</h3>
            <div className='ds-div'>
                <div className='discover ds'>
                    <h3 className='header-3'>Discover</h3>
                    <p>Conducted competitor analysis to understand the current landscape and identify potential opportunities for differentiation.</p>
                </div>
                <div className='define ds'>
                    <h3 className='header-3'>Define</h3>
                    <p>Defined the project's objectives, goals.
                        Identified the specific user needs the portfolio website should address.</p>
                </div>
                <div className='Design ds'>
                    <h3 className='header-3'>Design</h3>
                    <p>Brainstormed and generated multiple design concepts and ideas, considering different layouts, color schemes,, typography, and overall visual styles. Collaborated with the client to refine and select the most suitable concepts</p>
                </div>
                <div className='Develop ds'>
                    <h3 className='header-3'>Develop</h3>
                    <p>Developed interactive prototypes to test and validate the user experience, allowing for iterative improvements.</p>
                </div>
            </div>
        </div>
    )
}

export default TheProcess
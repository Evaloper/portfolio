import React from 'react'
import './index.scss'

const TheProcess = () => {
    return (
        <div className='process-div'>
            <h3>My Creative Process</h3>
            <div className='ds-div'>
                <div className='discover ds'>
                    <h3 className='header-3'>Discover</h3>
                    <p>Conducted competitor analysis to grasp the existing landscape and pinpoint potential avenues for standing out and setting apart.</p>
                </div>
                <div className='define ds'>
                    <h3 className='header-3'>Define</h3>
                    <p>
                        Outlined the project's aims and objectives while identifying the precise user requirements the website should meet.
                    </p>
                </div>
                <div className='Design ds'>
                    <h3 className='header-3'>Design</h3>
                    <p>
                        Collaborated extensively to generate diverse design concepts, exploring various layouts, color schemes,
                        typography, and visual styles. Worked closely with the client to refine and choose the most fitting ideas.
                    </p>
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
import React from 'react'
import Header from '../Header'
import "./index.scss"

const ShowCase = () => {
    return (
        <div className='showcase-div'>
            <div className='showcase-para-div'>
                {/* <p className='showcase-para'>&lt;Oghenefejiro /&gt;</p> */}
                <div className='showcase-para2'>
                    {/* <p className='para2'>Hey there, fellow internet adventurer!</p> */}
                    <div className="container">
                        <p className='para3'>Welcome to my digital portfolio</p>
                    </div>
                    <p className='para4'>
                        With an eye for design and a passion for coding, I craft the visual and
                        interactive aspects of websites that not only look stunning but also work seamlessly.
                        Whether you're a business looking to enhance your online presence or a fellow developer
                        seeking collaboration, you've come to the right place.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ShowCase
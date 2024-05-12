import React from 'react'
import MovieSite from '../../assets/movie-site-desktop.png'
import Bani from '../../assets/bani-dashboard.png'
import AstroTemplate from '../../assets/Astro-template.png'
import Payhelper from '../../assets/payhelper-dashboard-desktop.png'
import ReactIcon from '../../assets/react-svgrepo-com.svg'
import Astro from '../../assets/astro-svgrepo-com.svg'
import JSIcon from '../../assets/js-svgrepo-com.svg'
import Profiles from '../../assets/Profiles.png'
import Java from '../../assets/java-logo-svgrepo-com.svg'
import MySQL from '../../assets/mysql-svgrepo-com.svg'
import './index.scss'

const Portfolio = () => {
    return (
        <div className='portfolio' id='portfolio'>
            <h2><span className='span'>02.</span>My Portfolio</h2>
            <div className='portfolio-div'>
                {/* MovieBox Start */}
                <a href="https://silly-pavlova-a8278d.netlify.app/"><div className="folio-card">
                    <div className="folio-img">
                        <img src={MovieSite} alt="Movie site" className='portfolio-img' />
                    </div>
                    <div className='details-div'>
                        <div className="folio-details">
                            <h4>MovieBox</h4>
                            <p>
                                This project is a movie discovery web application that allows users to search for movies, view details and watch trailers of the
                                searched movie, the data is fetched and consumed from a movie API. Top ten movies are displayed on the homepage
                                with their movie posters, movie title, release date, genres, ratings and location.
                            </p>
                        </div>
                        <div className="technologies">
                            <h4>Technologies used:</h4>
                            <div className='folio-icon-wrapper'>
                                <div className='folio-icon'>
                                    <img src={ReactIcon} alt="React Icon" className='tech-icon' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div></a>

                {/* Profiles start */}
                <a href="https://profiles.decagonhq.com/">
                    <div className="folio-card">
                        <div className="folio-img">
                            <img src={Profiles} alt="" className='portfolio-img' />
                        </div>
                        <div className="details-div">
                            <div className="folio-details">
                                <h4>Profiles</h4>
                                <p>
                                    Profiles is a web application that involved creating secure and user-friendly
                                    authentication pages that allow companies to access profiles of vetted tech talent.
                                </p>
                            </div>
                            <div className="technologies">
                                <h4>Technologies used: </h4>
                                <div className='folio-icon-wrapper'>
                                    <div className='folio-icon'>
                                        <img src={Java} alt="React Icon" className='tech-icon' />
                                    </div>
                                    <div className='folio-icon'>
                                        <img src={ReactIcon} alt="React Icon" className='tech-icon' />
                                    </div>
                                    <div className='folio-icon'>
                                        <img src={MySQL} alt="React Icon" className='tech-icon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>

                {/* Astro Template starts */}
                <a href="https://incredible-narwhal-18a708.netlify.app/">
                    <div className="folio-card">
                        <div className="folio-img">
                            <img src={AstroTemplate} alt="" className='portfolio-img' />
                        </div>
                        <div className="details-div">
                            <div className="folio-details">
                                <h4>Astro Template for a Hair Dressing Brand</h4>
                                <p>
                                    The purpose of this project is to create a template that can easily be edited by another user.
                                </p>
                            </div>
                            <div className="technologies">
                                <h4>Technologies used: </h4>
                                <div className='folio-icon-wrapper'>
                                    <div className='folio-icon'>
                                        <img src={Astro} alt="React Icon" className='tech-icon' />
                                    </div>
                                    <div className='folio-icon'>
                                        <img src={JSIcon} alt="React Icon" className='tech-icon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

        </div>
    )
}

export default Portfolio
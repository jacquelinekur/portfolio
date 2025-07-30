import React from 'react'
import '../css/ViewDetails.css'
import github_icon from '../assets/github-logo.png'
import demo_icon from '../assets/maximize.png'

function ViewDetails({ image, title, projectDesc, techArr, gitHubLink, handleWindow }) {
    return (
        <div className='view-details'>
            <div className='view-details-inner'>
                <img id="details-img" src={image} />
                <div className='details-content'>
                    <div className='details-header'>
                        <h1>{title}</h1>
                        <div className='details-anchors'>
                            <a className='details-anchorIndiv' href={gitHubLink} target='_blank'>
                                <img className='details-anchor--img' src={github_icon} />GitHub</a>
                            <a className='details-anchorIndiv' href="">
                                <img className='details-anchor--img' src={demo_icon} />Demo</a>
                        </div>
                    </div>
                    <p>{projectDesc}</p>
                    <div className='tech-features'>
                        <div className='tech-block'>
                            <h3 className='details-head-text'>Technologies</h3>
                            <div className='details-techList'>
                                {techArr}
                            </div>
                        </div>
                        <div className='features-block'>
                            <h3 className='details-head-text'>Features</h3>
                            <ul>
                                <li>hello</li>
                                <li>hello</li>

                            </ul>
                        </div>
                    </div>
                    <button onClick={() => handleWindow()}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default ViewDetails

import React from 'react'
import '../css/ViewDetails.css'

function ViewDetails({ image, title, projectDesc, techArr, gitHubLink, handleWindow }) {
    return (
        <div className='view-details' onClick={() => handleWindow()}>
            <div className='view-details-inner'>
                <img id="details-img" src={image} />
                <div>
                    <div>
                        <h1>{title}</h1>
                        <a href={gitHubLink}><img src="" />GitHub</a>
                        <a href="">Demo</a>
                    </div>
                    <p>{projectDesc}</p>
                    <div>
                        {techArr}
                    </div>
                </div>
                <button onClick={() => handleWindow()}>Close</button>
            </div>
        </div>
    )
}

export default ViewDetails

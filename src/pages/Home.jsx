import React from 'react'

function Home() {
    return (
        <div className='home'>
            <div>
                <h1>Hi, <br /> I'm Jacqueline Kurniawan</h1>
                <p>I'm into software engineering</p>
                <div className='home--buttons'>
                    <button id='home--button-download'>Download Resumé</button>
                    <button id='home--button-contact'>Contact</button>
                </div>
            </div>
            <img className="profile" src="src/assets/R0000194.jpg" alt="" />
        </div>
    )
}

export default Home

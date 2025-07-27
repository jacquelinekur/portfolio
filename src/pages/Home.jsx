import React from 'react'


function Home() {
    return (
        <>
            <div className='home'>
                <div>
                    <h1>Hi, I'm<br />Jacqueline Kurniawan</h1>
                    <p>I'm into software engineering</p>
                    <div className='home--buttons'>
                        <a id='home--button-download' href="src/assets/[Jacquline Kurniawan] Resumé.pdf" download>Download Résumé</a>
                        <button id='home--button-contact'>Contact</button>
                    </div>
                </div>
                <img className="profile" src="src/assets/R0000194.jpg" alt="" />
            </div>
        </>
    )
}

export default Home

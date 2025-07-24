import React, { useState } from 'react'
import '../Project.css'
import github_icon from '../assets/github-logo.png'
import open_icon from '../assets/maximize.png'
import ViewDetails from './ViewDetails';

function ProjectComp({image, title, projectDesc, techArr, gitHubLink}) {
  const[windowOpen, setWindowOpen] = useState(false);

  function handleWindow(){
    setWindowOpen((prevWindow) => !prevWindow);
  }

  function trimText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }

    return text;
  }

  function techToDiv(arr) {
    const newArr = arr.map((element, i) => {
      return (
        <div key={i} className='techItem'>
          {element}
        </div>
      );
    });

    return newArr;
  }

  const trimmedDesc = trimText(projectDesc, 79);
  const divArr = techToDiv(techArr);

  return (
    <div className='project-comp'>
      <img className="project-img" src={image} />
      <div className='project-text'>
        <h3>{title}</h3>
        <p>{trimmedDesc}</p>
      </div>

      <div className='tech_list'>
        {divArr}
      </div>

      <div className='project-buttons'>
        <div className='project-links'>
          <a href={gitHubLink} target='_blank'><img className='project-githubPic' src={github_icon} /></a>
          <a href="" target='_blank'><img id='popup-img' src={open_icon} /></a>
        </div>
        <button id='view-details-btn' onClick={() => setWindowOpen(true)}>View Details</button>
      </div>

      {windowOpen && <ViewDetails image={image} title={title} projectDesc={projectDesc} techArr={divArr} handleWindow={handleWindow}/>}
    </div>
  )
}

export default ProjectComp

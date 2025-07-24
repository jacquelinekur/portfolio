import React from 'react'
import '../Project.css'
import github_icon from '../assets/github-logo.png'
import open_icon from '../assets/maximize.png'

function ProjectComp({image, title, projectDesc}) {

  function trimText(text, maxLength){
    if(text.length > maxLength){
      return text.substring(0, maxLength) + "...";
    }

    return text;
  }

  const trimmedDesc = trimText(projectDesc, 79);

  return (
    <div className='project-comp'>
      <img className="project-img" src={image} alt="" />
      <div className='project-text'>
        <h3>{title}</h3>
        <p>{trimmedDesc}</p>
      </div>
      <div className='project-buttons'>
        <a href="https://github.com/jacquelinekur/media-database.git" target='_blank'><img className='project-githubPic' src={github_icon} alt="" /></a>
        <button id='popup-btn'><img id='popup-img' src={open_icon} alt=""/></button>
        <button id='view-details-btn'>View Details</button>
      </div>
    </div>
  )
}

export default ProjectComp

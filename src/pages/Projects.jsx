import React from 'react'
import project1 from '../assets/media-database.png'
import ProjectComp from '../components/ProjectComp'

function Projects() {
  
  return (
    <div className="project">
      <ProjectComp image={project1} title="Media Database" 
      projectDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Quaerat, explicabo expedita odio illum pariatur doloremque."
      techArr={['Java', 'JavaFX', 'MySQL']}/>
    </div>
  )
}

export default Projects

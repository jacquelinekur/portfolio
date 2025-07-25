import React from 'react'
import project1 from '../assets/media-database.png'
import project2 from '../assets/courseReview-project.png'
import ProjectComp from '../components/ProjectComp'

function Projects() {

  return (
    <>
      <h1 id='project-heading'>My Projects</h1>
      <div className="project">
        <ProjectComp
          image={project2}
          title="Course Review Application"
          projectDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Quaerat, explicabo expedita odio illum pariatur doloremque."
          techArr={['Java', 'JavaFX', 'SQLite', 'Mockito', 'JUnit']} />

        <ProjectComp
          image={project1} title="Media Database"
          projectDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Quaerat, explicabo expedita odio illum pariatur doloremque."
          techArr={['Java', 'JavaFX', 'MySQL']}
          gitHubLink="https://github.com/jacquelinekur/media-database.git" />
      </div>
    </>
  )
}

export default Projects

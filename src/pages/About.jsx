import React from 'react'
import java_icon from '../assets/java.png'
import python_icon from '../assets/python.png'
import javascript_icon from '../assets/javascript.webp'
import typescript_icon from '../assets/typescript.webp'
import html_icon from '../assets/html.webp'
import css_icon from '../assets/css.webp'
import sql_icon from '../assets/sql.png'
import react_icon from '../assets/react.png'
import node_icon from '../assets/node.webp'
import mysql_icon from '../assets/mysql.webp'
import sqlite_icon from '../assets/sqlite.webp'
import git_icon from '../assets/git.webp'
import vscode_icon from '../assets/vscode.webp'
import intellij_icon from '../assets/intellij.png'

import Skill from '../components/Skill'

function about() {
  return (
    <div className='about'>
      <div id='about--text'>
        <h1>About Me</h1>
        <p>I am an undergraduate student at the University of Virginia pursuing a B.A. in Computer Science and Economics.
          I have a passion for building applications and I have developed projects ranging from JavaFX desktop applications to web applications using React.js.
          In particular, I enjoy working with Java, Python, React, and SQL.
          <br /><br />
          Outside of programming, I enjoy reading, baking, and playing the piano.
          I also love learning new languages — I am currently learning French.
          <br /><br />
          Check out my projects below, or feel free to contact me!  </p>
      </div>

      <div className='about-skills'>
        <h1>Skills</h1>
        <h3>Languages</h3>
        <div className='skills-section'>
          <Skill image={java_icon} name="Java"></Skill>
          <Skill image={python_icon} name="Python"></Skill>
          <Skill image={javascript_icon} name="JavaScript"></Skill>
          <Skill image={typescript_icon} name="TypeScript"></Skill>
          <Skill image={html_icon} name="HTML"></Skill>
          <Skill image={css_icon} name="CSS"></Skill>
          <Skill image={sql_icon} name="SQL"></Skill>
        </div>

        <h3>Frameworks & Libraries</h3>
        <div className='skills-section'>
          <Skill image={java_icon} name="JavaFX"></Skill>
          <Skill image={react_icon} name="React.js"></Skill>
          <Skill image={node_icon} name="Node.js"></Skill>
        </div>

        <h3>Databases</h3>
        <div className='skills-section'>
          <Skill image={mysql_icon} name="MySQL"></Skill>
          <Skill image={sqlite_icon} name="SQLite"></Skill>

        </div>

        <h3>Tools & Technologies</h3>
        <div className='skills-section'>
          <Skill image={git_icon} name="git"></Skill>
          <button>JUnit</button>
          <button>Mockito</button>
          <Skill image={intellij_icon} name="IntelliJ IDEA"></Skill>
          <Skill image={vscode_icon} name="VS Code"></Skill>

        </div>
      </div>
    </div>
  )
}

export default about

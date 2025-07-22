import React from 'react'
import '../Skill.css'

function Skill({name, image}) {
  return (
    <div className='skill'>
      <img className='skill-image' src={image} alt="" />
      <p className='skill-name'>{name}</p>
    </div>
  )
}

export default Skill

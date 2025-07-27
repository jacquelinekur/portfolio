import React from 'react'
import github_icon from '../assets/github-logo.png'
import linkedin_icon from '../assets/linkedin.png'

function Contact() {
  return (
    <div className='contact'>
      <h1>Contact Me</h1>
      <form action="" className='contact-form'>
        <div className='form-divider'>
          <div className='name-email'>
          <div className='form-section'>
            <label>Name</label>
            <input className='form-input' type="text" placeholder="Your Name" />
          </div>

          <div className='form-section'>
            <label>Email</label>
            <input className='form-input' type="email" placeholder='your.email@example.com' />
          </div>
        </div>

        <div className='company-number'>
          <div className='form-section'>
            <label>Company/Organisation</label>
            <input className='form-input' type="text" placeholder="Your Company/Organisation"></input>
          </div>

          <div className='form-section'>
            <label>Phone Number</label>
            <input className='form-input' type="tel" placeholder="Your Phone Number" />
          </div>
        </div>
        </div>

        <div className='form-message'>
          <label>Message</label>
          <textarea className='form-txtArea'></textarea>
        </div>

        <button id='send-btn'>Send Email</button>
      </form>

      <div className='contact-info'>
        <h2>My Contact Information</h2>
        <p>Email</p>
        <a href="">jacquelinekurniawan02@gmail.com</a>
      </div>
      <div>
        <h2>Connect With Me</h2>
        <a href="https://github.com/jacquelinekur" target='_blank'><img src={github_icon} /></a>
        <a href="http://www.linkedin.com/in/jacquelinekur" target='_blank'><img src={linkedin_icon} /></a>
      </div>
    </div>
  )
}

export default Contact

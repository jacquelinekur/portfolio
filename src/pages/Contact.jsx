import React from 'react'
import github_icon from '../assets/github-logo.png'
import linkedin_icon from '../assets/linkedin.png'

function Contact() {
  return (
    <div className='contact'>
      <h1>Contact Me</h1>
      <form action="" className='contact-form'>
        <div>
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
        </div>

        <div>
            <label>Email</label>
            <input type="email" placeholder='your.email@example.com'/>
        </div>

        <div>
            <label>Phone Number</label>
            <input type="tel" placeholder="Your Phone Number" />
        </div>

        <div>
            <label>Message</label>
            <textarea></textarea>
        </div>

         <button>Send</button>
      </form>
      <div>
        <h2>My Contact Information</h2>
        <p>Email</p>
        <p>jacquelinekurniawan02@gmail.com</p>
      </div>
      <div>
        <h2>Connect With Me</h2>
        <a href="https://github.com/jacquelinekur" target='_blank'><img src={github_icon}/></a>
        <a href="http://www.linkedin.com/in/jacquelinekur" target='_blank'><img src={linkedin_icon} /></a>
      </div>
    </div>
  )
}

export default Contact

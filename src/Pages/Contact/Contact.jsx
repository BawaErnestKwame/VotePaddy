import React from 'react'
import './Contact.css'
import image from '../../assets/contactimg.jpg'

const Contact = () => {
  return (
    <div className='contact-container'>
      <img src={image} alt="" />

      <div className="form-container">
        <h1>Get in Touch</h1>
        <p>We’d love to hear from you. Please fill out this form.</p>
        <form action="">
          <div className="input-field">
          <label htmlFor="">Full Name<span>*</span></label>
          <input type="text" placeholder='Enter Your Name'required/>
          </div>
          <div className="input-field">
          <label htmlFor="">Email<span>*</span></label>
          <input type="Email" placeholder='name@domain.com'required />
          </div>
          <div className="input-field">
          <label htmlFor="">Password<span>*</span></label>
          <input type="password" placeholder='Enter Your password'crequired />
          </div>
          <textarea name="" id="" className='textareabox' placeholder='Enter Your Message'>

          </textarea>

          <button className='message-btn'>Send Message</button>

        </form>
      </div>

    </div>
  )
}

export default Contact
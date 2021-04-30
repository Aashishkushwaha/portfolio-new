import React, { useState } from 'react'
import Button from './Button';
import { playTextToSound } from '../utils/utilFunctions'
import '../styles/Contact.scss'

const Contact = ({props: {theme, soundEnabled}}) => {
  const [name, setName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [message, setMessage] = useState('')
  const [errorField, setErrorField] = useState(false)

  const mouseEnterHandler = text => {
    playTextToSound(text)
  }

  const resetForm = () => {
    setName('')
    setEmailAddress('')
    setMessage('')
  }

  const submitFormHandler = (e) => {
    e.preventDefault();

    if(!name) {
      soundEnabled && playTextToSound('Please provide your name.')
      !soundEnabled && alert('Please provide your name')
      return setErrorField('name')
    }
    if(!emailAddress) {
      soundEnabled && playTextToSound('Please provide your email address.')
      !soundEnabled && alert('Please provide your email address')
      return setErrorField('email')
    }
    if(!message) {
      soundEnabled && playTextToSound('Please provide Message')
      !soundEnabled && alert('Please provide Message')
      return setErrorField('message')
    }
    resetForm()
  }

  return (
    <section className="section" id="contact">
      <h2 className="section__heading align-center">Get In Touch</h2>
      <h3 className="section__heading-info">
        I'm only one click away from you. Smash Send Message button !!!
      </h3>
      <div className="contact-container">
        <form action="" className="contact-form">
          <div className="contact-form-field-container">
            <label htmlFor="name" className="contact-form-field-label">Name</label>
            <input
              onChange={e => setName(e.target.value)}
              placeholder="John Doe" value={name}
              className={`${errorField === "name" ? 'contact-form-field--error' : ''} contact-form-field-input`}
              onFocus={() => {
                if(errorField)
                  setErrorField("")
                soundEnabled && playTextToSound("Enter name")}
              }
            />
          </div>
          <div className="contact-form-field-container">
            <label htmlFor="email" className="contact-form-field-label">Email</label>
            <input
              onChange={e => setEmailAddress(e.target.value)}
              placeholder="john.doe@test.com" value={emailAddress} type="email"
              className={`${errorField === "email" ? 'contact-form-field--error' : ''} contact-form-field-input`}
              onFocus={() => {
                if(errorField)
                  setErrorField("")
                soundEnabled && playTextToSound("Enter email address")}
              }
            />
          </div>
          <div className="contact-form-field-container">
            <label htmlFor="body" className="contact-form-field-label">Message</label>
            <textarea 
              placeholder="Type your message here ..."
              value={message} onChange={e => setMessage(e.target.value)}
              className={`${errorField === "message" ? 'contact-form-field--error' : ''} contact-form-field-textarea`}
              onFocus={() => {
                if(errorField)
                  setErrorField("")
                soundEnabled && playTextToSound("Enter message")}
              }
            />
          </div>
          <span className="inline-block mt-32"
            onClick={e => submitFormHandler(e)}
            onMouseEnter={() => soundEnabled && mouseEnterHandler('Send Message')}
            onFocus={() => soundEnabled && mouseEnterHandler('Send Message')}
          >
            <a href="/" onClick={e => e.preventDefault()}>
              <Button label="Send Message" type="primary" />
            </a>
          </span>
        </form>
        <div className="contact-illutration-container">
          <img className="contact-illutration" src={`./assets/images/contact_${theme}.svg`} alt="contact"/>
        </div>
      </div>
    </section>
  )
}

export default Contact

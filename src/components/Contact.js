import React, { createRef, useState } from 'react'
import Button from './Button'
import Loader from './Loader'
import { ToastContainer } from 'react-toastify'
import emailjs from 'emailjs-com'
import { playTextToSound, showToastMessage } from '../utils/utilFunctions'
import '../styles/Contact.scss'
import 'react-toastify/dist/ReactToastify.css'

const Contact = ({props: {theme, soundEnabled}}) => {
  const formRef = createRef()
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorField, setErrorField] = useState(false)
  const [emailAddress, setEmailAddress] = useState('')
  
  const mouseEnterHandler = text => {
    playTextToSound(text)
  }

  const resetForm = () => {
    setName('')
    setEmailAddress('')
    setMessage('')
  }

  const submitFormHandler = (e) => {
    e.preventDefault()
    const { 
      REACT_APP_EMAIL_USER_ID: EMAIL_USER_ID,
      REACT_APP_EMAIL_SERVICE_ID: EMAIL_SERVICE_ID, 
      REACT_APP_EMAIL_TEMPLATE_ID: EMAIL_TEMPLATE_ID, 
    } = process.env

    if(!name) {
      soundEnabled && playTextToSound('Please provide your name.')
      showToastMessage('Please provide name!', 'error')
      return setErrorField('name')
    }
    if(!emailAddress) {
      soundEnabled && playTextToSound('Please provide your email address.')
      showToastMessage('Please provide email address!', 'error')
      return setErrorField('email')
    }
    if(!message) {
      soundEnabled && playTextToSound('Please provide Message')
      showToastMessage('Please provide Message!', 'error')
      return setErrorField('message')
    }
    if(message?.trim().length > 720) {
      soundEnabled && playTextToSound('Message can contain maximum 720 characters. Please shorten your message.')
      showToastMessage('Message can contain maximum 720 characters!', 'error')
      return setErrorField('message')
    }

    setLoading(true)

    emailjs.sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, formRef.current, EMAIL_USER_ID)
    .then(() => {
      setLoading(false)
      soundEnabled && playTextToSound('Message sent successfully.')
      showToastMessage("Message sent successfully.", "success")
    }, () => {
      setLoading(false)
      soundEnabled && playTextToSound('Some error occurred while sending message!')
      showToastMessage("Some error occurred while sending message!", "error")
    })
    
    resetForm()
  }

  return (
    <section className="section" id="contact">
      <ToastContainer />
      {loading && <Loader />}
      <h2 className="section__heading align-center">Get In Touch</h2>
      <h3 className="section__heading-info">
        I'm only one click away from you. Smash Send Message button !!!
      </h3>
      <div className="contact-container">
        <form action="" className="contact-form" ref={formRef}>
          <div className="contact-form-field-container">
            <label htmlFor="name" className="contact-form-field-label">Name</label>
            <input
              onChange={e => setName(e.target.value)}
              placeholder="John Doe" value={name} name="name"
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
              onChange={e => setEmailAddress(e.target.value)} name="email"
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
              placeholder="Message ... (max. 720 characters)" name="message"
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

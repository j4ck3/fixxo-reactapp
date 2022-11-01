import React, {useState} from 'react'

const ContactForm = () => {

  const [contactForm, setContactForm] = useState ({name: '', email: '', message: ''})
  const [formErrors, setFormErrors] = useState({})
  const [canSubmit, setCanSubmit] = useState(false)

  const [inputErrorName, setInputErrorName] = useState(false)
  const [inputErrorEmail, setInputErrorEmail] = useState(false)
  const [inputErrorMessage, setInputErrorMessage] = useState(false)

  const validate = (values) => {
    const errors = {}
    const regex_email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    //name
    if (!values.name) {
      errors.name = 'You must enter a Name'
      setInputErrorName(true) 
      } else if (values.name.length < 2){
          errors.name = 'Name must be at least 2 character long'
          setInputErrorName(true) 
        } else setInputErrorName(false) 

    //email
    if (!regex_email.test(values.email)){
      errors.email = 'You must enter a valid Email Adress'
      setInputErrorEmail(true) 
    } else setInputErrorEmail(false)

    //message
    if (!values.message) {
      errors.message = 'You must enter a Comment'
      setInputErrorMessage(true) 
      } else if (values.message.length < 5)
        errors.message = 'Comment must be at least 5 characters long'
        else setInputErrorMessage(false) 
        

    if (Object.keys(errors).length === 0)
      setCanSubmit(true)
    else
      setCanSubmit(false)

    return errors;
  }

  const handleChange = (e) => {
    const {id, value} = e.target
    setContactForm({...contactForm, [id]: value})

  }

  const handleSubmit = (e) => {
    if (canSubmit === false) { 
      e.preventDefault()
      setFormErrors(validate(contactForm))
    }
  }

  return (
      <div className='container'>
        <div className='contact-form'>
          <h2>Come in Contact with Us</h2>
          <form noValidate onSubmit={handleSubmit}>
            <div>
              <input className={`${ inputErrorName ? "error" : ""}`} id='name' type='text' placeholder='Your Name' autoComplete='off' value={contactForm.name} onChange={handleChange} onKeyUp={handleSubmit}/>
              <div className='error-message'>{formErrors.name}</div>
            </div>
            <div>
              <input className={`${ inputErrorEmail ? "error" : ""}`} id='email' type='email' autoComplete='off' placeholder='Your Email Adress' value={contactForm.email} onChange={handleChange} onKeyUp={handleSubmit}/>
              <div className='error-message'>{formErrors.email}</div>
            </div>
            <div className='textarea' >
              <textarea className={`${ inputErrorMessage ? "error" : ""}`} id='message' type='text' placeholder='Comments' value={contactForm.message} onChange={handleChange} onKeyUp={handleSubmit}/>
              <div className='error-message'>{formErrors.message}</div>
            </div>
            <div>
              <button type='submit' className={`contact-btn ${ canSubmit ? "" : "disabled"}`}>Post Comments</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default ContactForm
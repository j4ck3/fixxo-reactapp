import React, {useState} from 'react'

const ContactForm = () => {

  const [contactForm, setContactForm] = useState ({name: '', email: '', comments: ''})
  const [formErrors, setFormErrors] = useState({})
  const [canSubmit, setCanSubmit] = useState(false)

  const [submitted, setSubmitted] = useState(false)
  const [SubmitFailed, setSubmitFailed] = useState(false)

  const [inputErrorName, setInputErrorName] = useState(false)
  const [inputErrorEmail, setInputErrorEmail] = useState(false)
  const [inputErrorcomments, setInputErrorcomments] = useState(false)

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

    //comments
    if (!values.comments) {
      errors.comments = 'You must enter a Comment'
      setInputErrorcomments(true) 
      } else if (values.comments.length < 5)
        errors.comments = 'Comment must be at least 5 characters long'
        else setInputErrorcomments(false) 
        

    if (Object.keys(errors).length === 0)
      setCanSubmit(true)
    else
      setCanSubmit(false)

    return errors;
  }

  const handleChange = (e) => {
    const {id, value} = e.target
    setContactForm({...contactForm, [id]: value})
    setFormErrors(validate(contactForm))

  }

  const handleSubmit = (e) => {
      e.preventDefault()
      setFormErrors(validate(contactForm))

      if (Object.keys(formErrors).length === 0) {
        let json = JSON.stringify(contactForm)
        fetch ('https://win22-webapi.azurewebsites.net/api/contactform', {
          method: 'post',
          headers: { 'Content-Type': 'application/json'},
          body: json
        })

        .then(res => {
        if (res.status === 200) {
          setSubmitted(true)
          contactForm.name = ""
          contactForm.email = ""
          contactForm.comments = ""
          
        } 
        else {
          setSubmitted(false)
          setSubmitFailed(true)

        }})
      }
  }

  return (
      <div className='container'>
        <div className='contact-form'>
          <h2>Come in Contact with Us</h2>
          {
          submitted ? 
            (
            <div className='alert alert-success ' role='alert'>
            <h2 className='text-center'>Thank you for your comments!</h2>
            <p className='text-center'>We will contact you as soon as possible.</p>
            </div>
            ) : ( <></> )
        }
                {
          SubmitFailed ? 
            (
            <div className='alert alert-danger text-center' role='alert'>
            <h2 className='text-center'>Something wen't wrong!</h2>
            <p className='text-center'>Please try again later or contact <a className='link-info' href='#'>Support.</a></p>
            </div>
            ) : ( <></> )
        }
          <form noValidate onSubmit={handleSubmit}>
            <div>
              <input className={`${ inputErrorName ? "error" : ""}`} id='name' type='text' placeholder='Your Name' value={contactForm.name} onChange={handleChange}/>
              <div className='error-message'>{formErrors.name}</div>
            </div>
            <div>
              <input className={`${ inputErrorEmail ? "error" : ""}`} id='email' type='email' autoComplete='off' placeholder='Your Email Adress' onBlur={handleChange} value={contactForm.email} onChange={handleChange} />
              <div className='error-message'>{formErrors.email}</div>
            </div>
            <div className='textarea' >
              <textarea className={`${ inputErrorcomments ? "error" : ""}`} id='comments' type='text' placeholder='Comments' value={contactForm.comments} onChange={handleChange} /* onKeyUp={validate} */ />
              <div className='error-message'>{formErrors.comments}</div>
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
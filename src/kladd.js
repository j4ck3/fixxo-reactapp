/* import React, {useState} from 'react'

const ContactForm = () => {

  const [contactForm, setContactForm] = useState ({name: '', email: '', message: ''})

  const [canSubmit, setCanSubmit] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [SubmitFailed, setSubmitFailed] = useState(false)

  const [name, setName] = useState ('')
  const [email, setEmail] = useState ('')
  const [message, setMessage] = useState ('')
  const [errors, setErrors] = useState({})

  const [inputErrorName, setInputErrorName] = useState(false)
  const [inputErrorEmail, setInputErrorEmail] = useState(false)
  const [inputErrorMessage, setInputErrorMessage] = useState(false)

  const validate = (values) => {
    const errors = {}
    const regex_email = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

    //name
    if (!values.name) {
      errors.name = 'You must enter a Name'
      setInputErrorName(true) 
      } else if (values.name.length < 2){
          errors.name = 'Name must be at least two character long'
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
        errors.message = 'Comment must be at least five characters long'
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
      switch(id) {
        case 'name':
          setName(value)
          break
        case 'email':
          setEmail(value)
          break
        case 'message':
          setMessage(value)
          break
      } 



      if (errors.name === null && errors.email === null && errors.message === null)
        setCanSubmit(true) 
  }


  const handleSubmit = (e) => {
      e.preventDefault()
      setSubmitFailed(false)
      setSubmitted(false)

      setErrors(validate(e, {name, email, message}))

      if (errors.name === null && errors.email === null && errors.message === null) {

        let json = JSON.stringify({name, email, message})

        setName('')
        setEmail('')
        setMessage('')
        setErrors({})
  
        fetch ('https://win22-webapi.azurewebsites.net/api/contactform', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: json
        })
        
      .then(res => {
        if (res.status === 200) {
          setSubmitted(true)
        } 
        else {
          setSubmitted(false)
          setSubmitFailed(true)
        }})

        } else  {
          setSubmitted(false)
        }
  }




  return (
      <div className='container'>
        {
          submitted ? 
            (
            <div className='alert alert-success ' role='alert'>
            <h2>Thank you for your comments!</h2>
            <p className='d-block'>We will contact you as soon as possible.</p>
            </div>
            ) : ( <></> )
        }
                {
          SubmitFailed ? 
            (
            <div className='alert alert-danger text-center' role='alert'>
            <h2>Something wen't wrong!</h2>
            <p className='d-block'>Please try again later or contact <button className='link-info' href='#'>Support.</button></p>
            </div>
            ) : ( <></> )
        }
        <div className='contact-form'>
          <h2>Come in Contact with Us</h2>
          <form noValidate onSubmit={handleSubmit}>
            <div>
              <input className={`${ inputErrorName ? "error" : ""}`} id='name' type='text' placeholder='Your Name' autoComplete='off' value={name} onChange={handleChange} onKeyUp={handleSubmit}/>
              <div className='error-message'>{errors.name}</div>
            </div>
            <div>
              <input className={`${ inputErrorEmail ? "error" : ""}`} id='email' type='email' autoComplete='off' placeholder='Your Email Adress' value={email} onChange={handleChange} onKeyUp={handleSubmit}/>
              <div className='error-message'>{errors.email}</div>
            </div>
            <div className='textarea' >
              <textarea className={`${ inputErrorMessage ? "error" : ""}`} id='message' type='text' placeholder='Comments' value={message} onChange={handleChange} onKeyUp={handleSubmit}/>
              <div className='error-message'>{errors.message}</div>
            </div>
            <div>
              <button type='submit' className={`contact-btn ${ canSubmit ? "" : "disabled"}`}>Post Comments</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default ContactForm */


<div className="container-xxl">
    <p>
        <div className="colapse-container">
            <a id="productColapse" className="product-colapse" /* onclick={toggleColapse(0)}  */data-bs-toggle="collapse" href="#Description" role="button" aria-expanded="false" aria-controls="collapseExample">
                Description
            </a>
            <a id="productColapse" className="product-colapse" /* onclick={toggleColapse(1)} */ data-bs-toggle="collapse" href="#Additional" role="button" aria-expanded="false" aria-controls="collapseExample">
                Additional
            </a>
            <a id="productColapse" className="product-colapse" /* onclick={toggleColapse(2)} */ data-bs-toggle="collapse" href="#Shopping" role="button" aria-expanded="false" aria-controls="collapseExample">
                Shopping & Returns
            </a>
            <a id="productColapse" className="product-colapse" /* onclick={toggleColapse(3)} */ data-bs-toggle="collapse" href="#Reviews" role="button" aria-expanded="false" aria-controls="collapseExample">
                Reviews
            </a>
        </div>
    </p>
    
    <div className="collapse" id="Description">
        <div className="card card-body">
            <span>
                Way extensive and dejection get delivered deficient sincerity gentleman age. 
                Too end instrument possession contrasted motionless. Calling offence six joy feeling.
                Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery
                    incommode earnestly no he commanded if. Put still any about manor heard.<br />
                    * Village did removed enjoyed explain nor ham saw calling talking.<br />
                    * Securing as informed declared or margaret.<br />
                    * Joy horrible moreover man feelings own shy.<br />
                    On even feet time have an no at. Relation so in confined smallest children unpacked delicate. 
                    Why sir end believe uncivil respect. Always get adieus nature day course for common. My little 
                    garret repair to desire he esteem. 
            </span>
        </div>    
    </div>
    <div className="collapse" id="Additional">
        <div className="card card-body">
            <span>Additional</span>
        </div>
    </div>
    <div className="collapse" id="Shopping">
        <div className="card card-body">
            <span>Shopping & Returns</span>
        </div>
    </div>
    <div className="collapse" id="Reviews">
        <div className="card card-body">
            <span>Reviews</span>
        </div>
    </div>
</div>
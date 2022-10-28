import React from 'react'
import NavBar from '../sections/NavBar';
import Footer from '../sections/Footer';
import { NavLink } from 'react-router-dom'
import ContactForm from '../sections/ContactForm';

const Contact = () => {
  return (
    <>
    <NavBar />
    <div className="container-xxl">
        <div className="d-flex align-items-center mt-5">
            <ul className="breadcrumb">
                <li className="home"><NavLink to="/"><i className="fa-solid fa-house"></i> Home</NavLink></li>
                <li className="active">Contacts</li>
            </ul>
        </div>
    </div>
    <iframe title="adress" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d32569.901228608014!2d18.069478692745925!3d59.322620996849196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sse!4v1665754418253!5m2!1sen!2sse" width="100%" height="350" style={{border: "none"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    <ContactForm />    
    <Footer />
    </>
  )
}

export default Contact
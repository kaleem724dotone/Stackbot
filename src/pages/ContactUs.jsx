import React, { useEffect } from 'react'
import ContactForm from '../components/ContactUs/ContactForm'



 const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <ContactForm/>

    </div>
  )
}

export default ContactUs
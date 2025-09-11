import React, { useEffect } from 'react'
import PrivacyPolicy from '../components/PrivacyPolicy';
import { BlogShowcase } from '../components/Blog/GBlog';


 const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        {/* <ContactForm/> */}
        <BlogShowcase title="Latest Blog Posts" filterType='popular' show='yes'/>
        <BlogShowcase title="Featured Blog Posts" filterType='featured' show='no'/>
        <PrivacyPolicy/>
    </div>
  )
}

export default ContactUs
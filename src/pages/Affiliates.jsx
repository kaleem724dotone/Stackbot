import React, { useEffect } from 'react'
import AboutUsSection from '../components/AboutUsSection';
import AboutUsAndBlogs from '../components/AboutUsAndBlogs';
import UniqueSellingPoints from '../components/UniqueSellingProportions';
import LatestOngoings from '../components/LatestOngoings';
import FAQSection from '../components/FAQSection';


const Affiliates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='w-[100%]'>
        <AboutUsSection/>
        <AboutUsAndBlogs/>
        <UniqueSellingPoints/>
        <LatestOngoings/>
        <FAQSection/>
        </div>
  )
}

export default Affiliates

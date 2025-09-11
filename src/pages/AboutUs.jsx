import React from 'react'
import AboutUsAndBlogs from '../components/AboutUs/AboutUsSection'
import FAQSection from '../components/FAQSection'
import LatestOngoings from '../components/LatestOngoings'

import UniqueSellingProportion from '../components/UniqueSellingProportions'

const AboutUs = () => {
  return (
    <div className="space-y-6">
        <AboutUsAndBlogs />
        <UniqueSellingProportion />
        <LatestOngoings />
        <FAQSection />
    </div>
  )
}

export default AboutUs
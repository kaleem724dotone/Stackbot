
import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import CategoryGrid from '../components/CategoryGrid'
import Products from '../components/Products'
import UniqueSellingProportions from '../components/UniqueSellingProportions'
import FAQSection from '../components/FAQSection'

// import Almira from "../assets/almira.png"


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Any side effects or data fetching can be done here
  }, []);

  return (
    <div className='w-[100%]' >
      <HeroSection />
      <Products heading="Featured Products" description="Check out our featured products below." />
      <CategoryGrid />
      <Products heading="Most Popular Items" description="Check out our most popular items below." filterBy={['popular']} columns={4}/>
      <UniqueSellingProportions />
      <FAQSection />

    </div>
  )
}

export default Home

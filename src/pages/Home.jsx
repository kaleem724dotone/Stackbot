
import React, { useEffect } from 'react'
import HeroSection from '../components/Home/HeroSection';
import Products from '../components/Products';
import CategoryGrid from '../components/Home/CategoryGrid';
import UniqueSellingProportions from '../components/UniqueSellingProportions';
import FAQSection from '../components/FAQSection';


// import Almira from "../assets/almira.png"


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Any side effects or data fetching can be done here
  }, []);

  return (
    <div className='w-[100%]' >
      <HeroSection />
      <Products heading="Featured Products"  />
      <CategoryGrid />
      <Products heading="Most Popular Products" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina." filterBy={['popular']} columns={4}/>
      <UniqueSellingProportions />
      <FAQSection />

    </div>
  )
}

export default Home

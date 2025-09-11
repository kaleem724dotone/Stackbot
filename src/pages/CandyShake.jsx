import React, { useEffect } from 'react';
import Products from '../components/Products';
import CategoriesFilter from '../components/Filters/CategoriesFilter';
import ShopWiseList from '../components/Filters/ShopWiseList';
import RatingsFilter from '../components/Filters/RatingsFilter';
import PriceRangeFilter from '../components/Filters/PriceRangeFilter';

const CandyShake = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex">
      {/* Column 1 - 20% */}
      <div className="w-[20%] bg-white p-4">
        <CategoriesFilter />
        <RatingsFilter />
        <PriceRangeFilter />
        <ShopWiseList />
      </div>

      {/* Column 2 - 80% */}
      <div className="w-[80%] bg-white p-4">
        <Products heading="Candy Shake Products" description="Explore our delightful range of Candy Shake products." filterBy={['candyShake']} columns={3}/>
      </div>
    </div>
  );
};

export default CandyShake;

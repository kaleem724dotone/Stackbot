import React, { useEffect, useState } from 'react';
import CategoriesFilter from '../components/Categories/CategoriesFilter';
import RatingsFilter from '../components/Categories/RatingsFilter';
import PriceRangeFilter from '../components/Categories/PriceRangeFilter';
import ShopWiseList from '../components/Categories/ShopWiseList';
import Products from '../components/Products';
import { AiOutlineFilter } from 'react-icons/ai';

const Categories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* Mobile Filter Button */}
      <div className="md:hidden flex justify-end p-4">
        <button
          className="flex items-center gap-2 bg-[#6B4EEF] text-white px-4 py-2 rounded-lg"
          onClick={() => setShowFilters(!showFilters)}
        >
          <AiOutlineFilter size={20} />
          Filters
        </button>
      </div>

      {/* Sidebar Filters */}
      <div
        className={`${
          showFilters ? 'block' : 'hidden'
        } md:block w-full md:w-[20%] bg-white p-4 absolute md:relative z-50 top-0 left-0 h-full md:h-auto shadow-md md:shadow-none`}
      >
        <CategoriesFilter />
        <RatingsFilter />
        <PriceRangeFilter />
        <ShopWiseList />

        {/* Close button for mobile */}
        {showFilters && (
          <div className="md:hidden mt-4">
            <button
              className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
              onClick={() => setShowFilters(false)}
            >
              Close Filters
            </button>
          </div>
        )}
      </div>

      {/* Products Column */}
      <div className="w-full md:w-[80%] bg-white p-4">
        <Products
          heading="Candy Shake Products"
          description="Explore our delightful range of Candy Shake products."
          filterBy={['candyShake']}
          columns={3} // could adjust columns based on screen size inside Products
        />
      </div>
    </div>
  );
};

export default Categories;

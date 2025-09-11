import React from 'react';
import { Button } from 'antd';

const UniqueSellingProportions = () => {
  return (
    <div className="bg-[#5046C7] text-white p-12 h-[500px] flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <h2 className="text-4xl font-oxygen font-bold leading-tight">
            Have a Look at Our Unique <br />
            Selling Proportions
          </h2>
          <Button type="primary" className="mt-6 bg-white text-[#5942AE] border-none font-semibold rounded-full px-6 py-3 shadow-md hover:bg-gray-200">
            Read More &gt;
          </Button>
        </div>
        <div className="md:w-1/2">
          <p className="text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          <div className="flex justify-between space-x-4">
            <div className="text-center">
              <h3 className="text-5xl font-bold">99%</h3>
              <p className="mt-2 text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold">100%</h3>
              <p className="mt-2 text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueSellingProportions;
import React from 'react';
import { Checkbox } from 'antd';

const PriceRangeFilter = () => {
  const priceRanges = [
    '$20.00 - $50.00',
    '$50.00 - $100.00',
    '$100.00 - $150.00',
    '$150.00 - $200.00',
    '$200.00 - $250.00',
    '$250.00+',
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 w-full md:w-64 my-2">
      <div className="flex items-center mb-4">
        <div className="w-1.5 h-6 bg-[#6B4EEF] rounded-full mr-2"></div>
        <h3 className="text-xl font-semibold text-gray-800">Price Range</h3>
      </div>
      <div className="flex flex-col space-y-3 max-h-64 overflow-y-auto">
        {priceRanges.map((range, index) => (
          <div key={index} className="flex items-center">
            <Checkbox className="price-range-checkbox" defaultChecked={index === 0 || index === 4}>
              <span className="text-lg text-gray-700">{range}</span>
            </Checkbox>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceRangeFilter;

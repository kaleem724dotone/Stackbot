import React from 'react';
import { DownOutlined } from '@ant-design/icons';

const CategoriesFilter = () => {
  const categories = [
    'Lorem ipsum (3)',
    'Lorem ipsum (3)',
    'Lorem ipsum (3)',
    'Lorem ipsum (3)',
    'Lorem ipsum (3)',
    'Lorem ipsum (3)',
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 w-64 my-2">
      <div className="flex items-center mb-4">
        <div className="w-1.5 h-6 bg-[#6B4EEF] rounded-full mr-2"></div>
        <h3 className="text-xl font-semibold text-gray-800">Categories</h3>
      </div>
      <div className="flex flex-col space-y-3">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center justify-between cursor-pointer">
            <p className="text-lg text-gray-700 hover:text-[#6B4EEF]">
              {category}
            </p>
            <DownOutlined className="text-[#6B4EEF]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesFilter;
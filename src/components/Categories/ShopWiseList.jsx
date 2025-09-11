import React from 'react';

const ShopWiseList = () => {
  const shops = ['Shop Name 1', 'Shop Name 2', 'Shop Name 3', 'Shop Name 4', 'Shop Name 5', 'Shop Name 6'];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 w-full md:w-64 my-2">
      <div className="flex items-center mb-4">
        <div className="w-1.5 h-6 bg-[#6B4EEF] rounded-full mr-2"></div>
        <h3 className="text-xl font-semibold text-gray-800">Shop Wise</h3>
      </div>
      <div className="flex flex-col space-y-3 max-h-64 overflow-y-auto">
        {shops.map((shop, index) => (
          <p
            key={index}
            className="text-lg text-gray-700 cursor-pointer hover:text-[#6B4EEF]"
          >
            {shop}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ShopWiseList;

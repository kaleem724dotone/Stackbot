import React from 'react';
import { Checkbox, Rate } from 'antd';

const RatingsFilter = () => {
  const ratings = [
    5, // 5 stars
    4, // 4 stars
    3, // 3 stars
    2, // 2 stars
    1, // 1 star
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 w-64 my-2">
      <div className="flex items-center mb-4">
        <div className="w-1.5 h-6 bg-[#6B4EEF] rounded-full mr-2"></div>
        <h3 className="text-xl font-semibold text-gray-800">Ratings</h3>
      </div>
      <div className="flex flex-col space-y-3">
        {ratings.map((stars, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Checkbox className="ratings-checkbox" defaultChecked={index === 0}>
              <Rate
                allowHalf
                disabled
                defaultValue={stars}
                count={5}
                className="text-lg"
              />
            </Checkbox>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingsFilter;
import React from 'react';
import { Button } from 'antd';
import { blogPosts } from '../data/blogPost';
const AboutUsAndWhatSetsUsApart = () => {
  // Find the latest blog post by sorting the array by a date/time stamp.
  // Assuming the highest ID corresponds to the latest post for this example.
  const latestBlog = blogPosts.reduce((latest, current) => {
    return latest.id > current.id ? latest : current;
  }, blogPosts[0]);

  return (
    <div className="bg-[#EFEFEF] py-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Section: Text and Button */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Learn About Us And What Sets Us Apart
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat
          </p>
          <Button
            type="primary"
            className="bg-gray-800 text-white border-none font-semibold rounded-full px-8 py-4 h-auto shadow-md hover:bg-gray-700 transition-colors duration-200"
          >
            Read Our Blogs &gt;
          </Button>
        </div>

        {/* Right Section: Blog Post */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 max-w-lg lg:max-w-none w-full">
            {/* Top Left Image - Latest Blog Image */}
            <div className="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-md bg-gray-200 aspect-w-16 aspect-h-9 sm:aspect-none">
              <img
                src={latestBlog.image}
                alt={latestBlog.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bottom Left Image - Placeholder for the title and info of the latest blog */}
            <div className="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-md bg-white p-4 flex flex-col justify-center">
              <p className="text-sm text-gray-700 font-medium mb-1">
                {latestBlog.date} • {latestBlog.time}
              </p>
              <h4 className="text-lg font-bold text-gray-800 leading-snug">
                {latestBlog.title}
              </h4>
            </div>
            {/* Right Large Image - Placeholder (or you can use a fixed image) */}
            <div className="col-span-1 row-span-2 rounded-xl overflow-hidden shadow-md bg-pink-300">
              <img
                src="https://via.placeholder.com/600x900.png?text=Coco+Chanel+Perfume"
                alt="Chanel perfume bottle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsAndWhatSetsUsApart;
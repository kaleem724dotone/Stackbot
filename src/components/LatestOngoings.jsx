import React from 'react';
import { Button } from 'antd';
import { blogPosts } from '../data/blogPost';
const LatestOngoings = () => {
  return (
    <div className="bg-[#EFEFEF] py-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0 md:w-2/3">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Latest Ongoings
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <Button
              type="primary"
              className="bg-[#6B4EEF] text-white border-none font-semibold rounded-full px-8 py-4 h-auto shadow-md hover:bg-[#5a3ed8] transition-colors duration-200 text-lg"
            >
              Read All Blogs &gt;
            </Button>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
              {/* Blog Image */}
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                {/* User Info */}
                <div className="flex items-center mb-4">
                  <img
                    src={post.userAvatar}
                    alt={post.userName}
                    className="w-8 h-8 rounded-full mr-3 object-cover"
                  />
                  <p className="text-sm text-gray-700 font-medium">
                    {post.userName} • {post.date}
                  </p>
                </div>

                {/* Blog Title */}
                <h3 className="text-xl font-bold text-gray-800 leading-snug mb-2">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestOngoings;
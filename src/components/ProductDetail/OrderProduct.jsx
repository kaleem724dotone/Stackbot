import React, { useState } from 'react';
import { Button, Rate, Collapse, Input, InputNumber } from 'antd';
import { HeartOutlined, ShoppingCartOutlined, DownOutlined, UpOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { TrendingDown } from "lucide-react";
import { products } from '../data/productsData';

const { Panel } = Collapse;
const { TextArea } = Input;

// I'll display a specific product from the JSON for this page
const productId = "prod-4";
const mainProduct = products.find(p => p.id === productId);

const reviewsData = [
  { id: 1, author: 'Mike Johnson', rating: 5, time: '5m', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisi, cras neque, lorem vel vulputate vitae aliquam. Pretium tristique nisi, ut commodo fames.' },
  { id: 2, author: 'Mike Johnson', rating: 5, time: '5m', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisi, cras neque, lorem vel vulputate vitae aliquam. Pretium tristique nisi, ut commodo fames.' },
];

const ProductDetailsPage = () => {
  const [reviews, setReviews] = useState(reviewsData);
  const [form, setForm] = useState({
    name: '',
    email: '',
    review: '',
    rating: 0,
  });

  if (!mainProduct) {
    return <div>Product not found.</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleRatingChange = (value) => {
    setForm(prevForm => ({ ...prevForm, rating: value }));
  };

  const handleReviewSubmit = () => {
    // Basic validation
    if (!form.name || !form.email || !form.review || form.rating === 0) {
      alert("Please fill out all fields and provide a rating.");
      return;
    }

    const newReview = {
      id: reviews.length + 1,
      author: form.name,
      rating: form.rating,
      comment: form.review,
      time: 'Just now',
    };

    setReviews(prevReviews => [newReview, ...prevReviews]); // Add new review to the top
    setForm({ name: '', email: '', review: '', rating: 0 }); // Reset form
  };

  const renderReviews = () => (
    <div className="space-y-6">
      {reviews.map(review => (
        <div key={review.id} className="flex flex-col gap-4 p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex items-center">
            <img src="https://via.placeholder.com/50x50.png?text=MJ" alt={review.author} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold text-lg">{review.author}</p>
              <Rate disabled defaultValue={review.rating} className="text-sm text-yellow-400" />
            </div>
            <span className="ml-auto text-sm text-gray-500">{review.time}</span>
          </div>
          <p className="text-gray-700 leading-relaxed">{review.comment}</p>
          <div className="flex items-center text-gray-500 text-sm gap-4">
            <span className="cursor-pointer hover:underline">Like</span>
            <span className="cursor-pointer hover:underline">Reply</span>
          </div>
        </div>
      ))}

      {/* Review Submission Form */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Input
            placeholder="Your Name:"
            name="name"
            value={form.name}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Your Email:"
            name="email"
            value={form.email}
            onChange={handleInputChange}
          />
        </div>
        <TextArea
          rows={4}
          placeholder="Write your review..."
          name="review"
          value={form.review}
          onChange={handleInputChange}
          className="mb-4"
        />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-600">Your Ratings:</p>
            <Rate onChange={handleRatingChange} value={form.rating} className="text-lg" />
          </div>
          <Button
            type="primary"
            className="bg-[#6B4EEF] text-white font-semibold rounded-full px-8 py-3 h-auto hover:bg-[#5a3ed8]"
            onClick={handleReviewSubmit}
          >
            Post Review
          </Button>
        </div>
      </div>
    </div>
  );

  // Get similar products (excluding the main one)
  const similarProducts = products.filter(p => p.id !== productId).slice(0, 4);

  return (
    <div className="bg-[#EFEFEF] min-h-screen">
      {/* Product Info Section */}
      <div className="py-12 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 bg-white p-8 rounded-lg shadow-sm">
          {/* Product Gallery Section */}
          <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-1/2">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible">
              {mainProduct.gallery.map((img, index) => (
                <div key={index} className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden border-2 border-transparent hover:border-[#6B4EEF] transition-colors cursor-pointer">
                  <img src={img} alt={`${mainProduct.title} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            {/* Main Product Image */}
            <div className="w-full h-auto rounded-lg overflow-hidden">
              <img src={mainProduct.image} alt={mainProduct.title} className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* Product Details Section */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-3xl font-bold text-gray-800">{mainProduct.title}</h1>
              <Button type="text" icon={<HeartOutlined className="text-xl" />} />
            </div>
            <div className="flex items-center mb-4">
              <h2 className="text-3xl font-bold text-gray-800 mr-4">{mainProduct.price}</h2>
              <Rate disabled defaultValue={mainProduct.rating} className="text-lg text-yellow-400" />
              <span className="ml-2 text-gray-500">(32 Reviews)</span>
            </div>
            <p className="text-gray-600 mb-6">{mainProduct.description}</p>
            
            {/* Specification List */}
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</li>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</li>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</li>
            </ul>

            {/* Actions */}
            <div className="flex items-center gap-4 mb-6">
              <InputNumber min={1} max={10} defaultValue={1} className="w-20 h-10 border border-gray-300 rounded-md" />
              <Button
                type="primary"
                className="bg-[#6B4EEF] text-white font-semibold rounded-full px-8 py-3 h-auto hover:bg-[#5a3ed8] transition-colors"
                icon={<ShoppingCartOutlined />}
              >
                Add to Cart
              </Button>
              <Button
                type="primary"
                className="bg-gray-800 text-white font-semibold rounded-full px-8 py-3 h-auto hover:bg-gray-700 transition-colors"
              >
                Buy Now
              </Button>
            </div>
            
            {/* Delivery & Shipping */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <InfoCircleOutlined className="text-gray-400" />
              <p>Free delivery in 2-4 working days</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <InfoCircleOutlined className="text-gray-400" />
              <p>2 Day Return - Easy Exchanges</p>
            </div>
          </div>
        </div>
      </div>

      {/* Description & Reviews Section */}
      <div className="py-12 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <Collapse
            accordion
            expandIconPosition="right"
            className="custom-collapse"
            expandIcon={({ isActive }) => isActive ? <UpOutlined /> : <DownOutlined />}
            collapsible="header"
          >
            <Panel
              header={<span className="text-2xl font-bold">Description</span>}
              key="1"
            >
              <p className="text-gray-600">{mainProduct.description}</p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              </ul>
            </Panel>
            <Panel
              header={<span className="text-2xl font-bold">Reviews</span>}
              key="2"
            >
              {renderReviews()}
            </Panel>
          </Collapse>
        </div>
      </div>
      
      {/* Similar Products Section */}
      <div className="py-12 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Similar Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {similarProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm p-4 text-center relative">
                <div className="absolute top-2 left-2 px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                  <TrendingDown size={14} className="transform rotate-180" />
                  <span>5%</span>
                </div>
                <img src={product.image} alt={product.title} className="w-full h-32 object-cover rounded-md mb-4" />
                <h3 className="text-sm font-semibold text-gray-800 mb-1">{product.title}</h3>
                <p className="text-xs text-gray-500 line-through mr-2">
                  <InfoCircleOutlined className="text-gray-400" />
                  <span className="ml-1">$20.00</span>
                </p>
                <p className="text-base font-bold text-gray-800">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
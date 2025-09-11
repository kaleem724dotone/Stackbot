import React, { useState } from 'react';
import { Button, InputNumber } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { cartItems as initialCartItems } from '../data/cardItems';
const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const discount = 0; // Placeholder for a discount

  const handleQuantityChange = (id, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Calculate Subtotal and Total
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal - discount;

  return (
    <div className="bg-white py-12 px-4 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Left Section: Cart Items List */}
        <div className="w-full lg:w-2/3 bg-white rounded-lg">
          {/* Table Headers */}
          <div className="hidden md:grid grid-cols-4 items-center py-4 text-gray-500 border-b border-gray-200 font-semibold text-sm">
            <div className="pl-10">Product</div>
            <div className="text-center">Price</div>
            <div className="text-center">Quantity</div>
            <div className="text-center">Total</div>
          </div>
          
          {/* Cart Items */}
          {cartItems.map(item => (
            <div key={item.id} className="grid grid-cols-1 md:grid-cols-4 items-center py-6 border-b border-gray-200">
              {/* Product Info */}
              <div className="flex items-center gap-4">
                <Button 
                  type="text" 
                  icon={<CloseOutlined />} 
                  className="text-gray-400 hover:text-red-500" 
                  onClick={() => handleRemoveItem(item.id)}
                />
                <img src={item.image} alt={item.product} className="w-16 h-16 object-cover rounded-md" />
                <span className="font-semibold text-gray-800">{item.product}</span>
              </div>
              
              {/* Price */}
              <div className="text-center md:mt-0 mt-4 text-gray-700 font-semibold">{`$${item.price}`}</div>

              {/* Quantity */}
              <div className="flex justify-center md:mt-0 mt-2">
                <InputNumber
                  min={1}
                  value={item.quantity}
                  onChange={(value) => handleQuantityChange(item.id, value)}
                  className="w-24 text-center border-gray-300 rounded-full"
                />
              </div>

              {/* Total */}
              <div className="text-center md:mt-0 mt-2 text-gray-800 font-bold">{`$${item.price * item.quantity}`}</div>
            </div>
          ))}
        </div>
        
        {/* Right Section: Cart Summary */}
        <div className="w-full lg:w-1/3 bg-[#F0F0F0] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Cart Total</h2>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600 font-semibold">SUBTOTAL</span>
            <span className="text-gray-800 font-semibold">{`$${subtotal}`}</span>
          </div>
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-300">
            <span className="text-gray-600 font-semibold">DISCOUNT</span>
            <span className="text-gray-800 font-semibold">{`--`}</span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-800 font-bold text-lg">TOTAL</span>
            <span className="text-gray-800 font-bold text-lg">{`$${total}`}</span>
          </div>
          <Button
            type="primary"
            className="w-full bg-[#6B4EEF] text-white font-semibold rounded-full px-8 py-3 h-auto hover:bg-[#5a3ed8] transition-colors duration-200"
          >
            Proceed To Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
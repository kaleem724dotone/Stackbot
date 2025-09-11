import React from "react";
import { Tabs, Card, Rate, Button } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const affiliateProducts = [
  {
    title: "Wireless Earbuds",
    price: "$35.00",
    rating: 150,
    image: "/images/product1.png",
    category: "Tu",
  },
  {
    title: "Bluetooth Speaker",
    price: "$25.00",
    rating: 120,
    image: "/images/product2.png",
    category: "Amazon",
  },
  {
    title: "Yoga Mat",
    price: "$20.00",
    rating: 90,
    image: "/images/product3.png",
    category: "Walmart",
  },
  {
    title: "Running Shoes",
    price: "$50.00",
    rating: 200,
    image: "/images/product4.png",
    category: "Alibaba",
  },
  {
    title: "Cookware Set",
    price: "$80.00",
    rating: 110,
    image: "/images/product5.png",
    category: "AliExpress",
  },
  {
    title: "Desk Lamp",
    price: "$18.00",
    rating: 60,
    image: "/images/product6.png",
    category: "Others",
  },
];

const categories = [
  "Tu",
  "Amazon",
  "Walmart",
  "Alibaba",
  "AliExpress",
  "Others",
];

const AffiliateCard = ({ title, price, rating, image }) => (
  <Card
    hoverable
    className="rounded-[22px] gap-[11.14px] shadow-md border border-gray-200 w-[383px] p-[16.87px] h-[364px]"
    cover={
      <img
        alt={title}
        src={image}
        className="rounded-t-[5px] h-48 w-full object-cover p-2"
      />
    }
  >
    <div className="flex justify-between ">
      <div className="text-md font-semibold mb-2">{title}</div>
      <div className="text-sm text-gray-700 mb-1">{price}</div>
    </div>
    {/* Rating and count */}
    <div>
      <Rate disabled defaultValue={5} className="text-yellow-400 text-xs" />
      <span className="ml-2 text-sm text-gray-600">({rating})</span>
    </div>
    {/* Button below rating */}
    <div>
      <Button
        type="link"
        icon={<ShoppingOutlined />}
        className="mt-2 p-0 text-blue-600 hover:text-blue-800"
      >
        Shop Now
      </Button>
    </div>
  </Card>
);

const AffiliateMarketplace = () => {
  return (
    <div className="bg-white min-h-screen text-black py-10 px-4 md:px-20">
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-600">
        Affiliate Marketplace
      </h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
        Affiliate Marketplace connects sellers and promoters, allowing users to earn commissions
        by sharing and selling products through unique referral links.
      </p>

      <Tabs defaultActiveKey="1" tabBarGutter={24} className="text-black custom-tabs">
        <TabPane tab={<span className="text-black font-semibold">All Products</span>} key="1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {affiliateProducts.map((product, index) => (
              <AffiliateCard key={index} {...product} />
            ))}
          </div>
        </TabPane>
        {categories.map((category, idx) => (
          <TabPane
            tab={<span className="text-black font-semibold">{category}</span>}
            key={idx + 2}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {affiliateProducts
                .filter((product) => product.category === category)
                .map((product, index) => (
                  <AffiliateCard key={index} {...product} />
                ))}
            </div>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default AffiliateMarketplace;

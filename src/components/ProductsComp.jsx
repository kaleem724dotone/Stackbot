import React from "react";
import ProductCard from "./ProductCard";
import { Tabs } from "antd";
import { products } from "../data/productsData"; // <-- import shared data

const { TabPane } = Tabs;

// Get unique categories from products, with "Others" always last
let categories = [...new Set(products.map(p => p.category))];
categories = categories.filter(c => c !== "Others").concat(categories.includes("Others") ? ["Others"] : []);

const ProductsComp = ({ heading, subheading }) => {
    return (
        <div className="bg-white min-h-screen text-[#060048] py-10 px-4 md:px-20">
            <h1 className="text-4xl font-bold text-center mb-10 text-[#060048]">
                {heading}
            </h1>
            {subheading && (
                <p className="text-center text-[#060048] text-lg mb-10 w-full md:w-3/4 mx-auto">
                    {subheading}
                </p>
            )}
            <Tabs defaultActiveKey="all" tabBarGutter={24} className="text-[#242565] custom-tabs mb-5">
                <TabPane tab={<span className="tab-label font-bold p-5">All Products</span>} key="all">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                        {products.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </TabPane>
                {categories.map((category) => (
                    <TabPane
                        tab={<span className="tab-label font-bold">{category}</span>}
                        key={category}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                            {products.filter(p => p.category === category).map(product => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    </TabPane>
                ))}
            </Tabs>
        </div>
    );
};

export default ProductsComp;

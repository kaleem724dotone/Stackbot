import React from "react";
import { products as defaultProducts } from "../../data/productsData";
const CategoryGrid = () => {
  // Create a unique list of categories by filtering products
  const categories = Array.from(new Set(defaultProducts.map((product) => product.category)));

  return (
    <section className="my-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-center">
        View Our Range Of Categories
      </h2>
      <p className="text-xl font-Exo text-[#656A6F] mb-8 text-center max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy
        nibh euismod tincidunt ut laoreet dolore magna aliquam.
      </p>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, idx) => {
          // Find a representative product for each category
          const categoryProduct = defaultProducts.find(
            (product) => product.category === category
          );

          return (
            <div
              key={idx}
              className="relative rounded-lg overflow-hidden shadow-xl group"
            >
              <img
                src={categoryProduct?.image}
                alt={category}
                className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-3xl font-bold text-center">{category}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryGrid;

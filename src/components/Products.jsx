import React from "react";
import { Card, Rate } from "antd";
import { products as defaultProducts } from "../data/productsData";

const currencyFmt = (n, currency = "USD") =>
  new Intl.NumberFormat(undefined, { style: "currency", currency }).format(n);

const toNumber = (v) =>
  typeof v === "number" ? v : Number(String(v).replace(/[^0-9.]/g, "") || 0);

const Products = ({ 
  items = defaultProducts, 
  heading = "", 
  description = "", 
  filters = {},   // { featured: true, category: "Electronics", rating: 4, priceMax: 100 }
  columns = 4    // number of products per row
}) => {
  // Apply dynamic filtering
  const filteredProducts = items.filter((p) => {
    let match = true;

    // Filter by boolean properties like featured, popular, etc.
    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (key === "priceMax") {
        if (toNumber(p.price) > value) match = false;
      } else if (key === "priceMin") {
        if (toNumber(p.price) < value) match = false;
      } else if (key === "rating") {
        if ((p.rating || 0) < value) match = false;
      } else if (key in p) {
        // Exact match for category, marketplace, etc.
        if (p[key] !== value) match = false;
      }
    });

    return match;
  });

  // Generate grid classes dynamically based on columns
  const gridColsClass = `sm:grid-cols-2 lg:grid-cols-${columns} xl:grid-cols-${columns}`;

  return (
    <section className="my-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-4xl font-oxygen font-bold tracking-tight mb-6">
        {heading}
      </h2>
      
      {description && (
        <p className="text-lg text-gray-500 mb-6">
          {description}
        </p>
      )}

      <div className={`grid gap-6 ${gridColsClass}`}>
        {filteredProducts.map((p) => {
          const price = toNumber(p.price);
          const compareAt = typeof p.compareAtPrice !== "undefined"
            ? toNumber(p.compareAtPrice)
            : undefined;

          const hasDiscount =
            typeof compareAt === "number" && compareAt > price && isFinite(compareAt);
          const discountPct = hasDiscount
            ? Math.round(((compareAt - price) / compareAt) * 100)
            : null;

          return (
            <Card
              key={p.id}
              className="group relative overflow-hidden rounded-2xl border-0 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              cover={
                <div className="relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />

                  {p.stock === 0 && (
                    <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
                      <span className="text-white/95 font-semibold uppercase tracking-wide">
                        Sold out
                      </span>
                    </div>
                  )}

                  {hasDiscount && (
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-black/80 text-white text-xs font-semibold px-3 py-1">
                        -{discountPct}%
                      </span>
                    </div>
                  )}
                </div>
              }
              bodyStyle={{ padding: 14 }}
            >
              <div className="space-y-2">
                <h3 className="text-xl font-semibold leading-tight line-clamp-2">
                  {p.title}
                </h3>

                <div className="flex items-baseline gap-2">
                  {hasDiscount && (
                    <span className="text-gray-400 line-through">
                      {currencyFmt(compareAt)}
                    </span>
                  )}
                  <span className="text-indigo-600 font-bold">
                    {currencyFmt(price)}
                  </span>
                </div>

                <Rate
                  disabled
                  allowHalf
                  defaultValue={p.rating || 0}
                  className="[&_.ant-rate-star]:text-yellow-400"
                />
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Products;

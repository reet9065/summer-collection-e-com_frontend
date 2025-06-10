import React, { useRef } from "react";
import ProductCard from "./ProductCard";
import { useProducts } from "../context/ProductsContext";

const FeatureProductList = ({ title = "Today Sell 🥳" }) => {

  const { products, loading, error, hasMore, loadMoreProducts,totalProducts } = useProducts();

  const scrollRef = useRef(null);

  const scrollByAmount = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };


  return (
    <div className="relative p-4 mt-4">
      <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>

      {/* Scroll Buttons */}
      <button
        onClick={() => scrollByAmount(-300)}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 cursor-pointer"
      >
        ◀
      </button>
      <button
        onClick={() => scrollByAmount(300)}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 cursor-pointer"
      >
        ▶
      </button>

      {/* Product Scroll Container */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto snap-x snap-mandatory px-4 scrollbar-hide"
      >
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            scrollbar-width: none;
            -ms-overflow-style: none; 
          }
        `}</style>

        {!loading && !error && products && products.map((product, idx) => (
          <div key={idx} className="snap-start shrink-0 w-72">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProductList;

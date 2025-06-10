// src/pages/StorePage.jsx
import React from 'react';
import { useProducts } from '../context/ProductsContext';
import ProductCard from '../components/ProductCard';
import { FaSpinner } from 'react-icons/fa';

const Store = () => {
  const { products, loading, error, hasMore, loadMoreProducts,totalProducts } = useProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Summer Collection</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p>Error loading products: {error}</p>
        </div>
      )}
      
      {loading && products.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <FaSpinner className="animate-spin text-4xl text-blue-500" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {hasMore && (
            <div className="mt-10 text-center">
              <button
                onClick={loadMoreProducts}
                disabled={loading}
                className={`bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <FaSpinner className="animate-spin mr-2" />
                    Loading...
                  </span>
                ) : (
                  'Load More Products'
                )}
              </button>
              <p className="mt-2 text-gray-600">
                Showing {products.length} of {products.length > 0 ? totalProducts : 'many'} products
              </p>
            </div>
          )}
        </>
      )}
      
      {!hasMore && products.length > 0 && (
        <div className="mt-10 text-center">
          <p className="text-lg font-medium text-gray-700">
            You've reached the end of our summer collection
          </p>
          <p className="text-gray-600 mt-2">
            {products.length} products shown of {products.length > 0 ? totalProducts : 'many'} total
          </p>
        </div>
      )}
    </div>
  );
};

export default Store;
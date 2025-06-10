// src/components/ProductCard.jsx
import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  // Render star rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }
    
    return stars;
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow ">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-60 object-contain p-4"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300x300?text=Product+Image";
          }}
        />
        
        {product.discountPercentage > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
            {product.discountPercentage}% OFF
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2 h-14">
          {product.title}
        </h3>
        
        <div className="flex items-center mb-2">
          <div className="flex mr-2">
            {renderStars()}
          </div>
          <span className="text-gray-600 text-sm">
            ({product.ratingsCount})
          </span>
        </div>
        
        <div className="mb-3">
          <div className="flex items-baseline">
            {product.discountPercentage > 0 ? (
              <>
                <span className="text-xl font-bold text-gray-900">
                  ₹{product.price.toFixed(2)}
                </span>
                <span className="text-gray-500 line-through ml-2">
                  ₹{product.originalPrice.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-xl font-bold text-gray-900">
                ₹{product.price.toFixed(2)}
              </span>
            )}
          </div>
          
          {product.discountPercentage > 0 && (
            <span className="text-green-600 text-sm font-medium">
              Save ₹{product.discount.toFixed(2)}
            </span>
          )}
        </div>
        
        {product.delivery && (
          <p className="text-green-600 text-sm mb-3">
            {product.delivery}
          </p>
        )}
        
        <button 
          onClick={() => addToCart({
            id: product.id,
            title: product.title,
            image: product.image,
            rating: product.rating,
            price: product.price,
            quantity: 1
          })}
          className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded-lg transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
// src/components/CartItem.jsx
import React from 'react';
import { FaStar, FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const CartItem = ({ product, onQuantityChange }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrement = () => {
    updateQuantity(product.id, product.quantity + 1);
  };

  const handleDecrement = () => {
    if (product.quantity > 1) {
      updateQuantity(product.id, product.quantity - 1);
    }
  };


  return (
    <div className="flex flex-col md:flex-row border-b py-4">
      {/* Product Image */}
      <div className="md:w-1/4 mb-4 md:mb-0">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-48 object-contain rounded-lg"
        />
      </div>
      
      {/* Product Details */}
      <div className="md:w-3/4 flex flex-col md:flex-row">
        <div className="md:w-2/3">
          <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
          
          {/* Rating */}
          <div className="flex items-center mb-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded flex items-center">
              {product.rating}
              <FaStar className="ml-1 text-yellow-400" />
            </span>
          </div>
          
          {/* Price */}
          <p className="text-xl font-bold text-gray-900 mb-4">
            ₹{(product.price * product.quantity).toFixed(2)}
            {product.quantity > 1 && (
              <span className="text-sm text-gray-500 ml-2">
                (₹{product.price.toFixed(2)} × {product.quantity})
              </span>
            )}
          </p>
        </div>
        
        {/* Quantity Controls */}
        <div className="md:w-1/3 flex flex-col items-end justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <button 
              onClick={handleDecrement}
              disabled={product.quantity <= 1}
              className={`p-2 rounded-l border ${
                product.quantity <= 1 
                  ? 'bg-gray-100 cursor-not-allowed' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <FaMinus className="text-xs" />
            </button>
            
            <span className="px-4 py-2 border-t border-b">
              {product.quantity}
            </span>
            
            <button 
              onClick={handleIncrement}
              className="p-2 rounded-r border bg-gray-200 hover:bg-gray-300"
            >
              <FaPlus className="text-xs" />
            </button>
          </div>
          
          {/* Delete Button */}
          <button 
            onClick={() => removeFromCart(product.id)}
            className="flex items-center text-red-600 hover:text-red-800 mt-4 md:mt-0"
          >
            <FaTrash className="mr-2" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();

  // Close mobile menu when window resizes above medium breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={` mb-10 sticky top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl md:text-3xl font-extrabold text-black tracking-tight"
            onClick={() => setIsOpen(false)}
          >
            Summer.co
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/store">Store</NavLink>
            <CartLink count={cartCount} />
            <NavLink to="/login">Login</NavLink>
            <NavLink 
              to="/signup" 
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Signup
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <CartLink count={cartCount} mobile={true} />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <MobileNavLink to="/" onClick={() => setIsOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/store" onClick={() => setIsOpen(false)}>
                Store
              </MobileNavLink>
              <MobileNavLink to="/cart" onClick={() => setIsOpen(false)} className="flex items-center">
                Cart
                {cartCount > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </MobileNavLink>
              <MobileNavLink to="/login" onClick={() => setIsOpen(false)}>
                Login
              </MobileNavLink>
              <MobileNavLink 
                to="/signup" 
                onClick={() => setIsOpen(false)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-center hover:bg-indigo-700 transition-colors"
              >
                Signup
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Reusable NavLink component for desktop
const NavLink = ({ to, children, className = '' }) => (
  <Link 
    to={to} 
    className={`font-medium text-gray-700 hover:text-indigo-600 transition-colors ${className}`}
  >
    {children}
  </Link>
);

// CartLink component with badge
const CartLink = ({ count, mobile = false }) => (
  <Link 
    to="/cart" 
    className={`relative ${mobile ? 'block md:hidden' : ''}`}
    aria-label="Shopping Cart"
  >
    <FaShoppingCart className="h-6 w-6 text-gray-700 hover:text-indigo-600 transition-colors" />
    {count > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
        {count}
      </span>
    )}
  </Link>
);

// Reusable MobileNavLink component
const MobileNavLink = ({ to, children, onClick, className = '' }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className={`py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors ${className}`}
  >
    {children}
  </Link>
);

export default Navbar;
// src/components/Newsletter.js
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="max-w-md">Get exclusive offers, new product alerts, and summer style tips delivered straight to your inbox.</p>
          </div>
          <div className="md:w-1/2 w-full max-w-md">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                className="flex-grow px-4 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <button 
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-sm opacity-80">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
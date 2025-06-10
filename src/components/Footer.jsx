import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] text-gray-800">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        {/* Brand */}
        <div className="md:col-span-1">
          <h3 className="text-2xl font-bold mb-2">SUMMER.CO</h3>
          <p className="text-gray-600 mb-4">
            We have clothes that suit your style and which you're proud to wear. From women to men.
          </p>
          <div className="flex gap-3 text-lg">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaGithub />
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-2">COMPANY</h4>
          <ul className="space-y-1 text-gray-600">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">HELP</h4>
          <ul className="space-y-1 text-gray-600">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">FAQ</h4>
          <ul className="space-y-1 text-gray-600">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">RESOURCES</h4>
          <ul className="space-y-1 text-gray-600">
            <li>Free eBooks</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 mt-4 px-4 py-6 text-center text-sm text-gray-500">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <p>Summer.co © 2000-2023, All Rights Reserved</p>
          <div className="flex gap-2 mt-2 md:mt-0">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="MasterCard" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

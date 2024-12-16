import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <span className="text-xl font-semibold text-gray-900">Road Smart Solutions</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-red-600 hover:text-red-700">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-red-600 hover:text-red-700">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-red-600 hover:text-red-700">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-red-600 hover:text-red-700">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Parts</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Repairs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Insurance</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Compliance</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Security</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Finance</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Hiring</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Providers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Our products</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Join us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            Roadsmart © 2022 Roadsmart. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
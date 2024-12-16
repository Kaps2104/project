import React from 'react';

const RequestService = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
              alt="Service Request"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Request a service for your car
            </h2>
            <p className="text-gray-600 mb-8">
              Get instant access to our network of certified mechanics and service providers. 
              We ensure quality service delivery and customer satisfaction.
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
              Request Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestService;
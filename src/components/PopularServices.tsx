import React from 'react';

const services = [
  {
    id: 1,
    name: 'Vehicle Servicing',
    image: 'https://images.unsplash.com/photo-1632823471565-1ecdf5c6d7f7?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Suspension Repairs',
    image: 'https://images.unsplash.com/photo-1635784063754-0f5498a3a617?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'General Diagnosis',
    image: 'https://images.unsplash.com/photo-1632823471565-1ecdf5c6d7f7?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Change of Ownership',
    image: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    name: 'Car Hiring',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    name: 'Vehicle Finance',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80'
  }
];

const PopularServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Popular Services</h2>
        <button className="text-white bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
          View All Services
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {services.map((service) => (
          <div key={service.id} className="group cursor-pointer">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <h3 className="text-white font-medium text-sm">{service.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularServices;
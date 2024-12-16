import React, { useState } from 'react';
import { MapPin, Search, Wrench, Shield, Truck, DollarSign } from 'lucide-react';

const services = [
  { name: 'Repairs', icon: Wrench, active: true },
  { name: 'Insurance', icon: Shield },
  { name: 'Transport', icon: Truck },
  { name: 'Finance', icon: DollarSign }
];

const serviceOptions = [
  'Vehicle Servicing',
  'Suspension Repairs',
  'General Diagnosis',
  'Change of Ownership',
  'Car Hiring',
  'Vehicle Finance'
];

const Hero = () => {
  const [activeService, setActiveService] = useState('Repairs');
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80')",
      backgroundBlendMode: 'overlay',
      backgroundColor: 'rgba(0, 0, 0, 0.4)'
    }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90"></div>
      <div className="relative max-w-7xl mx-auto pt-24 px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 mt-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex space-x-8">
              {services.map((service) => (
                <div 
                  key={service.name}
                  className={`flex items-center space-x-3 cursor-pointer group relative`}
                  onClick={() => setActiveService(service.name)}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
                    ${activeService === service.name ? 'bg-red-100' : 'bg-gray-100'}`}>
                    <service.icon className={`w-5 h-5 ${activeService === service.name ? 'text-red-600' : 'text-gray-600'}`} />
                  </div>
                  <span className={`text-sm ${activeService === service.name ? 'text-red-600' : 'text-gray-600'}`}>
                    {service.name}
                  </span>
                  {activeService === service.name && (
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-red-600"></div>
                  )}
                </div>
              ))}
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 text-center mt-6">
              Order car repair services on demand!
            </h1>
            
            <div className="w-full flex mt-6">
              <div className="flex-1 flex rounded-xl border border-gray-300 overflow-hidden">
                <div className="flex-1 relative border-r border-gray-300">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-500" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full pl-12 pr-4 py-3 focus:outline-none"
                  />
                </div>
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-500" />
                  <input
                    type="text"
                    placeholder="Search services or describe problem"
                    className="w-full pl-12 pr-4 py-3 focus:outline-none"
                    onFocus={() => setShowOptions(true)}
                    onBlur={() => setTimeout(() => setShowOptions(false), 200)}
                  />
                  {showOptions && (
                    <div className="absolute left-0 right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      {serviceOptions.map((option) => (
                        <div key={option} className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <button className="ml-4 bg-red-600 text-white px-8 py-3 rounded-xl hover:bg-red-700 transition-colors">
                Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
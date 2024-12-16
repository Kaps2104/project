import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Mrs. Phiri',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
    text: 'I was involved in a road traffic accident on my way to the office at 7:00 a.m. My vehicle was damaged and couldn\'t move. I was stranded and didn\'t know what to do. I thought of Roadsmart and called for help. Within 10 minutes a tow truck was on site, and they sent me a courtesy vehicle to use for the day. Indeed, Roadsmart works like magic.'
  }
];

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          What Road Smart users are saying
        </h2>
        <p className="text-gray-600">Join the words Roadsmart</p>
      </div>

      <div className="relative">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto object-cover"
              />
            </div>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-red-500 fill-current" />
              ))}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {testimonial.name}
            </h3>
            <p className="text-gray-600 italic">{testimonial.text}</p>
          </div>
        ))}
        
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md">
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md">
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
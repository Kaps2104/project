import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import PopularServices from './components/PopularServices';
import RequestService from './components/RequestService';
import Testimonials from './components/Testimonials';
import MobileApp from './components/MobileApp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <PopularServices />
      <RequestService />
      <Testimonials />
      <MobileApp />
      <Footer />
    </div>
  );
}

export default App;
import React from "react";

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Premium Tracksuits
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Enjoy Free Delivery on Orders above Rs. 5000!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              View Collections
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner; 
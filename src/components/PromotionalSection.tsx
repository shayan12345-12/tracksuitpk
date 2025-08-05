const PromotionalSection = () => {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-12 mb-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          All New Summer Collection
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Upto 50% OFF
        </h3>
        <p className="text-lg mb-6">
          Hurry up! Don&apos;t miss the opportunity to get amazing designs and premium quality tracksuits for this latest summer collection.
        </p>
        <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          New Summer Collection
        </button>
      </div>
    </section>
  );
};

export default PromotionalSection; 
const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Athlete Pro - Dri-Fit Tracksuit",
      originalPrice: "Rs.5,000.00",
      salePrice: "Rs.2,999.99",
      savePercent: "40%",
      reviews: 209,
      image: "/placeholder-tracksuit.jpg"
    },
    {
      id: 2,
      name: "Opulent Grey - Premium Safari Suit",
      originalPrice: "Rs.10,000.00",
      salePrice: "Rs.5,999.99",
      savePercent: "40%",
      reviews: 3,
      image: "/placeholder-tracksuit.jpg"
    },
    {
      id: 3,
      name: "Runners Pro - Dri-Fit Tracksuit",
      originalPrice: "Rs.5,000.00",
      salePrice: "Rs.2,999.99",
      savePercent: "40%",
      reviews: 17,
      image: "/placeholder-tracksuit.jpg"
    },
    {
      id: 4,
      name: "Matte Black - Premium Safari Suit",
      originalPrice: "Rs.10,000.00",
      salePrice: "Rs.5,999.99",
      savePercent: "40%",
      reviews: 0,
      image: "/placeholder-tracksuit.jpg"
    }
  ];

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Summer Tracksuits</h2>
        <a href="/products" className="text-blue-600 hover:text-blue-800 font-semibold">
          View all
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">[Product Image]</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gray-500">{product.reviews} reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                <span className="text-lg font-bold text-green-600">{product.salePrice}</span>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">Save {product.savePercent}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts; 
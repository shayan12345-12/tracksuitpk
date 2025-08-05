const KidsCollectionPage = () => {
  const kidsProducts = [
    {
      id: 1,
      name: "Kids Dri-Fit Tracksuit",
      originalPrice: "Rs.4,500.00",
      salePrice: "Rs.2,499.00",
      savePercent: "44%",
      reviews: 4,
      category: "Summer Tracksuits"
    },
    {
      id: 2,
      name: "Orange Out - Premium Polo Set",
      originalPrice: "Rs.4,500.00",
      salePrice: "Rs.2,499.99",
      savePercent: "44%",
      reviews: 0,
      category: "Polo Sets"
    },
    {
      id: 3,
      name: "Prime Edition Kids - Premium Cotton Polo Twinset",
      originalPrice: "Rs.4,500.00",
      salePrice: "Rs.2,499.99",
      savePercent: "44%",
      reviews: 3,
      category: "Polo Twinsets"
    },
    {
      id: 4,
      name: "Cool Lime - Premium Cotton Polo Twinset",
      originalPrice: "Rs.4,500.00",
      salePrice: "Rs.2,499.99",
      savePercent: "44%",
      reviews: 0,
      category: "Polo Twinsets"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Kids Collection</h1>
        
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="px-4 py-2 border border-gray-300 rounded-lg"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg">
              <option>All Categories</option>
              <option>Summer Tracksuits</option>
              <option>Polo Sets</option>
              <option>Polo Twinsets</option>
              <option>Casual Wear</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg">
              <option>Price Range</option>
              <option>Under Rs. 2,500</option>
              <option>Rs. 2,500 - Rs. 4,000</option>
              <option>Above Rs. 4,000</option>
            </select>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Filter
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kidsProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">[Product Image]</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-gray-500">{product.reviews} reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  <span className="text-lg font-bold text-green-600">{product.salePrice}</span>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">Save {product.savePercent}</span>
                </div>
                <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KidsCollectionPage; 
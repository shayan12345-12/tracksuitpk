import Image from "next/image";

const WomensCollectionPage = () => {
  const womensProducts = [
    {
      id: 1,
      name: "Black Flare - Premium Cotton Twinset",
      originalPrice: "Rs.6,000.00",
      salePrice: "Rs.4,399.99",
      savePercent: "27%",
      reviews: 0,
      category: "Twinsets",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "Blush Pink - Relaxed Spendex Co-ord Set",
      originalPrice: "Rs.6,500.00",
      salePrice: "Rs.4,499.99",
      savePercent: "31%",
      reviews: 4,
      category: "Co-ord Sets",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      name: "Dri-fit Tracksuit for Women",
      originalPrice: "Rs.6,000.00",
      salePrice: "Rs.2,999.00",
      savePercent: "50%",
      reviews: 7,
      category: "Tracksuits",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 4,
      name: "Olive Charm - Premium Cotton Twinset",
      originalPrice: "Rs.6,000.00",
      salePrice: "Rs.4,399.99",
      savePercent: "27%",
      reviews: 0,
      category: "Twinsets",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 5,
      name: "AURA - Spendex Textured Navy Twinset",
      originalPrice: "Rs.6,500.00",
      salePrice: "Rs.4,299.99",
      savePercent: "34%",
      reviews: 2,
      category: "Twinsets",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 6,
      name: "Power Mesh - Spendex Tee Twinset",
      originalPrice: "Rs.5,500.00",
      salePrice: "Rs.3,999.99",
      savePercent: "27%",
      reviews: 1,
      category: "Twinsets",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Women&apos;s Collection</h1>
        
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
              <option>Twinsets</option>
              <option>Co-ord Sets</option>
              <option>Casual Wear</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg">
              <option>Price Range</option>
              <option>Under Rs. 3,000</option>
              <option>Rs. 3,000 - Rs. 5,000</option>
              <option>Above Rs. 5,000</option>
            </select>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Filter
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {womensProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
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

export default WomensCollectionPage; 
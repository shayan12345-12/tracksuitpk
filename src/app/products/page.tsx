import Image from "next/image";

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "Athlete Pro - Dri-Fit Tracksuit",
      originalPrice: "Rs.5,000.00",
      salePrice: "Rs.2,999.99",
      savePercent: "40%",
      reviews: 209,
      category: "Summer Tracksuits",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "Opulent Grey - Premium Safari Suit",
      originalPrice: "Rs.10,000.00",
      salePrice: "Rs.5,999.99",
      savePercent: "40%",
      reviews: 3,
      category: "Safari Suits",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      name: "Runners Pro - Dri-Fit Tracksuit",
      originalPrice: "Rs.5,000.00",
      salePrice: "Rs.2,999.99",
      savePercent: "40%",
      reviews: 17,
      category: "Summer Tracksuits",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 4,
      name: "Matte Black - Premium Safari Suit",
      originalPrice: "Rs.10,000.00",
      salePrice: "Rs.5,999.99",
      savePercent: "40%",
      reviews: 0,
      category: "Safari Suits",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 5,
      name: "Excellence Green Polo - Premium Cotton",
      originalPrice: "Rs.4,500.00",
      salePrice: "Rs.2,399.99",
      savePercent: "47%",
      reviews: 3,
      category: "Polo Shirts",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 6,
      name: "Waffle Knit - Skin Polo",
      originalPrice: "Rs.4,500.00",
      salePrice: "Rs.2,399.99",
      savePercent: "47%",
      reviews: 1,
      category: "Polo Shirts",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 7,
      name: "LycraAir Trouser - Black",
      originalPrice: "Rs.5,000.00",
      salePrice: "Rs.2,799.00",
      savePercent: "44%",
      reviews: 0,
      category: "Trousers",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 8,
      name: "Velocity Zip Tee - White/Black",
      originalPrice: "Rs.3,000.00",
      salePrice: "Rs.1,799.99",
      savePercent: "40%",
      reviews: 1,
      category: "T-Shirts",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All Products</h1>
        
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
              <option>Safari Suits</option>
              <option>Polo Shirts</option>
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
          {products.map((product) => (
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

export default ProductsPage; 
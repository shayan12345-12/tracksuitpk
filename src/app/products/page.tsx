"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const ProductsPage = () => {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  const allProducts = [
    {
      id: 1,
      name: "Athlete Pro - Dri-Fit Tracksuit",
      originalPrice: "Rs.5,000.00",
      salePrice: "Rs.2,999.99",
      savePercent: "40%",
      reviews: 209,
      category: "Summer Tracksuits",
      color: "blue"
    },
    {
      id: 2,
      name: "Opulent Grey - Premium Safari Suit",
      originalPrice: "Rs.10,000.00",
      salePrice: "Rs.5,999.99",
      savePercent: "40%",
      reviews: 3,
      category: "Safari Suits",
      color: "gray"
    },
    {
      id: 3,
      name: "Runners Pro - Dri-Fit Tracksuit",
      originalPrice: "Rs.5,000.00",
      salePrice: "Rs.2,999.99",
      savePercent: "40%",
      reviews: 17,
      category: "Summer Tracksuits",
      color: "green"
    },
    {
      id: 4,
      name: "Matte Black - Premium Safari Suit",
      originalPrice: "Rs.10,000.00",
      salePrice: "Rs.5,999.99",
      savePercent: "40%",
      reviews: 0,
      category: "Safari Suits",
      color: "black"
    },
    {
      id: 5,
      name: "Excellence Green Polo - Premium Cotton",
      originalPrice: "Rs.4,500.00",
      salePrice: "Rs.2,399.99",
      savePercent: "47%",
      reviews: 3,
      category: "Polo Shirts",
      color: "green"
    },
    {
      id: 6,
      name: "Waffle Knit - Skin Polo",
      originalPrice: "Rs.4,500.00",
      salePrice: "Rs.2,399.99",
      savePercent: "47%",
      reviews: 1,
      category: "Polo Shirts",
      color: "beige"
    },
    {
      id: 7,
      name: "LycraAir Trouser - Black",
      originalPrice: "Rs.5,000.00",
      salePrice: "Rs.2,799.00",
      savePercent: "44%",
      reviews: 0,
      category: "Trousers",
      color: "black"
    },
    {
      id: 8,
      name: "Velocity Zip Tee - White/Black",
      originalPrice: "Rs.3,000.00",
      salePrice: "Rs.1,799.99",
      savePercent: "40%",
      reviews: 1,
      category: "T-Shirts",
      color: "white"
    }
  ];

  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchQuery(search);
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allProducts);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allProducts);
    }
  };

  const getColorClass = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: "from-blue-100 to-blue-200",
      gray: "from-gray-100 to-gray-200",
      green: "from-green-100 to-green-200",
      black: "from-gray-800 to-gray-900",
      beige: "from-yellow-100 to-orange-100",
      white: "from-gray-50 to-white"
    };
    return colors[color] || "from-blue-100 to-gray-200";
  };

  const getEmoji = (category: string) => {
    const emojis: { [key: string]: string } = {
      "Summer Tracksuits": "👕",
      "Safari Suits": "🎽",
      "Polo Shirts": "👔",
      "T-Shirts": "👕",
      "Trousers": "👖"
    };
    return emojis[category] || "👕";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All Products</h1>
        
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Filter
            </button>
          </form>
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredProducts.length} results for "{searchQuery}"
            </p>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${getColorClass(product.color)}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-2xl">{getEmoji(product.category)}</span>
                    </div>
                    <p className="text-gray-600 text-sm font-medium">{product.name.split(' - ')[0]}</p>
                  </div>
                </div>
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

        {/* No Results */}
        {filteredProducts.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found for "{searchQuery}"</p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setFilteredProducts(allProducts);
              }}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage; 
import Link from "next/link";
import Image from "next/image";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Athlete Pro - Dri-Fit Tracksuit",
      originalPrice: "Rs.5,000.00",
      salePrice: "Rs.2,999.99",
      savePercent: "40%",
      reviews: 209,
      image: "/placeholder-tracksuit-1.jpg"
    },
    {
      id: 2,
      name: "Opulent Grey - Premium Safari Suit",
      originalPrice: "Rs.10,000.00",
      salePrice: "Rs.5,999.99",
      savePercent: "40%",
      reviews: 3,
      image: "/placeholder-tracksuit-2.jpg"
    },
    {
      id: 3,
      name: "Runners Pro - Dri-Fit Tracksuit",
      originalPrice: "Rs.5,000.00",
      salePrice: "Rs.2,999.99",
      savePercent: "40%",
      reviews: 17,
      image: "/placeholder-tracksuit-3.jpg"
    },
    {
      id: 4,
      name: "Matte Black - Premium Safari Suit",
      originalPrice: "Rs.10,000.00",
      salePrice: "Rs.5,999.99",
      savePercent: "40%",
      reviews: 0,
      image: "/placeholder-tracksuit-4.jpg"
    }
  ];

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Summer Tracksuits</h2>
        <Link href="/products" className="text-blue-600 hover:text-blue-800 font-semibold">
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 relative overflow-hidden bg-gradient-to-br from-blue-100 to-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-2xl">👕</span>
                  </div>
                  <p className="text-gray-600 text-sm font-medium">{product.name.split(' - ')[0]}</p>
                </div>
              </div>
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
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
      image: "https://picsum.photos/400/300?random=1"
    },
    {
      id: 2,
      name: "Opulent Grey - Premium Safari Suit",
      originalPrice: "Rs.10,000.00",
      salePrice: "Rs.5,999.99",
      savePercent: "40%",
      reviews: 3,
      image: "https://picsum.photos/400/300?random=2"
    },
    {
      id: 3,
      name: "Runners Pro - Dri-Fit Tracksuit",
      originalPrice: "Rs.5,000.00",
      salePrice: "Rs.2,999.99",
      savePercent: "40%",
      reviews: 17,
      image: "https://picsum.photos/400/300?random=3"
    },
    {
      id: 4,
      name: "Matte Black - Premium Safari Suit",
      originalPrice: "Rs.10,000.00",
      salePrice: "Rs.5,999.99",
      savePercent: "40%",
      reviews: 0,
      image: "https://picsum.photos/400/300?random=4"
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
            <div className="h-48 relative overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
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
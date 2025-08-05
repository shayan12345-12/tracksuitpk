import Link from "next/link";

const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      name: "Men's Summer Tracksuits",
      description: "Casual & Gym Wear",
      image: "/men-tracksuits.jpg"
    },
    {
      id: 2,
      name: "Men's Polo Shirts",
      description: "Premium Cotton Collection",
      image: "/polo-shirts.jpg"
    },
    {
      id: 3,
      name: "Kids Summer Tracksuits",
      description: "Comfortable & Stylish",
      image: "/kids-tracksuits.jpg"
    },
    {
      id: 4,
      name: "Men's Trousers & Shorts",
      description: "Perfect for Summer",
      image: "/trousers-shorts.jpg"
    },
    {
      id: 5,
      name: "Men's T-Shirts",
      description: "Casual & Sporty",
      image: "/t-shirts.jpg"
    },
    {
      id: 6,
      name: "Women's Summer Tracksuits",
      description: "Elegant & Comfortable",
      image: "/women-tracksuits.jpg"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">[Category Image]</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-gray-600 mb-3">{category.description}</p>
              <Link href={`/category/${category.id}`} className="text-blue-600 hover:text-blue-800 font-semibold">
                Shop Now →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid; 
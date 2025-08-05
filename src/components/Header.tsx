const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Bar */}
        <div className="bg-blue-900 text-white py-2 text-center text-sm">
          Enjoy Free Delivery on Orders above Rs. 5000!
        </div>
        
        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-900">Tracksuit.pk</h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="/products" className="text-gray-700 hover:text-blue-600 font-medium">Products</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
          </nav>
          
          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-2 text-gray-400 hover:text-gray-600">
                🔍
              </button>
            </div>
            
            {/* Cart */}
            <a href="/cart" className="relative text-gray-700 hover:text-blue-600">
              🛒
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </a>
            
            {/* User Account */}
            <a href="/login" className="text-gray-700 hover:text-blue-600">
              👤
            </a>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700 hover:text-blue-600">
              ☰
            </button>
          </div>
        </div>
        
        {/* Category Navigation */}
        <div className="hidden md:flex items-center space-x-6 py-3 border-t border-gray-200">
          <a href="/category/mens" className="text-gray-700 hover:text-blue-600 font-medium">Men's Collection</a>
          <a href="/category/womens" className="text-gray-700 hover:text-blue-600 font-medium">Women's Collection</a>
          <a href="/category/kids" className="text-gray-700 hover:text-blue-600 font-medium">Kids Collection</a>
          <a href="/reviews" className="text-gray-700 hover:text-blue-600 font-medium">Product Reviews</a>
          <a href="/returns" className="text-gray-700 hover:text-blue-600 font-medium">Return Policy</a>
        </div>
      </div>
    </header>
  );
};

export default Header; 
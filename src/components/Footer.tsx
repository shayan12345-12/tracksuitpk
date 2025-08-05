const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tracksuit.pk</h3>
            <p className="text-gray-300 mb-4">
              Pakistan's premier destination for high-quality tracksuits and athletic wear.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">📘</a>
              <a href="#" className="text-gray-300 hover:text-white">📷</a>
              <a href="#" className="text-gray-300 hover:text-white">🐦</a>
              <a href="#" className="text-gray-300 hover:text-white">📱</a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/shipping" className="text-gray-300 hover:text-white">Shipping Policy</a></li>
              <li><a href="/returns" className="text-gray-300 hover:text-white">Exchange and Return Policy</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-white">Terms of Service</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Collections */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Collections</h4>
            <ul className="space-y-2">
              <li><a href="/category/mens" className="text-gray-300 hover:text-white">Men's Collection</a></li>
              <li><a href="/category/womens" className="text-gray-300 hover:text-white">Women's Collection</a></li>
              <li><a href="/category/kids" className="text-gray-300 hover:text-white">Kids Collection</a></li>
              <li><a href="/category/summer" className="text-gray-300 hover:text-white">Summer Tracksuits</a></li>
              <li><a href="/category/winter" className="text-gray-300 hover:text-white">Winter Tracksuits</a></li>
              <li><a href="/category/polo" className="text-gray-300 hover:text-white">Polo Shirts</a></li>
            </ul>
          </div>
          
          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Need Help?</h4>
            <div className="mb-6">
              <p className="text-gray-300 mb-2">Reach us at</p>
              <p className="text-white font-semibold">info@tracksuit.pk</p>
              <p className="text-white font-semibold">Contact: 0302 1882200</p>
              <p className="text-white font-semibold">Landline: 041-2653515</p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 text-gray-900 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Tracksuit.pk - Powered by Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
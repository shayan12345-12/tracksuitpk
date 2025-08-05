"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

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
            <Link href="/" className="text-2xl font-bold text-blue-900">
              Tracksuit.pk
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium">Products</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
          </nav>
          
          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <form onSubmit={handleSearch}>
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                >
                  🔍
                </button>
              </form>
            </div>
            
            {/* Cart */}
            <Link href="/cart" className="relative text-gray-700 hover:text-blue-600">
              🛒
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            
            {/* User Account */}
            <Link href="/login" className="text-gray-700 hover:text-blue-600">
              👤
            </Link>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700 hover:text-blue-600">
              ☰
            </button>
          </div>
        </div>
        
        {/* Category Navigation */}
        <div className="hidden md:flex items-center space-x-6 py-3 border-t border-gray-200">
          <Link href="/category/mens" className="text-gray-700 hover:text-blue-600 font-medium">Men&apos;s Collection</Link>
          <Link href="/category/womens" className="text-gray-700 hover:text-blue-600 font-medium">Women&apos;s Collection</Link>
          <Link href="/category/kids" className="text-gray-700 hover:text-blue-600 font-medium">Kids Collection</Link>
          <Link href="/reviews" className="text-gray-700 hover:text-blue-600 font-medium">Product Reviews</Link>
          <Link href="/returns" className="text-gray-700 hover:text-blue-600 font-medium">Return Policy</Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 
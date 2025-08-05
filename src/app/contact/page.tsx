const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>General Inquiry</option>
                  <option>Order Status</option>
                  <option>Returns & Exchanges</option>
                  <option>Product Information</option>
                  <option>Technical Support</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">📧 Email</h3>
                <p className="text-gray-700">info@tracksuit.pk</p>
                <p className="text-gray-700">support@tracksuit.pk</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">📞 Phone</h3>
                <p className="text-gray-700">Mobile: 0302 1882200</p>
                <p className="text-gray-700">Landline: 041-2653515</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">📍 Address</h3>
                <p className="text-gray-700">123 Main Street</p>
                <p className="text-gray-700">Lahore, Pakistan</p>
                <p className="text-gray-700">Postal Code: 54000</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🕒 Business Hours</h3>
                <p className="text-gray-700">Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p className="text-gray-700">Saturday: 10:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Sunday: 12:00 PM - 5:00 PM</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🚚 Free Delivery</h3>
                <p className="text-gray-700">Enjoy free delivery on orders above Rs. 5,000!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 
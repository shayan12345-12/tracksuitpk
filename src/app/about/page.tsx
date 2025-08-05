const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About Tracksuit.pk</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Tracksuit.pk is Pakistan's premier destination for high-quality tracksuits and athletic wear. 
              We specialize in providing premium tracksuits that combine style, comfort, and durability for 
              both casual and athletic use.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              Our mission is to provide our customers with the highest quality tracksuits and athletic wear 
              at competitive prices. We believe that everyone deserves to look and feel great while staying 
              comfortable and stylish.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Premium quality fabrics and materials</li>
              <li>Wide range of styles and sizes</li>
              <li>Competitive pricing with regular discounts</li>
              <li>Fast and reliable delivery across Pakistan</li>
              <li>Excellent customer service and support</li>
              <li>Easy returns and exchange policy</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Get in Touch</h3>
                <div className="space-y-2 text-gray-700">
                  <p>📧 Email: info@tracksuit.pk</p>
                  <p>📞 Phone: 0302 1882200</p>
                  <p>🏢 Landline: 041-2653515</p>
                  <p>📍 Address: 123 Main St, Lahore, Pakistan</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p>Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: 12:00 PM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 
const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "Athlete Pro - Dri-Fit Tracksuit",
      price: "Rs.2,999.99",
      originalPrice: "Rs.5,000.00",
      quantity: 1,
      size: "L",
      color: "Black"
    },
    {
      id: 2,
      name: "Opulent Grey - Premium Safari Suit",
      price: "Rs.5,999.99",
      originalPrice: "Rs.10,000.00",
      quantity: 1,
      size: "M",
      color: "Grey"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('Rs.', '').replace(',', '')), 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your cart is currently empty.</h2>
            <a href="/products" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Cart Items</h2>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 py-4 border-b border-gray-200">
                    <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-500 text-xs">[Image]</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">Size: {item.size} | Color: {item.color}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                        <span className="font-bold text-green-600">{item.price}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">-</button>
                      <span className="w-12 text-center">{item.quantity}</span>
                      <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">+</button>
                    </div>
                    <button className="text-red-600 hover:text-red-800">Remove</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>Rs.{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>Rs.{subtotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage; 
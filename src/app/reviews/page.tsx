const ReviewsPage = () => {
  const reviews = [
    {
      id: 1,
      name: "Hamza",
      product: "Opulent Grey - Premium Safari Suit",
      rating: 5,
      comment: "High Quality Fabric and Stitching. Good staff and very amazing qualities. And time to delivery highly recommend💦❤",
      date: "07/28/2025"
    },
    {
      id: 2,
      name: "Mushahid Younas",
      product: "Shadow Green - Premium Cotton Polo",
      rating: 5,
      comment: "Good Quality. Recommended, Quality is superb.",
      date: "07/27/2025"
    },
    {
      id: 3,
      name: "Uzair Fiaz",
      product: "Opulent Grey - Premium Safari Suit",
      rating: 5,
      comment: "Awesome",
      date: "07/26/2025"
    },
    {
      id: 4,
      name: "Muhammad Usman",
      product: "Impression - Dri-Fit Polo Twinset",
      rating: 5,
      comment: "Good stuff 👍 highly recommend 😃",
      date: "07/25/2025"
    },
    {
      id: 5,
      name: "Bilal Rafique",
      product: "Athlete Pro - Dri-Fit Tracksuit",
      rating: 5,
      comment: "Good",
      date: "07/25/2025"
    },
    {
      id: 6,
      name: "Mudassir Ali",
      product: "Athlete Pro - Dri-Fit Tracksuit",
      rating: 5,
      comment: "Excellent quality and fast delivery",
      date: "07/24/2025"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Product Reviews</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Customer Testimonials</h2>
          <p className="text-gray-600 mb-6">
            Read what our customers have to say about our products and service quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3 text-sm">{review.comment}</p>
              <div className="border-t pt-3">
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">{review.product}</p>
                <p className="text-xs text-gray-500">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage; 
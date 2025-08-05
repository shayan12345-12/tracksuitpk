const CustomerReviews = () => {
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
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Let customers speak for us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </section>
  );
};

export default CustomerReviews; 
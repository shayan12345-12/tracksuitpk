import HeroBanner from "../components/HeroBanner";
import FeaturedProducts from "../components/FeaturedProducts";
import CategoryGrid from "../components/CategoryGrid";
import PromotionalSection from "../components/PromotionalSection";
import CustomerReviews from "../components/CustomerReviews";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroBanner />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <PromotionalSection />
        <FeaturedProducts />
        <CategoryGrid />
        <CustomerReviews />
      </main>
    </div>
  );
}

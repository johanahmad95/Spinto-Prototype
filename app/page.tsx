import { Navbar, Footer } from '@/components/layout';
import { AnimatedHeroBanner, FeaturedCourts, HowItWorks, BookingSearchBar } from '@/components/home';

export default function Home() {
  return (
    <main className="min-h-screen pb-32 md:pb-0">
      <Navbar />
      {/* Hero & search bar are full-width — no horizontal padding here */}
      <AnimatedHeroBanner />
      <BookingSearchBar />
      {/* Content sections have their own internal padding */}
      <FeaturedCourts />
      <HowItWorks />
      <Footer />
    </main>
  );
}

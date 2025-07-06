import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/home/HeroSection";
import ProblemSection from "./components/home/ProblemSection";
import FeaturesOverview from "./components/home/FeaturesOverview";
import VibezsTechSection from "./components/home/VibezsTechSection";
import TestimonialSection from "./components/home/TestimonialSection";
import CTASection from "./components/home/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <ProblemSection />
      <FeaturesOverview />
      <VibezsTechSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  );
}

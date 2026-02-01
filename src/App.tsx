import './App.css';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import StatsSection from './sections/StatsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import CTASection from './sections/CTASection';
import Footer from './sections/Footer';

function App() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}

export default App;

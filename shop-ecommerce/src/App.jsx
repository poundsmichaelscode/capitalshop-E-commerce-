import Topbar from "./components/Topbar";
import Header from "./components/Header";
import PromoBanner from "./components/PromoBanner";
import HeroSection from "./components/HeroSection";
import FashionGrid from "./components/FashionGrid";
import TrendingSection from "./components/TrendingSection";
import Testimonial from "./components/Testimonial";
import ProductCarousel from "./components/ProductCarousel";
import LatestNews from "./components/LatestNews";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import IconComponent from "./components/icon-components";
function App() {
  return (
    <div>
      <Topbar />
      <Header />
      <PromoBanner />
      <HeroSection />
      <FashionGrid />
      <TrendingSection />
      <Testimonial />
      <ProductCarousel />
      <LatestNews />
      <FeaturesSection />
      <Footer />
    </div>
  );
}


export default App;

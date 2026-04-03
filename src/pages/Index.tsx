import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import BrochureSection from "@/components/BrochureSection";
import ProductCategories from "@/components/ProductCategories";
import VideoGallerySection from "@/components/VideoGallerySection";
import InsightsSection from "@/components/InsightsSection";
import TrustSignals from "@/components/TrustSignals";
import SegmentSection from "@/components/SegmentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MachinesSection from "@/components/MachinesSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <PartnersSection />
    <BrochureSection />
    <ProductCategories />
    <VideoGallerySection />
    <InsightsSection />
    <TrustSignals />
    <SegmentSection />
    <TestimonialsSection />
    <MachinesSection />
    <Footer />
  </div>
);

export default Index;

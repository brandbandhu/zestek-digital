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
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";

const Index = () => (
  <div className="min-h-screen">
    <PageMeta
      title="Zestek Digital Solutions | Epson, Konica Minolta, MPS & ROI Calculator"
      description="Explore Epson EcoTank, Epson WorkForce, Konica Minolta production printers, and managed print services from Zestek Digital LLP in Mumbai."
      keywords={[
        "Epson printers Mumbai",
        "Konica Minolta production printers India",
        "Managed print services Mumbai",
        "business printer solutions",
        "printer ROI calculator",
        "Zestek Digital LLP",
      ]}
      canonicalPath="/"
      image="/zestek-logo.png"
      structuredData={[
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Zestek Digital LLP",
          url: "https://zestek.in/",
          logo: "https://zestek.in/zestek-logo.png",
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+91-9920909700",
              contactType: "sales",
              areaServed: "IN",
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Zestek Digital Solutions",
          url: "https://zestek.in/",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://zestek.in/?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        },
      ]}
    />
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
    <Footer />
  </div>
);

export default Index;

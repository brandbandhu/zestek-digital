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
      title="Zestek Digital LLP | Official Zestek Website for Epson, Konica Minolta & Managed Print"
      description="Official Zestek Digital LLP website for Epson EcoTank, Epson WorkForce, Konica Minolta production printers, managed print services, and print ROI planning in Mumbai."
      keywords={[
        "Zestek",
        "Zestek Digital LLP",
        "Zestek Digital Solutions",
        "zestek.in",
        "Epson printers Mumbai",
        "Konica Minolta production printers India",
        "Managed print services Mumbai",
        "business printer solutions",
        "printer ROI calculator",
      ]}
      canonicalPath="/"
      image="/zestek-logo.png"
      structuredData={[
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Zestek Digital LLP",
          alternateName: ["Zestek", "Zestek Digital Solutions"],
          legalName: "Zestek Digital LLP",
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
          "@type": "LocalBusiness",
          name: "Zestek Digital LLP",
          alternateName: ["Zestek", "Zestek Digital Solutions"],
          url: "https://zestek.in/",
          image: "https://zestek.in/zestek-logo.png",
          telephone: "+91-9920909700",
          email: "connect@zestek.in",
          address: {
            "@type": "PostalAddress",
            streetAddress: "32, Kohinoor Industrial Estate, Near Virwani Industry, Goregaon East",
            addressLocality: "Mumbai",
            addressRegion: "Maharashtra",
            postalCode: "400063",
            addressCountry: "IN",
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Zestek Digital LLP",
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

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import ProductCategories from "@/components/ProductCategories";
import VideoGallerySection from "@/components/VideoGallerySection";
import BrochureSection from "@/components/BrochureSection";
import InsightsSection from "@/components/InsightsSection";
import TrustSignals from "@/components/TrustSignals";
import TestimonialsSection from "@/components/TestimonialsSection";
import WebsiteInquiryForm from "@/components/WebsiteInquiryForm";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";

const Index = () => (
  <div className="min-h-screen">
    <PageMeta
      title="Zestek Digital LLP | Epson, Konica Minolta Printers, Software & MPS Solutions"
      description="Zestek Digital LLP provides Epson and Konica Minolta printers, print software, and managed print services (MPS) for business and production needs in Mumbai."
      keywords={[
        "Zestek",
        "zestek printer",
        "zestek printers",
        "Zestek printer solutions",
        "Zestek Digital LLP",
        "Zestek Digital Solutions",
        "zestek.in",
        "Epson printers Mumbai",
        "Konica Minolta printers India",
        "print software solutions",
        "Managed print services Mumbai",
        "MPS solutions",
        "business printer solutions",
        "printer ROI calculator",
      ]}
      canonicalPath="/"
      image="/zestek-logo.png"
    />
    <Header />
    <HeroSection />
    <PartnersSection />
    <ProductCategories />
    <VideoGallerySection />
    <BrochureSection />
    <TrustSignals />
    <InsightsSection />
    <TestimonialsSection />
    <WebsiteInquiryForm
      sectionId="home-contact"
      formId="home-page-contact-form"
      formName="Home Page Contact Form"
      successMessage="Your request has been sent. Our team will contact you soon."
      className="pt-0"
    />
    <Footer />
  </div>
);

export default Index;

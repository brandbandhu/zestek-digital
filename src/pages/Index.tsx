import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import ProductCategories from "@/components/ProductCategories";
import TrustSignals from "@/components/TrustSignals";
import TestimonialsSection from "@/components/TestimonialsSection";
import WebsiteInquiryForm from "@/components/WebsiteInquiryForm";
import PageMeta from "@/components/PageMeta";

const VideoGallerySection = lazy(() => import("@/components/VideoGallerySection"));
const BrochureSection = lazy(() => import("@/components/BrochureSection"));
const InsightsSection = lazy(() => import("@/components/InsightsSection"));
const Footer = lazy(() => import("@/components/Footer"));

const homeHighlights = [
  {
    title: "Epson printers",
    body: "Business inkjet and EcoTank solutions for office and production use.",
  },
  {
    title: "Konica Minolta",
    body: "Commercial and production print systems built for higher-volume workflows.",
  },
  {
    title: "Managed print services",
    body: "Installation, AMC, service support, and print cost planning.",
  },
  {
    title: "Mumbai & MMR",
    body: "Local support for businesses across Goregaon, Mumbai, and nearby locations.",
  },
] as const;

type SectionLoaderProps = {
  kicker: string;
  title: string;
  description: string;
  cardCount?: number;
};

const SectionLoader = ({ kicker, title, description, cardCount = 3 }: SectionLoaderProps) => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-widest text-highlight">{kicker}</p>
        <h2 className="mt-3 font-display text-2xl font-bold text-navy md:text-3xl">{title}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">{description}</p>
        <div className={`mt-6 grid gap-4 ${cardCount > 2 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {Array.from({ length: cardCount }).map((_, index) => (
            <div key={`${kicker}-${index}`} className="h-40 animate-pulse rounded-2xl bg-muted/60" />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Index = () => (
  <div className="min-h-screen">
    <PageMeta
      title="Zestek | Industrial Automation & Engineering Solutions"
      description="Zestek Digital LLP is the Zestek team in Mumbai for industrial automation, Epson and Konica Minolta printers, print software, and managed print services."
      keywords={[
        "Zestek",
        "Zestek India",
        "industrial automation solutions Mumbai",
        "engineering solutions Mumbai",
        "Zestek printer solutions",
        "Zestek Digital LLP",
        "Epson printers Mumbai",
        "Konica Minolta printers India",
        "print software solutions",
        "managed print services Mumbai",
        "MPS solutions",
        "business printer solutions",
        "printer ROI calculator",
      ]}
      canonicalPath="/"
      image="/zestek-logo.png"
    />
    <Header />
    <HeroSection />
    <section className="section-padding bg-card">
      <div className="container mx-auto grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Zestek Digital LLP | Mumbai</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-navy md:text-4xl">
            Industrial automation and engineering solutions for print-focused businesses
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
            Zestek Digital LLP is the Zestek team in Mumbai for Epson, Konica Minolta, print software, and managed
            print services across offices, print shops, and production teams.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="rounded-full bg-navy px-5 py-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition hover:bg-navy/90"
            >
              About Zestek
            </Link>
            <Link
              to="/service"
              className="rounded-full border border-border px-5 py-2 text-xs font-semibold uppercase tracking-widest text-navy transition hover:border-highlight hover:text-highlight"
            >
              Service Support
            </Link>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {homeHighlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-background p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">{item.title}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <PartnersSection />
    <ProductCategories />
    <Suspense
      fallback={
        <SectionLoader
          kicker="Videos"
          title="Printer demos, installs, and output videos"
          description="Watch product demos, live output clips, and quick machine walkthroughs from our recent print setups."
          cardCount={3}
        />
      }
    >
      <VideoGallerySection />
    </Suspense>
    <Suspense
      fallback={
        <SectionLoader
          kicker="Download Centre"
          title="Download brochures, flyers, and product PDFs"
          description="Browse brochure previews and download the exact PDF your team needs for product reviews, sales conversations, and machine comparison."
          cardCount={3}
        />
      }
    >
      <BrochureSection />
    </Suspense>
    <TrustSignals />
    <Suspense
      fallback={
        <SectionLoader
          kicker="Blogs"
          title="Latest blogs and print insights"
          description="Read practical guides, customer stories, and print-business updates to make better buying and service decisions."
          cardCount={3}
        />
      }
    >
      <InsightsSection />
    </Suspense>
    <TestimonialsSection />
    <WebsiteInquiryForm
      sectionId="home-contact"
      formId="home-page-contact-form"
      formName="Home Page Contact Form"
      successMessage="Your request has been sent. Our team will contact you soon."
      className="pt-0"
    />
    <Suspense
      fallback={
        <SectionLoader
          kicker="Contact"
          title="Get in touch with Zestek"
          description="Call, email, or WhatsApp our Mumbai team for service, sales, and product guidance."
          cardCount={2}
        />
      }
    >
      <Footer />
    </Suspense>
  </div>
);

export default Index;

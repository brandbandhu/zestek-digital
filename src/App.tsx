import { Suspense, lazy, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const Index = lazy(() => import("./pages/Index.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const EpsonEcoTank = lazy(() => import("./pages/EpsonEcoTank.tsx"));
const EpsonWorkforce = lazy(() => import("./pages/EpsonWorkforce.tsx"));
const CorporateSolutions = lazy(() => import("./pages/CorporateSolutions.tsx"));
const KonicaProduction = lazy(() => import("./pages/KonicaProduction.tsx"));
const PhotocopyCommercial = lazy(() => import("./pages/PhotocopyCommercial.tsx"));
const CommercialProduct = lazy(() => import("./pages/CommercialProduct.tsx"));
const RoiCalculator = lazy(() => import("./pages/RoiCalculator.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const Sales = lazy(() => import("./pages/Sales.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const EpsonWorkforceSpotlight = lazy(() => import("./pages/EpsonWorkforceSpotlight.tsx"));
const InsightArticle = lazy(() => import("./pages/InsightArticle.tsx"));
const LandingPage = lazy(() => import("./pages/LandingPage.tsx"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
    <div className="w-full max-w-sm rounded-3xl border border-border bg-card px-6 py-8 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-highlight">Zestek</p>
      <div className="mx-auto mt-4 h-8 w-56 animate-pulse rounded-full bg-muted" />
      <p className="mt-4 text-sm leading-6 text-muted-foreground">
        Loading industrial automation and engineering solutions...
      </p>
    </div>
  </div>
);

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        const targetId = decodeURIComponent(hash.replace(/^#/, ""));
        const element = document.getElementById(targetId);

        if (element) {
          element.scrollIntoView({ block: "start", behavior: "auto" });
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/landing-page/*" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/paper.html" element={<About />} />
            <Route path="/products" element={<Navigate to="/epson-ecotank" replace />} />
            <Route path="/products.html" element={<Navigate to="/epson-ecotank" replace />} />
            <Route path="/epson-ecotank" element={<EpsonEcoTank />} />
            <Route path="/epson-ecotank.html" element={<EpsonEcoTank />} />
            <Route path="/epson-workforce" element={<EpsonWorkforce />} />
            <Route path="/epson-workforce.html" element={<EpsonWorkforce />} />
            <Route path="/epson-em-c8100" element={<EpsonWorkforceSpotlight productKey="em-c8100" />} />
            <Route path="/epson-em-c8100.html" element={<EpsonWorkforceSpotlight productKey="em-c8100" />} />
            <Route path="/epson-m5500" element={<EpsonWorkforceSpotlight productKey="am-m5500" />} />
            <Route path="/epson-m5500.html" element={<EpsonWorkforceSpotlight productKey="am-m5500" />} />
            <Route path="/insights/:slug" element={<InsightArticle />} />
            <Route path="/konica-production" element={<KonicaProduction />} />
            <Route path="/konica-production.html" element={<KonicaProduction />} />
            <Route path="/photocopy-commercial" element={<PhotocopyCommercial />} />
            <Route path="/photocopy-commercial.html" element={<PhotocopyCommercial />} />
            <Route path="/commercial/:slug" element={<CommercialProduct />} />
            <Route path="/corporate-solutions" element={<CorporateSolutions />} />
            <Route path="/corporate-solutions.html" element={<CorporateSolutions />} />
            <Route path="/roi-calculator" element={<RoiCalculator />} />
            <Route path="/roi-calculator.html" element={<RoiCalculator />} />
            <Route path="/service" element={<Contact />} />
            <Route path="/contact" element={<Sales />} />
            <Route path="/contact.html" element={<Sales />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

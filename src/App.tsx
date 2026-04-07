import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import EpsonEcoTank from "./pages/EpsonEcoTank.tsx";
import EpsonWorkforce from "./pages/EpsonWorkforce.tsx";
import CorporateSolutions from "./pages/CorporateSolutions.tsx";
import KonicaProduction from "./pages/KonicaProduction.tsx";
import RoiCalculator from "./pages/RoiCalculator.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";
import EpsonWorkforceSpotlight from "./pages/EpsonWorkforceSpotlight.tsx";
import InsightArticle from "./pages/InsightArticle.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
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
          <Route path="/corporate-solutions" element={<CorporateSolutions />} />
          <Route path="/corporate-solutions.html" element={<CorporateSolutions />} />
          <Route path="/roi-calculator" element={<RoiCalculator />} />
          <Route path="/roi-calculator.html" element={<RoiCalculator />} />
          <Route path="/service" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

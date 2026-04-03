import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Products from "./pages/Products.tsx";
import EpsonEcoTank from "./pages/EpsonEcoTank.tsx";
import EpsonWorkforce from "./pages/EpsonWorkforce.tsx";
import CorporateSolutions from "./pages/CorporateSolutions.tsx";
import KonicaProduction from "./pages/KonicaProduction.tsx";
import RoiCalculator from "./pages/RoiCalculator.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/paper.html" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/epson-ecotank" element={<EpsonEcoTank />} />
          <Route path="/epson-ecotank.html" element={<EpsonEcoTank />} />
          <Route path="/epson-workforce" element={<EpsonWorkforce />} />
          <Route path="/epson-workforce.html" element={<EpsonWorkforce />} />
          <Route path="/konica-production" element={<KonicaProduction />} />
          <Route path="/konica-production.html" element={<KonicaProduction />} />
          <Route path="/corporate-solutions" element={<CorporateSolutions />} />
          <Route path="/corporate-solutions.html" element={<CorporateSolutions />} />
          <Route path="/roi-calculator" element={<RoiCalculator />} />
          <Route path="/roi-calculator.html" element={<RoiCalculator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

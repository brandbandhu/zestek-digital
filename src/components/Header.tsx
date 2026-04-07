import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import zestekLogo from "../../assets/logo/logo.svg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Epson EcoTank", path: "/epson-ecotank" },
  { label: "Epson WorkForce Printers", path: "/epson-workforce" },
  { label: "Konica Minolta Production Printers", path: "/konica-production" },
  { label: "Corporate Solutions / MPS", path: "/corporate-solutions" },
  { label: "About Us", path: "/about" },
  { label: "ROI Calculator", path: "/roi-calculator" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto h-16 px-4 sm:h-[70px] sm:px-5">
        <div className="hidden h-full xl:flex xl:items-center xl:justify-center">
          <div className="flex items-center gap-6 xl:gap-8">
            <Link to="/" className="flex shrink-0 items-center gap-2">
              <img src={zestekLogo} alt="Zestek" className="h-10 w-auto rounded-md object-contain xl:h-12" />
            </Link>

            <nav className="flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`rounded-full px-3 py-2 text-[13px] font-medium transition-colors xl:text-sm ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex h-full items-center justify-between gap-3 xl:hidden">
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <img src={zestekLogo} alt="Zestek" className="h-10 w-auto rounded-md object-contain sm:h-11" />
          </Link>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-card xl:hidden"
          >
            <div className="max-h-[calc(100vh-4rem)] space-y-1 overflow-y-auto px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Header;

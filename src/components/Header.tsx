import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="ml-[30px] flex items-center gap-2">
          <img src={zestekLogo} alt="Zestek" className="h-20 w-20 rounded-lg object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 lg:mr-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-border bg-card"
          >
            <div className="px-4 py-4 space-y-1">
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

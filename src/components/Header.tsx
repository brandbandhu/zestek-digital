import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";
import zestekLogo from "../../assets/Zestek_Logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Epson EcoTank", path: "/epson-ecotank" },
  { label: "Epson WorkForce Printers", path: "/epson-workforce" },
  { label: "Konica Minolta Production Printers", path: "/konica-production" },
  { label: "Corporate Solutions / MPS", path: "/corporate-solutions" },
  { label: "About Us", path: "/about" },
  { label: "Service", path: "/service" },
  { label: "ROI Calculator", path: "/roi-calculator" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isActiveLink = (path: string) => {
    if (path === "/service") {
      return location.pathname === "/service" || location.pathname === "/contact";
    }

    return location.pathname === path;
  };

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md"
    >
      <div className="container mx-auto h-16 px-4 sm:h-[70px] sm:px-5">
        <div className="hidden h-full xl:flex xl:items-center xl:justify-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex items-center gap-6 xl:gap-8"
          >
            <motion.div variants={fadeUp}>
              <Link to="/" className="flex shrink-0 items-center gap-2">
                <motion.img
                  src={zestekLogo}
                  alt="Zestek"
                  className="h-10 w-auto rounded-md object-contain xl:h-12"
                  whileHover={{ scale: 1.04, y: -2 }}
                  transition={{ duration: 0.25 }}
                />
              </Link>
            </motion.div>

            <motion.nav variants={staggerContainer} className="flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <motion.div key={link.label} variants={fadeUp}>
                  <Link
                    to={link.path}
                    className={`relative rounded-full px-3 py-2 text-[13px] font-medium transition-colors xl:text-sm ${
                      isActiveLink(link.path)
                        ? "text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {isActiveLink(link.path) ? (
                      <motion.span
                        layoutId="desktop-nav-active"
                        className="absolute inset-0 rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      />
                    ) : null}
                    <span className="relative z-[1]">{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="flex h-full items-center justify-between gap-3 xl:hidden"
        >
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <motion.img
              src={zestekLogo}
              alt="Zestek"
              className="h-10 w-auto rounded-md object-contain sm:h-11"
              whileHover={{ scale: 1.04 }}
            />
          </Link>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-card xl:hidden"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-h-[calc(100vh-4rem)] space-y-1 overflow-y-auto px-4 py-4"
            >
              {navLinks.map((link) => (
                <motion.div key={link.path} variants={fadeUp}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActiveLink(link.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
};

export default Header;

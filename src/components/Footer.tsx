import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";
import zestekLogo from "../../assets/Zestek_Logo.png";

const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="container mx-auto px-4 pb-14 pt-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={defaultViewport}
        className="grid gap-10 md:grid-cols-[1.15fr_0.95fr_1.2fr]"
      >
        <motion.div variants={fadeUp} className="max-w-md md:max-w-none">
          <Link to="/" className="mb-2 inline-flex items-center leading-none">
            <motion.img
              src={zestekLogo}
              alt="Zestek Digital LLP"
              className="animate-float-soft block h-20 w-auto max-w-[300px] object-contain sm:h-24 sm:max-w-[340px] md:h-28 md:max-w-[390px]"
              whileHover={{ scale: 1.04 }}
            />
          </Link>
          <h3 className="font-display text-2xl font-bold text-primary-foreground sm:text-3xl">Zestek Digital LLP</h3>
          <p className="mt-3 text-base leading-8 text-primary-foreground/92">
            Your trusted partner for Epson and Konica Minolta solutions, helping businesses reduce print cost,
            improve output, and scale with the right technology and products.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h4 className="font-display text-xl font-bold text-primary-foreground sm:text-2xl">Product Tabs</h4>
          <ul className="mt-6 space-y-6 text-base text-primary-foreground/92">
            <li>
              <Link to="/" className="transition-colors hover:text-highlight">
                Home
              </Link>
            </li>
            <li>
              <Link to="/epson-ecotank" className="transition-colors hover:text-highlight">
                Epson EcoTank
              </Link>
            </li>
            <li>
              <Link to="/epson-workforce" className="transition-colors hover:text-highlight">
                Epson WorkForce
              </Link>
            </li>
            <li>
              <Link to="/konica-production" className="transition-colors hover:text-highlight">
                Konica Minolta Production
              </Link>
            </li>
            <li>
              <Link to="/roi-calculator" className="transition-colors hover:text-highlight">
                ROI Calculator
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h4 className="font-display text-xl font-bold text-primary-foreground sm:text-2xl">Get in Touch</h4>
          <div className="mt-6 space-y-6 text-base leading-8 text-primary-foreground/92">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-highlight" />
              <p>32, Kohinoor Industrial Estate, Near Virwani Industry, Goregaon East, Mumbai 400063</p>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-highlight" />
              <a href="tel:+919920909700" className="transition-colors hover:text-highlight">
                9920909700
              </a>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-highlight" />
              <a href="mailto:Connect@zestek.in" className="transition-colors hover:text-highlight">
                Connect@zestek.in
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm font-semibold text-primary-foreground/85"
      >
        {"\u00A9"} {new Date().getFullYear()} Zestek Digital LLP Designed by{" "}
        <a
          href="https://webakoof.com"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-highlight"
        >
          webakoof
        </a>
        . All rights reserved.
      </motion.div>
    </div>
  </footer>
);

export default Footer;

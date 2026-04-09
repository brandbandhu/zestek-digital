import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";
import zestekLogo from "../../assets/zestek_logo.png";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M19.05 4.94A9.87 9.87 0 0 0 12.03 2C6.55 2 2.09 6.46 2.09 11.94c0 1.75.46 3.46 1.33 4.97L2 22l5.24-1.37a9.9 9.9 0 0 0 4.79 1.22h.01c5.48 0 9.94-4.46 9.94-9.94a9.86 9.86 0 0 0-2.93-6.97Zm-7.02 15.23h-.01a8.23 8.23 0 0 1-4.19-1.14l-.3-.18-3.11.81.83-3.03-.2-.31a8.23 8.23 0 0 1-1.27-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.85 5.83 2.41a8.18 8.18 0 0 1 2.42 5.83c0 4.55-3.7 8.23-8.25 8.23Zm4.52-6.17c-.25-.12-1.48-.73-1.71-.81-.23-.09-.39-.12-.56.12-.17.24-.64.81-.79.98-.15.18-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.21-.73-.65-1.22-1.45-1.37-1.69-.14-.24-.02-.37.11-.49.11-.11.25-.29.37-.43.13-.15.17-.24.25-.4.09-.18.04-.33-.02-.46-.07-.12-.56-1.35-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.45.06-.68.31-.23.24-.88.86-.88 2.09 0 1.23.9 2.43 1.02 2.6.13.16 1.77 2.69 4.28 3.77.6.26 1.07.41 1.43.52.6.19 1.14.16 1.57.1.48-.07 1.48-.61 1.69-1.2.21-.59.21-1.09.15-1.2-.06-.1-.23-.16-.48-.28Z" />
  </svg>
);

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
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center text-[#25D366]">
                <WhatsAppIcon className="h-5 w-5" />
              </div>
              <a
                href="https://wa.me/919920909700"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-highlight"
              >
                WhatsApp: 9920909700
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

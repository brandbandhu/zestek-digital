import { Link } from "react-router-dom";
import zestekLogo from "../../assets/logo/logo.svg";

const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-12 md:grid-cols-[1.15fr_0.95fr_1.2fr]">
        <div className="max-w-md">
          <img src={zestekLogo} alt="Zestek" className="mb-6 h-16 w-auto object-contain" />
          <h3 className="font-display text-3xl font-bold text-primary-foreground">Zestek Digital LLP</h3>
          <p className="mt-6 text-base leading-9 text-primary-foreground/92">
            Your trusted partner for Epson and Konica Minolta solutions, helping businesses reduce print cost,
            improve output, and scale with the right technology and products.
          </p>
        </div>

        <div>
          <h4 className="font-display text-2xl font-bold text-primary-foreground">Product Tabs</h4>
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
        </div>

        <div>
          <h4 className="font-display text-2xl font-bold text-primary-foreground">Get in Touch</h4>
          <div className="mt-6 space-y-8 text-base leading-9 text-primary-foreground/92">
            <p>32, Kohinoor Industrial Estate, Near Virwani Industry, Goregaon East, Mumbai 400063</p>
            <p>
              <a href="tel:+919920909700" className="transition-colors hover:text-highlight">
                9920909700
              </a>
            </p>
            <p>
              <a href="mailto:Connect@zestek.in" className="transition-colors hover:text-highlight">
                Connect@zestek.in
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm font-semibold text-primary-foreground/85">
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
      </div>
    </div>
  </footer>
);

export default Footer;

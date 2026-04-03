import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import zestekLogo from "@/assets/Zestek_Logo.png";

const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={zestekLogo} alt="Zestek" className="h-20 w-20 rounded-lg bg-white p-1 object-contain" />
            <div>
              <p className="text-xs text-primary-foreground/60">Digital LLP</p>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            We deliver reliable printers, consumables, and service coverage for print shops and corporate teams.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">Product Menu</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Epson EcoTank Printers</li>
            <li>Epson WorkForce Printers</li>
            <li>Konica Minolta Production</li>
            <li>Corporate Solutions / MPS</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/" className="hover:text-highlight transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-highlight transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-highlight transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-highlight transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              1st Floor, Zestek Digital LLP, Mumbai, Maharashtra
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              support@zestek.com
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Zestek Digital LLP. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Printer, Building2, Factory, Settings, Info, Calculator } from "lucide-react";

const categories = [
  { icon: Printer, tag: "Home & Office", title: "Epson EcoTank Printers", desc: "Colour ink tank products for home and small office use.", link: "/epson-ecotank" },
  { icon: Building2, tag: "Business", title: "Epson WorkForce Printers", desc: "Low running cost business inkjet printers for daily document printing.", link: "/epson-workforce" },
  { icon: Factory, tag: "Production", title: "Konica Minolta Production", desc: "High-speed production systems for print shops and commercial use.", link: "/konica-production" },
  { icon: Settings, tag: "Managed Print", title: "Corporate Solutions / MPS", desc: "Managed print services for secure, cost-controlled office printing.", link: "/corporate-solutions" },
  { icon: Info, tag: "About", title: "Why Choose Zestek", desc: "Reliable service and ongoing guidance for profitable operations.", link: "/about" },
  { icon: Calculator, tag: "ROI", title: "ROI Calculator", desc: "Estimate business print value before choosing the right setup.", link: "/roi-calculator" },
];

const ProductCategories = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="text-left mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-highlight mb-2 block">
          Categories
        </span>
        <h2 className="section-title">Choose the right category from the home page</h2>
        <p className="section-subtitle mt-4">
          Start with the product range that matches your business need.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to={c.link}
              className="block bg-card rounded-2xl p-6 border border-border hover:border-highlight hover:shadow-md transition-all group h-full"
            >
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{c.tag}</span>
              <h3 className="font-display font-bold text-navy mt-2 mb-3">{c.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{c.desc}</p>
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-highlight/10 transition-colors">
                <c.icon className="w-5 h-5 text-navy group-hover:text-highlight transition-colors" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductCategories;

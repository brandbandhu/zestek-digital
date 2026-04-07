import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Printer, Building2, Factory, Settings, Info, Calculator } from "lucide-react";
import { officeShowroomImage, printFloorImage, printWorkspaceImage } from "@/lib/siteVisuals";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";

const categories = [
  {
    icon: Printer,
    tag: "Home & Office",
    title: "Epson EcoTank Printers",
    desc: "Colour ink tank products for home and small office use.",
    link: "/epson-ecotank",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=3679c7960a7a7a1feea5c47e1ee23470f69c52b0&vid=3679c7960a7a7a1feea5c47e1ee23470f69c52b0&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L3250-%281%29",
  },
  {
    icon: Building2,
    tag: "Business",
    title: "Epson WorkForce Printers",
    desc: "Low running cost business inkjet printers for daily document printing.",
    link: "/epson-workforce",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=497de13b25347068dce62d42ce18bbe12579f0ea&vid=497de13b25347068dce62d42ce18bbe12579f0ea&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=C4000",
  },
  {
    icon: Factory,
    tag: "Production",
    title: "Konica Minolta Production",
    desc: "High-speed production systems for print shops and commercial use.",
    link: "/konica-production",
    imageUrl: "https://bt.konicaminolta.in/wp-content/themes/BIN/assets/images/Product_finder/AccurioPress-C14010S.jpg",
  },
  {
    icon: Settings,
    tag: "Managed Print",
    title: "Corporate Solutions / MPS",
    desc: "Managed print services for secure, cost-controlled office printing.",
    link: "/corporate-solutions",
    imageUrl: printFloorImage,
  },
  {
    icon: Info,
    tag: "About",
    title: "Why Choose Zestek",
    desc: "Reliable service and ongoing guidance for profitable operations.",
    link: "/about",
    imageUrl: officeShowroomImage,
  },
  {
    icon: Calculator,
    tag: "ROI",
    title: "ROI Calculator",
    desc: "Estimate business print value before choosing the right setup.",
    link: "/roi-calculator",
    imageUrl: printWorkspaceImage,
  },
];

const ProductCategories = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={defaultViewport}
        className="mb-10 text-left"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-highlight mb-2 block">
          Categories &amp; Solutions
        </span>
        <motion.h2 variants={fadeUp} className="section-title">Choose the right category and print solution</motion.h2>
        <motion.p variants={fadeUp} className="section-subtitle mt-4">
          Start with the printer range that matches your print volume, application, and business goals.
        </motion.p>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={defaultViewport}
            transition={{ duration: 0.55, delay: i * 0.08 }}
          >
            <Link
              to={c.link}
              className="hover-lift surface-glow group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:border-highlight hover:shadow-md md:p-6"
            >
              <div className="mb-4 overflow-hidden rounded-xl border border-border bg-muted/60">
                <img
                  src={c.imageUrl}
                  alt={`${c.title} category`}
                  className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] sm:h-36 lg:h-40"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{c.tag}</span>
              <h3 className="font-display font-bold text-navy mt-2 mb-3">{c.title}</h3>
              <p className="mb-4 min-h-[3rem] text-sm text-muted-foreground">{c.desc}</p>
              <div className="mt-auto h-10 w-10 rounded-lg bg-muted flex items-center justify-center transition-colors group-hover:bg-highlight/10">
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

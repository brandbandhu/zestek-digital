import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Factory, Printer, Settings, Wrench } from "lucide-react";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";

const corporateSolutionsImage = new URL("../../assets/corporate solution.jpg", import.meta.url).href;
const serviceSupportImage = new URL("../../assets/support.png", import.meta.url).href;

const categories = [
  {
    icon: Printer,
    tag: "Home & Office",
    title: "Printers for Home and Small Offices",
    desc: "Start with Epson EcoTank models designed for everyday home use and compact office printing.",
    link: "/epson-ecotank",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=3679c7960a7a7a1feea5c47e1ee23470f69c52b0&vid=3679c7960a7a7a1feea5c47e1ee23470f69c52b0&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L3250-%281%29",
    imageClassName: "object-cover",
  },
  {
    icon: Building2,
    tag: "Medium & Large Office",
    title: "Printers for Medium and Large Offices",
    desc: "Explore Epson WorkForce printers for business teams that need dependable speed, efficiency, and daily output.",
    link: "/epson-workforce",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=497de13b25347068dce62d42ce18bbe12579f0ea&vid=497de13b25347068dce62d42ce18bbe12579f0ea&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=C4000",
    imageClassName: "object-cover",
  },
  {
    icon: Factory,
    tag: "Photocopy & Commercial",
    title: "Printers for Photocopy Centre & Commercial Segment",
    desc: "Compare Epson and Konica Minolta options for photocopy centres and commercial print businesses.",
    link: "/epson-em-c8100",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=818b370842b00667e251fd5a0e34aa07daf5c4a6&vid=818b370842b00667e251fd5a0e34aa07daf5c4a6&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=WorkForce_Pro_EM-C8100_SPT_C11CL31201_384x256",
    imageClassName: "object-contain bg-white p-3",
  },
  {
    icon: Settings,
    tag: "Corporate",
    title: "Corporate Solutions / MPS",
    desc: "Managed print services and structured office printing plans for business control and efficiency.",
    link: "/corporate-solutions",
    imageUrl: corporateSolutionsImage,
    imageClassName: "object-cover",
  },
  {
    icon: Wrench,
    tag: "Service",
    title: "Service Support",
    desc: "Get service help, installation support, AMC guidance, and printer assistance from our team.",
    link: "/service",
    imageUrl: serviceSupportImage,
    imageClassName: "object-cover",
  },
];

const ProductCategories = () => (
  <section id="segments-categories" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={defaultViewport}
        className="mb-10 text-left"
      >
        <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-highlight">
          Segments / Categories
        </span>
        <motion.h2 variants={fadeUp} className="section-title">
          Choose your segment and the right print category
        </motion.h2>
        <motion.p variants={fadeUp} className="section-subtitle mt-4">
          Explore home office, business, photocopy centre, corporate, and service categories to find the best fit for
          your daily print volume and application needs.
        </motion.p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={defaultViewport}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <Link
              to={category.link}
              className="hover-lift surface-glow group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:border-highlight hover:shadow-md md:p-6"
            >
              <div className="mb-4 overflow-hidden rounded-xl border border-border bg-muted/60">
                <img
                  src={category.imageUrl}
                  alt={`${category.title} category`}
                  className={`h-40 w-full transition-transform duration-500 group-hover:scale-[1.04] sm:h-36 lg:h-40 ${category.imageClassName}`}
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{category.tag}</span>
              <h3 className="mb-3 mt-2 font-display font-bold text-navy">{category.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground md:min-h-[3rem]">{category.desc}</p>
              <div className="mt-auto flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-highlight/10">
                <category.icon className="h-5 w-5 text-navy transition-colors group-hover:text-highlight" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductCategories;

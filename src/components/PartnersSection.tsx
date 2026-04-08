import { motion } from "framer-motion";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";
import logo1 from "@/assets/logo/1.jpeg";
import logo2 from "@/assets/logo/2.png";
import logo3 from "@/assets/logo/3.jpeg";

const partners = [
  {
    name: "Epson printing solutions",
    badge: "Accredited Partner",
    desc:
      "Power your print business with Epson EcoTank and WorkForce printers, built for high-volume output, low cost per print, and dependable performance, backed by our expert guidance and service support.",
    logo: logo1,
  },
  {
    name: "Konica Minolta production printers",
    badge: "Authorized Partner",
    desc:
      "Scale your print business with Konica Minolta production printers, delivering high-speed output, superior print quality, and media versatility, backed by expert installation, color management, and reliable service support.",
    logo: logo2,
  },
  {
    name: "WYTE specialty solutions",
    badge: "Specialty Printing",
    desc:
      "Expand your offerings with WYTE solutions for signage and specialty printing, ideal for vinyl, flex, and customized media, supported with the right machine setup and application guidance.",
    logo: logo3,
  },
];

const PartnersSection = () => (
  <section id="brand-logos" className="section-padding bg-card pt-8 md:pt-10">
    <div className="container mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={defaultViewport}
        className="mb-10 text-left"
      >
        <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-highlight">
          Brand Partners
        </span>
        <motion.h2 variants={fadeUp} className="section-title">
          Reliable Brands. Smarter Print Solutions.
        </motion.h2>
        <motion.p variants={fadeUp} className="section-subtitle mt-4 max-w-4xl">
          We partner with Epson, Konica Minolta, and WYTE to support corporates, print businesses, publication houses,
          and copy centres with the right machines, seamless setup, and consistent service, plus expert guidance for
          media and high-volume daily operations.
        </motion.p>
      </motion.div>
      <div className="grid gap-8 md:grid-cols-3">
        {partners.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={defaultViewport}
            transition={{ delay: i * 0.12, duration: 0.55 }}
            className="hover-lift surface-glow group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-shadow"
          >
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex h-12 w-24 items-center justify-center rounded-xl border border-border bg-[#E9F2FF] p-2 sm:w-28">
                <img src={p.logo} alt={`${p.name} logo`} className="h-full w-full object-contain" />
              </div>
              <span className="text-[11px] font-semibold uppercase leading-tight tracking-widest text-muted-foreground sm:text-right">
                {p.badge}
              </span>
            </div>
            <h3 className="mb-2 font-display text-lg font-bold text-navy">{p.name}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;

import { motion } from "framer-motion";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";

const brochures = [
  {
    title: "Konica Minolta AccurioPrint C4065 brochure",
    desc: "Konica Minolta high-speed production platform for commercial print businesses.",
    tag: "Konica Minolta",
    size: "6.8 MB PDF",
    href: "/brochures/AccurioPrint-C4065-brochure.pdf",
  },
  {
    title: "Epson Print Solutions brochure",
    desc: "Epson product range, business use cases, and print solution guidance.",
    tag: "Epson",
    size: "3.2 MB PDF",
    href: "/brochures/Epson-Print-Solutions-brochure.pdf",
  },
];

const BrochureSection = () => (
  <section className="section-padding animate-gradient-shift bg-gradient-to-br from-[#102B5C] via-[#0B2B63] to-[#0A1E46] text-primary-foreground">
    <div className="container mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={defaultViewport}
        className="mb-10"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-highlight/90 block mb-2">
          Download
        </span>
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold">
          Download Brochures for the Right Print Solution
        </motion.h2>
        <motion.p variants={fadeUp} className="text-primary-foreground/70 mt-3 max-w-2xl">
          Explore brochure downloads that match your print volume, use case, and business type.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {brochures.map((b, index) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.01 }}
            viewport={defaultViewport}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="surface-glow rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur hover-lift"
          >
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/90">
              {b.tag}
            </span>
            <h3 className="mt-4 text-lg font-display font-bold">{b.title}</h3>
            <p className="text-sm text-primary-foreground/70 mt-2">{b.desc}</p>
            <div className="mt-6 flex items-center justify-between text-xs text-primary-foreground/70">
              <span>{b.size}</span>
              <a
                href={b.href}
                className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold hover:bg-white/25 transition-colors"
                download
              >
                Download
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BrochureSection;

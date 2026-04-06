import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building, Copy, Camera } from "lucide-react";

const segments = [
  { icon: Building, tag: "COM", title: "Printers for Commercial Segment", desc: "High-volume production for print houses, packaging, and short-run jobs.", link: "/konica-production" },
  { icon: Copy, tag: "PXC", title: "Printers for Photocopy Centers", desc: "Cost-efficient, durable devices for daily walk-in copy and scan workloads.", link: "/epson-m5500" },
  { icon: Camera, tag: "PRO", title: "Printers for Photo Professionals", desc: "Color-accurate, detail-rich output for studios, labs, and visual work.", link: "/about" },
];

const SegmentSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="text-left mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-highlight mb-2 block">Choose By Segment</span>
        <h2 className="section-title">Find the right printer for your business model</h2>
        <p className="section-subtitle mt-4">Browse by business type for faster decision-making and better ROI.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {segments.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <Link to={s.link} className="block bg-card rounded-xl p-8 border border-border hover:border-highlight hover:shadow-lg transition-all group h-full">
              <span className="inline-block px-3 py-1 rounded-full bg-highlight text-xs font-bold text-navy mb-4">{s.tag}</span>
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-highlight/10 transition-colors">
                <s.icon className="w-6 h-6 text-navy" />
              </div>
              <h3 className="font-display font-bold text-navy text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SegmentSection;

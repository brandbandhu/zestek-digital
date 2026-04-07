import { motion } from "framer-motion";
import { Award, ShieldCheck, Wrench, PackagePlus } from "lucide-react";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";

const signals = [
  { icon: Award, title: "Epson Authorized Partner", desc: "Certified guidance and support for Epson SOHO and WorkForce printer deployments." },
  { icon: ShieldCheck, title: "Konica Minolta Certified", desc: "Trained engineers supporting production and office devices with SLA-backed service." },
  { icon: Wrench, title: "Service Excellence", desc: "Consistent response times and proactive maintenance for business-critical printing." },
  { icon: PackagePlus, title: "New Installations", desc: "Fresh machine installations completed monthly for photocopy centers and commercial units." },
];

const TrustSignals = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={defaultViewport}
        className="mb-10 text-left"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-highlight mb-2 block">
          Achievements
        </span>
        <motion.h2 variants={fadeUp} className="section-title">
          Achievements that build confidence from day one
        </motion.h2>
        <motion.p variants={fadeUp} className="section-subtitle mt-3">
          Authorized partnerships, responsive service, and consistent installations.
        </motion.p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {signals.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={defaultViewport}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="hover-lift surface-glow rounded-2xl border border-border bg-background p-6"
          >
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4">
              <s.icon className="w-5 h-5 text-navy" />
            </div>
            <h3 className="font-display font-bold mb-2 text-navy">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSignals;

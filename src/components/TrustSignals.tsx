import { motion } from "framer-motion";
import { Award, ShieldCheck, Wrench, PackagePlus } from "lucide-react";

const signals = [
  { icon: Award, title: "Epson Authorized Partner", desc: "Certified guidance and support for Epson SOHO and WorkForce printer deployments." },
  { icon: ShieldCheck, title: "Konica Minolta Certified", desc: "Trained engineers supporting production and office devices with SLA-backed service." },
  { icon: Wrench, title: "Service Excellence", desc: "Consistent response times and proactive maintenance for business-critical printing." },
  { icon: PackagePlus, title: "New Installations", desc: "Fresh machine installations completed monthly for photocopy centers and commercial units." },
];

const TrustSignals = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto">
      <div className="text-left mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-highlight mb-2 block">
          Awards &amp; Certifications
        </span>
        <h2 className="section-title">Trust signals that build confidence from day one</h2>
        <p className="section-subtitle mt-3">
          Certified partners, responsive service, and consistent installations.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {signals.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl bg-background p-6 border border-border"
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

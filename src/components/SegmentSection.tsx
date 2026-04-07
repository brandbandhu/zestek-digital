import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Printer } from "lucide-react";

const segments = [
  {
    icon: Printer,
    tag: "L8050",
    title: "Epson EcoTank L8050",
    desc: "Photo printer for studios and photo professionals with high-quality colour output.",
    link: "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/Epson-L8050/s/SPT_C11CK37504",
    external: true,
  },
  {
    icon: Printer,
    tag: "L18050",
    title: "Epson EcoTank L18050",
    desc: "A3 photo printing model for print businesses that need larger premium photo output.",
    link: "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/Epson-L18050/s/SPT_C11CK38503",
    external: true,
  },
];

const SegmentSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="text-left mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-highlight mb-2 block">Featured Printers</span>
        <h2 className="section-title">Find the right printer for your business model</h2>
        <p className="section-subtitle mt-4">Start with these two Epson photo models as of now.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {segments.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            {s.external ? (
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full rounded-xl border border-border bg-card p-8 transition-all group hover:border-highlight hover:shadow-lg"
              >
                <span className="mb-4 inline-block rounded-full bg-highlight px-3 py-1 text-xs font-bold text-navy">{s.tag}</span>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-highlight/10">
                  <s.icon className="h-6 w-6 text-navy" />
                </div>
                <h3 className="mb-2 text-lg font-display font-bold text-navy">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </a>
            ) : (
              <Link to={s.link} className="block bg-card rounded-xl p-8 border border-border hover:border-highlight hover:shadow-lg transition-all group h-full">
                <span className="inline-block px-3 py-1 rounded-full bg-highlight text-xs font-bold text-navy mb-4">{s.tag}</span>
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-highlight/10 transition-colors">
                  <s.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SegmentSection;

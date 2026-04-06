import { motion } from "framer-motion";
import logo1 from "@/assets/logo/1.jpeg";
import logo2 from "@/assets/logo/2.png";
import logo3 from "@/assets/logo/3.jpeg";

const partners = [
  {
    name: "Epson",
    badge: "Epson printers",
    desc: "Epson print solutions",
    logo: logo1,
  },
  {
    name: "Konica Minolta",
    badge: "KM production print",
    desc: "Konica Minolta production print",
    logo: logo2,
  },
  {
    name: "WYTE",
    badge: "WYTE print solutions",
    desc: "WYTE specialty solutions",
    logo: logo3,
  },
];

const PartnersSection = () => (
  <section className="section-padding pt-0 bg-card">
    <div className="container mx-auto">
      <div className="text-left mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-highlight mb-2 block">
          Our Partners
        </span>
        <h2 className="section-title">Reliable Brands. Smarter Print Solutions.</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {partners.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="h-12 w-24 shrink-0 rounded-xl bg-[#E9F2FF] border border-border flex items-center justify-center p-2 sm:w-28">
                <img src={p.logo} alt={`${p.name} logo`} className="h-full w-full object-contain" />
              </div>
              <span className="w-[132px] pt-2 text-right text-[10px] font-semibold uppercase leading-tight tracking-[0.22em] text-muted-foreground sm:w-auto sm:pt-1 sm:text-[11px] sm:tracking-widest">
                {p.badge}
              </span>
            </div>
            <h3 className="font-display font-bold text-lg text-navy mb-2">{p.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;

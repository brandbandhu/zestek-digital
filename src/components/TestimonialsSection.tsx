import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Radheshyam Pardeshi",
    company: "Print Point",
    quote: "Excellent service, competitive pricing, and dependable after-sales support from Amit and the Zest team.",
    badge: "5 Star",
  },
  {
    name: "Vinod",
    company: "Sharda Stationery & Xerox, Mumbai",
    quote: "The digital printer solution helped us save nearly 20% in production cost while improving overall output.",
    badge: "20% Savings",
  },
  {
    name: "Darshan Patne",
    company: "Sambhav Consultancy, Mumbai",
    quote: "Good-quality, innovative products and an enjoyable working relationship with the Zest Digital Solutions team.",
    badge: "Trust",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto">
      <div className="text-left mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-highlight mb-2 block">
          Testimonials
        </span>
        <h2 className="section-title">What our customers say</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-background rounded-2xl p-6 border border-border"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-highlight text-xs font-bold text-navy">
                {t.badge}
              </span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-highlight text-highlight" />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic mb-6 leading-relaxed">"{t.quote}"</p>
            <div>
              <p className="font-display font-bold text-navy text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

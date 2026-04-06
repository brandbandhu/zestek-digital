import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Radheshyam Pardeshi",
    company: "Print Point",
    quote: "Excellent service, competitive pricing, and dependable after-sales support from Amit and the Zest team.",
  },
  {
    name: "Vinod",
    company: "Sharda Stationery & Xerox, Mumbai",
    quote: "The digital printer solution helped us save nearly 20% in production cost while improving overall output.",
  },
  {
    name: "Darshan Patne",
    company: "Sambhav Consultancy, Mumbai",
    quote: "Good-quality, innovative products and an enjoyable working relationship with the Zest Digital Solutions team.",
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
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex h-full flex-col rounded-2xl border border-border bg-background p-6"
          >
            <p className="text-sm italic leading-relaxed text-muted-foreground">"{t.quote}"</p>
            <div className="mt-auto border-t border-border/70 pt-5">
              <p className="font-display font-bold text-navy text-sm">{t.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{t.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

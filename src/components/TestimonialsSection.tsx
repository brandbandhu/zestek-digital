import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { BadgeCheck, Building2, MessageSquareQuote, Star } from "lucide-react";

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

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

const TestimonialsSection = () => (
  <section id="testimony" className="section-padding bg-card">
    <div className="container mx-auto">
      <div className="mb-10 text-left">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-highlight">
          Testimony
        </span>
        <h2 className="section-title">Customer testimony from real print businesses</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="surface-glow hover-lift flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-sm"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <Badge variant="secondary" className="rounded-full bg-highlight/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-highlight">
                <BadgeCheck className="mr-1.5 h-3.5 w-3.5" />
                Verified
              </Badge>
              <div className="rounded-full bg-navy/5 p-3 text-navy">
                <MessageSquareQuote className="h-5 w-5" />
              </div>
            </div>

            <div className="mb-4 flex items-center gap-1 text-highlight">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={`${testimonial.name}-${starIndex}`} className="h-4 w-4 fill-current" />
              ))}
            </div>

            <p className="text-sm italic leading-relaxed text-muted-foreground">"{testimonial.quote}"</p>

            <div className="mt-auto border-t border-border/70 pt-5">
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14 border border-highlight/20 shadow-sm">
                  <AvatarFallback className="bg-gradient-to-br from-[#F7A539] via-[#F7C76E] to-[#E9EEF9] font-display text-base font-bold text-navy">
                    {getInitials(testimonial.name)}
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0">
                  <p className="text-sm font-display font-bold text-navy">{testimonial.name}</p>
                  <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <Building2 className="h-3.5 w-3.5 shrink-0 text-highlight" />
                    <span>{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

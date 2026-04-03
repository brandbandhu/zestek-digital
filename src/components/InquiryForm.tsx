import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Clock, Target, MapPin } from "lucide-react";

const stats = [
  { icon: Clock, label: "15 min", desc: "Lead response target" },
  { icon: Target, label: "Right-fit", desc: "Device shortlist" },
  { icon: MapPin, label: "Local", desc: "Sales and service coverage" },
];

const InquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-highlight mb-2 block">
              Simple Inquiry Form
            </span>
            <h2 className="section-title mb-4">Get the right device recommendation</h2>
            <p className="text-muted-foreground mb-8">
              Share your monthly print volume, preferred usage, and paper size needs. We'll recommend the right device and supply plan.
            </p>
            <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
              <li>✓ Model guidance based on mono/color usage and volume</li>
              <li>✓ Consumables planning and local delivery support</li>
              <li>✓ Service coverage across Mumbai, Boisar, and Khopoli</li>
            </ul>
            <div className="flex gap-6">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-highlight" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-navy text-sm">{s.label}</p>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border shadow-lg"
          >
            <h3 className="font-display font-bold text-navy text-xl mb-6">Request Pricing</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="email"
                placeholder="Work Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <select className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring text-muted-foreground">
                <option>Select monthly volume</option>
                <option>Below 5,000 pages</option>
                <option>5,000 - 15,000 pages</option>
                <option>15,000 - 40,000 pages</option>
                <option>40,000+ pages</option>
              </select>
              <textarea
                placeholder="Message / Requirements"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-navy text-primary-foreground font-semibold hover:bg-navy-light transition-colors"
              >
                {submitted ? "Submitted ✓" : <><Send className="w-4 h-4" /> Submit Request</>}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;

import { motion } from "framer-motion";
import { Send, Clock, Target, MapPin } from "lucide-react";
import { useLeadFormSubmission } from "@/hooks/useLeadFormSubmission";

const stats = [
  { icon: Clock, label: "15 min", desc: "Lead response target" },
  { icon: Target, label: "Right-fit", desc: "Device shortlist" },
  { icon: MapPin, label: "Local", desc: "Sales and service coverage" },
];

const InquiryForm = () => {
  const { isSubmitting, handleSubmit } = useLeadFormSubmission({
    formId: "contact-inquiry-form",
    formName: "Contact Inquiry Form",
    successMessage: "Your inquiry has been sent. Our team will contact you shortly.",
  });

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-highlight">
              Simple Inquiry Form
            </span>
            <h2 className="section-title mb-4">Get the right device recommendation</h2>
            <p className="mb-8 text-muted-foreground">
              Share your monthly print volume, preferred usage, and paper size needs. We&apos;ll recommend the right
              device and supply plan.
            </p>
            <ul className="mb-8 space-y-3 text-sm text-muted-foreground">
              <li>✓ Model guidance based on mono/color usage and volume</li>
              <li>✓ Consumables planning and local delivery support</li>
              <li>✓ Service coverage across Mumbai, Boisar, and Khopoli</li>
            </ul>
            <div className="flex gap-6">
              {stats.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <item.icon className="h-5 w-5 text-highlight" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
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
            className="rounded-2xl border border-border bg-card p-8 shadow-lg"
          >
            <h3 className="mb-6 text-xl font-bold text-navy">Request Pricing</h3>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="text"
                name="company_name"
                placeholder="Company Name"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="email"
                name="work_email"
                placeholder="Work Email"
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="tel"
                name="phone_number"
                placeholder="Phone Number"
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <select
                name="monthly_volume"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option>Select monthly volume</option>
                <option>Below 5,000 pages</option>
                <option>5,000 - 15,000 pages</option>
                <option>15,000 - 40,000 pages</option>
                <option>40,000+ pages</option>
              </select>
              <textarea
                name="message"
                placeholder="Message / Requirements"
                rows={3}
                className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-navy-light disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : <><Send className="h-4 w-4" /> Submit Request</>}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;

import { motion } from "framer-motion";
import { Headset, Package, ShieldCheck, Send } from "lucide-react";
import { useLeadFormSubmission } from "@/hooks/useLeadFormSubmission";
import { requestTypes } from "@/lib/requestTypes";

const stats = [
  { icon: Headset, label: "Structured", desc: "Support routing" },
  { icon: ShieldCheck, label: "AMC", desc: "Renewal guidance" },
  { icon: Package, label: "Original", desc: "Consumables planning" },
];

const supportHighlights = [
  "Breakdown, installation, AMC, and consumables request handling",
  "Official Epson portal links plus direct Zestek follow-up support",
  "Coverage for service coordination, supply planning, and escalation",
];

const InquiryForm = () => {
  const { isSubmitting, handleSubmit } = useLeadFormSubmission({
    formId: "service-support-form",
    formName: "Service Support Form",
    successMessage: "Your support request has been sent. Our team will contact you shortly.",
  });

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-highlight">
              Raise a Request
            </span>
            <h2 className="section-title mb-4">Talk to our support team for the right next step</h2>
            <p className="mb-8 text-muted-foreground">
              Use this form for service support, installation requests, AMC renewals, consumables planning, escalation,
              or even sales guidance if you were redirected here from a product page.
            </p>

            <ul className="mb-8 space-y-3">
              {supportHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-highlight" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-6">
              {stats.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-muted">
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
            className="rounded-3xl border border-border bg-background p-6 shadow-lg sm:p-8"
          >
            <h3 className="mb-6 text-xl font-bold text-navy">Submit support request</h3>
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
                name="request_type"
                defaultValue=""
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="" disabled>
                  Select request type
                </option>
                {requestTypes.map((requestType) => (
                  <option key={requestType} value={requestType}>
                    {requestType}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="machine_model"
                placeholder="Printer Model / Product Name"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="text"
                name="serial_number"
                placeholder="Serial Number"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <textarea
                name="message"
                placeholder="Describe the issue or requirement"
                rows={4}
                className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-navy-light disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Submit Request
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;

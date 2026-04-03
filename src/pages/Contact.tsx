import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InquiryForm from "@/components/InquiryForm";
import RoiCalculatorContent from "@/components/RoiCalculatorContent";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => (
  <div className="min-h-screen">
    <Header />
    <section className="section-padding bg-navy text-primary-foreground">
      <div className="container mx-auto text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-display font-extrabold mb-4">
          Contact Us
        </motion.h1>
        <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
          Get in touch for product inquiries, service support, or partnership opportunities.
        </p>
      </div>
    </section>

    <section className="section-padding bg-card">
      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          { icon: MapPin, title: "Visit Us", detail: "Mumbai, Maharashtra, India" },
          { icon: Phone, title: "Call Us", detail: "+91 98765 43210" },
          { icon: Mail, title: "Email Us", detail: "info@zestek.com" },
          { icon: Clock, title: "Business Hours", detail: "Mon–Sat, 9 AM – 7 PM" },
        ].map((c, i) => (
          <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-background rounded-xl p-6 border border-border text-center">
            <div className="w-12 h-12 rounded-lg bg-highlight/10 flex items-center justify-center mx-auto mb-4">
              <c.icon className="w-6 h-6 text-highlight" />
            </div>
            <h3 className="font-display font-bold text-navy mb-1">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <InquiryForm />

    <section className="section-padding pt-0">
      <div className="container mx-auto">
        <span className="inline-flex items-center rounded-full bg-muted px-4 py-2 text-sm font-semibold text-navy">
          ROI Calculator
        </span>
      </div>
    </section>
    <RoiCalculatorContent />

    <section className="pb-16">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1696000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Zestek Location"
          />
        </div>
      </div>
    </section>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Contact;

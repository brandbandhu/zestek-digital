import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InquiryForm from "@/components/InquiryForm";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "32, Kohinoor Industrial Estate, Near Virwani Industry, Goregaon East, Mumbai 400063",
  },
  { icon: Phone, title: "Call Us", detail: "9920909700" },
  { icon: Mail, title: "Email Us", detail: "Connect@zestek.in" },
  { icon: Clock, title: "Business Hours", detail: "Mon-Sat, 9 AM - 7 PM" },
];

const Contact = () => (
  <div className="min-h-screen">
    <Header />
    <section className="section-padding bg-navy text-primary-foreground">
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-4xl font-extrabold md:text-5xl"
        >
          Contact Us
        </motion.h1>
        <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70">
          Get in touch for product inquiries, service support, or partnership opportunities.
        </p>
      </div>
    </section>

    <section className="section-padding bg-card">
      <div className="container mx-auto mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {contactCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-xl border border-border bg-background p-6 text-center"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-highlight/10">
              <card.icon className="h-6 w-6 text-highlight" />
            </div>
            <h3 className="mb-1 font-display font-bold text-navy">{card.title}</h3>
            <p className="text-sm text-muted-foreground">{card.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <InquiryForm />

    <section className="pb-16">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
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

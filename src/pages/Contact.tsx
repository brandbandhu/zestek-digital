import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InquiryForm from "@/components/InquiryForm";
import PageMeta from "@/components/PageMeta";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "32, Kohinoor Industrial Estate, Near Virwani Industry, Goregaon East, Mumbai 400063",
  },
  { icon: Phone, title: "Sales Enquiry", detail: "9920909700" },
  { icon: Mail, title: "Email Us", detail: "connect@zestek.in" },
  { icon: Clock, title: "Business Hours", detail: "Mon-Sat, 10 AM - 6 PM" },
];

const supportDirectory = [
  {
    id: "sales-inquiry",
    title: "For any sales inquiry",
    phone: "9920909700",
    phoneHref: "tel:+919920909700",
    email: "connect@zestek.in",
    emailHref: "mailto:connect@zestek.in",
  },
  {
    id: "consumables",
    title: "For consumables",
    phone: "992090913",
    phoneHref: "tel:+91992090913",
    email: "sales@zestek.in",
    emailHref: "mailto:sales@zestek.in",
  },
  {
    id: "service-amc",
    title: "For service / AMC",
    phone: "9920905073",
    phoneHref: "tel:+919920905073",
    email: "support@zestek.in",
    emailHref: "mailto:support@zestek.in",
  },
  {
    id: "issue-escalation",
    title: "To escalate any issue",
    phone: "9022316433",
    phoneHref: "tel:+919022316433",
    email: "amit@zestek.in",
    emailHref: "mailto:amit@zestek.in",
  },
];

const epsonTollFreeNumbers = ["1800 425 00 11", "1860 3000 1600", "1800 123 001 600"];
const epsonSupportPortalUrl = "https://www.epson.co.in/support-connect";

const Contact = () => (
  <div className="min-h-screen">
    <PageMeta
      title="Contact Zestek Digital LLP | Sales, Consumables, Service & Escalation"
      description="Contact Zestek Digital LLP for Epson and Konica Minolta sales, consumables, service/AMC, escalation support, and official Epson support resources."
      keywords={[
        "contact Zestek Digital LLP",
        "printer sales contact Mumbai",
        "Epson support partner Mumbai",
        "printer AMC support contact",
        "Konica Minolta support Mumbai",
      ]}
      canonicalPath="/contact"
      image="/zestek-logo.png"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Zestek Digital LLP",
        telephone: "+91-9920909700",
        email: "connect@zestek.in",
        address: {
          "@type": "PostalAddress",
          streetAddress: "32, Kohinoor Industrial Estate, Near Virwani Industry, Goregaon East",
          addressLocality: "Mumbai",
          postalCode: "400063",
          addressCountry: "IN",
        },
      }}
    />
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

      <div id="support-directory" className="container mx-auto space-y-6">
        <div className="rounded-2xl border border-border bg-background p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Support Directory</p>
          <h2 className="mt-2 text-2xl font-bold text-navy md:text-3xl">Direct numbers for sales, consumables, service, and escalation</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Use the exact contact below based on your request type for faster response.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {supportDirectory.map((item) => (
            <article key={item.id} id={item.id} className="scroll-mt-32 rounded-2xl border border-border bg-background p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">{item.title}</p>
              <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-highlight" />
                <a href={item.phoneHref} className="font-semibold text-navy hover:text-highlight">
                  {item.phone}
                </a>
              </div>
              <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-highlight" />
                <a href={item.emailHref} className="font-semibold text-navy hover:text-highlight">
                  {item.email}
                </a>
              </div>
            </article>
          ))}
        </div>

        <article id="epson-support" className="scroll-mt-32 rounded-2xl border border-border bg-background p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Epson Official Support</p>
          <h3 className="mt-2 text-xl font-bold text-navy">Product registration, warranty check, and complaint registration</h3>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={epsonSupportPortalUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-navy/90"
            >
              Open Epson Support Portal
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="mt-4 rounded-xl border border-border bg-muted/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Epson Toll Free Numbers</p>
            <p className="mt-2 text-sm text-navy">{epsonTollFreeNumbers.join(" / ")}</p>
          </div>
        </article>
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

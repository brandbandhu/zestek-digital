import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageMeta from "@/components/PageMeta";
import { motion } from "framer-motion";
import serviceHeroImage from "../../assets/service/service1.jpg";
import { ClipboardCheck, Download, ExternalLink, Mail, Package, Phone, ShieldCheck, Wrench } from "lucide-react";

const officialSupportLinks = [
  {
    title: "Register your products",
    description: "Register your Epson product to activate eWarranty and faster support.",
    href: "https://customer.epson.co.in/customer/ewarranty.do",
    icon: ClipboardCheck,
    actionLabel: "Click Here",
    opensExternally: true,
  },
  {
    title: "Check & verify warranty status",
    description: "Review warranty coverage before raising a complaint or installation request.",
    href: "https://customer.epson.co.in/customer/ewarranty.do",
    icon: ShieldCheck,
    actionLabel: "Click Here",
    opensExternally: true,
  },
  {
    title: "Installation or service request",
    description: "Raise an Epson installation or service request through the official portal.",
    href: "https://customer.epson.co.in/customer/repair.do",
    icon: Wrench,
    actionLabel: "Click Here",
    opensExternally: true,
  },
  {
    title: "Driver download",
    description: "Download drivers and software for your Epson product.",
    href: "https://download-center.epson.com/search/?region=IN&language=en",
    icon: Download,
    actionLabel: "Download",
    opensExternally: true,
  },
  {
    title: "Extended warranty / AMC",
    description: "Explore Epson CoverPlus extended warranty options.",
    href: "https://www.epson.co.in/coverplus",
    icon: Package,
    actionLabel: "Click Here",
    opensExternally: true,
  },
];


const Contact = () => (
  <div className="min-h-screen bg-background">
    <PageMeta
      title="Service Support | Zestek Digital LLP | Epson Registration, Warranty, AMC & Consumables"
      description="Service support page for Epson registration, warranty verification, installation requests, AMC renewals, consumables planning, and Zestek escalation contacts."
      keywords={[
        "Zestek service support",
        "printer service support Mumbai",
        "Epson warranty check India",
        "Epson installation request",
        "printer AMC support Mumbai",
        "printer consumables support",
      ]}
      canonicalPath="/service"
      image="/zestek-logo.png"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Zestek Service Support",
        url: "https://zestek.in/service",
        mainEntity: {
          "@type": "Organization",
          name: "Zestek Digital LLP",
          telephone: "+91-9920905073",
          email: "support@zestek.in",
          address: {
            "@type": "PostalAddress",
            streetAddress: "32, Kohinoor Industrial Estate, Near Virwani Industry, Goregaon East",
            addressLocality: "Mumbai",
            postalCode: "400063",
            addressCountry: "IN",
          },
        },
      }}
    />
    <Header />

    <section className="section-padding overflow-hidden bg-card">
      <div className="container mx-auto">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.98fr)] xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex rounded-full border border-highlight/20 bg-highlight/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-highlight">
              Service Support
            </span>
            <h1 className="mt-6 max-w-3xl text-3xl font-extrabold leading-tight text-navy sm:text-4xl md:text-5xl">
              Reliable Print Service &amp; Support You Can Count On
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Expert service, structured support, and efficient consumables management - keeping your business running
              without interruptions.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-highlight/20 via-background to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.25rem] border border-border bg-gradient-to-br from-white via-[#f9fbfe] to-[#eef5ff] p-4 shadow-[0_24px_80px_rgba(15,30,70,0.18)]">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/85">
                <div className="grid min-h-[360px] items-center gap-6 bg-gradient-to-br from-[#eff6ff] via-white to-[#dff1ff] p-4 sm:p-6 md:min-h-[420px] lg:grid-cols-[1.08fr_0.92fr]">
                  <div className="order-2 lg:order-1">
                    <div className="grid gap-4">
                      <div className="rounded-2xl border border-border/70 bg-white/90 p-4 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Quick Support</p>
                        <p className="mt-2 text-base font-bold text-navy">Call 9920905073 for service and AMC support</p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          Direct line for installation requests, technical issues, and preventive support coordination.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-border/70 bg-white/90 p-4 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Support Scope</p>
                        <ul className="mt-2 space-y-2 text-sm leading-6 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="mt-2 h-2 w-2 rounded-full bg-highlight" />
                            Warranty checks and product registration
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-2 h-2 w-2 rounded-full bg-highlight" />
                            Installation, breakdown, and complaint routing
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-2 h-2 w-2 rounded-full bg-highlight" />
                            Consumables planning and AMC renewals
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="order-1 flex w-full flex-col items-center gap-4 lg:order-2">
                    <div className="flex h-[280px] w-full max-w-[380px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-white/85 p-3 shadow-[0_24px_32px_rgba(15,30,70,0.18)] sm:h-[340px] md:h-[380px]">
                      <img
                        src={serviceHeroImage}
                        alt="Support coordination and printer planning environment"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="w-full max-w-[380px] rounded-2xl border border-border/70 bg-white/90 p-4 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Epson Support Numbers</p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-navy">
                        Toll Free: 1800 425 00 11 / 1860 3000 1600 / 1800 123 001 600
                      </p>
                      <p className="mt-2 text-sm font-semibold text-navy">WhatsApp Support: +91 96400 00333</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-highlight">Zestek Support</p>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">Extended warranty, AMC, and consumables</h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            Contact Zestek directly for AMC renewals, service coordination, and consumables planning.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-highlight">Extended Warranty / AMC</p>
            <h3 className="mt-3 text-2xl font-bold leading-tight text-navy">Zestek AMC Support</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              For AMC renewals, preventive maintenance schedules, and structured service coordination.
            </p>
            <div className="mt-6 space-y-3 rounded-2xl border border-border bg-muted/40 p-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Email</p>
                <a href="mailto:support@zestek.in" className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-highlight">
                  <Mail className="h-4 w-4 text-highlight" />
                  support@zestek.in
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Phone</p>
                <a href="tel:+919920905073" className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-highlight">
                  <Phone className="h-4 w-4 text-highlight" />
                  9920905073
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-highlight">Consumables Support</p>
            <h3 className="mt-3 text-2xl font-bold leading-tight text-navy">Ink &amp; other consumables</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              For original inks, toner, parts availability, and replenishment planning.
            </p>
            <div className="mt-6 space-y-3 rounded-2xl border border-border bg-muted/40 p-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Email</p>
                <a href="mailto:sales@zestek.in" className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-highlight">
                  <Mail className="h-4 w-4 text-highlight" />
                  sales@zestek.in
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Phone</p>
                <a href="tel:+919920909023" className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-highlight">
                  <Phone className="h-4 w-4 text-highlight" />
                  9920909023
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-highlight">Service Support</p>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">Talk to our support team for the right next step</h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            Use the official Epson links below for registration, warranty checks, installation requests, and driver
            downloads.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {officialSupportLinks.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-highlight/40 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-highlight/10 text-highlight">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
              <div className="mt-auto pt-6">
                <a
                  href={item.href}
                  target={item.opensExternally ? "_blank" : undefined}
                  rel={item.opensExternally ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-highlight/25 bg-highlight/5 px-4 py-2 text-sm font-semibold text-highlight transition-colors hover:border-highlight hover:bg-highlight hover:text-white"
                >
                  {item.actionLabel}
                  {item.opensExternally ? (
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  ) : (
                    <Phone className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  )}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <Footer />
    <WhatsAppButton />
  </div>
);

export default Contact;

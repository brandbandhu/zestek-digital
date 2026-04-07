import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InquiryForm from "@/components/InquiryForm";
import PageMeta from "@/components/PageMeta";
import { motion } from "framer-motion";
import serviceHeroImage from "../../assets/service/service1.jpg";
import serviceProcessImage from "../../assets/service/service 2.jpg";
import {
  ArrowRight,
  ClipboardCheck,
  ExternalLink,
  Mail,
  MessageCircle,
  Package,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const officialSupportLinks = [
  {
    title: "Register your products",
    description: "Activate eWarranty and keep ownership details ready for faster future support.",
    href: "tel:+919920905073",
    icon: ClipboardCheck,
    actionLabel: "Click Here",
    opensExternally: false,
  },
  {
    title: "Check & verify warranty status",
    description: "Review your warranty coverage before raising a complaint or installation request.",
    href: "tel:+919920905073",
    icon: ShieldCheck,
    actionLabel: "Click Here",
    opensExternally: false,
  },
  {
    title: "Installation or service request",
    description: "Call our service support team directly for installation, breakdown, and machine support requests.",
    href: "tel:+919920905073",
    icon: Wrench,
    actionLabel: "Call 9920905073",
    opensExternally: false,
  },
  {
    title: "Extended warranty / AMC",
    description: "Explore official Epson CoverPlus plans for longer coverage and planned support.",
    href: "tel:+919920905073",
    icon: Package,
    actionLabel: "Click Here",
    opensExternally: false,
  },
];

const supportChannels = [
  {
    id: "epson-official-support",
    eyebrow: "Service Support",
    title: "For breakdowns, technical issues, and machine performance",
    description:
      "Use Epson's official support channels for product registration, warranty verification, installation requests, and complaint logging.",
    details: [
      { label: "Toll Free Number", value: "1800 425 00 11 / 1860 3000 1600 / 1800 123 001 600" },
      { label: "WhatsApp Support", value: "+91 99209 05073", href: "https://wa.me/919920905073" },
    ],
    cta: {
      label: "Open Epson Support Connect",
      href: "https://www.epson.co.in/support-connect",
    },
  },
  {
    id: "service-amc",
    eyebrow: "AMC Support",
    title: "Contract renewals and preventive maintenance",
    description:
      "Get help with AMC renewals, scheduled preventive maintenance, and structured support coordination.",
    details: [
      { label: "Email", value: "support@zestek.in", href: "mailto:support@zestek.in" },
      { label: "Phone", value: "9920905073", href: "tel:+919920905073" },
    ],
  },
  {
    id: "consumables",
    eyebrow: "Consumables Support",
    title: "Ink, toner, parts, and supply planning",
    description:
      "Contact our consumables desk for original inks, toner, parts availability, and replenishment planning.",
    details: [
      { label: "Email", value: "sales@zestek.in", href: "mailto:sales@zestek.in" },
      { label: "Phone", value: "9920909023", href: "tel:+919920909023" },
    ],
  },
  {
    id: "issue-escalation",
    eyebrow: "Issue Escalation",
    title: "Need help on a pending issue?",
    description:
      "Use the escalation contact below if you need senior follow-up on an unresolved service situation.",
    details: [
      { label: "Email", value: "amit@zestek.in", href: "mailto:amit@zestek.in" },
      { label: "Phone", value: "9022316433", href: "tel:+919022316433" },
    ],
  },
];

const serviceProcess = [
  {
    step: "1",
    title: "Request raised",
    description: "Your complaint, installation, AMC, or consumables requirement is logged with the right support channel.",
  },
  {
    step: "2",
    title: "Issue diagnosed",
    description: "We review the machine, usage, and service context to route the request correctly.",
  },
  {
    step: "3",
    title: "Engineer assigned",
    description: "The case is assigned to the right technical resource or support coordinator for action.",
  },
  {
    step: "4",
    title: "Resolution / follow-up",
    description: "The issue is resolved, documented, and followed up until the support cycle is complete.",
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
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.98fr)] xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex rounded-full border border-highlight/20 bg-highlight/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-highlight">
              Service Support
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-navy md:text-5xl">
              Printer support for breakdowns, AMC, warranty checks, and consumables planning
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Get official Epson self-service links, direct Zestek AMC and consumables contacts, and a structured
              support flow for faster issue resolution.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+919920905073"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-navy/90"
              >
                Call 9920905073
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="#support-directory"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-navy hover:border-highlight hover:text-highlight"
              >
                View Support Contacts
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-border bg-background/95 p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-highlight/10 text-highlight">
                    <ClipboardCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Official Epson Support</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      Register products, verify warranty, and use official service actions before escalation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-border bg-background/95 p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-highlight/10 text-highlight">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Zestek Helpdesk</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      For AMC renewals, consumables planning, and unresolved cases, connect directly with our team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                <div className="grid min-h-[420px] items-center gap-6 bg-gradient-to-br from-[#eff6ff] via-white to-[#dff1ff] p-6 lg:grid-cols-[1.08fr_0.92fr]">
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

                  <div className="order-1 flex items-center justify-center lg:order-2">
                    <div className="flex h-[400px] w-full max-w-[380px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-white/85 p-3 shadow-[0_24px_32px_rgba(15,30,70,0.18)] md:h-[440px]">
                      <img
                        src={serviceHeroImage}
                        alt="Support coordination and printer planning environment"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-highlight">Official Actions</p>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">Everything you need before raising support</h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            Use the official Epson links below for registration, warranty checks, installation requests, and extended
            coverage.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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

    <section id="support-directory" className="section-padding bg-card scroll-mt-28">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-highlight">Direct Support Channels</p>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">Pick the right support line for faster response</h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            Use the exact contact below based on your request type so your issue reaches the right team without delay.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {supportChannels.map((channel, index) => (
            <motion.article
              key={channel.id}
              id={channel.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="scroll-mt-32 rounded-3xl border border-border bg-background p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-highlight">{channel.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-bold leading-tight text-navy">{channel.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{channel.description}</p>

              <div className="mt-6 space-y-3 rounded-2xl border border-border bg-muted/40 p-4">
                {channel.details.map((detail) => (
                  <div key={`${channel.id}-${detail.label}`}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-highlight">{detail.label}</p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={detail.href.startsWith("http") ? "_blank" : undefined}
                        rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
                        className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-highlight"
                      >
                        {detail.label.toLowerCase().includes("whatsapp") ? (
                          <MessageCircle className="h-4 w-4 text-highlight" />
                        ) : detail.label.toLowerCase().includes("email") ? (
                          <Mail className="h-4 w-4 text-highlight" />
                        ) : (
                          <Phone className="h-4 w-4 text-highlight" />
                        )}
                        {detail.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-semibold text-navy">{detail.value}</p>
                    )}
                  </div>
                ))}
              </div>

              {channel.cta ? (
                <a
                  href={channel.cta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-highlight hover:text-highlight/80"
                >
                  {channel.cta.label}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid items-stretch gap-10 lg:grid-cols-[0.97fr_1.03fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-highlight">Service Process</p>
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">How our support works</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Every support request follows a structured path so machine issues, AMC queries, and consumables needs can
              move from logging to resolution with better visibility.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {serviceProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-3xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-base font-bold text-primary-foreground">
                    {step.step}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl"
          >
            <div className="flex min-h-[20rem] w-full flex-1 items-center justify-center bg-white p-3 md:min-h-[24rem] lg:min-h-[32rem]">
              <img
                src={serviceProcessImage}
                alt="Printer support workflow and service coordination"
                className="h-full w-full rounded-[1.25rem] object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <InquiryForm />

    <Footer />
    <WhatsAppButton />
  </div>
);

export default Contact;

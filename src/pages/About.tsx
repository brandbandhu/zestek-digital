import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import aboutPrinterImage from "@/assets/hero-printer.jpg";
import { useLeadFormSubmission } from "@/hooks/useLeadFormSubmission";
import PageMeta from "@/components/PageMeta";
import { BadgeCheck, BriefcaseBusiness, Handshake, MapPin, Printer, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";

const differenceCards = [
  {
    icon: Handshake,
    title: "Solution-Oriented, Not Product-Oriented",
    body: "We do not sell machines. We provide the right print solution based on your volume, usage, and business goals.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Customer-First Approach",
    body: "Every recommendation is made keeping your cost, performance, and long-term benefit in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Honest & Ethical Business",
    body: "Transparent pricing, clear guidance, and no unnecessary upselling. We focus on building long-term relationships.",
  },
  {
    icon: Printer,
    title: "14+ Years of Industry Experience",
    body:
      "Deep understanding of print technologies, applications, and real business challenges across print shops, offices, and production environments.",
  },
  {
    icon: Wrench,
    title: "End-to-End Support",
    body: "From selection and installation to service and optimization, we stay with you beyond the sale.",
  },
  {
    icon: BadgeCheck,
    title: "Focused on Cost & Performance",
    body: "We help you reduce cost per print, improve efficiency, and get the best output from your investment.",
  },
];

const missionCards = [
  {
    tag: "Mission",
    title: "Reliable growth through better print technology",
    body:
      "Deliver dependable and cost-conscious print solutions backed by practical advice, correct product fit, and responsive service support.",
  },
  {
    tag: "Vision",
    title: "Be the print partner businesses trust first",
    body:
      "Build long-term customer relationships through strong product knowledge, honest guidance, and dependable support across every stage of ownership.",
  },
  {
    tag: "Core Focus",
    title: "Office, business, and production print solutions",
    body:
      "Epson EcoTank, Epson WorkForce, Konica Minolta production devices, and managed print support designed around real business requirements.",
  },
];

const whatWeDoCards = [
  {
    icon: Printer,
    title: "Product Guidance",
    body: "Shortlist the right printer based on output volume, speed, media usage, and operating cost.",
  },
  {
    icon: Wrench,
    title: "Deployment & Support",
    body: "Get help with setup, usage guidance, service coordination, AMC renewals, and consumables planning.",
  },
  {
    icon: MapPin,
    title: "Local Reach",
    body: "Regional coordination across Mumbai, MMR, Boisar, Khopoli, and nearby business locations.",
  },
];

const trustPoints = [
  "Trusted by 300+ businesses",
  "Serving Mumbai & MMR",
  "Real client installations",
];

const aboutStats: { value: string; label: string; icon: LucideIcon }[] = [
  {
    value: "14+",
    label: "Years guiding print decisions across office and production use cases.",
    icon: BadgeCheck,
  },
  {
    value: "300+",
    label: "Businesses supported with product-fit, deployment, and service planning.",
    icon: BriefcaseBusiness,
  },
  {
    value: "Mumbai & MMR",
    label: "Regional reach for coordination, support, and consumables continuity.",
    icon: MapPin,
  },
];

const About = () => {
  const { isSubmitting, handleSubmit } = useLeadFormSubmission({
    formId: "about-page-contact-form",
    formName: "About Page Contact Form",
    successMessage: "Your request has been sent. Our team will get in touch soon.",
    mapFields: (fields) => ({
      name: fields.name,
      company_name: fields.company_name,
      work_email: fields.work_email,
      phone_number: fields.phone_number,
      request_type: fields.request_type,
      message: fields.message,
    }),
  });

  return (
    <div className="min-h-screen bg-background">
    <PageMeta
      title="About Zestek Digital LLP | 14+ Years in Printer Solutions"
      description="Learn about Zestek Digital LLP, our customer-first print consulting approach, and 14+ years of Epson and Konica Minolta solution expertise."
      keywords={[
        "About Zestek Digital LLP",
        "printer solutions company Mumbai",
        "Epson partner Mumbai",
        "Konica Minolta partner Mumbai",
        "managed print consulting India",
      ]}
      canonicalPath="/about"
      image="/zestek-logo.png"
    />
    <Header />

    <section
      className="relative overflow-hidden -mt-16"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10, 25, 60, 0.75), rgba(10, 25, 60, 0.75)), url('https://zestek.vercel.app/assets/images/new/site-05-online.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "right center",
      }}
    >
      <div className="container mx-auto section-padding pt-16 md:pt-20">
        <span className="mt-4 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground">
          About Zestek
        </span>
        <h1 className="mt-4 max-w-3xl text-2xl font-extrabold text-primary-foreground md:text-3xl lg:text-4xl">
          <span className="block">Built on Experience.</span>
          <span className="block">Driven by the Right Intent.</span>
        </h1>
        <p className="mt-3 max-w-3xl text-xs leading-7 text-primary-foreground/80 md:text-sm">
          With over 14 years in the print industry, Zestek Digital LLP is built on a clear foundation of ethical
          business, practical solutions, and customer-first thinking.
        </p>
        <p className="mt-2 max-w-3xl text-xs leading-7 text-primary-foreground/80 md:text-sm">
          We do not believe in pushing products. We believe in understanding your business and recommending what truly
          works.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#about-contact" className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-navy">
            Discuss Your Requirement
          </a>
          <a href="tel:+919920909700" className="rounded-full border border-white/40 px-5 py-2 text-xs font-semibold text-white">
            Call / WhatsApp Now
          </a>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto grid gap-10 lg:grid-cols-[1.05fr_1fr]">
        <article className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid gap-4 p-4 md:grid-cols-[1.05fr_0.95fr]">
            <div className="h-72 overflow-hidden rounded-2xl md:h-full">
              <img
                src="https://zestek.vercel.app/assets/images/new/site-05-online.jpg"
                alt="Professional print setup and client installation environment supported by Zestek Digital LLP"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="grid gap-4">
              <div className="rounded-2xl bg-[linear-gradient(135deg,#12203c_0%,#1f3a69_52%,#35558e_100%)] p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/70">Print Partnership Snapshot</p>
                <h3 className="mt-3 font-display text-xl font-bold">
                  Advice, product fit, and service continuity built into one relationship.
                </h3>
                <p className="mt-3 text-sm text-white/80">
                  The goal is simple: match the right machine to the right workload and stay accountable after the
                  installation is done.
                </p>
              </div>
              <div className="h-48 overflow-hidden rounded-2xl border border-border bg-muted md:h-full">
                <img
                  src={aboutPrinterImage}
                  alt="Business printer setup representing Zestek Digital LLP support and deployment expertise"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Built for Long-Term Partnerships</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {trustPoints.map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-background px-4 py-4 text-sm font-medium text-navy">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-muted/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Why Businesses Stay With Us</p>
              <h3 className="mt-2 font-display font-bold text-navy">
                Practical advice before the sale. Dependable support after installation.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We stay involved from selection and setup to service, consumables, and performance guidance so your print
                investment keeps delivering value.
              </p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {aboutStats.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="rounded-2xl border border-border bg-background p-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-highlight/15 text-highlight">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 font-display text-xl font-bold text-navy">{item.value}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-border bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">What Makes Us Different</p>
          <h2 className="section-title mt-2 text-2xl md:text-3xl">We recommend what truly works for your business.</h2>
          <p className="section-subtitle mt-3">
            Our approach stays focused on the right fit for your workload, cost, goals, and long-term print performance.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {differenceCards.map((card) => {
              const Icon = card.icon;

              return (
                <div key={card.title} className="rounded-2xl border border-border bg-muted/60 p-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-background text-highlight">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display font-bold text-navy">{card.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{card.body}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            When you choose Zestek, you are not just buying a printer. You are choosing a long-term print partner.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-navy">Discuss your requirement</span>
            <div className="flex flex-wrap gap-3">
              <a href="#about-contact" className="rounded-full bg-navy px-5 py-2 text-xs font-semibold text-primary-foreground">
                Discuss Your Requirement
              </a>
              <a href="tel:+919920909700" className="rounded-full border border-border px-5 py-2 text-xs font-semibold text-navy">
                Call / WhatsApp Now
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="container mx-auto">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">How We Work</p>
          <h2 className="section-title mt-2 text-2xl md:text-3xl">
            Built around practical advice, honest guidance, and dependable support.
          </h2>
          <p className="section-subtitle mt-3">
            From product fit to service coordination, we keep every step aligned with long-term customer value.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {missionCards.map((card) => (
            <div key={card.tag} className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">{card.tag}</p>
              <h3 className="mt-3 font-display font-bold text-navy">{card.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding pt-0" id="what-we-do">
      <div className="container mx-auto">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">What We Do</p>
          <h2 className="section-title mt-2 text-2xl md:text-3xl">
            Support across selection, deployment, and ongoing service.
          </h2>
          <p className="section-subtitle mt-3">
            We help businesses choose, install, and keep the right print systems performing reliably.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {whatWeDoCards.map((card) => {
            const Icon = card.icon;

            return (
              <div key={card.title} className="rounded-2xl border border-border bg-card p-5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-highlight/15 text-highlight">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display font-bold text-navy">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{card.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <TestimonialsSection />

    <section className="section-padding pt-0" id="about-contact">
      <div className="container mx-auto grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-2xl border border-border bg-card p-6">
          <span className="inline-flex items-center rounded-full bg-highlight/15 px-3 py-1 text-xs font-semibold text-highlight">
            Talk to our experts for the right solution & best pricing
          </span>
          <h2 className="mt-4 text-2xl font-bold text-navy md:text-3xl">Need help planning your next print setup?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Talk to us for sales guidance and best pricing. We will guide you to the right next step.
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-border bg-muted/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Sales</p>
              <p className="mt-2 text-sm">
                <a href="tel:+919920909700" className="font-semibold text-navy">
                  9920909700
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:connect@zestek.in">connect@zestek.in</a>
              </p>
            </div>
          </div>
        </article>

        <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-border bg-card p-6">
          <h3 className="font-display text-xl font-bold text-navy">Talk to our experts for the right solution & best pricing</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold text-navy">Name</label>
              <input name="name" className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" required />
            </div>
            <div>
              <label className="text-xs font-semibold text-navy">Company Name</label>
              <input name="company_name" className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" required />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold text-navy">Work Email</label>
              <input name="work_email" type="email" className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" required />
            </div>
            <div>
              <label className="text-xs font-semibold text-navy">Phone Number</label>
              <input name="phone_number" type="tel" className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" required />
            </div>
          </div>
          <div className="grid gap-3">
            <div>
              <label className="text-xs font-semibold text-navy">Request Type</label>
              <select name="request_type" className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" required>
                <option value="">Select request type</option>
                <option>New Printer Quote</option>
                <option>Service Request</option>
                <option>AMC / Contract Renewal</option>
                <option>Free Print Audit</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-navy">Message / Requirements</label>
            <textarea
              name="message"
              rows={3}
              placeholder="Share your requirement or support concern."
              className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-navy px-5 py-2 text-xs font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </section>

    <Footer />
  </div>
  );
};

export default About;

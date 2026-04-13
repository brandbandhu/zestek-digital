import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import { BadgeCheck, BriefcaseBusiness, Handshake, MapPin, Printer, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";
import { useInView } from "framer-motion";
import WebsiteInquiryForm from "@/components/WebsiteInquiryForm";
import aboutHeroImage from "../../assets/about us/2.jpg";
import aboutWorkspaceImage from "../../assets/about us/4.jpg";
import aboutClientSupportImage from "../../assets/about us/2.jpg";
import whyChooseUsPageImage from "../../assets/why choose us.png";

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

type AboutStat = {
  value: string;
  label: string;
  icon: LucideIcon;
  animatedValue?: {
    end: number;
    suffix?: string;
    durationMs?: number;
  };
};

const aboutStats: AboutStat[] = [
  {
    value: "14+",
    label: "Years guiding print decisions across office and production use cases.",
    icon: BadgeCheck,
    animatedValue: {
      end: 14,
      suffix: "+",
      durationMs: 1400,
    },
  },
  {
    value: "300+",
    label: "Businesses supported with product-fit, deployment, and service planning.",
    icon: BriefcaseBusiness,
    animatedValue: {
      end: 300,
      suffix: "+",
      durationMs: 1800,
    },
  },
  {
    value: "Mumbai & MMR",
    label: "Regional reach for coordination, support, and consumables continuity.",
    icon: MapPin,
  },
];

type AnimatedStatValueProps = {
  end: number;
  suffix?: string;
  durationMs?: number;
  className?: string;
};

const AnimatedStatValue = ({ end, suffix = "", durationMs = 1400, className }: AnimatedStatValueProps) => {
  const counterRef = useRef<HTMLParagraphElement | null>(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.7 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    let frameId = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / durationMs, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(end * easedProgress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [durationMs, end, isInView]);

  return (
    <p ref={counterRef} className={className}>
      {count}
      {suffix}
    </p>
  );
};

const About = () => {
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
          `linear-gradient(rgba(10, 25, 60, 0.75), rgba(10, 25, 60, 0.75)), url('${aboutHeroImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
      }}
    >
      <div className="container mx-auto section-padding pt-16 md:pt-20">
        <span className="mt-4 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground">
          About Zestek
        </span>
        <h1 className="mt-4 max-w-3xl text-2xl font-extrabold text-primary-foreground md:text-3xl lg:text-4xl">
          <span className="block">Built on Trust.</span>
          <span className="block">Driven by Solutions.</span>
        </h1>
        <p className="mt-3 max-w-3xl text-xs leading-7 text-primary-foreground/80 md:text-sm">
          With over 14 years of hands-on experience in the print industry, Zestek Digital LLP is built on a simple
          belief: do business the right way. We focus on ethical practices, practical solutions, and putting the
          customer&apos;s needs first.
        </p>
        <p className="mt-2 max-w-3xl text-xs leading-7 text-primary-foreground/80 md:text-sm">
          We don&apos;t just sell machines. We understand your business, recommend the right solution, and support you
          long-term to ensure performance, cost efficiency, and reliability.
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
                  src={aboutClientSupportImage}
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
                    src={aboutWorkspaceImage}
                    alt="Business workspace representing Zestek Digital LLP guidance, consultation, and print planning"
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
                    {item.animatedValue ? (
                      <AnimatedStatValue
                        end={item.animatedValue.end}
                        suffix={item.animatedValue.suffix}
                        durationMs={item.animatedValue.durationMs}
                        className="mt-4 font-display text-xl font-bold text-navy"
                      />
                    ) : (
                      <p className="mt-4 font-display text-xl font-bold text-navy">{item.value}</p>
                    )}
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
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-muted">
            <img
              src={whyChooseUsPageImage}
              alt="Why choose Zestek print solutions"
              className="h-52 w-full object-cover"
              loading="lazy"
            />
          </div>
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

    <WebsiteInquiryForm
      sectionId="about-contact"
      formId="about-page-contact-form"
      formName="About Page Contact Form"
      successMessage="Your request has been sent. Our team will get in touch soon."
    />

    <Footer />
  </div>
  );
};

export default About;


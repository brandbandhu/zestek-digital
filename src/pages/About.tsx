import { type FormEvent, useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLeadFormSubmission } from "@/hooks/useLeadFormSubmission";
import PageMeta from "@/components/PageMeta";
import { BadgeCheck, BriefcaseBusiness, Handshake, MapPin, Printer, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";
import { useInView } from "framer-motion";
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

const monthlyVolumeRangeOptions = ["1K-5K", "5K-20K", "20K-50K", "50K+"] as const;

const monthlyVolumeGroups = [
  {
    key: "a4",
    title: "A4",
    description: "Regular office prints, invoices, reports, and everyday business pages.",
  },
  {
    key: "a3",
    title: "A3 / A3+",
    description: "Larger documents, drawings, posters, presentations, and higher-coverage jobs.",
  },
  {
    key: "speciality",
    title: "Photo Paper / Speciality Paper",
    description: "Photo paper, art paper, sticker media, textured sheets, and custom paper jobs.",
  },
] as const;

const currentMachineTypeOptions = ["Inkjet", "Laser", "Copier", "Not using"] as const;

const currentBrandOptions = ["HP", "Canon", "Epson", "Konica", "Other"] as const;

const requirementTypeOptions = ["Purchase", "Rental (MPS - only for corporate)"] as const;

const usageTypeOptions = [
  "Office",
  "Print Shop / Photocopy Centre",
  "Corporate / MSME",
  "Education / Publication",
  "Other",
] as const;

const buyingTimelineOptions = ["Immediate", "Within 1 Month", "1-3 Months", "Just Exploring"] as const;

const whyChooseUsPoints = [
  "Trusted by 300+ Businesses",
  "Same-day Demo / Delivery Available in Mumbai",
  "Strong Service & Support Team",
] as const;

const inquiryRequiredFields = [
  "name",
  "phone_number",
  "current_machine_type",
  "current_brand",
  "requirement_type",
  "usage_type",
  "buying_timeline",
  "business_location",
] as const;

type InquiryRequiredField = (typeof inquiryRequiredFields)[number];

const inquiryRequiredFieldMessages: Record<InquiryRequiredField, string> = {
  name: "Please enter your name.",
  phone_number: "Please enter a valid 10-digit phone number.",
  current_machine_type: "Please select the current machine type.",
  current_brand: "Please select the current brand.",
  requirement_type: "Please select requirement type.",
  usage_type: "Please select usage type.",
  buying_timeline: "Please select buying timeline.",
  business_location: "Please enter city, location, or pincode.",
};

const phoneNumberPattern = /^\d{10}$/;

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
  const { isSubmitting, handleSubmit } = useLeadFormSubmission({
    formId: "about-page-contact-form",
    formName: "About Page Contact Form",
    successMessage: "Your request has been sent. Our team will get in touch soon.",
    mapFields: (fields) => ({
      name: fields.name,
      monthly_volume_a4_color: fields.monthly_volume_a4_color,
      monthly_volume_a4_monochrome: fields.monthly_volume_a4_monochrome,
      monthly_volume_a3_color: fields.monthly_volume_a3_color,
      monthly_volume_a3_monochrome: fields.monthly_volume_a3_monochrome,
      monthly_volume_speciality_color: fields.monthly_volume_speciality_color,
      monthly_volume_speciality_monochrome: fields.monthly_volume_speciality_monochrome,
      phone_number: fields.phone_number,
      current_machine_type: fields.current_machine_type,
      current_brand: fields.current_brand,
      requirement_type: fields.requirement_type,
      usage_type: fields.usage_type,
      usage_type_other: fields.usage_type_other,
      buying_timeline: fields.buying_timeline,
      business_location: fields.business_location,
      message: fields.message,
    }),
  });
  const [formErrors, setFormErrors] = useState<Partial<Record<InquiryRequiredField, string>>>({});

  const validateRequiredField = (field: InquiryRequiredField, value: string) => {
    if (!value) {
      return inquiryRequiredFieldMessages[field];
    }

    if (field === "phone_number" && !phoneNumberPattern.test(value)) {
      return inquiryRequiredFieldMessages.phone_number;
    }

    return "";
  };

  const validateInquiryForm = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const errors: Partial<Record<InquiryRequiredField, string>> = {};

    inquiryRequiredFields.forEach((field) => {
      const rawValue = String(data.get(field) || "").trim();
      const value = field === "phone_number" ? rawValue.replace(/\D/g, "") : rawValue;
      const errorMessage = validateRequiredField(field, value);

      if (errorMessage) {
        errors[field] = errorMessage;
      }
    });

    return errors;
  };

  const handleAboutFormInput = (event: FormEvent<HTMLFormElement>) => {
    const target = event.target;

    if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement)) {
      return;
    }

    const targetName = target.name;

    if (!inquiryRequiredFields.includes(targetName as InquiryRequiredField)) {
      return;
    }

    const field = targetName as InquiryRequiredField;

    if (field === "phone_number" && target instanceof HTMLInputElement) {
      const onlyDigits = target.value.replace(/\D/g, "").slice(0, 10);
      target.value = onlyDigits;
    }

    const normalizedValue = field === "phone_number" ? target.value.replace(/\D/g, "") : target.value.trim();
    const errorMessage = validateRequiredField(field, normalizedValue);

    setFormErrors((prev) => {
      const next = { ...prev };

      if (errorMessage) {
        next[field] = errorMessage;
      } else {
        delete next[field];
      }

      return next;
    });
  };

  const handleAboutFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const errors = validateInquiryForm(form);

    if (Object.keys(errors).length > 0) {
      event.preventDefault();
      setFormErrors(errors);

      const firstInvalidField = inquiryRequiredFields.find((field) => errors[field]);
      const firstInvalidElement = firstInvalidField
        ? (form.elements.namedItem(firstInvalidField) as HTMLElement | null)
        : null;

      firstInvalidElement?.focus();
      return;
    }

    setFormErrors({});
    await handleSubmit(event);
  };

  const fieldClassName = (field: InquiryRequiredField) =>
    `mt-2 w-full rounded-lg border bg-background px-3 py-2 text-sm ${
      formErrors[field] ? "border-destructive focus:ring-destructive" : "border-input"
    }`;

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

    <section className="section-padding pt-8 md:pt-10 lg:pt-12" id="about-contact">
      <div className="container mx-auto mt-8 md:mt-10 max-w-5xl">
        <form
          onSubmit={handleAboutFormSubmit}
          onInput={handleAboutFormInput}
          noValidate
          className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 md:p-7"
        >
          <div className="rounded-2xl border border-border bg-[linear-gradient(120deg,#ffffff_0%,#f6f9ff_100%)] p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Website Inquiry Form</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-navy">
              Talk to our experts for the right solution & best pricing
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Focused consultation for Epson WorkForce and Konica Minolta requirements.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-highlight/20 bg-white px-3 py-1 text-xs font-semibold text-navy">
                Epson WorkForce
              </span>
              <span className="rounded-full border border-highlight/20 bg-white px-3 py-1 text-xs font-semibold text-navy">
                Konica Minolta
              </span>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-border bg-background p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Section 1</p>
                <h4 className="mt-1 font-display text-xl font-bold text-navy">Quick Lead Capture</h4>
              </div>
              <p className="text-xs font-semibold text-muted-foreground">Required fields marked with *</p>
            </div>
            {Object.keys(formErrors).length > 0 ? (
              <p className="mt-3 rounded-lg border border-destructive/20 bg-destructive/10 px-3 py-2 text-xs font-semibold text-destructive">
                Please correct the highlighted fields before submitting.
              </p>
            ) : null}

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold text-navy">Name *</label>
                <input
                  name="name"
                  aria-invalid={Boolean(formErrors.name)}
                  aria-describedby={formErrors.name ? "about-error-name" : undefined}
                  className={fieldClassName("name")}
                  required
                />
                {formErrors.name ? (
                  <p id="about-error-name" className="mt-1 text-xs font-medium text-destructive">
                    {formErrors.name}
                  </p>
                ) : null}
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Phone Number *</label>
                <input
                  name="phone_number"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  pattern="\d{10}"
                  placeholder="Enter mobile number"
                  aria-invalid={Boolean(formErrors.phone_number)}
                  aria-describedby={formErrors.phone_number ? "about-error-phone" : undefined}
                  className={fieldClassName("phone_number")}
                  required
                />
                {formErrors.phone_number ? (
                  <p id="about-error-phone" className="mt-1 text-xs font-medium text-destructive">
                    {formErrors.phone_number}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Monthly Print Volume</p>
              <div className="mt-3 grid gap-3 lg:grid-cols-3">
                {monthlyVolumeGroups.map((group) => (
                  <div key={group.key} className="rounded-xl border border-border bg-card p-4">
                    <p className="font-display text-xl font-bold text-navy">{group.title}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{group.description}</p>
                    <div className="mt-4 grid gap-3">
                      <div>
                        <label className="text-xs font-semibold text-navy">Color</label>
                        <select
                          name={`monthly_volume_${group.key}_color`}
                          className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                        >
                          <option value="">Select range</option>
                          {monthlyVolumeRangeOptions.map((option) => (
                            <option key={`${group.key}-color-${option}`} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-navy">Monochrome</label>
                        <select
                          name={`monthly_volume_${group.key}_monochrome`}
                          className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                        >
                          <option value="">Select range</option>
                          {monthlyVolumeRangeOptions.map((option) => (
                            <option key={`${group.key}-mono-${option}`} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <details open className="mt-5 rounded-2xl border border-border bg-background p-5">
            <summary className="cursor-pointer list-none">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Section 2</p>
              <h4 className="mt-1 font-display text-xl font-bold text-navy">Detailed Requirements</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Share your current setup and buying intent to get a precise recommendation.
              </p>
            </summary>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Current Setup</p>
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Current Machine Type *</label>
                <select
                  name="current_machine_type"
                  aria-invalid={Boolean(formErrors.current_machine_type)}
                  aria-describedby={formErrors.current_machine_type ? "about-error-machine-type" : undefined}
                  className={fieldClassName("current_machine_type")}
                  required
                >
                  <option value="">Select current machine</option>
                  {currentMachineTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {formErrors.current_machine_type ? (
                  <p id="about-error-machine-type" className="mt-1 text-xs font-medium text-destructive">
                    {formErrors.current_machine_type}
                  </p>
                ) : null}
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Current Brand *</label>
                <select
                  name="current_brand"
                  aria-invalid={Boolean(formErrors.current_brand)}
                  aria-describedby={formErrors.current_brand ? "about-error-brand" : undefined}
                  className={fieldClassName("current_brand")}
                  required
                >
                  <option value="">Select current brand</option>
                  {currentBrandOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {formErrors.current_brand ? (
                  <p id="about-error-brand" className="mt-1 text-xs font-medium text-destructive">
                    {formErrors.current_brand}
                  </p>
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Requirement Details</p>
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Requirement Type *</label>
                <select
                  name="requirement_type"
                  aria-invalid={Boolean(formErrors.requirement_type)}
                  aria-describedby={formErrors.requirement_type ? "about-error-requirement-type" : undefined}
                  className={fieldClassName("requirement_type")}
                  required
                >
                  <option value="">Select requirement type</option>
                  {requirementTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {formErrors.requirement_type ? (
                  <p id="about-error-requirement-type" className="mt-1 text-xs font-medium text-destructive">
                    {formErrors.requirement_type}
                  </p>
                ) : null}
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Usage Type *</label>
                <select
                  name="usage_type"
                  aria-invalid={Boolean(formErrors.usage_type)}
                  aria-describedby={formErrors.usage_type ? "about-error-usage-type" : undefined}
                  className={fieldClassName("usage_type")}
                  required
                >
                  <option value="">Select usage type</option>
                  {usageTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {formErrors.usage_type ? (
                  <p id="about-error-usage-type" className="mt-1 text-xs font-medium text-destructive">
                    {formErrors.usage_type}
                  </p>
                ) : null}
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Buying Timeline *</label>
                <select
                  name="buying_timeline"
                  aria-invalid={Boolean(formErrors.buying_timeline)}
                  aria-describedby={formErrors.buying_timeline ? "about-error-buying-timeline" : undefined}
                  className={fieldClassName("buying_timeline")}
                  required
                >
                  <option value="">Select buying timeline</option>
                  {buyingTimelineOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {formErrors.buying_timeline ? (
                  <p id="about-error-buying-timeline" className="mt-1 text-xs font-medium text-destructive">
                    {formErrors.buying_timeline}
                  </p>
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-navy">Other (Mention)</label>
                <input
                  name="usage_type_other"
                  placeholder="Mention only if you selected Other"
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              <div className="sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Additional Fields</p>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-navy">City / Location / Pincode *</label>
                <input
                  name="business_location"
                  placeholder="Mumbai, MMR, Boisar, Khopoli, Navi Mumbai, 400001, etc."
                  aria-invalid={Boolean(formErrors.business_location)}
                  aria-describedby={formErrors.business_location ? "about-error-location" : undefined}
                  className={fieldClassName("business_location")}
                  required
                />
                {formErrors.business_location ? (
                  <p id="about-error-location" className="mt-1 text-xs font-medium text-destructive">
                    {formErrors.business_location}
                  </p>
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-navy">Message / Specific Requirement</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Share your print requirement (optional)"
                  className="mt-2 min-h-[92px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
            </div>
          </details>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-navy px-5 py-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Get Best Price & Demo"}
            </button>
            <a
              href="https://wa.me/919920909700?text=Hi%20Zestek%2C%20I%20need%20help%20with%20a%20printer%20requirement."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-xs font-semibold uppercase tracking-widest text-navy transition hover:border-highlight hover:text-highlight"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-5 rounded-2xl border border-highlight/20 bg-[#fff8eb] p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Why Choose Us?</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {whyChooseUsPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-white bg-white/90 p-3 text-sm font-medium text-navy">
                  {point}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm font-semibold text-navy">
              Reduce Your Printing Cost by Up to 25% - Get Free Consultation
            </p>
          </div>
        </form>
      </div>
    </section>

    <Footer />
  </div>
  );
};

export default About;


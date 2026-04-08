import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import { officeShowroomImage, printFloorImage, printWorkspaceImage } from "@/lib/siteVisuals";
import corporateSolutionsPageImage from "../../assets/corporate solution.jpg";
import {
  BarChart3,
  Boxes,
  Building2,
  ClipboardList,
  Droplets,
  Factory,
  FileText,
  GraduationCap,
  Printer,
  Scale,
  Settings2,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const keyBenefits: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Cost Optimization",
    body: "Reduce cost per print with better device selection, usage tracking, and optimized consumables planning.",
    icon: BarChart3,
  },
  {
    title: "Operational Efficiency",
    body: "Minimize downtime and improve workflow with structured service support and proactive maintenance.",
    icon: Settings2,
  },
  {
    title: "Visibility and Control",
    body: "Track usage across departments and gain insights into print volumes, cost allocation, and optimization opportunities.",
    icon: ClipboardList,
  },
  {
    title: "Simplified Management",
    body: "Single point of contact for machines, service, and supplies without managing multiple vendors.",
    icon: Boxes,
  },
  {
    title: "Reliability and Continuity",
    body: "Ensure uninterrupted printing with planned consumables and SLA-based service support.",
    icon: ShieldCheck,
  },
];

const managedAreas: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Hardware Deployment",
    body: "Right-fit machines based on your usage pattern and monthly print volume.",
    icon: Printer,
  },
  {
    title: "Service and Maintenance",
    body: "Preventive maintenance and structured service support to reduce disruption.",
    icon: Wrench,
  },
  {
    title: "Consumables Management",
    body: "Timely supply of ink, toner, and parts to keep operations uninterrupted.",
    icon: Droplets,
  },
  {
    title: "Usage Monitoring",
    body: "Continuous monitoring to optimize output, usage behavior, and cost control.",
    icon: BarChart3,
  },
];

const modelSteps = [
  {
    step: "01",
    title: "Assessment",
    body: "Evaluate your current print setup, monthly volume, and operating cost.",
  },
  {
    step: "02",
    title: "Recommendation",
    body: "Suggest optimized devices, process flow, and service structure.",
  },
  {
    step: "03",
    title: "Deployment",
    body: "Install and configure the solution with minimal workflow disruption.",
  },
  {
    step: "04",
    title: "Ongoing Management",
    body: "Deliver continuous monitoring, service support, and consumables planning.",
  },
];

const slaPoints = [
  "Defined Service Level Agreements (SLAs)",
  "Dedicated support coordination",
  "Preventive maintenance scheduling",
  "Faster issue resolution through structured routing",
];

const costPoints = [
  "Fixed or predictable cost per print",
  "Reduced CAPEX burden",
  "Better budgeting and cost allocation",
];

const idealFor: { label: string; icon: LucideIcon }[] = [
  { label: "Corporate offices", icon: Building2 },
  { label: "Multi-branch organizations", icon: Building2 },
  { label: "Education institutions", icon: GraduationCap },
  { label: "Legal and documentation firms", icon: Scale },
  { label: "High-volume printing environments", icon: Factory },
];

const whyZestekPoints = [
  "14+ years of print industry experience",
  "Ethical and solution-oriented approach",
  "Customer-first execution",
  "Expertise across Epson and Konica Minolta solutions",
  "Strong service and support network across Mumbai and MMR",
];

const savingsPoints = ["Cost per print", "Monthly expenditure", "Operational efficiency"];

const challengePoints = [
  "High printing costs",
  "Frequent breakdowns",
  "Multiple vendor dependency",
  "Lack of cost visibility",
  "Inefficient device usage",
];

const mpsQuickHighlights: { title: string; icon: LucideIcon }[] = [
  { title: "Centralized Control", icon: ClipboardList },
  { title: "Predictable Costing", icon: BarChart3 },
  { title: "Better Uptime", icon: ShieldCheck },
];

const mpsCoverage: { label: string; icon: LucideIcon }[] = [
  { label: "Devices", icon: Printer },
  { label: "Service", icon: Wrench },
  { label: "Consumables", icon: Droplets },
];

const brochureUrl =
  "https://mediaserver.goepson.com/ImConvServlet/imconv/c97c6aae0a9bc4083bc00bceba5150c75485311f/original?assetDescr=BIJ-Epson-Solutions-Suite";

const CorporateSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Corporate Solutions / MPS | Zestek Managed Print Services"
        description="Optimize print costs with Zestek Managed Print Services: hardware planning, SLA-led support, consumables management, and ongoing print optimization."
        keywords={[
          "managed print services Mumbai",
          "corporate printer solutions",
          "print cost optimization India",
          "MPS provider Mumbai",
          "office print fleet management",
        ]}
        canonicalPath="/corporate-solutions"
        image="/zestek-logo.png"
      />
      <Header />

      <section
        className="-mt-16 pb-8"
        style={{
          backgroundImage:
            `linear-gradient(90deg, rgba(18, 32, 60, 0.93) 0%, rgba(34, 55, 95, 0.88) 44%, rgba(73, 87, 120, 0.45) 72%, rgba(230, 236, 244, 0.08) 100%), url('${corporateSolutionsPageImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 pb-12 pt-16 md:pt-20">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground">
              Corporate Solutions / MPS
            </span>
            <h1 className="mt-4 text-3xl font-extrabold text-primary-foreground md:text-4xl lg:text-5xl">
              Managed Print Services for Cost Control, Efficiency, and Operational Reliability
            </h1>
            <p className="mt-4 max-w-3xl text-sm text-primary-foreground/80 md:text-base">
              Zestek Managed Print Services integrates hardware, service, and consumables into a structured solution to
              optimize print costs, streamline operations, and ensure consistent performance across departments.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact#sales-inquiry" className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-navy">
                Request an MPS Plan
              </Link>
              <a
                href={brochureUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/40 px-5 py-2 text-xs font-semibold text-primary-foreground"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-10">
        <div className="container mx-auto grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <article className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-6 md:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">What Is MPS</p>
              <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">What is Managed Print Services?</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                Managed Print Services (MPS) is a comprehensive approach to managing your complete print environment,
                covering devices, service support, and consumables under one optimized framework.
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                Instead of handling multiple vendors and unpredictable costs, MPS gives centralized control, predictable
                expenses, and improved operational efficiency.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {mpsQuickHighlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="rounded-2xl border border-border bg-muted/50 p-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-background text-highlight shadow-sm">
                        <Icon className="h-5 w-5" />
                      </span>
                      <p className="mt-3 text-sm font-semibold text-navy">{item.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-highlight/20 bg-[linear-gradient(135deg,rgba(255,247,231,0.95)_0%,rgba(245,248,255,0.98)_100%)] p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-highlight">MPS Coverage</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    One structured print plan covering deployment, service routing, and consumable continuity.
                  </p>
                </div>
                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-highlight shadow-sm sm:inline-flex">
                  <FileText className="h-5 w-5" />
                </span>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {mpsCoverage.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="rounded-2xl border border-white/80 bg-white/90 p-4">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-highlight/10 text-highlight">
                        <Icon className="h-4 w-4" />
                      </span>
                      <p className="mt-3 text-sm font-semibold text-navy">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>

          <div className="h-full overflow-hidden rounded-3xl border border-border bg-card">
            <div className="h-72 overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(232,241,255,0.88)_58%,rgba(183,206,234,0.45)_100%)] sm:h-80 md:h-[28rem] lg:h-full">
              <img
                src={corporateSolutionsPageImage}
                alt="Corporate managed print services planning and business print workflow support"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Key Benefits</p>
            <h2 className="mt-2 text-2xl font-bold text-navy md:text-3xl">Why Choose Managed Print Services?</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {keyBenefits.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border border-border bg-card p-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-highlight/15 text-highlight">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{item.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">What We Manage</p>
            <h2 className="mt-2 text-2xl font-bold text-navy md:text-3xl">Comprehensive Print Management</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {managedAreas.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-highlight/15 text-highlight">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-navy">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">How It Works</p>
            <h2 className="mt-2 text-2xl font-bold text-navy md:text-3xl">How Our MPS Model Works</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {modelSteps.map((item) => (
              <article key={item.step} className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">{item.step}</p>
                <h3 className="mt-3 font-display text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">SLA and Support Structure</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-navy">Structured Service and Support</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {slaPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Cost Structure</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-navy">Predictable and Transparent Pricing</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {costPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-semibold text-navy">No hidden costs and no unexpected breakdown expenses.</p>
          </article>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Ideal For</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-navy">Who is MPS ideal for?</h3>
            <div className="mt-4 grid gap-3">
              {idealFor.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3 rounded-xl border border-border bg-muted/50 px-4 py-3">
                    <Icon className="h-4 w-4 text-highlight" />
                    <span className="text-sm text-navy">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="rounded-3xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Why Zestek</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-navy">Why Zestek for Managed Print Services?</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {whyZestekPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto rounded-3xl border border-border bg-card p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">ROI and Savings</p>
          <h2 className="mt-2 text-2xl font-bold text-navy md:text-3xl">Measure Your Savings Before You Invest</h2>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground md:text-base">
            Understand your current print cost and compare it with an optimized MPS solution.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {savingsPoints.map((point) => (
              <div key={point} className="rounded-xl border border-border bg-muted/50 px-4 py-4 text-sm font-medium text-navy">
                {point}
              </div>
            ))}
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-muted/40">
            <img
              src={printWorkspaceImage}
              alt="Print management workflow and business operations planning"
              className="h-56 w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-6">
            <Link to="/roi-calculator" className="rounded-full bg-navy px-5 py-2 text-xs font-semibold text-primary-foreground">
              Open ROI Calculator
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto rounded-[30px] bg-[linear-gradient(135deg,#0f2042_0%,#1f4f92_100%)] p-6 text-primary-foreground md:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#ffd58a]">Final Call To Action</p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">Take Control of Your Printing Environment</h2>
          <p className="mt-3 max-w-3xl text-sm text-primary-foreground/85 md:text-base">
            Partner with Zestek to streamline print operations, reduce costs, and ensure consistent performance.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact#sales-inquiry" className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-navy">
              Request an MPS Plan
            </Link>
            <Link to="/contact#sales-inquiry" className="rounded-full border border-white/40 px-5 py-2 text-xs font-semibold text-white">
              Talk to an Expert
            </Link>
            <a
              href="https://wa.me/919920909700?text=Hi%20Zestek%2C%20I%20want%20managed%20print%20services%20details."
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/40 px-5 py-2 text-xs font-semibold text-white"
            >
              Call / WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Common Challenges We Solve</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {challengePoints.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card px-4 py-4 text-sm font-medium text-navy">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateSolutions;

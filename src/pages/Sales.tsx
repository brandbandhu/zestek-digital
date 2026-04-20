import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import WebsiteInquiryForm from "@/components/WebsiteInquiryForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Mail, MessageCircle, Phone, ShieldCheck } from "lucide-react";

const salesChannels = [
  {
    label: "Call sales",
    value: "9920909700",
    href: "tel:+919920909700",
    icon: Phone,
  },
  {
    label: "Email sales",
    value: "connect@zestek.in",
    href: "mailto:connect@zestek.in",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "Chat for best price",
    href: "https://wa.me/919920909700?text=Hi%20Zestek%2C%20I%20need%20help%20with%20a%20printer%20requirement.",
    icon: MessageCircle,
    external: true,
  },
] as const;

const salesHighlights = [
  "Quote, demo, and product-fit guidance for Epson and Konica Minolta requirements.",
  "Shortlisting support based on print volume, media type, paper size, and business use case.",
  "Direct coordination for home office, business inkjet, photocopy, production, and MPS needs.",
] as const;

const solutionTracks = [
  "Epson EcoTank for home and office",
  "Epson WorkForce for business teams",
  "Photocopier and commercial print setups",
  "Konica Minolta production machines",
  "Corporate and MPS consultations",
] as const;

const Sales = () => (
  <div className="min-h-screen bg-background">
    <PageMeta
      title="Sales Inquiry | Zestek Digital LLP | Printer Quotes, Demos & Product Guidance"
      description="Talk to Zestek sales for pricing, demos, product-fit guidance, and printer recommendations across Epson, Konica Minolta, commercial, and corporate print setups."
      keywords={[
        "Zestek sales inquiry",
        "printer quote Mumbai",
        "printer demo Mumbai",
        "Epson sales Mumbai",
        "Konica Minolta sales Mumbai",
        "commercial printer consultation",
      ]}
      canonicalPath="/contact"
      image="/zestek-logo.png"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Zestek Sales Inquiry",
        url: "https://zestek.in/contact",
        mainEntity: {
          "@type": "Organization",
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
        },
      }}
    />
    <Header />

    <section className="-mt-16 overflow-hidden bg-[linear-gradient(135deg,#0f2042_0%,#1f4f92_56%,#eef4fb_100%)] pb-10 pt-16 text-primary-foreground md:pb-14 md:pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <span className="inline-flex items-center rounded-full bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/90">
            Sales Inquiry
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            Talk to Zestek for the right printer, best pricing, and next-step guidance
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/82 md:text-base">
            Use this page for product consultation, quote requests, demos, and business-fit recommendations. If you are
            comparing Epson, Konica Minolta, commercial print, or corporate setups, our sales team will help you
            shortlist the right path.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#sales-inquiry" className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-navy">
              Start Sales Inquiry
            </a>
            <a href="tel:+919920909700" className="rounded-full border border-white/35 px-5 py-2 text-xs font-semibold text-white">
              Call 9920909700
            </a>
            <a
              href="https://wa.me/919920909700?text=Hi%20Zestek%2C%20I%20need%20help%20with%20a%20printer%20requirement."
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/35 px-5 py-2 text-xs font-semibold text-white"
            >
              WhatsApp Sales
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding pt-10">
      <div className="container mx-auto grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-3xl border border-border bg-card p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">What We Help With</p>
          <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">Sales guidance built around your real requirement</h2>
          <div className="mt-5 space-y-3">
            {salesHighlights.map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-background px-4 py-4 text-sm leading-6 text-muted-foreground">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-border bg-[linear-gradient(135deg,#fff8ef_0%,#f7fbff_100%)] p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Sales Coverage</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {solutionTracks.map((item) => (
                <span key={item} className="rounded-full border border-white bg-white/90 px-3 py-1.5 text-xs font-semibold text-navy">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </article>

        <aside className="rounded-3xl bg-navy p-6 text-primary-foreground md:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#ffd58a]">Direct Contact</p>
          <h2 className="mt-3 text-2xl font-bold">Reach the sales team directly</h2>
          <p className="mt-4 text-sm leading-7 text-primary-foreground/80">
            Prefer a direct conversation first? Use the sales channels below for pricing, demo planning, and product
            recommendations.
          </p>

          <div className="mt-6 space-y-3">
            {salesChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noreferrer" : undefined}
                className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/8 px-4 py-4 transition hover:bg-white/12"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/12 text-[#ffd58a]">
                  <channel.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/65">
                    {channel.label}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-primary-foreground">{channel.value}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/12 bg-white/8 px-5 py-5">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/12 text-[#ffd58a]">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#ffd58a]">Need service instead?</p>
                <p className="mt-2 text-sm leading-6 text-primary-foreground/82">
                  For AMC, breakdown support, installation, or consumables follow-up, use the dedicated service page.
                </p>
                <a href="/service#service-amc" className="mt-3 inline-flex text-sm font-semibold text-white underline underline-offset-4">
                  Open service support
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <WebsiteInquiryForm
      sectionId="sales-inquiry"
      formId="sales-page-contact-form"
      formName="Sales Page Contact Form"
      successMessage="Your sales inquiry has been sent. Our team will contact you shortly."
      className="scroll-mt-24 pt-0"
      containerClassName="mt-0"
    />

    <Footer />
    <WhatsAppButton />
  </div>
);

export default Sales;

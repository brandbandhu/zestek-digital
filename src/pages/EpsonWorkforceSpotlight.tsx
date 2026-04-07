import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import {
  epsonWorkforceSpotlights,
  type EpsonWorkforceSpotlightKey,
} from "@/data/epsonWorkforceSpotlights";
import { Link } from "react-router-dom";

type EpsonWorkforceSpotlightProps = {
  productKey: EpsonWorkforceSpotlightKey;
};

const salesPhoneDisplay = "9920909700";
const salesPhoneHref = "tel:+919920909700";
const salesEmail = "connect@zestek.in";

const EpsonWorkforceSpotlight = ({ productKey }: EpsonWorkforceSpotlightProps) => {
  const page = epsonWorkforceSpotlights[productKey];

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title={page.metaTitle}
        description={page.metaDescription}
        keywords={page.metaKeywords}
        image={page.productImage}
        canonicalPath={page.route}
      />

      <Header />

      <section className="relative overflow-hidden -mt-16 bg-[linear-gradient(135deg,#0f2042_0%,#1a3b73_52%,#eef4fb_100%)]">
        <div className="container mx-auto section-padding pt-16 md:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="text-primary-foreground">
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-widest">
                {page.eyebrow}
              </p>
              <h1 className="mt-5 max-w-3xl text-3xl font-extrabold md:text-4xl lg:text-5xl">{page.name}</h1>
              <p className="mt-4 max-w-3xl text-lg text-primary-foreground/85">{page.heroTitle}</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/78 md:text-base">
                {page.heroSubtitle}
              </p>
              <p className="mt-5 max-w-3xl text-base font-semibold text-[#ffd58a] md:text-lg">{page.campaignLine}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {page.heroChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/18 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary-foreground"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-[28px] border border-white/15 bg-white/10 p-5 backdrop-blur">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#ffd58a]">{page.offerTitle}</p>
                <p className="mt-2 text-xl font-bold text-primary-foreground">{page.offerBody}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy">
                  Get best deal
                </Link>
                <a
                  href={salesPhoneHref}
                  className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Call {salesPhoneDisplay}
                </a>
                <a
                  href={page.officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  View official specifications
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[32px] border border-white/20 bg-white p-6 shadow-2xl">
                <div className="rounded-[24px] border border-border bg-muted/50 p-6">
                  <img src={page.productImage} alt={page.productImageAlt} className="mx-auto h-72 w-full object-contain" />
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-background px-4 py-4">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-highlight">Applications</p>
                    <p className="mt-2 text-sm font-semibold text-navy">{page.applicationCards[0].title}</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-background px-4 py-4">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-highlight">Business fit</p>
                    <p className="mt-2 text-sm font-semibold text-navy">{page.quickFacts[2].value}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto grid gap-6 md:grid-cols-3">
          {page.trustCards.map((card) => (
            <div key={card.title} className="rounded-3xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Why it matters</p>
              <h2 className="mt-3 text-xl font-bold text-navy">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_360px]">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Overview</p>
            <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">{page.introTitle}</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
              {page.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">At a glance</p>
            <div className="mt-5 space-y-4">
              {page.quickFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-border bg-background px-4 py-4">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-navy/70">{fact.label}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-navy">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Features</p>
            <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">{page.featureTitle}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {page.featureCards.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-border bg-card p-6">
                <h3 className="text-lg font-bold text-navy">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Applications</p>
            <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">{page.applicationTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">{page.applicationIntro}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {page.applicationCards.map((application) => (
              <div
                key={application.title}
                className="rounded-3xl border border-border bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] p-5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-widest text-highlight">Use case</p>
                <h3 className="mt-3 text-lg font-bold text-navy">{application.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{application.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto rounded-3xl border border-border bg-card p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Comparison</p>
          <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">{page.comparisonTitle}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">{page.comparisonIntro}</p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
            <div className="min-w-[720px]">
              <div className="grid grid-cols-[1.15fr_1fr_1fr] bg-muted/80">
                <div className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-navy/70">Feature</div>
                <div className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-navy/70">{page.name}</div>
                <div className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-navy/70">
                  {page.competitorLabel}
                </div>
              </div>

              {page.comparisonRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[1.15fr_1fr_1fr] ${index % 2 === 0 ? "bg-white" : "bg-muted/30"}`}
                >
                  <div className="px-5 py-4 text-sm font-semibold text-navy">{row.label}</div>
                  <div className="px-5 py-4 text-sm text-muted-foreground">{row.productValue}</div>
                  <div className="px-5 py-4 text-sm text-muted-foreground">{row.competitorValue}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_360px]">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Business benefits</p>
            <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">{page.benefitsTitle}</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {page.benefitBullets.map((benefit) => (
                <div key={benefit} className="rounded-2xl border border-border bg-background px-4 py-4 text-sm font-medium text-navy">
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-navy p-6 text-primary-foreground md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#ffd58a]">Business impact</p>
            <h2 className="mt-3 text-2xl font-bold">{page.impactTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-primary-foreground/80 md:text-base">{page.impactBody}</p>
            <div className="mt-6 rounded-2xl border border-white/12 bg-white/8 px-5 py-5">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#ffd58a]">Need guidance</p>
              <p className="mt-2 text-sm leading-6 text-primary-foreground/82">
                Share your monthly volume, application mix and shop format. We will recommend the best fit and rollout path.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <div className="rounded-[32px] bg-[linear-gradient(135deg,#0f2042_0%,#1f4f92_100%)] p-6 text-primary-foreground md:p-8">
            <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#ffd58a]">Offer</p>
                <h2 className="mt-3 text-2xl font-bold md:text-3xl">{page.offerBannerTitle}</h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/82 md:text-base">
                  {page.offerBannerBody}
                </p>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#ffd58a]">Contact</p>
                <div className="mt-3 space-y-3 text-sm text-primary-foreground">
                  <p>Call {salesPhoneDisplay}</p>
                  <p>{salesEmail}</p>
                  <p>Demo, pricing and service planning available through Zestek.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Next step</p>
                <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">{page.ctaTitle}</h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">{page.ctaBody}</p>
              </div>

              <div className="grid gap-3">
                <Link to="/contact" className="rounded-full bg-navy px-5 py-3 text-center text-sm font-semibold text-primary-foreground">
                  Book free demo
                </Link>
                <a
                  href={salesPhoneHref}
                  className="rounded-full border border-border px-5 py-3 text-center text-sm font-semibold text-navy"
                >
                  Call {salesPhoneDisplay}
                </a>
                <a
                  href={`mailto:${salesEmail}`}
                  className="rounded-full border border-border px-5 py-3 text-center text-sm font-semibold text-navy"
                >
                  Email {salesEmail}
                </a>
                <a
                  href={page.officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border px-5 py-3 text-center text-sm font-semibold text-navy"
                >
                  Official specifications
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EpsonWorkforceSpotlight;

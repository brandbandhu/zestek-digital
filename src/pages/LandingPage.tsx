import { useEffect } from "react";
import printerImage from "@/assets/landing-page/epson-m5500-printer.jpg";
import zestekLogo from "@/assets/landing-page/zestek-logo.png";
import "./LandingPage.css";

const painPoints = [
  "High service cost",
  "Frequent breakdown",
  "Expensive parts replacement",
  "Downtime = loss of customers",
];

const benefits = [
  "No frequent breakdown",
  "Low maintenance",
  "Consistent performance",
  "Long working hours",
];

const users = [
  "Xerox / Photocopy Shops",
  "College Area Print Shops",
  "Stationery Stores",
  "Bulk B/W Printing Businesses",
];

const features = [
  "High-speed B/W printing",
  "Low cost per page",
  "High duty cycle",
  "Easy to operate",
  "Reliable for continuous usage",
];

const offers = [
  "2 lakh prints free*",
  "Free Demo",
  "Free Installation",
  "Best Price Guarantee",
  "Service Support",
];

const comparison = [
  ["Maintenance", "High", "Low"],
  ["Breakdown", "Frequent", "Rare"],
  ["Running Cost", "High", "Low"],
  ["Ease of Use", "Complex", "Simple"],
];

const phonePrimary = "9022316433";
const phoneSecondary = "9920901022";
const whatsappText = encodeURIComponent(
  "Hi Zestek, I want the best price and demo for Epson M5500.",
);

const LandingPage = () => {
  useEffect(() => {
    document.title = "Landing Page | Zestek Digital";
  }, []);

  return (
    <main className="landing-page-react min-h-screen overflow-hidden bg-background text-foreground">
      <section className="relative lp-bg-hero text-primary-foreground">
        <div className="absolute inset-0 animate-grid-drift opacity-20 [background-image:linear-gradient(hsl(var(--primary-glow)/.35)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary-glow)/.35)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="pointer-events-none absolute right-[8%] top-24 hidden h-32 w-24 rounded-sm bg-surface/80 shadow-glow animate-float-print md:block" />
        <div className="pointer-events-none absolute right-[18%] top-44 hidden h-28 w-20 rounded-sm bg-surface/70 shadow-card animate-float-print md:block [animation-delay:1.1s]" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a
            href="https://www.zestek.in"
            aria-label="Zestek website"
            className="inline-flex items-center rounded-md bg-surface/10 p-2 backdrop-blur transition hover:-translate-y-0.5"
          >
            <img src={zestekLogo} alt="Zestek" width={230} height={90} className="h-10 w-auto sm:h-12" />
          </a>
          <a
            href={`tel:${phonePrimary}`}
            className="rounded-md bg-accent px-4 py-2 text-sm font-bold text-accent-foreground transition hover:-translate-y-0.5"
          >
            Call Now
          </a>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-8 sm:px-8 lg:min-h-[calc(100vh-76px)] lg:grid-cols-[1.02fr_.98fr] lg:pb-20">
          <div className="animate-slide-up">
            <p className="mb-5 inline-flex rounded-md bg-accent px-4 py-2 text-sm font-extrabold uppercase tracking-normal text-accent-foreground">
              Low Running Cost | High Profit Machine
            </p>
            <h1 className="font-display text-5xl leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">
              Say Bye to RC Machines
              <span className="mt-3 block text-accent">Say Hello to Epson</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-semibold text-primary-foreground/88 sm:text-2xl">
              Epson M5500 - built for high-volume Xerox & photocopy business.
            </p>
            <p className="mt-3 text-lg font-bold text-primary-glow">Fast B/W Printing. Maximum Profit.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`https://wa.me/91${phonePrimary}?text=${whatsappText}`}
                className="cta-primary animate-pulse-profit"
              >
                Get Best Price
              </a>
              <a href={`https://wa.me/91${phonePrimary}?text=${whatsappText}`} className="cta-secondary">
                Book Free Demo
              </a>
              <a href={`tel:${phonePrimary}`} className="cta-secondary">
                Call Now
              </a>
            </div>
          </div>
          <div className="relative animate-slide-up [animation-delay:.15s]">
            <div className="absolute -inset-4 rounded-lg bg-primary-glow/20 blur-3xl" />
            <img
              src={printerImage}
              alt="Epson M5500 printer for high-volume xerox shops"
              width={1408}
              height={1024}
              className="relative w-full animate-soft-bob rounded-lg border border-primary-glow/25 shadow-glow"
            />
            <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-3 gap-3 sm:left-8 sm:right-8">
              <div className="stat-tile bg-ink/85">
                <p className="font-display text-3xl tracking-normal text-accent drop-shadow">2L</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                  prints free
                </p>
              </div>
              <div className="stat-tile bg-ink/85">
                <p className="font-display text-3xl tracking-normal text-accent drop-shadow">Low</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                  running cost
                </p>
              </div>
              <div className="stat-tile bg-ink/85">
                <p className="font-display text-3xl tracking-normal text-accent drop-shadow">Fast</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                  service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lp-bg-steel py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-2">
          <div className="zestek-panel impact-card animate-reveal-left p-7 sm:p-9">
            <p className="font-bold text-destructive">Still Using RC Machines?</p>
            <h2 className="mt-2 font-display text-3xl tracking-normal sm:text-5xl">
              Old machines mean old problems
            </h2>
            <div className="mt-7 grid gap-3">
              {painPoints.map((item) => (
                <div key={item} className="rounded-md bg-muted px-4 py-3 font-bold text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="zestek-panel impact-card animate-reveal-right border-secondary/40 bg-profit p-7 text-secondary-foreground shadow-glow sm:p-9">
            <p className="font-bold">Upgrade to Smart Printing</p>
            <h2 className="mt-2 font-display text-3xl tracking-normal sm:text-5xl">Work More. Earn More.</h2>
            <div className="mt-7 grid gap-3">
              {benefits.map((item) => (
                <div key={item} className="rounded-md bg-surface/15 px-4 py-3 font-bold">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-stretch gap-8 lg:grid-cols-[.95fr_1.05fr]">
            <div className="zestek-panel impact-card flex h-full flex-col justify-between overflow-hidden lp-bg-hero p-8 text-primary-foreground sm:p-10">
              <div>
                <p className="font-bold text-primary-glow">Perfect for serious print businesses</p>
                <h2 className="mt-2 font-display text-4xl leading-[1.05] tracking-normal sm:text-5xl lg:text-6xl">
                  Built for Heavy Xerox Work
                </h2>
                <p className="mt-5 text-lg font-semibold text-primary-foreground/85">
                  From small photocopy corners to bulk B/W print shops - the Epson M5500 is
                  engineered to keep printing while others keep repairing.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="rounded-lg border border-primary-glow/30 bg-surface/10 p-4 backdrop-blur">
                  <p className="font-display text-3xl">2L</p>
                  <p className="text-xs font-bold text-primary-foreground/75">prints free</p>
                </div>
                <div className="rounded-lg border border-primary-glow/30 bg-surface/10 p-4 backdrop-blur">
                  <p className="font-display text-3xl">100+</p>
                  <p className="text-xs font-bold text-primary-foreground/75">businesses</p>
                </div>
                <div className="rounded-lg border border-primary-glow/30 bg-surface/10 p-4 backdrop-blur">
                  <p className="font-display text-3xl">24x7</p>
                  <p className="text-xs font-bold text-primary-foreground/75">support</p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={`https://wa.me/91${phonePrimary}?text=${whatsappText}`} className="cta-primary">
                  Get Best Price
                </a>
                <a href={`tel:${phonePrimary}`} className="cta-secondary">
                  Call Now
                </a>
              </div>
            </div>
            <div className="grid h-full auto-rows-fr gap-4 sm:grid-cols-2">
              {[...users, ...features].map((item, index) => (
                <div
                  key={item}
                  className="zestek-panel impact-card flex animate-slide-up items-center p-5 font-bold"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-bold text-primary-glow">RC Machine vs Epson M5500</p>
              <h2 className="font-display text-4xl tracking-normal sm:text-5xl">
                Stop repairing. Start earning.
              </h2>
            </div>
            <a href={`https://wa.me/91${phonePrimary}?text=${whatsappText}`} className="cta-primary">
              Get Best Deal
            </a>
          </div>
          <div className="overflow-hidden rounded-lg border border-primary-glow/25">
            <table className="w-full min-w-[620px] border-collapse bg-surface text-foreground">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-left">RC Machine</th>
                  <th className="p-4 text-left">Epson M5500</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([feature, rc, epson]) => (
                  <tr key={feature} className="border-t border-border">
                    <td className="p-4 font-bold">{feature}</td>
                    <td className="p-4 text-destructive">{rc}</td>
                    <td className="p-4 font-bold text-profit">{epson}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-[1fr_.9fr]">
          <div className="impact-card rounded-lg bg-accent p-8 text-accent-foreground shadow-card sm:p-10">
            <p className="font-bold">Exclusive Zestek Offer</p>
            <h2 className="mt-2 font-display text-4xl tracking-normal sm:text-6xl">
              2 lakh prints free*
            </h2>
            <p className="mt-3 font-semibold">
              Plain paper, A4, standard coverage area. Limited period offer.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {offers.map((item) => (
                <div key={item} className="rounded-md bg-surface/45 px-4 py-3 font-bold">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="zestek-panel impact-card p-8 sm:p-10">
            <p className="font-bold text-primary">Why Choose Zestek?</p>
            <h2 className="mt-2 font-display text-4xl tracking-normal">Trusted by 100+ Businesses</h2>
            <div className="mt-6 space-y-3 font-bold text-muted-foreground">
              <p>Fast Service Support</p>
              <p>Expert Guidance</p>
              <p>Best Deals</p>
            </div>
            <div className="mt-8 grid gap-3 font-display text-2xl tracking-normal">
              <a href={`tel:${phonePrimary}`}>{phonePrimary}</a>
              <a href={`tel:${phoneSecondary}`}>{phoneSecondary}</a>
              <a href="https://www.zestek.in">www.zestek.in</a>
            </div>
          </div>
        </div>
      </section>

      <section className="lp-bg-hero px-5 py-16 text-center text-primary-foreground sm:px-8 sm:py-20">
        <h2 className="mx-auto max-w-4xl font-display text-4xl tracking-normal sm:text-6xl">
          Ready to Replace Your RC Machine?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-primary-foreground/85">
          Upgrade your print business today with Epson M5500 and Zestek service support.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={`https://wa.me/91${phonePrimary}?text=${whatsappText}`} className="cta-primary">
            WhatsApp Now
          </a>
          <a href={`tel:${phonePrimary}`} className="cta-secondary">
            Book Demo
          </a>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;

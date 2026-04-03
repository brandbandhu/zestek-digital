import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { konicaProductionProducts } from "@/data/konicaProductionProducts";

const valueCards = [
  {
    tag: "QTY",
    title: "Production throughput",
    body: "Scale volume with consistent color and finishing-ready output.",
  },
  {
    tag: "MED",
    title: "Media flexibility",
    body: "Support for textured, metallic, and heavy substrates.",
  },
  {
    tag: "SLA",
    title: "On-site support",
    body: "Factory-trained engineers with rapid-response SLAs in Mumbai/MMR.",
  },
];

const lineupItems = [
  "AccurioPress C14000 / C14010 / C14010S",
  "AccurioPress C12000 / C12010 / C12010S",
  "AccurioPress C7090 ENHANCED / C7100 ENHANCED",
  "AccurioPress C4070 / C4080",
  "AccurioPress C73hc / C74hc / C83hc / C84hc",
  "AccurioPress 6120 / 6136 / 6136P / 6272P / 7120 / 7136",
  "AccurioPrint 2100 / C4065 / C7090 / C7100",
];

const KonicaProduction = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <section
      className="relative overflow-hidden -mt-16"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10, 25, 60, 0.75), rgba(10, 25, 60, 0.75)), url('https://zestek.vercel.app/assets/images/hero/konica-production-hero-printer.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "right center",
      }}
    >
      <div className="container mx-auto section-padding pt-16 md:pt-20">
        <div className="max-w-3xl text-primary-foreground">
          <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">
            Product Finder
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-extrabold">
            Konica Minolta Production Printers
          </h1>
          <p className="mt-3 text-sm md:text-base text-primary-foreground/80">
            Press-grade output for commercial print, packaging mockups, textured media, and short-run production with
            SLA-backed uptime.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#konica-quote-form" className="rounded-full bg-white text-navy px-5 py-2 text-xs font-semibold">
              Request a Quote
            </a>
            <a
              href="https://bt.konicaminolta.in/brochure-download/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/40 px-5 py-2 text-xs font-semibold text-primary-foreground"
            >
              Download Brochures
            </a>
            <Link to="/roi-calculator" className="rounded-full border border-white/40 px-5 py-2 text-xs font-semibold">
              ROI Calculator
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto grid md:grid-cols-3 gap-6">
        {valueCards.map((card) => (
          <div key={card.tag} className="rounded-2xl bg-card border border-border p-5">
            <span className="inline-flex items-center rounded-full bg-highlight/15 px-3 py-1 text-xs font-semibold text-highlight">
              {card.tag}
            </span>
            <h3 className="mt-4 font-display font-bold text-navy">{card.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{card.body}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="container mx-auto grid lg:grid-cols-[280px_1fr] gap-8">
        <aside className="rounded-2xl bg-card border border-border p-5 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-navy">Filters</h3>
            <button className="text-xs font-semibold text-navy border border-border rounded-full px-3 py-1">
              Clear All
            </button>
          </div>
          <div>
            <label className="text-xs font-semibold text-navy">Search</label>
            <input
              placeholder="Search model or series"
              className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
          <div>
            <p className="text-xs font-semibold text-navy mb-2">Product Category</p>
            {["Production Printer", "Office Multifunctional Printer"].map((item) => (
              <label key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <input type="checkbox" className="accent-navy" />
                {item}
              </label>
            ))}
          </div>
          <div>
            <p className="text-xs font-semibold text-navy mb-2">Colour / Mono</p>
            {["Color", "Mono"].map((item) => (
              <label key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <input type="checkbox" className="accent-navy" />
                {item}
              </label>
            ))}
          </div>
          <div>
            <p className="text-xs font-semibold text-navy mb-2">Speed (ppm)</p>
            <div className="grid grid-cols-2 gap-2">
              <select className="rounded-lg border border-input bg-background px-2 py-2 text-sm">
                {["Min", "20", "40", "60", "80", "100", "120", "140", "200", "250"].map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
              <select className="rounded-lg border border-input bg-background px-2 py-2 text-sm">
                {["Max", "40", "60", "80", "100", "120", "140", "200", "250", "300"].map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-navy mb-2">Print Format</p>
            {["A4", "A3", "SRA3", "B2", "Banner"].map((item) => (
              <label key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <input type="checkbox" className="accent-navy" />
                {item}
              </label>
            ))}
          </div>
          <div>
            <p className="text-xs font-semibold text-navy mb-2">Print Volume</p>
            {["Low", "Medium", "High", "Ultra"].map((item) => (
              <label key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <input type="checkbox" className="accent-navy" />
                {item}
              </label>
            ))}
          </div>
          <div>
            <p className="text-xs font-semibold text-navy mb-2">Device Type</p>
            {["Print", "Scan", "Copy"].map((item) => (
              <label key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <input type="checkbox" className="accent-navy" />
                {item}
              </label>
            ))}
          </div>
          <div>
            <p className="text-xs font-semibold text-navy mb-2">Max GSM</p>
            {["157", "210", "220", "256", "300", "350", "360", "400", "450"].map((item) => (
              <label key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <input type="checkbox" className="accent-navy" />
                Up to {item} gsm
              </label>
            ))}
          </div>
        </aside>

        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="text-sm text-muted-foreground">
              <strong className="text-navy">{konicaProductionProducts.length}</strong> products{" "}
              <span className="text-muted-foreground/80">match your filters</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Sort by: Recommended · Speed (high to low) · Speed (low to high) · Name (A-Z)
            </div>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {konicaProductionProducts.map((p, i) => (
              <motion.div
                key={`${p.name}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="rounded-2xl bg-card border border-border p-5 hover:shadow-lg hover:border-highlight transition-all"
              >
                <div className="h-40 rounded-xl bg-muted/60 border border-border mb-4 flex items-center justify-center overflow-hidden">
                  <img src={p.imageUrl} alt={p.name} className="h-full w-full object-contain p-3" />
                </div>
                <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-widest text-highlight mb-3">
                  {p.badges.map((b) => (
                    <span key={`${p.name}-${b}`} className="rounded-full bg-highlight/15 px-3 py-1">
                      {b}
                    </span>
                  ))}
                </div>
                <h3 className="font-display font-bold text-navy">{p.name}</h3>
                <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                  {p.details.map((d) => (
                    <li key={`${p.name}-${d.label}`}>
                      <span className="font-semibold text-navy">{d.label}:</span> {d.value}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-2">
                  <a
                    href={p.viewUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-full border border-border py-2 text-xs font-semibold text-navy text-center"
                  >
                    View details
                  </a>
                  <a
                    href="#konica-quote-form"
                    className="flex-1 rounded-full bg-navy text-primary-foreground py-2 text-xs font-semibold text-center"
                  >
                    Request quote
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding pt-0 bg-[#f7fbff] border-y border-border">
      <div className="container mx-auto">
        <h2 className="section-title text-2xl md:text-3xl">Full Production Lineup (Konica Minolta)</h2>
        <p className="section-subtitle mt-2">
          Available on request with configuration, finishing, and media guidance.
        </p>
        <ul className="mt-6 grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
          {lineupItems.map((item) => (
            <li key={item} className="rounded-xl bg-white border border-border px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="section-padding pt-0" id="konica-quote-form">
      <div className="container mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
        <div className="rounded-2xl bg-card border border-border p-6">
          <h2 className="section-title text-2xl md:text-3xl">Need a Production Print Quote?</h2>
          <p className="section-subtitle mt-2">
            Share your substrates, monthly load, and finishing requirements. We will recommend the best press and ROI plan.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              {
                tag: "MED",
                title: "Media Mix",
                body: "Coated stock, textured paper, envelopes, labels, and long-sheet applications.",
              },
              {
                tag: "FIN",
                title: "Finishing Flow",
                body: "Booklets, trimming, punching, stacking, and output requirements for live jobs.",
              },
              {
                tag: "ROI",
                title: "ROI Planning",
                body: "Monthly volume, uptime expectations, and the best-fit press shortlist for your floor.",
              },
            ].map((item) => (
              <div key={item.tag} className="rounded-2xl bg-muted/60 border border-border p-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-highlight">{item.tag}</span>
                <h3 className="mt-2 font-display font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-border bg-white p-4 text-sm text-muted-foreground">
            <strong className="text-navy">Includes</strong> Site-readiness checklist, uptime SLA, and operator training plan.
          </div>
        </div>

        <form className="rounded-2xl bg-card border border-border p-6 grid gap-4">
          <h3 className="font-display font-bold text-navy text-xl">Request Production Pricing</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-navy">Name</label>
              <input className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-xs font-semibold text-navy">Company Name</label>
              <input className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-navy">Work Email</label>
              <input type="email" className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-xs font-semibold text-navy">Phone Number</label>
              <input type="tel" className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-navy">Monthly Print Volume</label>
            <select className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm">
              <option>Select volume</option>
              <option>Below 20,000 impressions</option>
              <option>20,000 - 100,000 impressions</option>
              <option>100,000 - 250,000 impressions</option>
              <option>250,000+ impressions</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-navy">Message / Requirements</label>
            <textarea
              rows={3}
              placeholder="Tell us about substrates, finishing, or timeline."
              className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
          <button className="rounded-full bg-navy text-primary-foreground px-5 py-2 text-xs font-semibold">
            Submit Request
          </button>
        </form>
      </div>
    </section>

    <Footer />
  </div>
);

export default KonicaProduction;

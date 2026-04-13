import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import { Link } from "react-router-dom";
import { ArrowRight, CircleDot } from "lucide-react";
import epsonLogo from "@/assets/logo/1.jpeg";
import konicaLogo from "@/assets/logo/2.png";
import { commercialProductGroups } from "@/data/commercialProducts";

const detailPoints = [
  "Detailed model specifications will be added soon.",
  "Application guidance for photocopy centres and commercial users will be added soon.",
  "Recommendations for color and monochrome use cases will be added soon.",
  "Media suitability and output-positioning notes will be added soon.",
];

const PhotocopyCommercial = () => (
  <div className="min-h-screen bg-background">
    <PageMeta
      title="Printers for Photocopy Centre & Commercial Segment | Zestek"
      description="Explore Epson and Konica Minolta printer options for photocopy centres and commercial print businesses, with color and monochrome model groups."
      keywords={[
        "photocopy centre printers",
        "commercial print printers",
        "Epson C8100",
        "Epson C21000",
        "Konica Minolta C4065",
        "Konica Minolta C4080",
      ]}
      canonicalPath="/photocopy-commercial"
      image="/zestek-logo.png"
    />
    <Header />

    <section className="-mt-16 bg-[linear-gradient(135deg,#0f2042_0%,#1e4079_58%,#f2f7ff_100%)] pb-10 pt-16 text-primary-foreground md:pb-14 md:pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <span className="inline-flex items-center rounded-full bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/90">
            Photocopy & Commercial Segment
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            Printers for Photocopy Centre & Commercial Segment
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85 md:text-base">
            This page is created to organize Epson and Konica Minolta options for photocopy centres, commercial print
            businesses, and high-volume operations. Detailed model information will be added soon.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-navy">
              Talk to Our Team
            </Link>
            <Link
              to="/konica-production"
              className="rounded-full border border-white/35 px-5 py-2 text-xs font-semibold text-white"
            >
              View Konica Page
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding pt-10">
      <div className="container mx-auto">
        <div className="mb-8 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Category Overview</p>
          <h2 className="mt-2 text-2xl font-bold text-navy md:text-3xl">
            Epson and Konica Minolta options arranged by output type
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
            For now, we have added the model structure for color and monochrome segments. Detailed specifications,
            applications, and recommendations will be updated after the full content is shared.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Photocopy and commercial print options</p>
                <h3 className="mt-2 text-2xl font-bold text-navy">Epson</h3>
              </div>
              <div className="flex h-16 w-32 items-center justify-center rounded-2xl border border-border bg-white p-3">
                <img src={epsonLogo} alt="Epson logo" className="h-full w-full object-contain" />
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Suitable for businesses looking for dependable color and monochrome output across photocopy, document, and
              daily production requirements.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-muted/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Color</p>
                <div className="mt-3 grid gap-3">
                  {commercialProductGroups.epsonColor.map((product) => (
                    <Link
                      key={product.slug}
                      to={product.detailPath ?? `/commercial/${product.slug}`}
                      className="rounded-2xl border border-border bg-background px-3 py-3 text-sm font-semibold text-navy transition hover:border-highlight"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-muted/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Monochrome</p>
                <div className="mt-3 grid gap-3">
                  {commercialProductGroups.epsonMono.map((product) => (
                    <Link
                      key={product.slug}
                      to={product.detailPath ?? `/commercial/${product.slug}`}
                      className="rounded-2xl border border-border bg-background px-3 py-3 text-sm font-semibold text-navy transition hover:border-highlight"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Production and commercial print options</p>
                <h3 className="mt-2 text-2xl font-bold text-navy">Konica Minolta</h3>
              </div>
              <div className="flex h-16 w-32 items-center justify-center rounded-2xl border border-border bg-white p-3">
                <img src={konicaLogo} alt="Konica Minolta logo" className="h-full w-full object-contain" />
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Designed for photocopy centres and commercial setups that need higher-volume output, broader media handling,
              and scalable production support.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-muted/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Color</p>
                <div className="mt-3 grid gap-3">
                  {commercialProductGroups.konicaColor.map((product) => (
                    <Link
                      key={product.slug}
                      to={`/commercial/${product.slug}`}
                      className="rounded-2xl border border-border bg-background px-3 py-3 text-sm font-semibold text-navy transition hover:border-highlight"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-muted/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Monochrome</p>
                <div className="mt-3 grid gap-3">
                  {commercialProductGroups.konicaMono.map((product) => (
                    <Link
                      key={product.slug}
                      to={`/commercial/${product.slug}`}
                      className="rounded-2xl border border-border bg-background px-3 py-3 text-sm font-semibold text-navy transition hover:border-highlight"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="container mx-auto rounded-3xl border border-border bg-card p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-highlight">What Will Be Added</p>
        <h2 className="mt-2 text-2xl font-bold text-navy md:text-3xl">Detailed content will be updated soon</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {detailPoints.map((point) => (
            <div key={point} className="rounded-2xl border border-border bg-muted/40 p-4">
              <div className="flex items-start gap-3">
                <CircleDot className="mt-1 h-4 w-4 shrink-0 text-highlight" />
                <p className="text-sm leading-6 text-muted-foreground">{point}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/contact" className="rounded-full bg-navy px-5 py-2 text-xs font-semibold text-primary-foreground">
            Share Requirement
          </Link>
          <Link
            to="/epson-workforce"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-xs font-semibold text-navy"
          >
            View WorkForce Page
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default PhotocopyCommercial;

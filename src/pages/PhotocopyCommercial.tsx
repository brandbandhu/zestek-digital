import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import { Link } from "react-router-dom";
import { ArrowRight, CircleDot } from "lucide-react";
import epsonLogo from "@/assets/logo/1.jpeg";
import konicaLogo from "@/assets/logo/2.png";
import { commercialSegmentSelections } from "@/data/commercialProducts";

const detailPoints = [
  "Detailed specifications for each shortlisted model will be added soon.",
  "Application guidance for color and monochrome use cases will be added soon.",
  "Recommendations by print volume, media type, and workflow will be added soon.",
  "Service, installation, and support notes for each setup will be added soon.",
];

const brandAssets = {
  Epson: {
    logo: epsonLogo,
    eyebrow: "Photocopier and commercial print options",
  },
  "Konica Minolta": {
    logo: konicaLogo,
    eyebrow: "Production and commercial print options",
  },
} as const;

const PhotocopyCommercial = () => (
  <div className="min-h-screen bg-background">
    <PageMeta
      title="Printers for Photocopier or Commercial Segment | Zestek"
      description="Choose Epson or Konica Minolta for photocopier and commercial printing needs, then review color and monochrome model groups."
      keywords={[
        "photocopier printers",
        "commercial print printers",
        "Konica Minolta 4070",
        "Konica Minolta 7090",
        "AccurioPrint 2100",
        "Epson C8100",
        "Epson C21000",
        "Epson M21000",
      ]}
      canonicalPath="/photocopy-commercial"
      image="/zestek-logo.png"
    />
    <Header />

    <section className="-mt-16 bg-[linear-gradient(135deg,#0f2042_0%,#1e4079_58%,#f2f7ff_100%)] pb-10 pt-16 text-primary-foreground md:pb-14 md:pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <span className="inline-flex items-center rounded-full bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/90">
            Photocopier & Commercial Segment
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            Printers for Photocopier or Commercial Segment
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85 md:text-base">
            Start with the main category, choose Epson or Konica Minolta, then narrow by Color or Monochrome to review
            the right model shortlist for photocopier and commercial print requirements.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact#sales-inquiry" className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-navy">
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
            Select a brand, choose output mode, then review the right models
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
            The segment now follows a simple selection flow: main category, brand, output type, and then model
            selection. This keeps Epson and Konica Minolta options neatly grouped for faster decision-making.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {commercialSegmentSelections.map((brandGroup) => {
            const brandAsset = brandAssets[brandGroup.brand];

            return (
              <article key={brandGroup.brand} className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 md:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-highlight">{brandAsset.eyebrow}</p>
                    <h3 className="mt-2 text-2xl font-bold text-navy">{brandGroup.brand}</h3>
                  </div>
                  <div className="flex h-16 w-32 items-center justify-center rounded-2xl border border-border bg-white p-3">
                    <img src={brandAsset.logo} alt={`${brandGroup.brand} logo`} className="h-full w-full object-contain" />
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-muted-foreground">{brandGroup.description}</p>

                <div className="mt-6 grid gap-4 md:auto-rows-min md:items-start md:grid-cols-[1.05fr_0.95fr]">
                  {brandGroup.outputModes.map((outputMode) => (
                    <div
                      key={`${brandGroup.brand}-${outputMode.label}`}
                      className="self-start rounded-2xl border border-border bg-muted/40 p-5"
                    >
                      <p className="text-xs font-semibold uppercase tracking-widest text-highlight">{outputMode.label}</p>
                      <div className="mt-3 grid gap-3">
                        {outputMode.models.map((model) =>
                          model.href ? (
                            <Link
                              key={`${brandGroup.brand}-${outputMode.label}-${model.name}`}
                              to={model.href}
                              className="rounded-2xl border border-border bg-background px-4 py-3 text-sm font-semibold text-navy transition hover:border-highlight"
                            >
                              <span>{model.name}</span>
                              <span className="mt-1 block text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                                View model
                              </span>
                            </Link>
                          ) : (
                            <div
                              key={`${brandGroup.brand}-${outputMode.label}-${model.name}`}
                              className="rounded-2xl border border-dashed border-border bg-background px-4 py-3 text-sm font-semibold text-navy"
                            >
                              <span>{model.name}</span>
                              <span className="mt-1 block text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                                Details soon
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
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
          <Link to="/contact#sales-inquiry" className="rounded-full bg-navy px-5 py-2 text-xs font-semibold text-primary-foreground">
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

import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, Info, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import { commercialProducts, getCommercialProduct } from "@/data/commercialProducts";

const CommercialProduct = () => {
  const { slug } = useParams();
  const product = slug ? getCommercialProduct(slug) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <section className="section-padding">
          <div className="container mx-auto rounded-3xl border border-border bg-card p-8 text-center">
            <h1 className="text-2xl font-bold text-navy">Product not found</h1>
            <p className="mt-3 text-sm text-muted-foreground">
              The product page you are looking for is not available yet.
            </p>
            <Link to="/photocopy-commercial" className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2 text-xs font-semibold text-primary-foreground">
              Back to Commercial Segment
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (product.detailPath) {
    return <Navigate to={product.detailPath} replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title={`${product.name} | ${product.brand} | Zestek Digital LLP`}
        description={product.summary}
        keywords={[product.name, product.brand, "commercial printers", "photocopy centre printers"]}
        canonicalPath={`/commercial/${product.slug}`}
        image="/zestek-logo.png"
      />
      <Header />

      <section className="-mt-16 bg-[linear-gradient(135deg,#0f2042_0%,#1e4079_58%,#eef3ff_100%)] pb-10 pt-16 text-primary-foreground md:pb-14 md:pt-20">
        <div className="container mx-auto px-4">
          <span className="inline-flex items-center rounded-full bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/85">
            {product.brand} • {product.outputMode}
          </span>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85 md:text-base">
            {product.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-navy">
              Share Requirement
            </Link>
            <Link
              to="/photocopy-commercial"
              className="rounded-full border border-white/35 px-5 py-2 text-xs font-semibold text-white"
            >
              Back to Commercial Segment
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding pt-10">
        <div className="container mx-auto grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">{product.heroTag}</p>
            <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">Highlights</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {product.highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-muted/50 px-4 py-3 text-sm font-semibold text-navy">
                  {item}
                </div>
              ))}
            </div>

            {product.status === "pending" && (
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-highlight/20 bg-highlight/10 p-4 text-sm text-navy">
                <Info className="mt-0.5 h-4 w-4 text-highlight" />
                <p>Detailed specifications and application guidance will be added once the full information is shared.</p>
              </div>
            )}
          </article>

          <aside className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Specifications</p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {product.specs.map((spec) => (
                <li key={spec.label} className="flex items-start justify-between gap-4 rounded-2xl border border-border bg-muted/40 px-4 py-3">
                  <span className="font-semibold text-navy">{spec.label}</span>
                  <span className="text-right">{spec.value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-border bg-muted/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Applications</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.applications.map((item) => (
                  <span key={item} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-navy">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto rounded-3xl border border-border bg-card p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Need a recommendation?</p>
              <h3 className="mt-3 text-2xl font-bold text-navy">Talk to our team for the right fit</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Share your current print volume, paper sizes, and service expectations. We will recommend the right
                model and workflow setup for your business.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full bg-navy px-5 py-2 text-xs font-semibold text-primary-foreground">
                Request Consultation
              </Link>
              {product.brand !== "Konica Minolta" && (
                <Link
                  to="/service"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-xs font-semibold text-navy"
                >
                  Service Support
                  <Wrench className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">More in Commercial Segment</p>
            <h2 className="mt-2 text-2xl font-bold text-navy">Browse other models</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {commercialProducts
              .filter((item) => item.slug !== product.slug)
              .slice(0, 6)
              .map((item) => (
                <Link
                  key={item.slug}
                  to={`/commercial/${item.slug}`}
                  className="rounded-2xl border border-border bg-card p-4 transition hover:border-highlight hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-highlight">{item.brand}</p>
                  <h3 className="mt-2 font-display font-bold text-navy">{item.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.outputMode} • {item.segment}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommercialProduct;

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageMeta from "@/components/PageMeta";
import { getInsightArticleBySlug, insightArticles } from "@/data/insightsArticles";
import NotFound from "@/pages/NotFound";
import { Link, useParams } from "react-router-dom";

const imageFitClass = (fit?: "cover" | "contain") => (fit === "contain" ? "object-contain" : "object-cover");
const cardFrameClass = (frame?: "landscape" | "tall") =>
  frame === "tall" ? "aspect-[4/3]" : "aspect-[16/9]";

const InsightArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getInsightArticleBySlug(slug ?? "");

  if (!article) {
    return <NotFound />;
  }

  const relatedArticles = insightArticles.filter((item) => item.slug !== article.slug);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title={article.metaTitle}
        description={article.metaDescription}
        keywords={article.metaKeywords}
        image={article.imageUrl}
        canonicalPath={article.route}
        ogType="article"
      />

      <Header />

      <section className="relative overflow-hidden -mt-16 bg-[linear-gradient(135deg,#0f2042_0%,#1b4783_55%,#eef4fb_100%)]">
        <div className="container mx-auto section-padding pt-16 md:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_460px]">
            <div className="text-primary-foreground">
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-widest">
                {article.tag}
              </p>
              <h1 className="mt-5 max-w-4xl text-3xl font-extrabold md:text-4xl lg:text-5xl">{article.title}</h1>
              <p className="mt-4 max-w-3xl text-lg text-primary-foreground/85">{article.heroTitle}</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80 md:text-base">
                {article.heroDescription}
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground/78">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">{article.readTime}</span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">{article.publishedLabel}</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to={article.primaryCtaHref} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy">
                  {article.primaryCtaLabel}
                </Link>
                <Link
                  to={article.secondaryCtaHref}
                  className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  {article.secondaryCtaLabel}
                </Link>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/20 bg-white p-4 shadow-2xl">
              <img
                src={article.imageUrl}
                alt={article.imageAlt}
                className={`h-[280px] w-full rounded-[24px] ${imageFitClass(article.imageFit)} md:h-[360px]`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <article className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Article overview</p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
              {article.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {article.galleryNote ? (
              <div className="mt-8 rounded-3xl border border-dashed border-border bg-background px-5 py-4 text-sm leading-6 text-muted-foreground">
                {article.galleryNote}
              </div>
            ) : null}

            {article.galleryImages.length > 0 ? (
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {article.galleryImages.map((image) => (
                  <figure key={image.src} className="overflow-hidden rounded-3xl border border-border bg-background">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`h-52 w-full ${image.fit === "contain" ? "bg-white p-4 object-contain" : "object-cover"}`}
                    />
                    <figcaption className="p-4 text-sm leading-6 text-muted-foreground">{image.caption}</figcaption>
                  </figure>
                ))}
              </div>
            ) : null}

            <div className="mt-10 space-y-8">
              {article.sections.map((section) => (
                <section key={section.heading} className="rounded-3xl border border-border bg-background p-6">
                  <h2 className="text-2xl font-bold text-navy">{section.heading}</h2>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets && section.bullets.length > 0 ? (
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="rounded-2xl border border-border bg-background px-4 py-4 text-sm font-medium text-navy"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-navy p-6 text-primary-foreground md:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#ffd58a]">{article.keyPointsTitle}</p>
              <div className="mt-5 space-y-3">
                {article.keyPoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 text-sm leading-6">
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Need help choosing</p>
              <h2 className="mt-3 text-2xl font-bold text-navy">{article.ctaTitle}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{article.ctaBody}</p>
              <div className="mt-6 grid gap-3">
                <Link
                  to={article.primaryCtaHref}
                  className="rounded-full bg-navy px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
                >
                  {article.primaryCtaLabel}
                </Link>
                <Link
                  to={article.secondaryCtaHref}
                  className="rounded-full border border-border px-5 py-3 text-center text-sm font-semibold text-navy"
                >
                  {article.secondaryCtaLabel}
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto rounded-[32px] bg-[linear-gradient(135deg,#0f2042_0%,#1f4f92_100%)] p-6 text-primary-foreground md:p-8">
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#ffd58a]">Next step</p>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">{article.ctaTitle}</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/82 md:text-base">{article.ctaBody}</p>
            </div>
            <div className="grid gap-3">
              <Link to={article.primaryCtaHref} className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-navy">
                {article.primaryCtaLabel}
              </Link>
              <Link
                to={article.secondaryCtaHref}
                className="rounded-full border border-white/20 px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                {article.secondaryCtaLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">More insights</p>
            <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">Continue reading</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedArticles.map((item) => (
              <article key={item.slug} className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className={`${cardFrameClass(item.cardImageFrame)} w-full overflow-hidden bg-slate-50`}>
                  <img
                    src={item.cardImageUrl ?? item.imageUrl}
                    alt={item.cardImageAlt ?? item.imageAlt}
                    className={`h-full w-full ${item.cardImageFit === "contain" || (!item.cardImageFit && item.imageFit === "contain") ? "bg-white p-4 object-contain" : "object-cover"}`}
                  />
                </div>
                <div className="p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{item.tag}</p>
                  <h3 className="mt-2 text-xl font-bold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.cardDescription}</p>
                  <Link to={item.route} className="mt-4 inline-flex text-sm font-semibold text-navy hover:text-highlight">
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InsightArticle;

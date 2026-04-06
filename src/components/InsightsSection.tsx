import { Link } from "react-router-dom";
import { insightArticles } from "@/data/insightsArticles";

const InsightsSection = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-highlight mb-2 block">
          Insights
        </span>
        <h2 className="section-title">Insights for smarter home &amp; office printing</h2>
        <p className="section-subtitle mx-auto mt-3">
          Curated guides and updates to help you choose the right print setup.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {insightArticles.map((item) => (
          <article
            key={item.slug}
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background"
          >
            <div className="h-52 overflow-hidden bg-slate-50">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                {item.tag}
              </span>
              <h3 className="mt-2 font-display font-bold text-navy">
                <Link to={item.route} className="hover:text-highlight transition-colors">
                  {item.title}
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mt-2">{item.cardDescription}</p>
              <Link
                to={item.route}
                className="mt-auto pt-6 inline-flex text-xs font-semibold text-navy transition-colors hover:text-highlight"
              >
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default InsightsSection;

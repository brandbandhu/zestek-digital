import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { insightArticles } from "@/data/insightsArticles";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";

const InsightsSection = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={defaultViewport}
        className="mb-12 text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-highlight mb-2 block">
          Blog
        </span>
        <motion.h2 variants={fadeUp} className="section-title">
          Latest blog &amp; print insights
        </motion.h2>
        <motion.p variants={fadeUp} className="section-subtitle mx-auto mt-3">
          Read useful guides and updates to help you choose the right print setup.
        </motion.p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {insightArticles.map((item, index) => (
          <motion.article
            key={item.slug}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={defaultViewport}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="group surface-glow hover-lift flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background"
          >
            <div className="aspect-[16/9] w-full overflow-hidden bg-slate-50">
              <img
                src={item.cardImageUrl ?? item.imageUrl}
                alt={item.cardImageAlt ?? item.imageAlt}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                {item.tag}
              </span>
              <h3 className="mt-2 min-h-[3rem] font-display font-bold text-navy">
                <Link to={item.route} className="hover:text-highlight transition-colors">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-2 min-h-[3.5rem] text-sm text-muted-foreground">{item.cardDescription}</p>
              <Link
                to={item.route}
                className="mt-auto pt-4 inline-flex text-xs font-semibold text-navy transition-colors hover:text-highlight"
              >
                Read more
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default InsightsSection;

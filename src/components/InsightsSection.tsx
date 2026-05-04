import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { insightArticles } from "@/data/insightsArticles";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";

const imageFitClass = (fit?: "cover" | "contain") =>
  fit === "contain" ? "bg-white p-4 object-contain" : "object-cover";

const cardFrameClass = (frame?: "landscape" | "tall") =>
  frame === "tall" ? "aspect-[4/3]" : "aspect-[16/9]";

const InsightsSection = () => (
  <section id="blogs" className="section-padding bg-card">
    <div className="container mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={defaultViewport}
        className="mb-12 text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-highlight mb-2 block">
          Blogs
        </span>
        <motion.h2 variants={fadeUp} className="section-title">
          Latest blogs and print insights
        </motion.h2>
        <motion.p variants={fadeUp} className="section-subtitle mx-auto mt-3">
          Read practical guides, customer stories, and print-business updates to make better buying and service
          decisions.
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
            <div className={`${cardFrameClass(item.cardImageFrame)} w-full overflow-hidden bg-slate-50`}>
              <img
                src={item.cardImageUrl ?? item.imageUrl}
                alt={item.cardImageAlt ?? item.imageAlt}
                className={`h-full w-full object-center transition-transform duration-500 group-hover:scale-[1.02] ${imageFitClass(
                  item.cardImageFit ?? item.imageFit,
                )}`}
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                {item.tag}
              </span>
              <h3 className="mt-2 font-display font-bold text-navy md:min-h-[3rem]">
                <Link to={item.route} className="hover:text-highlight transition-colors">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground md:min-h-[3.5rem]">{item.cardDescription}</p>
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

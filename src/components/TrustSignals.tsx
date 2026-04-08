import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";

const achievementFiles = import.meta.glob("../../assets/achievements/*.{png,jpg,jpeg,webp,avif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const achievementPriority = [
  "WhatsApp Image 2026-04-07 at 11.42.11 PM (2).jpeg",
  "WhatsApp Image 2026-04-07 at 11.42.11 PM.jpeg",
] as const;

const achievements = Object.entries(achievementFiles)
  .map(([path, src]) => ({
    fileName: path.split("/").pop() ?? "achievement",
    src,
  }))
  .sort((a, b) => {
    const aPriority = achievementPriority.indexOf(a.fileName as (typeof achievementPriority)[number]);
    const bPriority = achievementPriority.indexOf(b.fileName as (typeof achievementPriority)[number]);

    if (aPriority !== -1 || bPriority !== -1) {
      if (aPriority === -1) return 1;
      if (bPriority === -1) return -1;
      return aPriority - bPriority;
    }

    return a.fileName.localeCompare(b.fileName, undefined, { numeric: true, sensitivity: "base" });
  });

const TrustSignals = () => (
  <section id="awards-achievements" className="section-padding bg-card">
    <div className="container mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={defaultViewport}
        className="mb-10 text-left"
      >
        <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-highlight">
          Awards &amp; Achievements
        </span>
        <motion.h2 variants={fadeUp} className="section-title">
          Award pictures, installations, and achievement highlights
        </motion.h2>
        <motion.p variants={fadeUp} className="section-subtitle mt-3">
          Browse real-world visuals from our awards, business milestones, partnership moments, and customer-facing
          installations.
        </motion.p>
      </motion.div>

      {achievements.length > 0 ? (
        <Carousel opts={{ align: "start", loop: achievements.length > 1 }} className="w-full px-1">
          <CarouselContent className="items-stretch">
            {achievements.map((achievement, index) => (
              <CarouselItem key={achievement.fileName} className="flex basis-full md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  viewport={defaultViewport}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="hover-lift surface-glow flex h-full w-full rounded-2xl border border-border bg-background p-3 shadow-sm"
                >
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-muted">
                    <img
                      src={achievement.src}
                      alt="Zestek award and achievement photograph"
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {achievements.length > 1 ? (
            <>
              <CarouselPrevious className="-left-4 border-border bg-white text-navy shadow" />
              <CarouselNext className="-right-4 border-border bg-white text-navy shadow" />
            </>
          ) : null}
        </Carousel>
      ) : (
        <div className="rounded-2xl border border-border bg-background p-6 text-sm text-muted-foreground shadow-sm">
          No achievement photos were found in the achievements folder.
        </div>
      )}
    </div>
  </section>
);

export default TrustSignals;

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";

const videoFiles = import.meta.glob("../../assets/videos/*.{mp4,webm,mov,m4v}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const videos = Object.entries(videoFiles)
  .map(([path, src]) => ({
    fileName: path.split("/").pop() ?? "video",
    src,
  }))
  .sort((a, b) => a.fileName.localeCompare(b.fileName, undefined, { numeric: true, sensitivity: "base" }));

const VideoGallerySection = () => (
  <section id="videos" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={defaultViewport}
        className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-highlight">
            Videos
          </span>
          <motion.h2 variants={fadeUp} className="section-title">
            Printer demos, installs, and output videos
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle mt-3">
            Watch product demos, live output clips, and quick machine walkthroughs from our recent print setups.
          </motion.p>
        </div>
      </motion.div>

      {videos.length > 0 ? (
        <Carousel opts={{ align: "start", loop: videos.length > 1 }} className="w-full">
          <CarouselContent>
            {videos.map((video, index) => (
              <CarouselItem key={video.fileName} className="basis-full md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  viewport={defaultViewport}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="hover-lift surface-glow rounded-2xl border border-border bg-card p-4 shadow-sm"
                >
                  <div className="aspect-video overflow-hidden rounded-xl bg-black">
                    <video
                      src={video.src}
                      controls
                      preload="metadata"
                      playsInline
                      className="h-full w-full object-contain bg-black"
                      aria-label={video.fileName}
                    />
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {videos.length > 1 ? (
            <>
              <CarouselPrevious className="-left-4 border-border bg-white text-navy shadow" />
              <CarouselNext className="-right-4 border-border bg-white text-navy shadow" />
            </>
          ) : null}
        </Carousel>
      ) : (
        <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground shadow-sm">
          No videos were found in the video folder.
        </div>
      )}
    </div>
  </section>
);

export default VideoGallerySection;

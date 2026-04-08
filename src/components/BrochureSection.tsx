import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";

const brochureFiles = import.meta.glob("../../assets/pdf/*.pdf", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const brochureTitleOverrides: Record<string, string> = {
  "4080-Brochure.pdf": "AccurioPress C4080",
  "original.pdf": "Epson WF-M21000",
  "original1.pdf": "Epson WF C21000",
  "All_Range_Booklet.pdf": "Epson EcoTank Printers",
};

const formatBrochureTitle = (fileName: string) => {
  if (brochureTitleOverrides[fileName]) {
    return brochureTitleOverrides[fileName];
  }

  const readableName = fileName.replace(/\.pdf$/i, "").replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
  const modelName = readableName
    .replace(/\b(Brochure|Booklet|Flyer)\b/gi, " ")
    .replace(/\bFOR PRINT\b/gi, " ")
    .replace(/\bNew\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

  return modelName || readableName;
};

const brochures = Object.entries(brochureFiles)
  .map(([path, src]) => {
    const fileName = path.split("/").pop() ?? "Brochure.pdf";

    return {
      fileName,
      src,
      title: formatBrochureTitle(fileName),
      previewSrc: `${src}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`,
    };
  })
  .sort((a, b) => a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: "base" }));

const BrochureSection = () => (
  <section
    id="download-centre"
    className="section-padding animate-gradient-shift bg-gradient-to-br from-[#102B5C] via-[#0B2B63] to-[#0A1E46] text-primary-foreground"
  >
    <div className="container mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={defaultViewport}
        className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-highlight/90">
            Download Centre
          </span>
          <motion.h2 variants={fadeUp} className="text-3xl font-display font-bold md:text-4xl">
            Download brochures, flyers, and product PDFs
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 max-w-2xl text-primary-foreground/70">
            Browse brochure previews and download the exact PDF your team needs for product reviews, sales
            conversations, and machine comparison.
          </motion.p>
        </div>
      </motion.div>

      {brochures.length > 0 ? (
        <Carousel opts={{ align: "start", loop: brochures.length > 1 }} className="w-full px-1">
          <CarouselContent>
            {brochures.map((brochure, index) => (
              <CarouselItem key={brochure.fileName} className="basis-full md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  viewport={defaultViewport}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="hover-lift surface-glow rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur"
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-xl border border-white/10 bg-white shadow-inner">
                    <iframe
                      src={brochure.previewSrc}
                      title={`${brochure.title} brochure preview`}
                      loading="lazy"
                      className="pointer-events-none h-full w-full bg-white"
                    />
                  </div>

                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-highlight/90">
                        PDF Brochure
                      </p>
                      <h3 className="mt-2 text-base font-display font-bold text-primary-foreground">
                        {brochure.title}
                      </h3>
                    </div>

                    <a
                      href={brochure.src}
                      download={brochure.fileName}
                      className="shrink-0 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-white/25"
                    >
                      Download
                    </a>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {brochures.length > 1 ? (
            <>
              <CarouselPrevious className="-left-4 border-white/20 bg-white text-navy shadow" />
              <CarouselNext className="-right-4 border-white/20 bg-white text-navy shadow" />
            </>
          ) : null}
        </Carousel>
      ) : (
        <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-sm text-primary-foreground/80">
          No brochure PDFs were found in the brochure folder.
        </div>
      )}
    </div>
  </section>
);

export default BrochureSection;

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const videos = [
  { title: "Print demo 1", src: "/videos/video-1.mp4" },
  { title: "Print demo 2", src: "/videos/video-2.mp4" },
  { title: "Print demo 3", src: "/videos/video-3.mp4" },
  { title: "Print demo 4", src: "/videos/video-4.mp4" },
  { title: "Print demo 5", src: "/videos/video-5.mp4" },
  { title: "Print demo 6", src: "/videos/video-6.mp4" },
  { title: "Print demo 7", src: "/videos/video-7.mp4" },
  { title: "Print demo 8", src: "/videos/video-8.mp4" },
];

const VideoGallerySection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-highlight mb-2 block">
            Print Demo
          </span>
          <h2 className="section-title">Print Demo &amp; Output Video Gallery</h2>
          <p className="section-subtitle mt-3">
            Watch quick demos of our latest printers and output quality.
          </p>
        </div>
      </div>

      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {videos.map((v) => (
            <CarouselItem key={v.title} className="basis-full md:basis-1/2 lg:basis-1/3">
              <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                <div className="aspect-video rounded-xl overflow-hidden bg-black">
                  <video
                    src={v.src}
                    controls
                    preload="metadata"
                    playsInline
                    className="h-full w-full object-contain bg-black"
                  />
                </div>
                <h3 className="mt-4 font-display font-bold text-navy text-base">{v.title}</h3>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 bg-white text-navy border-border shadow" />
        <CarouselNext className="-right-4 bg-white text-navy border-border shadow" />
      </Carousel>
    </div>
  </section>
);

export default VideoGallerySection;

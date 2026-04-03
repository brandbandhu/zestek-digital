import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import banner1 from "@/assets/banner/1.png";
import banner2 from "@/assets/banner/2.png";
import banner3 from "@/assets/banner/3.png";
import banner4 from "@/assets/banner/4.png";
import banner5 from "@/assets/banner/5.png";
import mobileBanner1 from "@/assets/mobile-banner/1.png";
import mobileBanner2 from "@/assets/mobile-banner/2.png";
import mobileBanner3 from "@/assets/mobile-banner/3.png";
import mobileBanner4 from "@/assets/mobile-banner/4.jpeg";
import mobileBanner5 from "@/assets/mobile-banner/5.jpeg";

const banners = [banner1, banner2, banner3, banner4, banner5];
const mobileBanners = [mobileBanner1, mobileBanner2, mobileBanner3, mobileBanner4, mobileBanner5];

const HeroSection = () => (
  <section className="relative overflow-hidden h-[70vh] md:h-screen min-h-[520px] md:min-h-[800px]">
    <Carousel opts={{ loop: true }} className="hidden md:block w-full h-full">
      <CarouselContent className="h-full">
        {banners.map((banner, index) => (
          <CarouselItem key={banner} className="h-full">
            <div className="relative h-full w-full">
              <img
                src={banner}
                alt={`Zestek banner ${index + 1}`}
                className="h-full w-full object-cover relative z-0"
                loading={index === 0 ? "eager" : "lazy"}
              />
              {index === 2 && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent z-[1]" />
                  <div className="absolute inset-0 flex items-center z-[2]">
                    <div className="container mx-auto px-4">
                      <div className="max-w-2xl text-navy">
                        <span className="inline-flex items-center rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-navy uppercase tracking-widest">
                          Service & SLA
                        </span>
                        <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-extrabold leading-tight">
                          Same-day service coverage across Mumbai &amp; MMR.
                        </h1>
                        <p className="mt-4 text-sm md:text-base text-foreground/80">
                          Certified engineers, predictable SLAs, and fast consumables planning for uninterrupted printing.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                          <a
                            href="https://www.epson.co.in/"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full bg-navy text-primary-foreground px-5 py-2 text-xs font-semibold"
                          >
                            See MPS Plans
                          </a>
                          <a
                            href="/contact"
                            className="rounded-full border border-navy/40 px-5 py-2 text-xs font-semibold text-navy bg-white/80"
                          >
                            Request Support
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 bg-white/80 hover:bg-white text-navy border-border" />
      <CarouselNext className="right-4 bg-white/80 hover:bg-white text-navy border-border" />
    </Carousel>
    <Carousel opts={{ loop: true }} className="md:hidden w-full h-full">
      <CarouselContent className="h-full">
        {mobileBanners.map((banner, index) => (
          <CarouselItem key={banner} className="h-full">
            <div className="relative h-full w-full">
              <img
                src={banner}
                alt={`Zestek mobile banner ${index + 1}`}
                className="h-full w-full object-cover relative z-0"
                loading={index === 0 ? "eager" : "lazy"}
              />
              {index === 2 && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent z-[1]" />
                  <div className="absolute inset-0 flex items-start z-[2]">
                    <div className="container mx-auto px-4 pt-6">
                      <div className="max-w-sm text-navy">
                        <span className="inline-flex items-center rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-navy uppercase tracking-widest">
                          Service & SLA
                        </span>
                        <h1 className="mt-4 text-2xl font-display font-extrabold leading-tight">
                          Same-day service coverage across Mumbai &amp; MMR.
                        </h1>
                        <p className="mt-3 text-xs text-foreground/80">
                          Certified engineers, predictable SLAs, and fast consumables planning for uninterrupted printing.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-3">
                          <a
                            href="https://www.epson.co.in/"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full bg-navy text-primary-foreground px-4 py-2 text-[11px] font-semibold"
                          >
                            See MPS Plans
                          </a>
                          <a
                            href="/contact"
                            className="rounded-full border border-navy/40 px-4 py-2 text-[11px] font-semibold text-navy bg-white/80"
                          >
                            Request Support
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 bg-white/80 hover:bg-white text-navy border-border" />
      <CarouselNext className="right-4 bg-white/80 hover:bg-white text-navy border-border" />
    </Carousel>
  </section>
);

export default HeroSection;

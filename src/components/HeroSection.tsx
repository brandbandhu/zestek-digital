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
import mobileBanner1 from "../../assets/mobile banner/1.svg";
import mobileBanner2 from "../../assets/mobile banner/2.svg";
import mobileBanner3 from "../../assets/mobile banner/3.svg";
import mobileBanner4 from "../../assets/mobile banner/4.svg";
import mobileBanner5 from "../../assets/mobile banner/5.svg";
import { Link } from "react-router-dom";

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
                          Reliable Service Coverage Across Mumbai &amp; MMR
                        </h1>
                        <p className="mt-4 text-sm md:text-base text-foreground/80">
                          Certified engineers, structured SLAs, and efficient consumables planning for smooth,
                          uninterrupted printing for your business.
                        </p>
                        <div className="mt-6">
                          <Link
                            to="/contact"
                            className="inline-flex items-center justify-center rounded-full border border-navy/20 bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy/90"
                          >
                            Request Support Now
                          </Link>
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
                          Reliable Service Coverage Across Mumbai &amp; MMR
                        </h1>
                        <p className="mt-3 text-xs text-foreground/80">
                          Certified engineers, structured SLAs, and efficient consumables planning for smooth,
                          uninterrupted printing for your business.
                        </p>
                        <div className="mt-4">
                          <Link
                            to="/contact"
                            className="inline-flex items-center justify-center rounded-full border border-navy/20 bg-navy px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-navy/90"
                          >
                            Request Support Now
                          </Link>
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

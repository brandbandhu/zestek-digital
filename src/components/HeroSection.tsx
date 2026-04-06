import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import banner1 from "../../assets/banner/1.svg";
import banner2 from "../../assets/banner/2.svg";
import banner3 from "@/assets/banner/3.png";
import banner4 from "@/assets/banner/4.png";
import banner5 from "@/assets/banner/5.png";
import mobileBanner1 from "../../assets/mobile banner/1.svg";
import mobileBanner2 from "../../assets/mobile banner/2.svg";
import mobileBanner3 from "../../assets/mobile banner/3.svg";
import mobileBanner4 from "../../assets/mobile banner/4.svg";
import mobileBanner5 from "../../assets/mobile banner/5.svg";
import { Link } from "react-router-dom";

type BannerOverlay = {
  label?: string;
  title: string;
  body?: string;
  bullets?: string[];
  brand?: string;
  titleClassName?: string;
};

const desktopBanners = [banner1, banner2, banner3, banner4, banner5];
const mobileBanners = [mobileBanner1, mobileBanner2, mobileBanner3, mobileBanner4, mobileBanner5];

const bannerOverlays: Record<number, BannerOverlay> = {
  0: {
    label: "Epson - Print Buddy",
    title: "Print buddy of every print shop.",
    body: "Highlights",
    bullets: [
      "One lakh prints free",
      "Low power consumption",
      "Low maintenance",
      "Low print cost",
      "Print variety of papers",
    ],
  },
  1: {
    label: "Konica Minolta",
    brand: "KONICA MINOLTA",
    title: "Empower Your Business With Unmatched Efficiency",
    body: "Printing billion ideas into businesses",
    titleClassName: "max-w-3xl",
  },
  2: {
    label: "Service & SLA",
    title: "Reliable Service Coverage Across Mumbai & MMR",
    body: "Certified engineers, structured SLAs, and efficient consumables planning for smooth, uninterrupted printing for your business.",
  },
};

const renderDesktopOverlay = (index: number) => {
  const overlay = bannerOverlays[index];

  if (!overlay) {
    return null;
  }

  if (index === 0) {
    return (
      <>
        <div className="absolute inset-0 z-[2] flex items-center justify-end">
          <div className="mx-auto flex h-full w-full max-w-[1440px] items-center px-4 sm:px-6 lg:px-10 xl:px-12">
            <div className="ml-auto w-full max-w-[35rem] text-left text-[#101828] lg:-translate-x-12 xl:max-w-[38rem] xl:-translate-x-20 2xl:-translate-x-24">
              <span className="inline-flex items-center rounded-full bg-white/86 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#101828] shadow-sm">
                {overlay.label}
              </span>
              <h1 className="mt-4 max-w-[34rem] text-3xl font-extrabold leading-[1.06] tracking-tight md:text-4xl lg:text-[3.55rem]">
                <span className="block whitespace-nowrap text-[#101828]">
                  Print buddy <span className="inline-block whitespace-nowrap text-highlight">of every</span>
                </span>
                <span className="mt-5 block text-[#101828]">print shop.</span>
              </h1>
              <div className="mt-5 max-w-[29rem] rounded-[2rem] border border-black/10 bg-white/78 p-5 text-left shadow-[0_22px_60px_rgba(15,23,42,0.1)] backdrop-blur-md">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-highlight/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-highlight">
                    {overlay.body}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-highlight/45 to-transparent" />
                </div>
                <ul className="mt-4 space-y-2.5 text-sm text-[#101828] md:text-base">
                  {overlay.bullets?.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#f7a539]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (index === 1) {
    return (
      <>
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white/82 via-white/42 to-transparent" />
        <div className="absolute inset-0 z-[2] flex items-start">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl pt-20 text-[#101828] md:pt-24 lg:pt-28">
              <span className="inline-flex items-center rounded-full bg-white/78 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#101828] shadow-sm">
                {overlay.brand}
              </span>
              <h1 className={`mt-4 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl ${overlay.titleClassName ?? ""}`}>
                {overlay.title}
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#101828]/88 md:text-lg md:leading-8">{overlay.body}</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white/90 via-white/62 to-transparent" />
      <div className="absolute inset-0 z-[2] flex items-center">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl text-navy">
            <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-navy">
              {overlay.label}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">{overlay.title}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-foreground/80 md:text-base md:leading-8">{overlay.body}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy/90"
              >
                Request Support Now
              </Link>
              <a
                href="tel:+919920909700"
                className="inline-flex items-center justify-center rounded-full border border-navy/20 bg-white/80 px-6 py-3 text-sm font-semibold text-navy transition hover:bg-white"
              >
                Call 9920909700
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const renderMobileOverlay = (index: number) => {
  if (index !== 2) {
    return null;
  }

  const overlay = bannerOverlays[index];

  if (!overlay) {
    return null;
  }

  return (
    <>
      <div className="absolute inset-x-0 top-0 z-[1] h-[58%] bg-gradient-to-b from-white/88 via-white/45 to-transparent" />
      <div className="absolute inset-x-0 top-0 z-[2] px-4 pt-7">
        <div className="max-w-[18rem] text-navy">
          <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-navy">
            {overlay.label}
          </span>
          <h1 className="mt-3 text-2xl font-extrabold leading-tight">{overlay.title}</h1>
          <p className="mt-3 text-xs leading-6 text-foreground/80">{overlay.body}</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-navy px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-navy/90"
            >
              Request Support Now
            </Link>
            <a
              href="tel:+919920909700"
              className="inline-flex items-center justify-center rounded-full border border-navy/20 bg-white/85 px-4 py-2.5 text-xs font-semibold text-navy transition hover:bg-white"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const HeroSection = () => (
  <section className="relative h-[calc(100svh-4rem)] min-h-[620px] max-h-[780px] overflow-hidden md:h-[680px] md:min-h-0 md:max-h-none lg:h-[760px] xl:h-[calc(100vh-4.5rem)] xl:max-h-[860px]">
    <Carousel opts={{ loop: true }} className="hidden h-full w-full md:block">
      <CarouselContent className="h-full">
        {desktopBanners.map((banner, index) => (
          <CarouselItem key={`${banner}-${index}`} className="h-full">
            <div className="relative h-full w-full">
              <img
                src={banner}
                alt={`Zestek banner ${index + 1}`}
                className="relative z-0 h-full w-full object-cover object-center"
                loading={index === 0 ? "eager" : "lazy"}
              />
              {renderDesktopOverlay(index)}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 border-border bg-white/85 text-navy hover:bg-white" />
      <CarouselNext className="right-4 border-border bg-white/85 text-navy hover:bg-white" />
    </Carousel>

    <Carousel opts={{ loop: true }} className="h-full w-full md:hidden">
      <CarouselContent className="h-full">
        {mobileBanners.map((banner, index) => (
          <CarouselItem key={`${banner}-${index}`} className="h-full">
            <div className="relative h-full w-full">
              <img
                src={banner}
                alt={`Zestek mobile banner ${index + 1}`}
                className="relative z-0 h-full w-full bg-white object-contain object-center"
                loading={index === 0 ? "eager" : "lazy"}
              />
              {renderMobileOverlay(index)}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3 border-border bg-white/85 text-navy hover:bg-white" />
      <CarouselNext className="right-3 border-border bg-white/85 text-navy hover:bg-white" />
    </Carousel>
  </section>
);

export default HeroSection;

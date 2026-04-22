import { useEffect } from "react";

const LANDING_PAGE_BUNDLE_SRC = "/landing-page-bundle/index.html";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Landing Page | Zestek Digital";
  }, []);

  return (
    <main className="h-[100dvh] w-full overflow-hidden bg-background">
      <iframe
        title="Landing page"
        src={LANDING_PAGE_BUNDLE_SRC}
        loading="eager"
        className="h-full w-full border-0"
      >
        This browser does not support embedded landing pages.
      </iframe>
    </main>
  );
};

export default LandingPage;

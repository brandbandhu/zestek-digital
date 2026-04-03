import Header from "@/components/Header";
import Footer from "@/components/Footer";

const differenceCards = [
  {
    title: "Solution-Oriented, Not Product-Oriented",
    body: "We don't sell machines - we provide the right print solution based on your volume, usage, and business goals.",
  },
  {
    title: "Customer-First Approach",
    body: "Every recommendation is made keeping your cost, performance, and long-term benefit in mind.",
  },
  {
    title: "Honest & Ethical Business",
    body: "Transparent pricing, clear guidance, and no unnecessary upselling - we focus on building long-term relationships.",
  },
  {
    title: "14+ Years of Industry Experience",
    body:
      "Deep understanding of print technologies, applications, and real business challenges across print shops, offices, and production environments.",
  },
  {
    title: "End-to-End Support",
    body: "From selection and installation to service and optimization - we stay with you beyond the sale.",
  },
  {
    title: "Focused on Cost & Performance",
    body: "We help you reduce cost per print, improve efficiency, and get the best output from your investment.",
  },
];

const missionCards = [
  {
    tag: "Mission",
    title: "Reliable growth through better print technology",
    body:
      "Deliver dependable and cost-conscious print solutions backed by practical advice, correct product fit, and responsive service support.",
  },
  {
    tag: "Vision",
    title: "Be the print partner businesses trust first",
    body:
      "Build long-term customer relationships through strong product knowledge, honest guidance, and dependable support across every stage of ownership.",
  },
  {
    tag: "Core Focus",
    title: "Office, business, and production print solutions",
    body:
      "Epson EcoTank, Epson WorkForce, Konica Minolta production devices, and managed print support designed around real business requirements.",
  },
];

const whatWeDoCards = [
  {
    title: "Product Guidance",
    body: "Shortlist the right printer based on output volume, speed, media usage, and operating cost.",
  },
  {
    title: "Deployment & Support",
    body: "Get help with setup, usage guidance, service coordination, AMC renewals, and consumables planning.",
  },
  {
    title: "Local Reach",
    body: "Regional coordination across Mumbai, MMR, Boisar, Khopoli, and nearby business locations.",
  },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <section
      className="relative overflow-hidden -mt-16"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10, 25, 60, 0.75), rgba(10, 25, 60, 0.75)), url('https://zestek.vercel.app/assets/images/new/site-05-online.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "right center",
      }}
    >
      <div className="container mx-auto section-padding pt-16 md:pt-20">
        <span className="mt-4 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground">
          About Zestek
        </span>
        <h1 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-primary-foreground max-w-3xl">
          <span className="block">Built on Experience.</span>
          <span className="block">Driven by the Right Intent.</span>
        </h1>
        <p className="mt-3 text-xs md:text-sm text-primary-foreground/80 max-w-3xl">
          With over 14 years in the print industry, Zestek Digital LLP is built on a clear foundation - ethical business,
          practical solutions, and customer-first thinking.
        </p>
        <p className="mt-2 text-xs md:text-sm text-primary-foreground/80 max-w-3xl">
          We don't believe in pushing products. We believe in understanding your business and recommending what truly works.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#about-contact" className="rounded-full bg-white text-navy px-5 py-2 text-xs font-semibold">
            Discuss Your Requirement
          </a>
          <a href="tel:+919920909700" className="rounded-full border border-white/40 px-5 py-2 text-xs font-semibold text-white">
            Call / WhatsApp Now
          </a>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-10">
        <article className="rounded-3xl bg-card border border-border overflow-hidden">
          <div className="h-72 md:h-80 overflow-hidden">
            <img
              src="https://zestek.vercel.app/assets/images/new/site-05-online.jpg"
              alt="Professional print setup and client installation environment supported by Zestek Digital LLP"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Built for Long-Term Partnerships</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>⭐ Trusted by 300+ businesses</li>
              <li>📍 Serving Mumbai &amp; MMR</li>
              <li>🖨 Real client installations</li>
            </ul>
            <div className="mt-6 rounded-2xl border border-border bg-muted/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Why Businesses Stay With Us</p>
              <h3 className="mt-2 font-display font-bold text-navy">
                Practical advice before the sale. Dependable support after installation.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We stay involved from selection and setup to service, consumables, and performance guidance so your print
                investment keeps delivering value.
              </p>
            </div>
          </div>
        </article>

        <article className="rounded-3xl bg-card border border-border p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">What Makes Us Different</p>
          <h2 className="section-title text-2xl md:text-3xl mt-2">
            We recommend what truly works for your business.
          </h2>
          <p className="section-subtitle mt-3">
            Our approach stays focused on the right fit for your workload, cost, goals, and long-term print performance.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {differenceCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-border bg-muted/60 p-4">
                <h3 className="font-display font-bold text-navy">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{card.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            When you choose Zestek, you're not just buying a printer - you're choosing a long-term print partner.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-navy">👉 Discuss Your Requirement</span>
            <div className="flex flex-wrap gap-3">
              <a href="#about-contact" className="rounded-full bg-navy text-primary-foreground px-5 py-2 text-xs font-semibold">
                Discuss Your Requirement
              </a>
              <a href="tel:+919920909700" className="rounded-full border border-border px-5 py-2 text-xs font-semibold text-navy">
                Call / WhatsApp Now
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="container mx-auto">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">How We Work</p>
          <h2 className="section-title text-2xl md:text-3xl mt-2">
            Built around practical advice, honest guidance, and dependable support.
          </h2>
          <p className="section-subtitle mt-3">
            From product fit to service coordination, we keep every step aligned with long-term customer value.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {missionCards.map((card) => (
            <div key={card.tag} className="rounded-2xl bg-card border border-border p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">{card.tag}</p>
              <h3 className="mt-3 font-display font-bold text-navy">{card.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding pt-0" id="what-we-do">
      <div className="container mx-auto">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">What We Do</p>
          <h2 className="section-title text-2xl md:text-3xl mt-2">
            Support across selection, deployment, and ongoing service.
          </h2>
          <p className="section-subtitle mt-3">
            We help businesses choose, install, and keep the right print systems performing reliably.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {whatWeDoCards.map((card) => (
            <div key={card.title} className="rounded-2xl bg-card border border-border p-5">
              <h3 className="font-display font-bold text-navy">{card.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding pt-0" id="about-contact">
      <div className="container mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
        <article className="rounded-2xl bg-card border border-border p-6">
          <span className="inline-flex items-center rounded-full bg-highlight/15 px-3 py-1 text-xs font-semibold text-highlight">
            Contact Zest Team
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl font-display font-bold text-navy">
            Need help planning your next print setup?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Talk to us for sales guidance, consumables planning, support coordination, or AMC renewals. We will guide you
            to the right next step.
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-border bg-muted/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Sales</p>
              <p className="mt-2 text-sm">
                <a href="tel:+919920909700" className="font-semibold text-navy">
                  9920909700
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:connect@zestek.in">Connect@zestek.in</a>
              </p>
            </div>
            <div className="rounded-xl border border-border bg-muted/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Consumables</p>
              <p className="mt-2 text-sm">
                <a href="tel:+919920909023" className="font-semibold text-navy">
                  +91 99209 09023
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:sales@zestek.in">sales@zestek.in</a>
              </p>
            </div>
            <div className="rounded-xl border border-border bg-muted/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Support / AMC</p>
              <p className="mt-2 text-sm">
                <a href="tel:+919920905073" className="font-semibold text-navy">
                  +91 99209 05073
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:support@zestek.in">support@zestek.in</a> | AMC:{" "}
                <a href="tel:+919920909023">+91 99209 09023</a>
              </p>
            </div>
          </div>
        </article>

        <form className="rounded-2xl bg-card border border-border p-6 grid gap-4">
          <h3 className="font-display font-bold text-navy text-xl">Contact Zest Team</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-navy">Name</label>
              <input className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" required />
            </div>
            <div>
              <label className="text-xs font-semibold text-navy">Company Name</label>
              <input className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" required />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-navy">Work Email</label>
              <input type="email" className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" required />
            </div>
            <div>
              <label className="text-xs font-semibold text-navy">Phone Number</label>
              <input type="tel" className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" required />
            </div>
          </div>
          <div className="grid gap-3">
            <div>
              <label className="text-xs font-semibold text-navy">Request Type</label>
              <select className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" required>
                <option value="">Select request type</option>
                <option>New Printer Quote</option>
                <option>Service Request</option>
                <option>AMC / Contract Renewal</option>
                <option>Free Print Audit</option>
              </select>
            </div>
            <button className="rounded-full bg-navy text-primary-foreground px-5 py-2 text-xs font-semibold">
              Submit Request
            </button>
          </div>
          <div>
            <label className="text-xs font-semibold text-navy">Message / Requirements</label>
            <textarea
              rows={3}
              placeholder="Share your requirement or support concern."
              className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              required
            />
          </div>
        </form>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;

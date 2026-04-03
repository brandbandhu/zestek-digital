import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CorporateSolutions = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <section
      className="pb-6 -mt-16"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(18, 32, 60, 0.92) 0%, rgba(34, 55, 95, 0.88) 40%, rgba(73, 87, 120, 0.6) 65%, rgba(230, 236, 244, 0.12) 100%), url('https://zestek.vercel.app/assets/images/bg/print-floor.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 pt-16 pb-10 md:pb-12 md:pt-20">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8">
          <div>
            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-primary-foreground">
              Managed Print Services: Comprehensive Solutions for Your Office Needs
            </h1>
            <p className="mt-3 text-sm md:text-base text-primary-foreground/80 max-w-2xl">
              Integrate hardware, software, service, and supplies to optimize IT budgets and office printing efficiency.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full bg-white text-navy px-5 py-2 text-xs font-semibold">
                Request an MPS Plan
              </Link>
              <a
                href="https://mediaserver.goepson.com/ImConvServlet/imconv/c97c6aae0a9bc4083bc00bceba5150c75485311f/original?assetDescr=BIJ-Epson-Solutions-Suite"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/40 px-5 py-2 text-xs font-semibold text-white"
              >
                Download Brochure
              </a>
              <Link to="/roi-calculator" className="rounded-full border border-white/40 px-5 py-2 text-xs font-semibold text-white">
                ROI Calculator
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding pt-8">
      <div className="container mx-auto">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Why Choose Us</p>
          <h2 className="section-title text-2xl md:text-3xl mt-2">
            Managed print services built around business needs
          </h2>
          <p className="section-subtitle mt-3 max-w-3xl">
            Built around the priorities businesses expect from a managed print partner: expertise, customized programs,
            reliable technology access, and ongoing support that keeps office printing stable and easier to manage.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              tag: "EXP",
              title: "Experience and Expertise",
              body:
                "Benefit from a specialist-led approach shaped by real printing-industry experience and a support team focused on business continuity.",
            },
            {
              tag: "FIT",
              title: "Customized Solutions",
              body:
                "Tailored MPS programs can be aligned to your print volumes, branch structure, workflow requirements, and cost expectations.",
            },
            {
              tag: "TECH",
              title: "Advanced Technology with Ongoing Support",
              body:
                "Access the latest print technology without heavy upfront cost, backed by continuous support, maintenance, and user guidance.",
            },
          ].map((item) => (
            <div key={item.tag} className="rounded-2xl bg-card border border-border p-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-highlight">{item.tag}</span>
              <h3 className="mt-3 font-display font-bold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="container mx-auto">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Key Benefits</p>
          <h2 className="section-title text-2xl md:text-3xl mt-2">
            Operational and cost benefits of managed print services
          </h2>
          <p className="section-subtitle mt-3 max-w-3xl">
            Managed print services help reduce costs, improve print visibility, simplify billing, ease IT workload, and
            keep operations running with proactive support.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              tag: "10-40%",
              title: "Cost Reduction",
              body:
                "Managed print programs can save businesses roughly 10-40% in print-related costs through better control and fleet management.",
            },
            {
              tag: "ONE",
              title: "Vendor Consolidation",
              body: "Bring hardware, software, service, and print-related consumables together under one service-led source.",
            },
            {
              tag: "VIS",
              title: "Automated Cost Visibility",
              body: "Gain detailed reporting on print volumes and related expenses by device and by user.",
            },
            {
              tag: "INV",
              title: "Simplified Billing",
              body: "Organizations benefit from fewer invoices and a clearer summary of office printing expenses.",
            },
            {
              tag: "CTL",
              title: "Expense Control & Containment",
              body:
                "Improve spend control with better visibility, user restrictions, and managed oversight of print behavior.",
            },
            {
              tag: "IT",
              title: "Less Strain on IT",
              body: "Allow IT professionals to stay focused on mission-critical work without print-related distractions.",
            },
            {
              tag: "AUTO",
              title: "Auto Supplies Fulfillment",
              body:
                "Replace reactive supplies ordering with proactive notice, monitored stock, and location-aware consumables planning.",
            },
            {
              tag: "SVC",
              title: "Proactive On-Site Service",
              body:
                "Advance notification of hardware issues helps reduce downtime and lowers the internal effort required to respond.",
            },
            {
              tag: "SAVE",
              title: "Sustainable Savings",
              body:
                "Long-term savings come from optimized print workflows, better fleet choices, and more predictable service management.",
            },
          ].map((item) => (
            <div key={item.tag} className="rounded-2xl bg-card border border-border p-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-highlight">{item.tag}</span>
              <h3 className="mt-3 font-display font-bold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="container mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
        <div className="rounded-2xl bg-card border border-border p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Comprehensive Service and Support</p>
          <h2 className="section-title text-2xl md:text-3xl mt-2">
            Worry-free printing with managed supplies and predictable support
          </h2>
          <p className="section-subtitle mt-3">
            Our service model focuses on worry-free printing, automatic supply management, and lower disruption through
            proactive servicing and monitored environments.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Worry-free printing with managed warranties, on-site support coordination, and supply replenishment planning.</li>
            <li>Automatic supply management so consumables can be monitored and replaced before they affect productivity.</li>
            <li>Predictable expense handling that reduces surprise printer costs and supports business continuity.</li>
            <li>Integrated management of hardware, software, service, and supplies inside one easier-to-manage structure.</li>
          </ul>
          <h3 className="mt-6 font-display font-bold text-navy">Partnership and optimization</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Managed print specialists work with businesses to improve total cost of ownership, streamline print workflows,
            optimize fleet deployment, and identify measurable cost-saving opportunities.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            The aim is not only to maintain a working printer fleet, but to continuously improve the way print resources
            support the business.
          </p>
          <div className="mt-4">
            <Link to="/contact" className="rounded-full bg-navy text-primary-foreground px-5 py-2 text-xs font-semibold">
              Request a custom plan
            </Link>
          </div>
        </div>
        <div className="rounded-2xl bg-card border border-border p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Solutions and Capabilities</p>
          <h2 className="section-title text-2xl md:text-3xl mt-2">
            Printer technology, supplies, fleet management, and security
          </h2>
          <p className="section-subtitle mt-3">
            Our managed print capabilities cover device planning, toner monitoring, proactive fleet management, secure
            printing, and stronger control over office-wide print usage.
          </p>
          <div className="mt-5 grid gap-4 text-sm text-muted-foreground">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">TECH</p>
              <h4 className="mt-2 font-display font-bold text-navy">Printer and Technology</h4>
              <p className="mt-2">
                Technical specialists evaluate current and future needs to match the right print, copy, and scan capabilities
                to business volumes, patterns, and workflows.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">TONER</p>
              <h4 className="mt-2 font-display font-bold text-navy">Toner Tracking and Automatic Supply</h4>
              <p className="mt-2">
                Remote toner monitoring and proactive shipment planning help avoid stock-outs and reduce the need to hold
                expensive consumable inventory.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">FLEET</p>
              <h4 className="mt-2 font-display font-bold text-navy">Proactive Fleet Management</h4>
              <p className="mt-2">
                Keep multifunction devices fully operational with monitored fleet management that improves uptime and reduces
                repair delays.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">SEC</p>
              <h4 className="mt-2 font-display font-bold text-navy">Think Security-First</h4>
              <p className="mt-2">
                Support secure print release, user authentication, document encryption, watermarking, and stronger control over
                sensitive output.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">CTRL</p>
              <h4 className="mt-2 font-display font-bold text-navy">Monitoring and Controlling</h4>
              <p className="mt-2">
                Track black-and-white versus color usage, understand who is printing, and apply better allocation and
                restriction policies where needed.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">SW</p>
              <h4 className="mt-2 font-display font-bold text-navy">Print Management Software</h4>
              <p className="mt-2">
                Use software to manage consumables, enforce policy, optimize print costs, define workflows, and simplify
                accounting through better budget control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="container mx-auto">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Our Managed Print Service Process</p>
          <h2 className="section-title text-2xl md:text-3xl mt-2">Assessment, transition, and optimization</h2>
          <p className="section-subtitle mt-3">
            Our three-step approach explains how a managed print program is assessed, rolled out, and continuously improved
            over time.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              title: "Assessment",
              body: "Work closely with your team to define the right devices, solutions, and service structure for the business.",
            },
            {
              step: "02",
              title: "Transition",
              body: "Implement the new print environment smoothly and on schedule with minimal interruption to day-to-day operations.",
            },
            {
              step: "03",
              title: "Optimization",
              body: "Continue improving printing so it stays efficient, sustainable, cost-effective, and easier to manage over time.",
            },
          ].map((item) => (
            <div key={item.step} className="rounded-2xl bg-card border border-border p-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-highlight">{item.step}</span>
              <h3 className="mt-3 font-display font-bold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="container mx-auto">
        <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Assessment-led Planning</p>
              <h3 className="mt-3 font-display font-bold text-navy text-2xl">Start with a Free Print Assessment</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Take control of your printing environment with a managed print assessment that reviews your fleet, print
                costs, service concerns, and opportunities for a more reliable and cost-effective setup.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Includes: Fleet review, device-fit recommendation, supplies approach, service planning, and a practical
                print-management roadmap.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>Review device volumes, print patterns, workflow requirements, and operational pain points.</li>
                <li>Outline a managed structure for consumables, service support, and print-cost visibility.</li>
                <li>Build a more reliable office printing setup with stronger control, simpler accounting, and lower disruption.</li>
              </ul>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Assessment Fleet and print review</p>
                <p>Transition Deployment planning</p>
                <p>Optimization Cost and uptime improvement</p>
              </div>
            </div>
            <form className="grid gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Request MPS Consultation</p>
              <input className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" placeholder="Name" />
              <input
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                placeholder="Company Name"
              />
              <input
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                placeholder="Work Email"
              />
              <input
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                placeholder="Phone Number"
              />
              <select className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm">
                <option>Current Fleet Size</option>
                <option>1 - 5 devices</option>
                <option>6 - 20 devices</option>
                <option>21 - 50 devices</option>
                <option>50+ devices</option>
              </select>
              <textarea
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                rows={4}
                placeholder="Message / Requirements"
              />
              <button className="rounded-full bg-navy text-primary-foreground px-5 py-2 text-xs font-semibold">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default CorporateSolutions;

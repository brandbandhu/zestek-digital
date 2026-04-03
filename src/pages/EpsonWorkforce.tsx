import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const workforceProducts = [
  {
    name: "Epson WorkForce Enterprise AM-C4000",
    productUrl:
      "https://www.epson.co.in/For-Work/Printers/Business-Inkjet-Printers/WorkForce-Enterprise-AM-C4000-A3-Colour-Multifunction-Printer/p/C11CJ43503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=497de13b25347068dce62d42ce18bbe12579f0ea&vid=497de13b25347068dce62d42ce18bbe12579f0ea&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=C4000",
  },
  {
    name: "Epson WorkForce Enterprise AM-C5000",
    productUrl:
      "https://www.epson.co.in/For-Work/Printers/Business-Inkjet-Printers/WorkForce-Enterprise-AM-C5000-A3-Colour-Multifunction-Printer/p/C11CJ42503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=497de13b25347068dce62d42ce18bbe12579f0ea&vid=497de13b25347068dce62d42ce18bbe12579f0ea&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=C4000",
  },
  {
    name: "Epson WorkForce Enterprise AM-C6000",
    productUrl:
      "https://www.epson.co.in/For-Work/Printers/Business-Inkjet-Printers/WorkForce-Enterprise-AM-C6000-A3-Colour-Multifunction-Printer/p/C11CJ91503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=497de13b25347068dce62d42ce18bbe12579f0ea&vid=497de13b25347068dce62d42ce18bbe12579f0ea&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=C4000",
  },
  {
    name: "Epson WorkForce Enterprise AM-M5500",
    productUrl:
      "https://www.epson.co.in/PrecisionCore/Office-Printers/Epson-WorkForce-Enterprise-AM-M5500%2C-A3-Mono-Multifunction-Printer/p/C11CL48503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=341c418f7bb0a487ad3e195e1336dcc067c2c641&vid=341c418f7bb0a487ad3e195e1336dcc067c2c641&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=24gro-mono_BIJpro_STD_9b_resized",
  },
  {
    name: "Epson WorkForce Enterprise WF-C20750",
    productUrl:
      "https://www.epson.co.in/For-Work/Printers/Business-Inkjet-Printers/WorkForce-Enterprise-WF-C20750-A3-Colour-Multifunction-Printer/p/C11CH87503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=4bfd14bf0ccc2f6644cf16a8f4b0c1caa3f66f86&vid=4bfd14bf0ccc2f6644cf16a8f4b0c1caa3f66f86&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=WF-C20590_01_2-1",
  },
  {
    name: "Epson WorkForce Enterprise WF-C21000",
    productUrl:
      "https://www.epson.co.in/For-Work/Printers/Business-Inkjet-Printers/WorkForce-Enterprise-WF-C21000-A3-Colour-Multifunction-Printer/p/C11CH88503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=4bfd14bf0ccc2f6644cf16a8f4b0c1caa3f66f86&vid=4bfd14bf0ccc2f6644cf16a8f4b0c1caa3f66f86&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=WF-C20590_01_2-1",
  },
  {
    name: "Epson WorkForce Enterprise WF-M21000",
    productUrl:
      "https://www.epson.co.in/PrecisionCore/Office-Printers/WorkForce-Enterprise-WF-M21000-A3-Monochrome-Multifunction-Printer/p/C11CJ87503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=614883aa60e81f38efc38accc60cfa6db65683b6&vid=614883aa60e81f38efc38accc60cfa6db65683b6&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=19Gra_FDV_01_2-1",
  },
  {
    name: "Epson WorkForce Pro EM-C800",
    productUrl:
      "https://www.epson.co.in/Business-Inkjet-Printers/WorkForce-Pro-EM-C800-Workgroup-Color-Multifunction-Printer/p/C11CK19503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=31f7095d7c643ae67feef8d893b926569ea236e4&vid=31f7095d7c643ae67feef8d893b926569ea236e4&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=WF-Pro_EM-C800_hero-headon-output_690x460%402x",
  },
  {
    name: "Epson WorkForce Pro EM-C8100",
    productUrl:
      "https://www.epson.co.in/Business-Inkjet-Printers/WorkForce-Pro-EM-C8100-Multifunction-A3%2B-Color-Printer/p/C11CL31503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=818b370842b00667e251fd5a0e34aa07daf5c4a6&vid=818b370842b00667e251fd5a0e34aa07daf5c4a6&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=WorkForce_Pro_EM-C8100_SPT_C11CL31201_384x256",
  },
  {
    name: "Epson WorkForce Pro EM-C8101",
    productUrl:
      "https://www.epson.co.in/Business-Inkjet-Printers/WorkForce-Pro-EM-C8101-Multifunction-A3%2B-Color-Printer/p/C11CL32503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=818b370842b00667e251fd5a0e34aa07daf5c4a6&vid=818b370842b00667e251fd5a0e34aa07daf5c4a6&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=WorkForce_Pro_EM-C8100_SPT_C11CL31201_384x256",
  },
  {
    name: "Epson WorkForce Pro WF-C5890",
    productUrl:
      "https://www.epson.co.in/Business-Inkjet-Printers/Epson-WorkForce-Pro-WF-C5890-Wi-Fi-Duplex-All-in-One-Inkjet-Printer-/p/C11CK23503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=2730280128cfc7162fb81d9a8306ebf539b00ec5&vid=2730280128cfc7162fb81d9a8306ebf539b00ec5&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=WF-C5890_headon_690x460",
  },
  {
    name: "WorkForce Enterprise AM-C400",
    productUrl:
      "https://www.epson.co.in/For-Work/Printers/Business-Inkjet-Printers/WorkForce-Enterprise-AM-C400-A4-Colour-Multifunction-Printer/p/C11CJ93503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=5796f49ff2ae6d732dd37b1e688b9bd301b3187d&vid=5796f49ff2ae6d732dd37b1e688b9bd301b3187d&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=AM-C400_hero-headon_690x460%402x",
  },
  {
    name: "WorkForce Pro WF-M5899",
    productUrl:
      "https://www.epson.co.in/Business-Inkjet-Printers/Epson-WorkForce-Pro-WF-M5899-A4-Monochrome-Multi-Function-Printer/p/C11CK76502",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=3c8142a4de9967bf67832e11432c20d3fa7f2ad1&vid=3c8142a4de9967bf67832e11432c20d3fa7f2ad1&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=22Cod_mono_FPS_01_b-2",
  },
  {
    name: "WorkForce WF-M5399",
    productUrl:
      "https://www.epson.co.in/Business-Inkjet-Printers/WorkForce-Pro-WF-M5399-Monochrome-Printer/p/C11CK77502",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=c789e72c87166cd07430ead3e452461c206452fe&vid=c789e72c87166cd07430ead3e452461c206452fe&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=WF-M5399_headon-output_690x460",
  },
];

const EpsonWorkforce = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <section
      className="pb-10 -mt-16"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(18, 32, 60, 0.92) 0%, rgba(34, 55, 95, 0.88) 40%, rgba(73, 87, 120, 0.6) 65%, rgba(230, 236, 244, 0.12) 100%), url('https://zestek.vercel.app/assets/images/products/epson-am-c4000.png')",
        backgroundSize: "auto 84%",
        backgroundPosition: "88% center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto section-padding pt-16 md:pt-20">
        <span className="mt-4 inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground">
          Print Buddy of Every Print Shop
        </span>
        <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-primary-foreground max-w-3xl">
          Epson WorkForce Printers for secure, high-output business teams.
        </h1>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/contact" className="rounded-full bg-white text-navy px-5 py-2 text-xs font-semibold">
            Quick Enquiry
          </Link>
          <a
            href="https://epsonadvantage.in"
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
    </section>

    <section className="section-padding pt-0">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            {
              title: "Business Fit",
              body: "Finance, HR, admin, and branch-office ready",
              detail:
                "Choose a lineup that fits single teams, multi-floor offices, or growing distributed business environments.",
            },
            {
              title: "Device Range",
              body: "Compact mono to enterprise A3 MFPs",
              detail:
                "Compare the full portfolio in one place instead of treating every business print need as the same workflow.",
            },
            {
              title: "IT Advantage",
              body: "Cleaner control for shared print environments",
              detail:
                "Make it easier to manage departments, user behavior, and business-critical output with the right printer fit.",
            },
            {
              title: "Zestek Support",
              body: "Quote, rollout, service, and consumables",
              detail:
                "Get one path from product selection to support planning, so procurement and admin teams can move faster.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl bg-card border border-border p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">{item.title}</p>
              <h3 className="mt-3 font-display font-bold text-navy">{item.body}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="container mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Epson WorkForce</p>
          <h2 className="section-title text-2xl md:text-3xl mt-2">Business Inkjet Printers</h2>
          <p className="section-subtitle mt-3">
            Epson business inkjet printers deliver amazing quality, blazing-fast speeds, exceptional reliability and
            dependable performance to meet your business needs.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Find the right WorkForce lineup faster. Use the filters below to move from broad product research into a
            shortlist that matches your print format, workload, and business environment.
          </p>
          <div className="mt-5 grid sm:grid-cols-3 gap-3 text-sm text-muted-foreground">
            <div className="rounded-xl border border-border bg-card p-3">Mono + colour Options for focused teams and shared office fleets.</div>
            <div className="rounded-xl border border-border bg-card p-3">A4 + A3 Choose by format, not just by price.</div>
            <div className="rounded-xl border border-border bg-card p-3">Ready to compare Use model details, brochure, and quote flow together.</div>
          </div>
        </div>
        <div className="rounded-2xl bg-card border border-border p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Epson WorkForce</p>
          <h3 className="mt-2 font-display font-bold text-navy">Printer information</h3>
          <div className="mt-4 rounded-xl border border-border bg-muted/60 p-4 flex items-center justify-center">
            <img
              src="https://mediaserver.goepson.com/adaptivemedia/rendition?assetDescr=C4000&clid=SAPDAM&id=497de13b25347068dce62d42ce18bbe12579f0ea&prclid=productpictures&prid=515Wx515H&vid=497de13b25347068dce62d42ce18bbe12579f0ea"
              alt="Epson WorkForce printer"
              className="h-40 w-full object-contain"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-navy">
            <span className="rounded-full bg-highlight/20 px-3 py-1">Call for Best Price</span>
            <span className="rounded-full bg-highlight/20 px-3 py-1">View Ink & Consumables</span>
            <span className="rounded-full bg-highlight/20 px-3 py-1">Service & Support</span>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Filter Your Products</p>
            <p className="text-sm text-muted-foreground mt-1">Showing {workforceProducts.length} of 14</p>
          </div>
          <div className="text-sm text-muted-foreground">Sort by: Top Rated · Name (ascending) · Name (descending)</div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workforceProducts.map((p, i) => (
            <motion.div
              key={`${p.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="rounded-2xl bg-card border border-border p-5 hover:shadow-lg hover:border-highlight transition-all"
            >
              <div className="h-40 rounded-xl bg-muted/60 border border-border mb-4 flex items-center justify-center overflow-hidden">
                <img src={p.imageUrl} alt={p.name} className="h-full w-full object-contain p-3" />
              </div>
              <h3 className="font-display font-bold text-navy">{p.name}</h3>
              <div className="mt-4 flex gap-2">
                <Link
                  to="/contact"
                  className="flex-1 rounded-full bg-navy text-primary-foreground py-2 text-xs font-semibold text-center"
                >
                  Quick Enquiry
                </Link>
                <a
                  href={p.productUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-full border border-border py-2 text-xs font-semibold text-navy text-center"
                >
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="container mx-auto">
        <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Request a Quote</p>
              <h3 className="mt-3 font-display font-bold text-navy text-2xl">Zestek Digital LLP</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Managed corporate print solutions with Epson WorkForce expertise.
              </p>
            </div>
            <form className="grid gap-3">
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
                <option>Monthly Print Volume</option>
                <option>Below 20,000 pages</option>
                <option>20,000 - 50,000 pages</option>
                <option>50,000 - 100,000 pages</option>
                <option>100,000+ pages</option>
              </select>
              <textarea
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                rows={4}
                placeholder="Message / Requirements"
              />
              <div className="flex flex-wrap gap-3">
                <button className="rounded-full bg-navy text-primary-foreground px-5 py-2 text-xs font-semibold">
                  Quick Enquiry
                </button>
                <a
                  href="tel:+919920909700"
                  className="rounded-full border border-border px-5 py-2 text-xs font-semibold text-navy"
                >
                  Call Now
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default EpsonWorkforce;

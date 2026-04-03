import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Star } from "lucide-react";

const filters = [
  "Home & Office",
  "Business",
  "Photo",
  "A3 / A4",
  "Wi-Fi",
  "Duplex",
  "ADF",
  "EcoTank",
  "WorkForce",
];

const productCards = Array.from({ length: 18 }).map((_, i) => ({
  name: `EcoTank L${3200 + i}`,
  price: "₹14,999",
  rating: "4.6",
  desc: "All-in-one ink tank printer for low-cost, high volume printing.",
  tag: i % 3 === 0 ? "Best Seller" : i % 3 === 1 ? "New Arrival" : "Top Rated",
}));

const Products = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <section className="section-padding pb-10">
      <div className="container mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-[#0E2A5F] via-[#163B77] to-[#0E2A5F] text-primary-foreground overflow-hidden">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 p-8 md:p-12">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">
                Epson Printers
              </span>
              <h1 className="mt-4 text-3xl md:text-4xl font-display font-extrabold">
                Epson EcoTank Printers
              </h1>
              <p className="mt-3 text-sm md:text-base text-primary-foreground/80 max-w-xl">
                Perfect for small businesses and home offices. Get reliable prints with ultra-low running cost.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full bg-white text-navy px-5 py-2 text-xs font-semibold">
                  Buy now
                </button>
                <button className="rounded-full border border-white/40 px-5 py-2 text-xs font-semibold">
                  View brochure
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -right-6 -top-6 h-36 w-36 rounded-full bg-white/10 blur-2xl" />
              <div className="h-44 md:h-52 rounded-2xl bg-white/10 border border-white/10" />
              <div className="mt-4 h-24 rounded-2xl bg-white/10 border border-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[260px_1fr] gap-8">
          <aside className="space-y-6">
            <div className="rounded-2xl bg-card border border-border p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-navy mb-3">
                <Search className="w-4 h-4" />
                Search
              </div>
              <input
                placeholder="Search printers..."
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="rounded-2xl bg-card border border-border p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-navy mb-3">
                <SlidersHorizontal className="w-4 h-4" />
                Find the Right EcoTank
              </div>
              <div className="space-y-2">
                {filters.map((f) => (
                  <label key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <input type="checkbox" className="accent-navy" />
                    {f}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-6">
              <h2 className="section-title text-2xl md:text-3xl">
                Epson EcoTank Printers for Low-Cost Printing
              </h2>
              <p className="section-subtitle mt-2">
                Explore ink tank printers with ultra-low running cost and reliable output.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCards.map((p, i) => (
                <motion.div
                  key={`${p.name}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="rounded-2xl bg-card border border-border p-5 hover:shadow-lg hover:border-highlight transition-all"
                >
                  <div className="h-36 rounded-xl bg-muted/60 border border-border mb-4" />
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-highlight">
                      {p.tag}
                    </span>
                    <span className="text-xs text-muted-foreground">ID: ZEK-{3200 + i}</span>
                  </div>
                  <h3 className="font-display font-bold text-navy">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-navy">{p.price}</span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="w-3.5 h-3.5 fill-highlight text-highlight" />
                      {p.rating}
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 rounded-full bg-navy text-primary-foreground py-2 text-xs font-semibold">
                      Quick Enquiry
                    </button>
                    <button className="flex-1 rounded-full border border-border py-2 text-xs font-semibold text-navy">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Products;

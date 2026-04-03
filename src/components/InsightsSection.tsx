const insights = [
  {
    title: "Say goodbye to RC machines",
    desc: "Switch to efficient ink tank tech with lower print cost.",
    tag: "Case Study",
    imageUrl:
      "https://images.unsplash.com/photo-1758630737361-ca7532fb5e7f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  },
  {
    title: "Upgrade your print business",
    desc: "Scale production with a device built for high-volume demand.",
    tag: "Industry",
    imageUrl: "https://cdn.pixabay.com/photo/2021/10/08/20/15/printing-press-6692407_1280.jpg",
  },
  {
    title: "Prevent printer downtime",
    desc: "Proactive service schedules and original consumables.",
    tag: "Service",
    imageUrl: "https://cdn.pixabay.com/photo/2020/08/22/11/40/technician-5508210_1280.jpg",
  },
];

const InsightsSection = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-highlight mb-2 block">
          Insights
        </span>
        <h2 className="section-title">Insights for smarter home &amp; office printing</h2>
        <p className="section-subtitle mx-auto mt-3">
          Curated guides and updates to help you choose the right print setup.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {insights.map((item) => (
          <div key={item.title} className="rounded-2xl bg-background border border-border overflow-hidden">
            <div className="h-40 bg-slate-100 overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                {item.tag}
              </span>
              <h3 className="mt-2 font-display font-bold text-navy">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
              <button className="mt-4 text-xs font-semibold text-navy hover:text-highlight transition-colors">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InsightsSection;

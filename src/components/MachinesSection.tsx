const machines = [
  {
    title: "Epson C8000 Series Demo",
    desc: "Compact production printers for labels and packaging.",
    imageUrl: "https://cdn.pixabay.com/photo/2016/07/14/11/12/printer-1516580_640.jpg",
  },
  {
    title: "Konica Commercial Demo",
    desc: "Production-ready performance for high-volume print jobs.",
    imageUrl: "https://cdn.pixabay.com/photo/2017/05/11/03/11/printers-hp-large-2302607_640.jpg",
  },
  {
    title: "New Installations Reel",
    desc: "Recent installs across Mumbai and MMR.",
    imageUrl: "https://cdn.pixabay.com/photo/2020/08/22/11/40/technician-5508210_1280.jpg",
  },
];

const MachinesSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-highlight mb-2 block">
          Machines
        </span>
        <h2 className="section-title">Machines in action</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {machines.map((m) => (
          <div key={m.title} className="rounded-2xl border border-border bg-card p-6">
            <div className="h-36 rounded-xl overflow-hidden bg-slate-100">
              <img
                src={m.imageUrl}
                alt={m.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="mt-4 font-display font-bold text-navy">{m.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{m.desc}</p>
            <button className="mt-4 text-xs font-semibold text-navy hover:text-highlight transition-colors">
              Watch video
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MachinesSection;

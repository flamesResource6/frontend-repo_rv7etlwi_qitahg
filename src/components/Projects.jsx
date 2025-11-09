export default function Projects() {
  const projects = [
    {
      name: "Market Basket Analysis for Jaya Plastik Store",
      description:
        "Thesis project implementing Apriori and FP-Growth to uncover product associations and inform cross-selling strategies.",
      stack: ["Python", "Pandas", "Apriori", "FP-Growth"],
    },
    {
      name: "Remember Me – Document Reminder App",
      description:
        "Web-based reminder system that automates document follow-ups via scheduled email notifications across departments.",
      stack: ["Web", "Automation", "Email"],
    },
    {
      name: "P2H – Operational Vehicle Inspection",
      description:
        "Platform to streamline and track vehicle safety inspections, improving compliance and operational visibility.",
      stack: ["Web", "Forms", "Reporting"],
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-14" id="projects">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Selected Projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <div key={p.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
            <p className="mt-2 text-slate-600">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

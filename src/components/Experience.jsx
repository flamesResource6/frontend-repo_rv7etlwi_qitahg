export default function Experience() {
  const experiences = [
    {
      title: "Teaching Assistant - Digital Image Processing",
      org: "Kalimantan Institute of Technology",
      location: "Balikpapan",
      period: "February 2025 - July 2024",
      bullets: [
        "Developed teaching materials on transformation, histogram analysis, convolution, and segmentation.",
        "Guided final projects and coached students on real-world applications."
      ],
    },
    {
      title: "Teaching Assistant - Data Mining",
      org: "Kalimantan Institute of Technology",
      location: "Balikpapan",
      period: "July 2024 - December 2024",
      bullets: [
        "Delivered content on classification, regression, clustering, and association techniques.",
        "Mentored students in preprocessing and Python-based analysis."
      ],
    },
    {
      title: "IT Intern - Information Technology Department",
      org: "PT Indominco Mandiri",
      location: "Bontang",
      period: "July 2023 – September 2023",
      bullets: [
        "Built 'Remember Me'—a reminder app for cross-department document management with automated emails.",
        "Designed 'P2H'—a web platform for operational vehicle inspection to streamline safety checks."
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-14" id="experience">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Experience</h2>
      <div className="mt-6 grid gap-6">
        {experiences.map((exp) => (
          <article key={exp.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-slate-900">{exp.title}</h3>
              <span className="text-sm text-slate-500">{exp.period}</span>
            </div>
            <p className="mt-1 text-slate-600">{exp.org} • {exp.location}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

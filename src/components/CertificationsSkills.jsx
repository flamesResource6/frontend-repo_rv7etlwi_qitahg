export default function CertificationsSkills() {
  const certifications = [
    {
      title: "Associate Data Scientist (BNSP)",
      issuer: "BNSP",
      date: "October 2024",
      description:
        "National certification in Data Science covering data analysis, statistics, and programming for decision-making.",
    },
    {
      title: "Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka",
      issuer: "Bangkit Academy",
      date: "February 2024 – July 2024",
      description:
        "Comprehensive training in Data Analytics and Machine Learning focused on insights and model implementation.",
    },
    {
      title: "Health Policy Data Analytics for Data Scientists",
      issuer: "Ministry of Health Training Program",
      date: "August 2023",
      description:
        "Applying analytics to healthcare data to support data-driven public policy.",
    },
    {
      title: "Independent Study Program at Bisa.ai",
      issuer: "Bisa.ai",
      date: "August 2022 – December 2022",
      description:
        "Training in Data Analytics, Machine Learning, Full Stack Development, and IoT.",
    },
  ];

  const technical = [
    "Python (Pandas, Numpy, Matplotlib, Seaborn)",
    "SQL",
    "Data Cleaning & Transformation (ELT)",
    "Exploratory Data Analysis (EDA)",
    "Power BI & Tableau",
    "Excel & Google Sheets",
    "API Development",
    "Data Storytelling",
  ];

  const soft = [
    "Communication",
    "Problem Solving",
    "Time Management",
    "Collaboration",
    "Attention to Detail",
    "Adaptability",
    "Business Understanding",
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-14" id="skills">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Certifications & Skills</h2>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          {certifications.map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
                <span className="text-sm text-slate-500">{c.date}</span>
              </div>
              <p className="text-sm text-slate-600">{c.issuer}</p>
              <p className="mt-2 text-slate-600">{c.description}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Technical Skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {technical.map((skill) => (
                <span key={skill} className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Soft Skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {soft.map((skill) => (
                <span key={skill} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

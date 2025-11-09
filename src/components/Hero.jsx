import { Mail, MapPin, Phone, Linkedin, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-medium text-indigo-700">
              <Rocket className="h-4 w-4" /> Data Analytics & Machine Learning Portfolio
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Ahmad Maulana Rismadin
            </h1>
            <p className="mt-3 text-xl text-slate-600">
              Transforming data into actionable insights with precision and purpose. I bridge analytical rigor with practical storytelling to help teams make confident, data-driven decisions.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-slate-600">
              <span className="inline-flex items-center gap-2"><MapPin className="h-5 w-5 text-indigo-600" /> Mura Badak, Kutai Kartanegara, East Kalimantan, Indonesia</span>
              <a href="mailto:amrismadin@gmail.com" className="inline-flex items-center gap-2 hover:text-indigo-700 transition-colors"><Mail className="h-5 w-5 text-indigo-600" /> amrismadin@gmail.com</a>
              <a href="tel:+6282155672725" className="inline-flex items-center gap-2 hover:text-indigo-700 transition-colors"><Phone className="h-5 w-5 text-indigo-600" /> +62 821 5567 2725</a>
              <a href="https://linkedin.com/in/ahmad-maulana-rismadin/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-indigo-700 transition-colors"><Linkedin className="h-5 w-5 text-indigo-600" /> LinkedIn</a>
            </div>
          </div>
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <p className="text-sm font-semibold text-slate-700">About</p>
            <p className="mt-2 text-slate-600">
              Informatics Engineering graduate specializing in SQL, Python, and spreadsheet analytics. I design systems and analyses that turn raw data into clear, impactful decisions.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">
              <li className="rounded-lg bg-slate-50 p-3"><span className="font-semibold text-slate-800">Tools</span><br/>Python, SQL, Power BI, Tableau</li>
              <li className="rounded-lg bg-slate-50 p-3"><span className="font-semibold text-slate-800">Focus</span><br/>EDA, ELT, ML, Dashboards</li>
              <li className="rounded-lg bg-slate-50 p-3"><span className="font-semibold text-slate-800">Strengths</span><br/>Detail, Communication</li>
              <li className="rounded-lg bg-slate-50 p-3"><span className="font-semibold text-slate-800">Goal</span><br/>Impactful solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

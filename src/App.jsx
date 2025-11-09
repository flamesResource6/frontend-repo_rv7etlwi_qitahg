import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CertificationsSkills from './components/CertificationsSkills';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold tracking-tight">Ahmad Rismadin</a>
          <div className="hidden gap-6 text-sm font-medium text-slate-700 sm:flex">
            <a href="#experience" className="hover:text-indigo-700">Experience</a>
            <a href="#projects" className="hover:text-indigo-700">Projects</a>
            <a href="#skills" className="hover:text-indigo-700">Certifications & Skills</a>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <Hero />
      <Experience />
      <Projects />
      <CertificationsSkills />

      {/* Footer */}
      <footer className="mt-10 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-600">
          <p>
            Built with care to highlight impactful, data-driven work. Open to roles and collaborations in Data Analytics and Machine Learning.
          </p>
          <p className="mt-2">Contact: amrismadin@gmail.com • +62 821 5567 2725 • LinkedIn: linkedin.com/in/ahmad-maulana-rismadin/</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

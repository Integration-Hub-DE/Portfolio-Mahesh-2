import { experiences } from '@/data/portfolio';
import { Briefcase, CheckCircle2, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-sky-100 text-sky-700 text-sm font-medium">
            <Briefcase className="w-4 h-4" />
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Work Experience
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Five years of building data pipelines, analytics platforms, and
            enterprise data solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.role + exp.company}
              className={`relative flex flex-col sm:flex-row gap-6 mb-12 ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-0 sm:left-1/2 top-6 w-4 h-4 rounded-full bg-sky-500 ring-4 ring-white -translate-x-1/2 z-10" />

              {/* Spacer */}
              <div className="hidden sm:block sm:w-1/2" />

              {/* Card */}
              <div className="sm:w-1/2 pl-10 sm:pl-0 sm:px-8">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded-md bg-sky-600 text-white text-xs font-semibold">
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-sky-600 mb-3">
                    {exp.company}
                  </p>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach) => (
                      <li
                        key={ach}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2 className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

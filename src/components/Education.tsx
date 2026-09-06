import { education } from '@/data/portfolio';
import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-sky-100 text-sky-700 text-sm font-medium">
            <GraduationCap className="w-4 h-4" />
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-sky-600 mt-1">
                    {edu.institution}
                  </p>
                  <div className="inline-flex items-center gap-1.5 mt-2 text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </div>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

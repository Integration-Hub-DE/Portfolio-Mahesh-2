import { certifications } from '@/data/portfolio';
import { Award, BadgeCheck, Calendar, Hash } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-sky-100 text-sky-700 text-sm font-medium">
            <Award className="w-4 h-4" />
            Professional Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Certifications
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise across
            Azure, Microsoft Fabric, Databricks, and Power BI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.credentialId}
              className="group p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <BadgeCheck className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-medium text-sky-600 mt-1">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {cert.year}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Hash className="w-3 h-3" />
                      {cert.credentialId}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

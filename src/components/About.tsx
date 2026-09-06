import { personalInfo, techStack } from '@/data/portfolio';
// import { Mail, Phone, MapPin, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: bio */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-sky-50 text-sky-600 text-sm font-medium">
              <Briefcase className="w-4 h-4" />
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
              Turning raw data into{' '}
              <span className="text-sky-600">actionable insights</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            {/* Contact details */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-700">
                <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-sky-600" />
                </div>
                <span className="text-sm">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-sky-600" />
                </div>
                <span className="text-sm">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-sky-600" />
                </div>
                <span className="text-sm">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-sky-600" />
                </div>
                <span className="text-sm">Master of Computer Applications</span>
              </div>
            </div>
          </div>

          {/* Right: tech stack grid */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Technology Stack
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-sky-50 hover:border-sky-200 transition-all hover:scale-105"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-sky-100 transition-colors">
                      <Icon className="w-6 h-6 text-slate-700 group-hover:text-sky-600 transition-colors" />
                    </div>
                    <span className="text-xs font-medium text-slate-700 text-center">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { skillCategories } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-sky-100 text-sky-700 text-sm font-medium">
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Deep expertise across the Microsoft data platform, from data
            orchestration to analytics and visualization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-medium text-slate-700">
                          {skill.name}
                        </span>
                        {/* <span className="text-xs text-slate-500">
                          {skill.level}%
                        </span> */}
                      </div>
                      {/* <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-sky-500 to-teal-400 transition-all duration-700 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div> */}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

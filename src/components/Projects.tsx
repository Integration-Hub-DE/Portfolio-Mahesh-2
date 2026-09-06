import { projects } from '@/data/portfolio';
import { FolderGit2, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-sky-100 text-sky-700 text-sm font-medium">
            <FolderGit2 className="w-4 h-4" />
            Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Project Showcase
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            A selection of data engineering projects spanning pipeline
            architecture, lakehouse migration, and real-time analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              {/* Gradient header */}
              <div
                className={`relative h-32 bg-gradient-to-br ${project.gradient} p-5 overflow-hidden`}
              >
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
                <div className="absolute -bottom-12 -left-8 w-32 h-32 rounded-full bg-white/10" />
                <div className="relative flex items-start justify-between">
                  <FolderGit2 className="w-8 h-8 text-white/90" />
                  <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <p className="relative text-xs text-white/80 mt-3 font-medium">
                  {project.category}
                </p>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-4">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-xs text-slate-600"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { githubRepos, personalInfo } from '@/data/portfolio';
import { Github, Star, GitFork, ArrowUpRight } from 'lucide-react';

export default function GitHubRepos() {
  return (
    <section id="github" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
            <Github className="w-4 h-4" />
            Open Source
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            GitHub Repositories
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Open-source projects and utilities for the data engineering
            community.
          </p>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-colors"
          >
            <Github className="w-4 h-4" />
            Visit GitHub Profile
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {githubRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5 text-slate-700" />
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {repo.name}
                  </h3>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
                {repo.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-sky-500" />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5" />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3.5 h-3.5" />
                  {repo.forks}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

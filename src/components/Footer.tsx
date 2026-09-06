import { useState, useEffect } from 'react';
import { personalInfo } from '@/data/portfolio';
import { Github, Linkedin, Mail, Database, Heart, Eye } from 'lucide-react';

export default function Footer() {
  const [visitCount, setVisitCount] = useState<number>(0);

  useEffect(() => {
    const current = parseInt(localStorage.getItem('page_visits') || '0', 10);
    const newCount = current + 1;
    localStorage.setItem('page_visits', String(newCount));
    setVisitCount(newCount);
  }, []);

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Mahesh</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Data Engineer specializing in Azure Data Factory, Microsoft Fabric,
              Databricks, and Power BI.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#about" className="text-slate-400 hover:text-sky-400 transition-colors">About</a>
              <a href="#skills" className="text-slate-400 hover:text-sky-400 transition-colors">Skills</a>
              <a href="#experience" className="text-slate-400 hover:text-sky-400 transition-colors">Experience</a>
              <a href="#projects" className="text-slate-400 hover:text-sky-400 transition-colors">Projects</a>
              <a href="#certifications" className="text-slate-400 hover:text-sky-400 transition-colors">Certifications</a>
              <a href="#contact" className="text-slate-400 hover:text-sky-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Connect</h3>
            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500/20 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500/20 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500/20 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-500">
              (c) {new Date().getFullYear()} Mahesh. All rights reserved.
            </p>
            <span className="hidden sm:inline-block w-px h-3 bg-slate-700" />
            <div className="inline-flex items-center gap-1.5 text-xs text-slate-500">
              <Eye className="w-3.5 h-3.5 text-sky-500" />
              <span>
                <span className="font-semibold text-slate-300">
                  {visitCount.toLocaleString()}
                </span>{' '}
                visits
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-sky-500" /> using React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

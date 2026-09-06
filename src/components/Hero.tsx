import { Github, Linkedin, Download, ArrowDown, Sparkles } from 'lucide-react';
import { personalInfo, stats } from '@/data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Available for new opportunities
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
              Mahesh
            </span>
          </h1>

          {/* Role */}
          <p className="text-xl sm:text-2xl text-slate-300 font-medium mb-4">
            Data Engineer
          </p>

          {/* Tagline */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-8">
            {personalInfo.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-sky-500/30 hover:scale-105 transition-all"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}

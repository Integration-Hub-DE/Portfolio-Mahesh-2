import { personalInfo } from '@/data/portfolio';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium">
            <Mail className="w-4 h-4" />
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Work Together
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Have a data project in mind or just want to connect? Feel free to
            reach out through any of the channels below.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-400 mb-1">Email</p>
              <p className="text-sm font-medium text-white">
                {personalInfo.email}
              </p>
            </div>
          </a>

          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-400 mb-1">Phone</p>
              <p className="text-sm font-medium text-white">
                {personalInfo.phone}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-400 mb-1">Location</p>
              <p className="text-sm font-medium text-white">
                {personalInfo.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

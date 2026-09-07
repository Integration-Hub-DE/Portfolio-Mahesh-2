import { feedback } from '@/data/portfolio';
import { Quote, Star } from 'lucide-react';

export default function Feedback() {
  const items = [...feedback, ...feedback];

  return (
    <section id="feedback" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-sky-100 text-sky-700 text-sm font-medium">
            <Quote className="w-4 h-4" />
            What People Say
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Feedback &amp; Testimonials
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Feedback from colleagues, managers, and clients I've had the
            pleasure of working with throughout my data engineering journey.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 w-max animate-marquee items-start">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col w-80 sm:w-96 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm shrink-0"
            >
              <div className="mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Quote className="w-5 h-5 text-sky-500" />
                </div>
              </div>

              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">
                "{item.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-semibold text-sm shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-500">{item.from}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

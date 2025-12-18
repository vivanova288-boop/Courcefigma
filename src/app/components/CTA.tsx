import { ArrowRight, Plane, Globe } from 'lucide-react';

export function CTA() {
  return (
    <section id="enrollment" className="px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden p-12 md:p-16 bg-gradient-to-br from-teal-500/20 via-slate-800/50 to-amber-500/20 rounded-3xl border border-teal-500/30">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <Plane className="w-6 h-6 text-teal-400 animate-pulse" />
              <Globe className="w-6 h-6 text-amber-400 animate-pulse" />
            </div>

            <h2 className="mb-6 bg-gradient-to-r from-teal-300 via-white to-amber-300 bg-clip-text text-transparent">
              Запишитесь сейчас!
            </h2>

            <p className="mb-8 max-w-2xl mx-auto text-slate-300">
              Следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
            </p>

            <button className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-teal-500 to-amber-500 hover:from-teal-600 hover:to-amber-600 text-white rounded-xl transition-all shadow-2xl shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-105">
              <span>Записаться на курс</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span>Маленькие группы</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span>Практический подход</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span>Опытные преподаватели</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500">
            © 2025 Английский для путешествий. Все права защищены.
          </p>
        </div>
      </div>
    </section>
  );
}

import { Users } from 'lucide-react';

export function ForWhom() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <Users className="w-8 h-8 text-amber-400" />
          <h2 className="text-teal-300">Для кого курс</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-teal-500/20 hover:border-teal-500/40 transition-all hover:shadow-xl hover:shadow-teal-500/10">
            <div className="inline-block px-4 py-2 mb-4 bg-teal-500/20 rounded-full">
              <span className="text-teal-300">Первая группа</span>
            </div>
            <h3 className="mb-2 text-white">4–5 класс</h3>
            <p className="text-slate-400">
              Идеально для начинающих путешественников, которые хотят научиться базовым фразам для поездок за границу.
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all hover:shadow-xl hover:shadow-amber-500/10">
            <div className="inline-block px-4 py-2 mb-4 bg-amber-500/20 rounded-full">
              <span className="text-amber-300">Вторая группа</span>
            </div>
            <h3 className="mb-2 text-white">6–8 класс</h3>
            <p className="text-slate-400">
              Для тех, кто готов углубить знания и научиться уверенно общаться в любых ситуациях во время путешествий.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

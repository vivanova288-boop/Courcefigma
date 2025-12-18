import { DollarSign, Users, Star } from 'lucide-react';

export function Pricing() {
  return (
    <section className="px-4 py-16 md:py-24 bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <DollarSign className="w-8 h-8 text-teal-400" />
          <h2 className="text-teal-300">Стоимость</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-8 bg-gradient-to-br from-teal-500/10 to-teal-600/10 rounded-2xl border border-teal-500/30 hover:border-teal-500/50 transition-all hover:shadow-xl hover:shadow-teal-500/20">
            <div className="inline-flex px-4 py-2 mb-4 bg-teal-500/20 rounded-full">
              <span className="text-teal-300">Полный курс</span>
            </div>
            <div className="mb-4">
              <span className="text-white">10 уроков</span>
            </div>
            <div className="mb-2">
              <span className="text-teal-300">12 000 руб</span>
            </div>
            <p className="text-slate-400">Оптимальный вариант для прохождения полной программы</p>
          </div>

          <div className="p-8 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-2xl border border-amber-500/30 hover:border-amber-500/50 transition-all hover:shadow-xl hover:shadow-amber-500/20">
            <div className="inline-flex px-4 py-2 mb-4 bg-amber-500/20 rounded-full">
              <span className="text-amber-300">Абонемент</span>
            </div>
            <div className="mb-4">
              <span className="text-white">Разовая оплата</span>
            </div>
            <div className="mb-2">
              <span className="text-amber-300">1 300 руб / урок</span>
            </div>
            <p className="text-slate-400">Гибкий вариант оплаты за каждое занятие</p>
          </div>
        </div>

        <div className="p-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl border border-amber-500/20">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-amber-400" />
                <h3 className="text-white">Набор открыт!</h3>
              </div>
              <p className="text-slate-300 mb-2">
                Группы маленькие — максимум <span className="text-teal-300">6 детей</span>, 
                чтобы каждый получил внимание.
              </p>
              <p className="text-amber-300">Места ограничены!</p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/20 rounded-full border border-amber-500/30">
                <Users className="w-5 h-5 text-amber-400" />
                <span className="text-amber-300">Макс. 6 учеников</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

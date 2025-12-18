import { Clock, Calendar } from 'lucide-react';

const scheduleItems = [
  {
    group: 'Группа 4–5 класс',
    day: 'Четверг',
    time: '15:00 (МСК)',
    color: 'teal'
  },
  {
    group: 'Группа 6–8 класс',
    day: 'Пятница',
    time: '15:30 (МСК)',
    color: 'amber'
  }
];

export function Schedule() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <Calendar className="w-8 h-8 text-amber-400" />
          <h2 className="text-amber-300">Расписание</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {scheduleItems.map((item, index) => {
            const isTeal = item.color === 'teal';
            
            return (
              <div 
                key={index}
                className={`p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border ${
                  isTeal ? 'border-teal-500/30' : 'border-amber-500/30'
                } hover:${
                  isTeal ? 'border-teal-500/50' : 'border-amber-500/50'
                } transition-all`}
              >
                <div className={`inline-block px-4 py-2 mb-4 rounded-full ${
                  isTeal ? 'bg-teal-500/20' : 'bg-amber-500/20'
                }`}>
                  <span className={isTeal ? 'text-teal-300' : 'text-amber-300'}>
                    {item.group}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className={`w-5 h-5 ${isTeal ? 'text-teal-400' : 'text-amber-400'}`} />
                    <span className="text-white">{item.day}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className={`w-5 h-5 ${isTeal ? 'text-teal-400' : 'text-amber-400'}`} />
                    <span className="text-white">{item.time}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-teal-500/10 to-amber-500/10 rounded-2xl border border-teal-500/20 text-center">
          <p className="text-slate-300">
            <span className="text-amber-400">⏰</span> Продолжительность курса:{' '}
            <span className="text-teal-300">10 уроков</span>
          </p>
        </div>
      </div>
    </section>
  );
}

import { Monitor, Headphones, Wifi } from 'lucide-react';

const requirements = [
  {
    icon: Monitor,
    title: 'Компьютер',
    description: 'Стационарный компьютер или ноутбук'
  },
  {
    icon: Headphones,
    title: 'Аудио',
    description: 'Наушники и микрофон'
  },
  {
    icon: Wifi,
    title: 'Интернет',
    description: 'Стабильный интернет и Zoom'
  }
];

export function Requirements() {
  return (
    <section className="px-4 py-16 md:py-24 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-teal-300">Что потребуется</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {requirements.map((req, index) => {
            const Icon = req.icon;
            
            return (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-teal-500/20 hover:border-teal-500/40 transition-all text-center"
              >
                <div className="inline-flex p-4 mb-4 bg-teal-500/20 rounded-2xl">
                  <Icon className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="mb-2 text-white">{req.title}</h3>
                <p className="text-slate-400">{req.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

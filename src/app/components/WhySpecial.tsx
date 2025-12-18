import { Sparkles, MessageCircle, Globe, Star } from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'Практическая речь',
    description: 'Акцент на практическую, живую речь, а не на грамматику ради грамматики.'
  },
  {
    icon: Globe,
    title: 'Реальные ситуации',
    description: 'Все ситуации — из реальной жизни путешественника.'
  },
  {
    icon: Sparkles,
    title: 'Интерактивные задания',
    description: 'Ролевые игры, аудиоситуации, мини-квесты для захватывающего обучения.'
  },
  {
    icon: Star,
    title: 'Достижение уровня A2–B1',
    description: 'Ребёнок выходит на уровень Pre-Intermediate за курс.'
  }
];

export function WhySpecial() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 bg-gradient-to-r from-amber-300 to-teal-300 bg-clip-text text-transparent">
            Почему этот курс особенный?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all hover:shadow-xl hover:shadow-amber-500/10 text-center"
              >
                <div className="inline-flex p-4 mb-4 bg-gradient-to-br from-amber-500/20 to-teal-500/20 rounded-2xl">
                  <Icon className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="mb-2 text-white">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

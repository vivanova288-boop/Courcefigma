import { Plane, Hotel, Utensils, MapPin, Shield, Camera, MessageCircle, Trophy } from 'lucide-react';

const programItems = [
  {
    icon: Plane,
    title: '1. Аэропорт без стресса',
    description: 'Регистрация, паспортный контроль, вопросы на таможне — всё на английском.',
    benefit: 'Уверенность уже в первые часы за границей.',
    color: 'teal'
  },
  {
    icon: Hotel,
    title: '2. В отеле: заселение и помощь',
    description: 'Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.',
    benefit: 'Практика вежливых фраз и повседневной лексики.',
    color: 'amber'
  },
  {
    icon: Utensils,
    title: '3. Кафе и рестораны',
    description: 'Заказ еды, вопросы про аллергены, счёт и чаевые.',
    benefit: 'Развитие гастрономического словаря и уверенности в общении.',
    color: 'teal'
  },
  {
    icon: MapPin,
    title: '4. На улице: ориентирование и просьбы',
    description: 'Как спросить дорогу, вызвать такси или найти аптеку.',
    benefit: 'Понимание устной речи и произношения в реальных ситуациях.',
    color: 'amber'
  },
  {
    icon: Shield,
    title: '5. Экстренные случаи',
    description: 'Потеря вещей, болезнь, помощь полиции — всё это на английском.',
    benefit: 'Важные фразы, которые могут спасти отпуск.',
    color: 'teal'
  },
  {
    icon: Camera,
    title: '6. Туризм и развлечения',
    description: 'Покупка билетов, экскурсии, общение с гидами, музеи и парки.',
    benefit: 'Погружение в культурный контекст через язык.',
    color: 'amber'
  },
  {
    icon: MessageCircle,
    title: '7. Дружба в путешествиях',
    description: 'Как познакомиться с другими детьми или подростками за границей.',
    benefit: 'Игровая практика диалогов и неформального общения.',
    color: 'teal'
  },
  {
    icon: Trophy,
    title: '8. Дипломный проект: «Мой идеальный отпуск»',
    description: 'Ребёнок планирует воображаемое путешествие и представляет его на английском.',
    benefit: 'Развитие связной речи и творческого самовыражения.',
    color: 'amber'
  }
];

export function Program() {
  return (
    <section id="program" className="px-4 py-16 md:py-24 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 bg-gradient-to-r from-teal-300 to-amber-300 bg-clip-text text-transparent">
            Программа курса
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Практический курс из 8 модулей, охватывающих все важные ситуации в путешествиях
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {programItems.map((item, index) => {
            const Icon = item.icon;
            const isTeaol = item.color === 'teal';
            
            return (
              <div 
                key={index}
                className={`p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border ${
                  isTeaol ? 'border-teal-500/20 hover:border-teal-500/40' : 'border-amber-500/20 hover:border-amber-500/40'
                } transition-all hover:shadow-xl ${
                  isTeaol ? 'hover:shadow-teal-500/10' : 'hover:shadow-amber-500/10'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${
                    isTeaol ? 'bg-teal-500/20' : 'bg-amber-500/20'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      isTeaol ? 'text-teal-400' : 'text-amber-400'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-white">{item.title}</h3>
                    <p className="mb-3 text-slate-400">{item.description}</p>
                    <div className={`flex items-start gap-2 px-3 py-2 rounded-lg ${
                      isTeaol ? 'bg-teal-500/10' : 'bg-amber-500/10'
                    }`}>
                      <span className={`mt-1 ${
                        isTeaol ? 'text-teal-400' : 'text-amber-400'
                      }`}>👉</span>
                      <span className={`${
                        isTeaol ? 'text-teal-300' : 'text-amber-300'
                      }`}>{item.benefit}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

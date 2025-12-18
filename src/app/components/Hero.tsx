import { Plane, Globe } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 md:py-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-teal-500/20 to-amber-500/20 rounded-full border border-teal-500/30">
          <Globe className="w-5 h-5 text-teal-400" />
          <span className="text-teal-300">Английский для путешествий</span>
          <Plane className="w-5 h-5 text-amber-400" />
        </div>

        <h1 className="mb-8 bg-gradient-to-r from-teal-300 via-amber-300 to-teal-300 bg-clip-text text-transparent">
          Курс «Английский для путешествий»
        </h1>

        <p className="mb-12 max-w-3xl mx-auto text-slate-300">
          Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
          Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится 
          в отпуске, поездках и будущих путешествиях!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#enrollment" 
            className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-lg transition-all shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-105"
          >
            Записаться на курс
          </a>
          <a 
            href="#program" 
            className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-teal-300 border border-teal-500/30 rounded-lg transition-all"
          >
            Узнать подробнее
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HeroSv() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 pt-24 pb-12 md:pt-28 md:pb-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Numbers - Decorative */}
        <div className="absolute top-10 left-[10%] text-8xl font-bold text-blue-200/30 animate-float">2</div>
        <div className="absolute top-32 right-[15%] text-7xl font-bold text-indigo-200/30 animate-float-delayed">×</div>
        <div className="absolute bottom-20 left-[20%] text-6xl font-bold text-purple-200/30 animate-float">5</div>
        <div className="absolute top-1/2 right-[8%] text-9xl font-bold text-sky-200/30 animate-float-delayed">3</div>
        <div className="absolute bottom-32 right-[25%] text-7xl font-bold text-blue-200/30 animate-float">=</div>
        
        {/* Colorful Circles */}
        <div className="absolute top-20 right-[30%] w-32 h-32 bg-yellow-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-[15%] w-40 h-40 bg-pink-200/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 left-[40%] w-24 h-24 bg-green-200/20 rounded-full blur-2xl"></div>
      </div>

      {/* Main Content */}
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-blue-100 mb-6">
            <span className="text-2xl">🎓</span>
            <span className="text-sm font-medium text-blue-700">Roligt Lärande från 1 till 100</span>
          </div>

          {/* H1 - Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Multiplikationstabeller
            </span>
            <br />
            <span className="text-slate-800">Lär dig, Förstå och Öva</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Multiplikationstabellen är en av matematikens grundstenar. 
            På denna plattform kommer du inte bara att <span className="font-semibold text-blue-600">memorera multiplikationstabellen</span>, 
            utan också lära dig den permanent genom att <span className="font-semibold text-indigo-600">förstå logiken</span> och 
            öva regelbundet.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#learning-paths" 
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              <span>Börja Lära Dig</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="#definition" 
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border border-blue-100"
            >
              Hur Fungerar Det?
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-blue-100/50">
              <div className="text-3xl font-bold text-blue-600 mb-1">100</div>
              <div className="text-sm text-slate-600">Multiplikationstabeller</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-indigo-100/50">
              <div className="text-3xl font-bold text-indigo-600 mb-1">10</div>
              <div className="text-sm text-slate-600">Nivåintervall</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-purple-100/50">
              <div className="text-3xl font-bold text-purple-600 mb-1">∞</div>
              <div className="text-sm text-slate-600">Övningar</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

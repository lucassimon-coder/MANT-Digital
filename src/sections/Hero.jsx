import { trackPresupuestoClick, trackEvent } from '../utils/analytics'

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-6 pb-14 sm:pt-10 sm:pb-20 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1.12] animate-fade-in-up">
              Landing pages que hacen crecer tu negocio.
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-zinc-500 font-normal leading-relaxed max-w-lg animate-fade-in-up animation-delay-200">
              Diseño y desarrollo web personalizado para empresas y emprendimientos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2 animate-fade-in-up animation-delay-300">
              <a
                href="#contacto"
                onClick={() => trackPresupuestoClick('hero_section')}
                className="inline-flex items-center justify-center px-7 py-3.5 min-h-[48px] text-base font-semibold text-white bg-zinc-950 rounded-xl transition-all duration-300 ease-in-out hover:bg-zinc-800 hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-md text-center"
              >
                Quiero mi landing
              </a>
              <a
                href="#proyectos"
                onClick={() => trackEvent('click_view_projects', { location: 'hero_section' })}
                className="inline-flex items-center justify-center px-7 py-3.5 min-h-[48px] text-base font-medium text-zinc-900 bg-white border border-zinc-200 rounded-xl transition-all duration-300 ease-in-out hover:bg-zinc-50 hover:border-zinc-300 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Ver proyectos
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in animation-delay-400">
            <div className="relative w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-200/80 bg-zinc-50 shadow-sm transition-all duration-300 hover:border-zinc-300">
                <img
                  src="/img/hero.webp"
                  alt="Mockup de landing page Mantuani Digital"
                  fetchPriority="high"
                  loading="eager"
                  className="w-full h-auto object-cover block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

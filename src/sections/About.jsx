import { useEffect, useRef, useState } from 'react'

const attributes = [
  {
    title: 'Personalizado',
    description: 'Cada proyecto se adapta al negocio.',
  },
  {
    title: 'Directo',
    description: 'Comunicación clara durante todo el proceso.',
  },
  {
    title: 'Orientado a resultados',
    description: 'Diseños pensados para generar contactos.',
  },
]

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="sobre-mi" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-white relative overflow-hidden border-t border-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Founder Photograph */}
          <div 
            style={{ transitionDelay: '150ms' }}
            className={`lg:col-span-5 transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 ring-1 ring-zinc-900/5 shadow-sm border border-zinc-200/60 group">
              <img
                src="/img/desarrollando.webp"
                alt="Lucas Mantuani - Desarrollador y fundador de Mantuani Digital"
                loading="lazy"
                className="w-full h-full object-cover object-center block transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Column 2: Narrative & Value Attributes */}
          <div 
            style={{ transitionDelay: '300ms' }}
            className={`lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8 transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Kicker Tag */}
            <div>
              <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase font-mono">
                Detrás de MANTUANI DIGITAL
              </span>
            </div>

            {/* Main Narrative Headings */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 leading-snug tracking-tight">
                Soy Lucas Mantuani, desarrollador web enfocado en crear experiencias digitales modernas para negocios que quieren crecer.
              </h2>
              <p className="text-lg md:text-xl text-zinc-500 font-normal leading-relaxed">
                Combino diseño, tecnología y estrategia para transformar ideas en páginas web profesionales.
              </p>
            </div>

            {/* 3 Core Attributes Grid */}
            <div className="pt-6 border-t border-zinc-100">
              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {attributes.map((attr, index) => (
                  <div 
                    key={attr.title}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                    className={`space-y-1 transition-all duration-700 ease-out transform ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <dt className="text-base font-bold text-zinc-900 tracking-tight">
                      {attr.title}
                    </dt>
                    <dd className="text-sm text-zinc-500 leading-relaxed">
                      {attr.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

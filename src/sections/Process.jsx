import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    number: '01',
    title: 'Hablamos',
    description: 'Conozco tu negocio y tus objetivos.',
  },
  {
    number: '02',
    title: 'Diseñamos',
    description: 'Creamos una propuesta visual para tu marca.',
  },
  {
    number: '03',
    title: 'Desarrollamos',
    description: 'Convierto el diseño en una web funcional.',
  },
  {
    number: '04',
    title: 'Publicamos',
    description: 'Tu landing queda lista para recibir clientes.',
  },
]

export default function Process() {
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
      id="proceso" 
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-28 lg:py-32 bg-zinc-50 relative overflow-hidden border-t border-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Header + Timeline Steps */}
          <div className="flex flex-col">
            {/* Section Header */}
            <div 
              className={`space-y-4 mb-10 sm:mb-12 md:mb-16 transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200/80 text-xs font-medium text-zinc-700">
                <span>Flujo de trabajo</span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
                Un proceso simple. Un resultado profesional.
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-zinc-500 font-normal leading-relaxed">
                Desde la primera idea hasta la publicación, me encargo del proceso.
              </p>
            </div>

            {/* Timeline Steps List */}
            <ol className="relative border-l-2 border-zinc-200/80 ml-3 pl-6 sm:ml-4 sm:pl-8 md:ml-6 md:pl-10 space-y-10 sm:space-y-12 list-none p-0 m-0">
              {steps.map((step, index) => (
                <li
                  key={step.number}
                  style={{ transitionDelay: `${(index + 1) * 120}ms` }}
                  className={`relative group transition-all duration-700 ease-out transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                >
                  {/* Node bullet on the timeline border */}
                  <span className="absolute -left-[33px] sm:-left-[41px] md:-left-[49px] top-1 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white ring-4 ring-zinc-50 border-2 border-zinc-300 group-hover:border-zinc-900 transition-colors duration-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 group-hover:bg-zinc-900 transition-colors duration-300" />
                  </span>

                  {/* Step Content */}
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 group-hover:text-zinc-700 transition-colors duration-300">
                      ETAPA {step.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight mt-1">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-500 leading-relaxed mt-1">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Right Column: Sticky Visual Asset */}
          <div 
            style={{ transitionDelay: '300ms' }}
            className={`lg:sticky lg:top-32 transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden bg-white ring-1 ring-zinc-900/5 shadow-sm border border-zinc-200/80 transition-all duration-300 hover:border-zinc-300">
              <img
                src="/img/proceso.webp"
                alt="Proceso de trabajo: Idea, Diseño, Desarrollo y Publicación"
                loading="lazy"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

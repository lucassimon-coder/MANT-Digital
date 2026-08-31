import { useEffect, useRef, useState } from 'react'

const concepts = [
  {
    title: 'Presencia',
    description: 'Mostrá tu negocio profesionalmente.',
    step: '01',
    icon: (
      <svg className="w-5 h-5 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'Confianza',
    description: 'Generá una mejor primera impresión.',
    step: '02',
    icon: (
      <svg className="w-5 h-5 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Conversión',
    description: 'Facilitá que tus clientes te contacten.',
    step: '03',
    icon: (
      <svg className="w-5 h-5 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
]

export default function ValueProposition() {
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
      { threshold: 0.12 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="propuesta" 
      ref={sectionRef} 
      className="py-20 md:py-32 bg-white relative overflow-hidden border-t border-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div 
          className={`max-w-3xl mx-auto text-center space-y-4 transition-all duration-700 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
            Tu negocio merece una presencia digital a la altura.
          </h2>
          <p className="text-lg md:text-xl text-zinc-500 font-normal leading-relaxed">
            Una web profesional para mostrar lo que hacés, generar confianza y facilitar el contacto con tus clientes.
          </p>
        </div>

        {/* 3 Value Pillars Grid */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {concepts.map((concept, index) => (
            <div
              key={concept.title}
              style={{ transitionDelay: `${(index + 1) * 120}ms` }}
              className={`p-8 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 hover:bg-zinc-50/90 transition-all duration-500 ease-out flex flex-col justify-between transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-white border border-zinc-200/80 flex items-center justify-center shadow-xs">
                    {concept.icon}
                  </div>
                  <span className="text-xs font-semibold tracking-wider text-zinc-400 font-mono">
                    {concept.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 tracking-tight mb-2">
                  {concept.title}
                </h3>
                <p className="text-base text-zinc-500 leading-relaxed">
                  {concept.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Conceptual Visual Asset */}
        <div 
          style={{ transitionDelay: '450ms' }}
          className={`mt-14 md:mt-20 max-w-4xl mx-auto transition-all duration-700 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden border border-zinc-200/80 bg-zinc-50 shadow-sm transition-all duration-300 hover:border-zinc-300">
            <img
              src="/img/IGaWEB.webp"
              alt="Transformación de redes sociales a sitio web profesional"
              loading="lazy"
              className="w-full h-auto object-contain block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

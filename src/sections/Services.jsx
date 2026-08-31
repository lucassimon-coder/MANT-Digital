import { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: 'Diseño personalizado',
    description: 'Adaptado a tu marca.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: 'Responsive',
    description: 'Perfecta en celular y computadora.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'WhatsApp',
    description: 'Contacto directo con tus clientes.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Optimización',
    description: 'Rápida y preparada para buscadores.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'SEO básico',
    description: 'Estructura preparada para Google.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Publicación',
    description: 'Tu web lista para compartir.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function Services() {
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
      id="servicios" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-zinc-50/70 relative overflow-hidden border-t border-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div 
          className={`max-w-3xl mb-14 md:mb-20 space-y-4 transition-all duration-700 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200/80 text-xs font-medium text-zinc-700">
            <span>Servicios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
            Todo lo necesario para estar online.
          </h2>
          <p className="text-lg md:text-xl text-zinc-500 font-normal leading-relaxed">
            Una landing page diseñada para tu negocio, sin complicaciones.
          </p>
        </div>

        {/* 2-Column Layout: Visual Asset + 6 Feature Items */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Visual Asset (Image) */}
          <div 
            style={{ transitionDelay: '200ms' }}
            className={`lg:col-span-5 h-full flex items-center transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-200/80 bg-white shadow-sm transition-all duration-300 hover:border-zinc-300">
              <img
                src="/img/desarrollando.webp"
                alt="Diseño y desarrollo web para negocios"
                loading="lazy"
                className="w-full h-[360px] sm:h-[440px] lg:h-[520px] object-cover object-center block"
              />
            </div>
          </div>

          {/* 6 Services Sub-Grid */}
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 list-none p-0 m-0">
              {services.map((service, index) => (
                <li
                  key={service.title}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  className={`p-6 rounded-2xl bg-white border border-zinc-200/80 hover:border-zinc-300 hover:shadow-xs transition-all duration-300 ease-out flex flex-col justify-start transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-center mb-4 text-zinc-900 shadow-xs">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 tracking-tight mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-zinc-500 leading-relaxed">
                    {service.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

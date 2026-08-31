import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    category: 'Inmobiliaria',
    description: 'Presencia profesional para captar clientes y propiedades.',
    image: '/img/webServicios.webp',
    alt: 'Mockup de landing page para empresa inmobiliaria',
  },
  {
    category: 'Restaurante',
    description: 'Una experiencia digital pensada para mostrar y convertir.',
    image: '/img/hero.webp',
    alt: 'Mockup de landing page para restaurante y gastronomía',
  },
  {
    category: 'Barbería',
    description: 'Diseño moderno para reservas y presentación de servicios.',
    image: '/img/webBarberia.webp',
    alt: 'Mockup de landing page para barbería y estética',
  },
  {
    category: 'Clínica',
    description: 'Una presencia clara y profesional para generar confianza.',
    image: '/img/webMedica.webp',
    alt: 'Mockup de landing page para clínica y profesionales de salud',
  },
]

export default function Projects() {
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
      id="proyectos" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-white relative overflow-hidden border-t border-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 md:mb-24 space-y-4 transition-all duration-700 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-xs font-medium text-zinc-700">
            <span>Proyectos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
            Diseños pensados para cada negocio.
          </h2>
          <p className="text-lg md:text-xl text-zinc-500 font-normal leading-relaxed">
            Cada proyecto tiene una identidad propia. La web se adapta a tu negocio, no al revés.
          </p>
        </div>

        {/* Asymmetrical Editorial Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1
            return (
              <article
                key={project.category}
                style={{ transitionDelay: `${(index + 1) * 120}ms` }}
                className={`group flex flex-col ${isEven ? 'md:mt-16' : ''} transition-all duration-700 ease-out transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Visual Card Container */}
                <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 ring-1 ring-zinc-900/5 shadow-xs transition-all duration-500">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 block"
                  />
                </div>

                {/* Project Metadata */}
                <div className="mt-6 flex flex-col items-start text-left">
                  <h3 className="text-xl font-bold text-zinc-900 tracking-tight transition-colors duration-300 group-hover:text-zinc-700">
                    {project.category}
                  </h3>
                  <p className="text-base text-zinc-500 leading-relaxed mt-1">
                    {project.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

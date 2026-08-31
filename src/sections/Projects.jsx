import { useEffect, useRef, useState } from 'react'
import { trackEvent } from '../utils/analytics'

const projects = [
  {
    category: 'Hotel Las Gaviotas',
    description: 'Landing page con experiencia inmersiva, catálogo de habitaciones y sistema interactivo de reservas para maximizar conversiones directas.',
    image: '/img/weblasgaviotas.webp',
    alt: 'Landing page Hotel Las Gaviotas - MANT DIGITAL',
    url: 'https://hotellasgaviotasmdc.netlify.app',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Jest'],
  },
  {
    category: 'Restaurante',
    description: 'Una experiencia digital pensada para mostrar y convertir.',
    image: '/img/hero.webp',
    alt: 'Mockup de landing page para restaurante y gastronomía',
    url: null,
    tags: ['React', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Barbería',
    description: 'Diseño moderno para reservas y presentación de servicios.',
    image: '/img/webBarberia.webp',
    alt: 'Mockup de landing page para barbería y estética',
    url: null,
    tags: ['React', 'Tailwind CSS', 'Mobile First'],
  },
  {
    category: 'Clínica',
    description: 'Una presencia clara y profesional para generar confianza.',
    image: '/img/webMedica.webp',
    alt: 'Mockup de landing page para clínica y profesionales de salud',
    url: null,
    tags: ['React', 'Tailwind CSS', 'SEO'],
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

  const handleProjectClick = (category, url) => {
    if (url) {
      trackEvent('click_project_external', {
        project_category: category,
        target_url: url,
      })
    }
  }

  return (
    <section 
      id="proyectos" 
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-28 lg:py-32 bg-white relative overflow-hidden border-t border-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div 
          className={`max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-24 space-y-4 transition-all duration-700 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-xs font-medium text-zinc-700">
            <span>Proyectos</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
            Diseños pensados para cada negocio.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-500 font-normal leading-relaxed">
            Cada proyecto tiene una identidad propia. La web se adapta a tu negocio, no al revés.
          </p>
        </div>

        {/* Asymmetrical Editorial Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1
            const CardWrapper = project.url ? 'a' : 'div'
            const wrapperProps = project.url 
              ? {
                  href: project.url,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  onClick: () => handleProjectClick(project.category, project.url),
                  className: 'cursor-pointer block focus-visible:ring-2 focus-visible:ring-zinc-900 rounded-2xl'
                }
              : { className: 'block' }

            return (
              <article
                key={project.category}
                style={{ transitionDelay: `${(index + 1) * 120}ms` }}
                className={`group flex flex-col ${isEven ? 'md:mt-16' : ''} transition-all duration-700 ease-out transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <CardWrapper {...wrapperProps}>
                  {/* Visual Card Container */}
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 ring-1 ring-zinc-900/5 shadow-xs transition-all duration-500">
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 block"
                    />
                    {project.url && (
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-xs text-xs font-medium text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                        <span>Ver sitio</span>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Project Metadata */}
                  <div className="mt-5 sm:mt-6 flex flex-col items-start text-left">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight transition-colors duration-300 group-hover:text-zinc-700">
                        {project.category}
                      </h3>
                      {project.url && (
                        <svg className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-zinc-500 leading-relaxed mt-1">
                      {project.description}
                    </p>

                    {/* Technology Badges */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 font-medium border border-zinc-200/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </CardWrapper>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { trackWhatsAppClick, trackPresupuestoClick } from '../utils/analytics'

const WHATSAPP_PRESUPUESTO_URL = "https://wa.me/59892979142?text=Hola%20Lucas,%20quiero%20solicitar%20un%20presupuesto%20para%20la%20web%20de%20mi%20negocio."
const WHATSAPP_CONSULTA_URL = "https://wa.me/59892979142?text=Hola%20Lucas,%20tengo%20una%20consulta%20sobre%20tus%20servicios%20web."

export default function Cta() {
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
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="contacto" 
      ref={sectionRef}
      className="py-16 sm:py-24 md:py-32 lg:py-40 bg-zinc-50/50 relative overflow-hidden border-t border-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200/80 text-xs font-medium text-zinc-700 mb-6 transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span>Contacto</span>
          </div>

          {/* Heading */}
          <h2 
            style={{ transitionDelay: '100ms' }}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-tight mb-6 transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            ¿Listo para llevar tu negocio a internet?
          </h2>

          {/* Subtitle */}
          <p 
            style={{ transitionDelay: '200ms' }}
            className={`text-base sm:text-lg md:text-xl text-zinc-500 font-normal leading-relaxed mb-10 max-w-2xl mx-auto transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Contame qué necesitás y hablamos sobre tu proyecto.
          </p>

          {/* Buttons Container */}
          <div 
            style={{ transitionDelay: '300ms' }}
            className={`flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href={WHATSAPP_PRESUPUESTO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackPresupuestoClick('cta_section')}
              aria-label="Solicitar presupuesto por WhatsApp a Lucas Mantuani"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 min-h-[48px] text-base font-semibold text-white bg-zinc-950 rounded-xl transition-all duration-300 ease-in-out hover:bg-zinc-800 hover:-translate-y-1 active:translate-y-0 shadow-sm hover:shadow-md text-center"
            >
              Solicitar presupuesto
            </a>
            <a
              href={WHATSAPP_CONSULTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('cta_section')}
              aria-label="Hablar por WhatsApp con Lucas Mantuani"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 min-h-[48px] text-base font-semibold text-zinc-900 bg-white border-2 border-zinc-200 rounded-xl transition-all duration-300 ease-in-out hover:bg-zinc-50 hover:border-zinc-300 hover:-translate-y-1 active:translate-y-0 text-center shadow-2xs"
            >
              Hablar por WhatsApp
            </a>
          </div>

          {/* Reassurance text */}
          <p 
            style={{ transitionDelay: '400ms' }}
            className={`text-sm text-zinc-400 mt-8 font-medium transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Respondo personalmente tus consultas.
          </p>
        </div>
      </div>
    </section>
  )
}

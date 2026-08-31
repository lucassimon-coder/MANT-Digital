import { trackWhatsAppClick, trackPresupuestoClick, trackEvent } from '../utils/analytics'

const navLinks = [
  { name: 'Inicio', href: '#inicio', ariaLabel: 'Ir a la sección de Inicio' },
  { name: 'Servicios', href: '#servicios', ariaLabel: 'Ir a la sección de Servicios' },
  { name: 'Proyectos', href: '#proyectos', ariaLabel: 'Ir a la sección de Proyectos' },
  { name: 'Proceso', href: '#proceso', ariaLabel: 'Ir a la sección de Proceso de trabajo' },
  { name: 'Sobre mí', href: '#sobre-mi', ariaLabel: 'Ir a la sección Sobre mí' },
  { name: 'Contacto', href: '#contacto', ariaLabel: 'Ir a la sección de Contacto' },
]

const contactLinks = [
  { 
    name: 'WhatsApp', 
    href: 'https://wa.me/59892979142?text=Hola%20Lucas,%20quiero%20consultar%20por%20una%20landing%20page%20para%20mi%20negocio.', 
    ariaLabel: 'Contactar por WhatsApp a Mantuani Digital',
    onClick: () => trackWhatsAppClick('footer')
  },
  { 
    name: 'Instagram', 
    href: 'https://instagram.com/mantdigital', 
    ariaLabel: 'Ir al perfil de Instagram de Mantuani Digital',
    onClick: () => trackEvent('click_instagram', { location: 'footer' })
  },
  { 
    name: 'Email', 
    href: 'mailto:contacto@mantdigital.com', 
    ariaLabel: 'Enviar un email a Mantuani Digital',
    onClick: () => trackPresupuestoClick('footer_email')
  },
]

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Column 1: Brand & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <a 
              href="#inicio" 
              className="inline-block transition-opacity duration-300 hover:opacity-100 focus-visible:ring-2 focus-visible:ring-white rounded-lg p-1 min-h-[44px]"
              aria-label="MANTUANI DIGITAL - Volver al inicio"
            >
              <img
                src="/img/logo.webp"
                alt="Logo de MANTUANI DIGITAL"
                className="h-8 sm:h-9 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Diseño & desarrollo web para negocios. Landing pages minimalistas, rápidas y orientadas a la conversión.
            </p>
            
            {/* Real-time Status Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-medium shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Disponible para nuevos proyectos</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-200">
              Navegación
            </h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    aria-label={link.ariaLabel}
                    className="text-sm text-zinc-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Channels (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-200">
              Contacto
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {contactLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    aria-label={item.ariaLabel}
                    onClick={item.onClick}
                    target={item.href.startsWith('http') ? "_blank" : undefined}
                    rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-sm text-zinc-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-2 py-0.5"
                  >
                    <span>{item.name}</span>
                    {item.href.startsWith('http') && (
                      <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-zinc-800/80 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>© 2026 MANTUANI DIGITAL. Todos los derechos reservados.</p>
          <p className="text-zinc-500">
            Diseñado & Desarrollado para el crecimiento de tu negocio.
          </p>
        </div>
      </div>
    </footer>
  )
}

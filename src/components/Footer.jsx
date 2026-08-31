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
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 sm:pb-16">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-6 space-y-4">
            <a 
              href="#inicio" 
              className="inline-block transition-opacity duration-300 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-white rounded-lg p-1 min-h-[44px]"
              aria-label="MANTUANI DIGITAL - Volver al inicio"
            >
              <img
                src="/img/logo.webp"
                alt="Logo de MANTUANI DIGITAL"
                className="h-8 w-auto object-contain brightness-0 invert opacity-90"
              />
            </a>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Diseño & desarrollo web para negocios. Landing pages minimalistas, rápidas y orientadas a la conversión.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Navegación
            </h3>
            <ul className="space-y-1 list-none p-0 m-0">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    aria-label={link.ariaLabel}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 inline-flex items-center min-h-[36px] py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Channels */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Contacto
            </h3>
            <ul className="space-y-1 list-none p-0 m-0">
              {contactLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    aria-label={item.ariaLabel}
                    onClick={item.onClick}
                    target={item.href.startsWith('http') ? "_blank" : undefined}
                    rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 inline-flex items-center min-h-[36px] py-1"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 MANTUANI DIGITAL. Todos los derechos reservados.</p>
          <p className="text-zinc-500">
            Diseñado & Desarrollado para el crecimiento de tu negocio.
          </p>
        </div>
      </div>
    </footer>
  )
}

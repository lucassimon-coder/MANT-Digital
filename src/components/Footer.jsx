const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Sobre mí', href: '#sobre-mi' },
  { name: 'Contacto', href: '#contacto' },
]

const contactLinks = [
  { name: 'WhatsApp', href: 'https://wa.me/' },
  { name: 'Instagram', href: 'https://instagram.com/' },
  { name: 'Email', href: 'mailto:contacto@mantdigital.com' },
]

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-6 space-y-4">
            <a 
              href="#inicio" 
              className="inline-block transition-opacity duration-300 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-white rounded-lg"
              aria-label="MANT Digital - Volver arriba"
            >
              <img
                src="/img/logo.webp"
                alt="MANT Digital Logo"
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
            <ul className="space-y-2.5 list-none p-0 m-0">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 inline-block py-0.5"
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
            <ul className="space-y-2.5 list-none p-0 m-0">
              {contactLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 inline-block py-0.5"
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

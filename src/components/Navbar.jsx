import { useState } from 'react'

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Sobre mí', href: '#sobre-mi' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-zinc-100 transition-all duration-300">
      <nav aria-label="Navegación principal" className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#inicio" 
          className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-zinc-900 rounded-lg p-1 min-h-[44px]"
          aria-label="MANT Digital - Volver al inicio"
        >
          <img 
            src="/img/logo.webp" 
            alt="MANT Digital" 
            className="h-8 md:h-9 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 list-none p-0 m-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative py-2 text-sm font-medium text-zinc-600 transition-all duration-300 ease-in-out hover:text-zinc-950 group inline-block"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-zinc-950 transition-all duration-300 ease-in-out group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-5 py-2.5 min-h-[44px] text-sm font-medium text-white bg-zinc-950 rounded-xl transition-all duration-300 ease-in-out hover:bg-zinc-800 hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow"
          >
            Contacto
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={toggleMenu}
            className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-all duration-300 ease-in-out focus-visible:ring-2 focus-visible:ring-zinc-900"
            aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg 
                className="w-6 h-6 transition-transform duration-300 transform rotate-90" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg 
                className="w-6 h-6 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-zinc-100 bg-white/95 backdrop-blur-md ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          <ul className="space-y-1 list-none p-0 m-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center min-h-[44px] px-3 py-2.5 -mx-3 rounded-lg text-base font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80 active:bg-zinc-100 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <a
              href="#contacto"
              onClick={closeMenu}
              className="flex w-full items-center justify-center min-h-[48px] px-5 py-3 text-base font-semibold text-white bg-zinc-950 rounded-xl transition-all duration-300 ease-in-out hover:bg-zinc-800 shadow-sm active:bg-zinc-900"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

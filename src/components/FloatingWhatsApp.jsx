import { trackWhatsAppClick } from '../utils/analytics'

const WHATSAPP_FLOAT_URL = "https://wa.me/59892979142?text=Hola%20Lucas,%20tengo%20una%20consulta%20sobre%20tus%20servicios%20web."

export default function FloatingWhatsApp() {
  const handleClick = () => {
    trackWhatsAppClick('floating_button')
  }

  return (
    <aside aria-label="Contacto directo por WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href={WHATSAPP_FLOAT_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Contactar por WhatsApp a Mantuani Digital"
        className="relative group flex items-center justify-center h-14 w-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        {/* Subtle Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none group-hover:hidden" />

        {/* WhatsApp Official SVG Icon */}
        <svg 
          className="w-7 h-7 fill-current relative z-10" 
          viewBox="0 0 24 24" 
          aria-hidden="true"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.148-.545-1.745-.73-2.87-2.511-2.957-2.628-.088-.117-.714-.951-.714-1.815 0-.864.453-1.289.614-1.464.162-.176.353-.22.471-.22.12 0 .24 0 .344.006.11.006.257-.042.403.309.15.358.513 1.25.558 1.341.045.09.074.197.015.315-.059.117-.088.19-.176.294-.088.103-.186.23-.265.31-.089.09-.182.187-.078.365.103.177.46 1.109 1.488 1.932.748.598 1.378.784 1.574.873.197.088.312.073.428-.059.116-.132.499-.582.632-.781.132-.2.264-.167.44-.103.177.063 1.12.529 1.312.625.191.096.319.143.366.223.047.08.047.464-.097.869z"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.176L2 22l4.981-1.399A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.25c-1.637 0-3.15-.494-4.414-1.343l-.317-.213-2.973.834.846-2.898-.233-.332A8.204 8.204 0 013.75 12c0-4.556 3.694-8.25 8.25-8.25s8.25 3.694 8.25 8.25-3.694 8.25-8.25 8.25z"/>
        </svg>

        {/* Tooltip on Desktop */}
        <span className="hidden sm:block absolute right-16 bg-zinc-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
          Chateá con nosotros
        </span>
      </a>
    </aside>
  )
}

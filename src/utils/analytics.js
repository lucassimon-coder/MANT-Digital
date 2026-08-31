/**
 * Helper to dispatch custom events to Google Analytics 4 (GA4)
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

export function trackWhatsAppClick(location = 'unknown') {
  trackEvent('click_whatsapp', {
    event_category: 'conversion',
    event_label: `WhatsApp - ${location}`,
    location,
  })
}

export function trackPresupuestoClick(location = 'unknown') {
  trackEvent('click_presupuesto', {
    event_category: 'conversion',
    event_label: `Presupuesto - ${location}`,
    location,
  })
}

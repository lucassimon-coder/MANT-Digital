/**
 * Helper to dispatch custom events to Google Analytics 4 (GA4) safely
 */
export function trackEvent(eventName, params = {}) {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params)
    }
  } catch (err) {
    // Gracefully handle any analytics error (e.g. adblockers)
    console.debug('GA4 tracking error:', err)
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

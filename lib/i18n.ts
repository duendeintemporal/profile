export const translations = {
  es: {
    heroRole: 'Fullstack JavaScript Developer · Escritor · Ilustrador · Kung Fu Tradicional Chino y Ninjutsu',
    heroRank: '#6 Retos para Programadores MoureDev 2024',
    availableBarcelona: 'Disponible para Barcelona · Híbrido o Remoto',
    projects: 'Proyectos',
    projectsSubtitle: 'Una selección de trabajos que combinan código, datos y creatividad.',
    languages: 'Idiomas',
    beyondCode: 'Más allá del código',
    learningAreas: 'Áreas de aprendizaje e interés',
    contact: 'Contacto',
    contactSubtitle: 'Escríbeme si quieres colaborar, contratar o simplemente conversar.',
    contactCta: 'Contacto',
    viewMore: 'Ver más',
    back: 'Volver',
    sendMessage: 'Enviar mensaje',
    sending: 'Enviando...',
    name: 'Nombre',
    email: 'Correo',
    message: 'Mensaje',
    sendSuccess: '¡Mensaje enviado! Te responderé pronto.',
    sendError: 'No se pudo enviar. Intenta de nuevo.',
    featured: 'Destacado',
    stack: 'Stack',
    closeHint: 'Toca en cualquier parte para cerrar',
  },
  en: {
    heroRole: 'Fullstack JavaScript Developer · Writer · Illustrator · Traditional Chinese Kung Fu & Ninjutsu',
    heroRank: '#6 MoureDev Programming Challenges 2024',
    availableBarcelona: 'Available for Barcelona · Hybrid or Remote',
    projects: 'Projects',
    projectsSubtitle: 'A selection of works that combine code, data and creativity.',
    languages: 'Languages',
    beyondCode: 'Beyond Code',
    learningAreas: 'Learning Areas & Interests',
    contact: 'Contact',
    contactSubtitle: 'Write to me if you want to collaborate, hire or simply chat.',
    contactCta: 'Contact',
    viewMore: 'View more',
    back: 'Back',
    sendMessage: 'Send message',
    sending: 'Sending...',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    sendSuccess: 'Message sent! I will reply soon.',
    sendError: 'Could not send. Please try again.',
    featured: 'Featured',
    stack: 'Stack',
    closeHint: 'Tap anywhere to close',
  },
} as const

export type Locale = keyof typeof translations
export type TranslationKey = keyof typeof translations['es']

export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale][key]
}
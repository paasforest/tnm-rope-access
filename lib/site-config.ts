/** Company identity and contact — single source of truth */

export const SITE_NAME_SHORT = 'TMA Projects'
export const SITE_NAME_FULL = 'TMA Industrial Rope Access Projects'
export const LOGO_PATH = '/tma-logo.png' as const

export const PHONE_LOCAL = '070 536 4438'
export const PHONE_E164 = '+27705364438'
/** digits only, no + — for https://wa.me/27705364438 */
export const PHONE_INTERNATIONAL_DIGITS = '27705364438'

export const CONTACT_EMAIL = 'info@tmaprojects.co.za'

export const PHONE_TEL_HREF = `tel:${PHONE_E164.replace(/\s/g, '')}`
export const WHATSAPP_HREF = `https://wa.me/${PHONE_INTERNATIONAL_DIGITS}`

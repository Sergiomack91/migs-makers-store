export function useStorefrontContact() {
  const config = useRuntimeConfig()
  const instagramUrl = config.public.instagramUrl
  const whatsappNumber = String(config.public.whatsappNumber).replace(/\D/g, '')
  const emailAddress = String(config.public.emailAddress).trim()
  const formspreeFormId = String(config.public.formspreeFormId).trim()
  const socialLinks = [
    { name: 'Instagram', url: instagramUrl, icon: 'instagram' },
    { name: 'TikTok', url: config.public.tiktokUrl, icon: 'tiktok' },
    { name: 'Vinted', url: config.public.vintedUrl, icon: 'vinted' },
    { name: 'Wallapop', url: config.public.wallapopUrl, icon: 'wallapop' },
  ]

  function whatsappUrl(message: string) {
    if (!whatsappNumber) return ''

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
  }

  function emailUrl(subject: string, body = '') {
    if (!emailAddress) return ''

    const params = new URLSearchParams()
    params.set('subject', subject)
    params.set('body', body)

    return `mailto:${emailAddress}?${params.toString().replace(/\+/g, '%20')}`
  }

  return { emailAddress, emailUrl, formspreeFormId, instagramUrl, socialLinks, whatsappUrl }
}

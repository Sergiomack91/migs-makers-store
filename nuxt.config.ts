export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      instagramUrl: '',
      whatsappNumber: '',
      tiktokUrl: '',
      vintedUrl: '',
      wallapopUrl: '',
      emailAddress: '',
      formspreeFormId: '',
      siteUrl: '',
      googleSiteVerification: ''
    }
  },
  app: {
    head: {
      title: 'MIGS Makers | Piezas 3D propias y personalizables',
      meta: [
        {
          name: 'description',
          content: 'Descubre la colección propia de MIGS Makers: piezas fabricadas en 3D con opciones para personalizar colores, tamaños y detalles.'
        },
        { name: 'theme-color', content: '#F7F9FA' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      htmlAttrs: {
        // Fondo gris muy claro y texto azul oscuro
        class: 'bg-migs-bg text-migs-text font-sans antialiased'
      }
    }
  }
})
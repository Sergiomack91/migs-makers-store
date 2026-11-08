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
      wallapopUrl: ''
    }
  },
  app: {
    head: {
      htmlAttrs: {
        // Fondo gris muy claro y texto azul oscuro
        class: 'bg-migs-bg text-migs-text font-sans antialiased'
      }
    }
  }
})
<template>
  <div class="min-h-screen bg-migs-bg flex flex-col">
    <SiteHeader />

    <main class="flex-grow">
      <NuxtPage />
    </main>

    <a
      v-if="whatsappUrl('Hola, quiero información sobre vuestros productos.')"
      :href="whatsappUrl('Hola, quiero información sobre vuestros productos.')"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      class="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105"
    >
      <svg class="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2a9.9 9.9 0 0 0-8.48 15.01L2.25 21.75l4.85-1.27A9.9 9.9 0 1 0 12.04 2Zm0 18.06a8.12 8.12 0 0 1-4.14-1.13l-.3-.18-2.88.75.77-2.8-.2-.3a8.15 8.15 0 1 1 6.75 3.66Zm4.47-6.1c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.04.4 1.4.52.58.18 1.1.16 1.52.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    </a>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
const { whatsappUrl } = useStorefrontContact()
</script>
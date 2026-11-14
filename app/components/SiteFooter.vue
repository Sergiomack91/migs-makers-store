<script setup lang="ts">
const { emailUrl, socialLinks, whatsappUrl } = useStorefrontContact()
const whatsappLink = whatsappUrl('Hola, quiero información sobre vuestros productos.')
const emailLink = emailUrl('Consulta sobre MIGS 3D')
const hasMissingSocialLinks = socialLinks.some((social) => !social.url)
</script>

<template>
  <footer class="mt-auto border-t border-migs-border bg-white">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <NuxtLink to="/" class="mb-4 inline-flex items-center gap-3">
            <img src="/Logo.png" alt="MIGS 3D Logo" class="h-14 w-auto opacity-80 sm:h-16" />
            <span class="text-lg font-bold tracking-tighter text-slate-900">
              MIGS<span class="font-light text-zinc-500"> 3D</span>
            </span>
          </NuxtLink>
          <p class="max-w-sm text-sm leading-relaxed text-migs-text">
            Diseño y fabricación digital de piezas únicas. Explora el catálogo y escríbenos para resolver tus dudas.
          </p>
        </div>

        <div>
          <h2 class="mb-4 text-sm font-semibold text-migs-logo">Explora</h2>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/#productos" class="text-sm text-migs-text transition-colors hover:text-migs-logo">
                Todos los productos
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#quienes-somos" class="text-sm text-migs-text transition-colors hover:text-migs-logo">
                Quiénes somos
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#contacto" class="text-sm text-migs-text transition-colors hover:text-migs-logo">
                Diseños personalizados
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="mb-4 text-sm font-semibold text-migs-logo">Hablemos</h2>
          <div class="flex flex-wrap gap-3">
            <a
              v-if="whatsappLink"
              :href="whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex min-h-10 items-center gap-2 rounded-lg bg-migs-logo px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-migs-text"
            >
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2a9.9 9.9 0 0 0-8.48 15.01L2.25 21.75l4.85-1.27A9.9 9.9 0 1 0 12.04 2Zm0 18.06a8.12 8.12 0 0 1-4.14-1.13l-.3-.18-2.88.75.77-2.8-.2-.3a8.15 8.15 0 1 1 6.75 3.66Zm4.47-6.1c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.04.4 1.4.52.58.18 1.1.16 1.52.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
              </svg>
              WhatsApp
            </a>
            <a
              v-if="instagramUrl"
              :href="instagramUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex min-h-10 items-center gap-2 rounded-lg border border-migs-border px-3 py-2 text-sm font-semibold text-migs-logo transition-colors hover:bg-migs-bg"
            >
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63Zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058ZM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27Zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" clip-rule="evenodd" />
              </svg>
              Instagram
            </a>
            <a
              v-if="emailLink"
              :href="emailLink"
              aria-label="Enviar email"
              class="inline-flex min-h-10 items-center gap-2 rounded-lg border border-migs-border px-3 py-2 text-sm font-semibold text-migs-logo transition-colors hover:bg-migs-bg"
            >
              Enviar email
            </a>
            <p v-if="!whatsappLink && !instagramUrl && !emailLink" class="text-sm text-migs-text">
              Añadiremos aquí los enlaces de contacto cuando estén disponibles.
            </p>
          </div>
        </div>

        <div>
          <h2 class="mb-4 text-sm font-semibold text-migs-logo">Síguenos en redes sociales</h2>
          <div class="flex flex-wrap gap-3">
            <template v-for="social in socialLinks" :key="social.name">
              <a
                v-if="social.url"
                :href="social.url"
                :aria-label="social.name"
                :title="social.name"
                target="_blank"
                rel="noopener noreferrer"
                class="flex h-11 w-11 items-center justify-center rounded-full border border-migs-border text-migs-logo transition-colors hover:bg-migs-bg"
              >
                <svg v-if="social.icon === 'instagram'" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63Zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058ZM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27Zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" clip-rule="evenodd" />
                </svg>
                <svg v-else-if="social.icon === 'tiktok'" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.6 7.2a5.7 5.7 0 0 1-3.5-1.2v8.1a6.1 6.1 0 1 1-5.3-6v3.3a2.8 2.8 0 1 0 2 2.7V2.5h3.3c.2 2 1.6 3.6 3.5 3.9v.8Z" />
                </svg>
                <svg v-else-if="social.icon === 'vinted'" class="h-5 w-5" fill="currentColor" viewBox="4 0 20 24" aria-hidden="true">
                  <path d="M19.316 0c-.258 0-.571.217-1.415.953-.3.108-.627.027-1.008.613-2.15 3.09-3.825 14.648-5.255 17.984-.286-1.444-.885-10.837-1.116-13.41-.028-.477.027-1.076.027-1.43 0-2.368-.516-3.567-2.886-3.567-1.198 0-2.382.436-3.008 1.226-.299.408-.409.708-.409 1.443 0 4.915 1.171 12.973 2.478 18.228C7.132 23.688 8.603 24 9.99 24c.654 0 1.307-.081 2.233-.544 3.212-1.567 4.07-5.84 4.9-9.993.15-.749.899-4.37 1.253-6.275.476-2.6 1.02-5.54 1.347-6.617C19.833.245 19.63 0 19.317 0z" />
                </svg>
                <svg v-else-if="social.icon === 'wallapop'" class="h-5 w-5" fill="currentColor" viewBox="110 75 170 175" aria-hidden="true">
                  <path fill-rule="evenodd" d="M266.44 158.91c-2.96-14.46-12.28-21.33-14.64-22.76-.98-.59-1.61-1.45-1.56-2.92.82-26.58-18.58-49.53-45.65-49.46-17.29.04-28.1 7.56-37.02 17.88-1.01 1.17-2.78 1.05-4.16.33-17.48-9.06-38.29-2.96-47.1 13.85-7.63 14.56-4.59 31.16 7.8 41.97 1.3 1.13 1.56 3.11.64 4.55-10.81 16.9-5.9 39.4 11 50.21a36.334 36.334 0 0 0 30.95 3.92c1.83-.53 3.16 0 4.05 1.39 11.22 16.52 33.73 21.25 50.54 10.3a36.756 36.756 0 0 0 16.45-26.4c.16-1.31 1.03-2.57 2.31-2.89 25.01-6.4 28.45-29.9 26.39-39.97zm-35.32 31.72c-3.23.13-5 1.96-5.01 5.06-.12 4.59-1.51 9.04-4.02 12.89-7.5 11.53-22.92 14.79-34.44 7.3-11.53-7.5-14.79-22.92-7.3-34.45h.02c1.55-2.39.88-5.59-1.51-7.14-2.39-1.56-5.67-.93-7.23 1.46-5.47 7.49-8.01 16.72-6.92 25.95.21 1.79-1 3.45-2.78 3.8-6.17 1.25-12.58.22-18.05-2.88-12.53-7.11-16.92-23.03-9.81-35.56.79-1.39 2.26-2.22 3.93-1.79 3.2.89 6.52 1.32 9.84 1.29a4.737 4.737 0 0 0 4.7-4.78 4.739 4.739 0 0 0-4.44-4.69c-4.68-.3-9.02-1.3-12.85-4.01-11.72-8.29-13.66-23.6-5.54-34.7 7.76-10.59 23.6-12.44 34.84-3.5 2.19 1.74 5.95 1.43 7.22-1.05 2.44-4.77 6.53-8.54 8.55-10.01 15.97-11.61 36.41-9.9 49.23 5.12 13.18 15.44 11.04 37.96-5.67 51.47-2.22 1.79-2.4 5.15-.53 7.31 1.78 2.06 4.96 2.42 7.13.78 5.7-4.3 10.98-10.17 14.25-16.52.3-.58.81-1.27 1.37-1.6 1.65-.98 3.77-.2 4.75 1.45 2.03 3.42 3.8 8.53 4.03 12.5.8 13.7-10.03 25.5-23.76 26.3z" />
                </svg>
                <span v-else-if="social.icon === 'etsy'" class="font-serif text-xl font-bold" aria-hidden="true">E</span>
              </a>
              <span
                v-else
                :aria-label="`${social.name}: perfil pendiente`"
                :title="`${social.name}: perfil pendiente`"
                class="flex h-11 w-11 items-center justify-center rounded-full border border-migs-border/50 text-migs-text/50"
              >
                <svg v-if="social.icon === 'instagram'" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63Zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058ZM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27Zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" clip-rule="evenodd" />
                </svg>
                <svg v-else-if="social.icon === 'tiktok'" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.6 7.2a5.7 5.7 0 0 1-3.5-1.2v8.1a6.1 6.1 0 1 1-5.3-6v3.3a2.8 2.8 0 1 0 2 2.7V2.5h3.3c.2 2 1.6 3.6 3.5 3.9v.8Z" />
                </svg>
                <svg v-else-if="social.icon === 'vinted'" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3.3 5.2h4.2l4.4 9.4 4.5-9.4h4.2l-6.7 13.6a2.2 2.2 0 0 1-4 0L3.3 5.2Z" />
                </svg>
                <span v-else-if="social.icon === 'etsy'" class="font-serif text-xl font-bold" aria-hidden="true">E</span>
                <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.6" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 6.4a3.4 3.4 0 1 1 6.8 0v7.2a3.4 3.4 0 1 1-6.8 0V6.4Zm7.2 11.2V6.4a3.4 3.4 0 1 1 6.8 0v7.2a3.4 3.4 0 1 1-6.8 0v-7.2" />
                </svg>
              </span>
            </template>
          </div>
          <p v-if="hasMissingSocialLinks" class="mt-3 text-xs text-migs-text">
            Perfiles pendientes de configurar.
          </p>
        </div>
      </div>

      <div class="mt-10 flex flex-col gap-4 border-t border-migs-border/50 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-xs text-migs-text">&copy; 2026 MIGS Makers.</p>
        <nav aria-label="Información legal" class="flex flex-wrap gap-x-5 gap-y-3">
          <NuxtLink to="/aviso-legal" class="text-xs text-migs-text transition-colors hover:text-migs-logo">
            Aviso legal y privacidad
          </NuxtLink>
          <NuxtLink to="/cookies" class="text-xs text-migs-text transition-colors hover:text-migs-logo">
            Política de cookies
          </NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

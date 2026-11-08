<script setup lang="ts">
const { socialLinks, whatsappUrl } = useStorefrontContact()
const whatsappLink = whatsappUrl('Hola, quiero información sobre vuestros productos.')
const hasMissingSocialLinks = socialLinks.some((social) => !social.url)
</script>

<template>
  <footer class="mt-auto border-t border-migs-border bg-white">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <NuxtLink to="/" class="mb-4 inline-flex items-center gap-3">
            <img src="/Logo.png" alt="MIGS Makers Logo" class="h-10 w-auto opacity-80" />
            <span class="text-lg font-bold tracking-tighter text-slate-900">
              MIGS<span class="font-light text-zinc-500">Makers</span>
            </span>
          </NuxtLink>
          <p class="max-w-sm text-sm leading-relaxed text-migs-text">
            Diseño y fabricación digital de piezas únicas. Explora el escaparate y escríbenos para consultar precios.
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
            <p v-if="!whatsappLink && !instagramUrl" class="text-sm text-migs-text">
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
                <svg v-else-if="social.icon === 'vinted'" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3.3 5.2h4.2l4.4 9.4 4.5-9.4h4.2l-6.7 13.6a2.2 2.2 0 0 1-4 0L3.3 5.2Z" />
                </svg>
                <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.6" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 6.4a3.4 3.4 0 1 1 6.8 0v7.2a3.4 3.4 0 1 1-6.8 0V6.4Zm7.2 11.2V6.4a3.4 3.4 0 1 1 6.8 0v7.2a3.4 3.4 0 1 1-6.8 0v-7.2" />
                </svg>
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

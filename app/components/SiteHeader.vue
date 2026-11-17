<!-- app/components/SiteHeader.vue -->
<script setup lang="ts">
const isMenuOpen = ref(false)

const navigationLinks = [
  { label: 'Productos', to: '/productos' },
  { label: 'Novedades', to: '/#novedades' },
  { label: 'Proceso', to: '/proceso' },
  { label: 'Quiénes somos', to: '/quienes-somos' },
]
const leftNavigationLinks = navigationLinks.slice(0, 2)
const rightNavigationLinks = navigationLinks.slice(2)

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-migs-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between md:grid md:h-20 md:grid-cols-[1fr_auto_1fr] md:gap-x-8">
        <nav aria-label="Navegación principal, izquierda" class="hidden items-center justify-end gap-3 md:flex lg:gap-6">
          <NuxtLink
            v-for="link in leftNavigationLinks"
            :key="link.to"
            :to="link.to"
            class="whitespace-nowrap text-xs font-medium text-migs-text transition-colors hover:text-migs-logo lg:text-sm"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <NuxtLink to="/" aria-label="MIGS 3D, inicio" class="flex items-center justify-center" @click="closeMenu">
            <img src="/Logo.png" alt="Logo de MIGS 3D" class="h-14 w-auto object-contain opacity-90 md:h-16" />
          </NuxtLink>
        </div>

        <nav aria-label="Navegación principal, derecha" class="hidden items-center justify-start gap-3 md:flex lg:gap-6">
          <NuxtLink
            v-for="link in rightNavigationLinks"
            :key="link.to"
            :to="link.to"
            class="whitespace-nowrap text-xs font-medium text-migs-text transition-colors hover:text-migs-logo lg:text-sm"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <NuxtLink
          to="/contacto"
          class="absolute right-0 top-1/2 hidden min-h-11 -translate-y-1/2 items-center justify-center whitespace-nowrap rounded-lg bg-migs-logo px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-migs-text md:inline-flex lg:px-4 lg:py-2.5 lg:text-sm"
        >
          Contactar
        </NuxtLink>

        <div class="flex items-center gap-3 md:hidden">
          <button
            type="button"
            class="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-migs-border text-migs-logo transition-colors hover:bg-migs-bg md:hidden"
            :aria-expanded="isMenuOpen"
            aria-controls="mobile-navigation"
            :aria-label="isMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
            @click="isMenuOpen = !isMenuOpen"
            @keydown.esc="closeMenu"
          >
            <svg v-if="!isMenuOpen" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
      </div>

      <nav
        v-if="isMenuOpen"
        id="mobile-navigation"
        aria-label="Navegación móvil"
        class="border-t border-migs-border py-3 md:hidden"
      >
        <NuxtLink
          v-for="link in navigationLinks"
          :key="link.to"
          :to="link.to"
          class="block rounded-lg px-3 py-3 text-sm font-medium text-migs-text transition-colors hover:bg-migs-bg hover:text-migs-logo"
          @click="closeMenu"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink
          to="/contacto"
          class="mt-2 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-migs-logo px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-migs-text"
          @click="closeMenu"
        >
          Contactar
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
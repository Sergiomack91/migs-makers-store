<!-- app/components/SiteHeader.vue -->
<script setup lang="ts">
const isMenuOpen = ref(false)

const navigationLinks = [
  { label: 'Productos', to: '/#productos' },
  { label: 'Quiénes somos', to: '/#quienes-somos' },
  { label: 'Proceso', to: '/#proceso' },
  { label: 'Personalizar', to: '/#personalizacion' },
  { label: 'Contacto', to: '/#contacto' },
]

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-migs-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center gap-3" @click="closeMenu">
            <img src="/Logo.png" alt="MIGS 3D Logo" class="h-10 w-auto opacity-80" />
            <span class="text-lg font-bold tracking-tighter text-slate-900">
              MIGS<span class="text-zinc-500 font-light"> 3D</span>
            </span>
          </NuxtLink>
        </div>

        <nav class="hidden items-center gap-3 md:flex lg:gap-6">
          <NuxtLink
            v-for="link in navigationLinks"
            :key="link.to"
            :to="link.to"
            class="text-xs font-medium text-migs-text transition-colors hover:text-migs-logo lg:text-sm"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-3">
          <NuxtLink
            to="/#contacto"
            class="hidden rounded-lg bg-migs-logo px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-migs-text md:inline-flex"
          >
            Pedir presupuesto
          </NuxtLink>
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
          to="/#contacto"
          class="mt-2 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-migs-logo px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-migs-text"
          @click="closeMenu"
        >
          Pedir presupuesto
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
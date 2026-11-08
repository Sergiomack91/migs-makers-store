<!-- app/components/SiteHeader.vue -->
<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-migs-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center gap-3">
            <img src="/Logo.png" alt="MIGS Makers Logo" class="h-10 w-auto opacity-80" />
            <span class="text-lg font-bold tracking-tighter text-slate-900">
              MIGS<span class="text-zinc-500 font-light">Makers</span>
            </span>
          </NuxtLink>
        </div>

        <nav class="hidden items-center gap-8 md:flex">
          <NuxtLink to="/#productos" class="text-sm font-medium text-migs-text transition-colors hover:text-migs-logo">Productos</NuxtLink>
          <NuxtLink to="/#contacto" class="text-sm font-medium text-migs-text transition-colors hover:text-migs-logo">Contacto</NuxtLink>
        </nav>

        <NuxtLink
          to="/#productos"
          class="rounded-lg bg-migs-logo px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-migs-text"
        >
          Ver escaparate
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
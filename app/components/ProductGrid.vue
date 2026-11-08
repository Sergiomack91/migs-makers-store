<script setup lang="ts">
import { products } from '~/data/products'
const { instagramUrl, whatsappUrl } = useStorefrontContact()
</script>

<template>
  <div>
    <section class="px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
      <div class="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-migs-logo px-6 py-14 text-white sm:px-12 sm:py-20 lg:px-20">
        <div class="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div class="pointer-events-none absolute -right-4 -top-16 h-64 w-64 rounded-full border border-white/10" />
        <div class="relative grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-4">
          <div class="relative z-10">
          <p class="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Diseñado y creado en 3D</p>
          <h1 class="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Objetos únicos,<br class="hidden sm:block"> hechos para ti.
          </h1>
          <p class="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Exploramos formas, color y fabricación digital para dar vida a piezas especiales. Descubre la colección y
            pregúntanos por tu próxima idea.
          </p>
          <div class="mt-9 flex flex-wrap gap-3">
            <NuxtLink to="#productos" class="inline-flex min-h-12 items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-migs-logo transition-colors hover:bg-migs-bg">
              Explorar escaparate
            </NuxtLink>
            <a
              v-if="instagramUrl"
              :href="instagramUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex min-h-12 items-center rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Síguenos en Instagram
            </a>
            <a
              v-else-if="whatsappUrl('Hola, quiero información sobre vuestros productos.')"
              :href="whatsappUrl('Hola, quiero información sobre vuestros productos.')"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex min-h-12 items-center rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
          </div>
          <div class="mx-auto w-full max-w-sm lg:max-w-none">
            <img
              src="/migs-impresion-3d.svg"
              alt="Ilustración de una impresora 3D fabricando una pieza"
              class="h-auto w-full"
            >
          </div>
        </div>
      </div>
    </section>

    <section id="productos" class="scroll-mt-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div class="mx-auto max-w-7xl">
        <div class="mb-8 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-migs-text">La colección</p>
            <h2 class="mt-2 text-3xl font-semibold tracking-tight text-migs-logo sm:text-4xl">Piezas para descubrir</h2>
          </div>
          <p class="max-w-md text-sm leading-relaxed text-migs-text">
            ¿Te interesa una pieza o tienes una idea? Escríbenos para consultar precio, colores y personalización.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          <article v-for="product in products" :key="product.id" class="group">
            <NuxtLink :to="`/producto/${product.slug}`" class="block">
              <div class="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white">
                <img
                  :src="product.image"
                  :alt="product.name"
                  loading="lazy"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                >
                <span class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-migs-logo backdrop-blur">
                  {{ product.category }}
                </span>
                <span class="absolute bottom-4 left-4 rounded-full bg-migs-logo/80 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur">
                  Foto de ejemplo
                </span>
              </div>
              <div class="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 class="font-semibold text-migs-logo transition-colors group-hover:text-migs-text">{{ product.name }}</h3>
                  <p class="mt-1 text-sm text-migs-text">{{ product.material }}</p>
                </div>
                <span class="shrink-0 text-right text-xs font-semibold text-migs-text">Consultar<br>precio</span>
              </div>
            </NuxtLink>
            <div class="mt-4">
              <ProductContactActions :product-name="product.name" compact />
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="contacto" class="scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div class="mx-auto flex max-w-7xl flex-col gap-8 rounded-3xl border border-migs-border/50 bg-white p-6 sm:p-10 md:flex-row md:items-center md:justify-between">
        <div class="max-w-xl">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-migs-text">¿Tienes una idea?</p>
          <h2 class="mt-2 text-2xl font-semibold tracking-tight text-migs-logo sm:text-3xl">Hablemos de tu próximo diseño</h2>
          <p class="mt-3 text-sm leading-relaxed text-migs-text">
            Cuéntanos qué buscas. Podemos hablar de una pieza del escaparate o de una propuesta personalizada.
          </p>
        </div>
        <ProductContactActions product-name="una consulta sobre diseños personalizados" />
      </div>
    </section>
  </div>
</template>

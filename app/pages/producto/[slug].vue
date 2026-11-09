<!-- app/pages/producto/[slug].vue -->
<script setup lang="ts">
import { products } from '~/data/products'

const route = useRoute()
const product = products.find((item) => item.slug === route.params.slug)

if (!product) {
  throw createError({ statusCode: 404, statusMessage: 'Producto no encontrado' })
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
    <NuxtLink to="/#productos" class="mb-6 inline-flex text-sm font-medium text-migs-text transition-colors hover:text-migs-logo">
      &larr; Volver al escaparate
    </NuxtLink>
    <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:gap-16">
      <div class="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white">
        <img :src="product.image" :alt="product.name" class="h-full w-full object-cover object-center" />
        <span class="absolute bottom-4 left-4 rounded-full bg-migs-logo/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
          Foto de ejemplo
        </span>
      </div>

      <div class="flex flex-col">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-migs-text">{{ product.category }}</p>
        <h1 class="mb-4 mt-3 text-3xl font-semibold tracking-tight text-migs-logo sm:text-4xl">{{ product.name }}</h1>
        <p class="mb-6 inline-flex w-fit rounded-full bg-white px-3 py-1.5 text-sm font-medium text-migs-text">{{ product.material }}</p>
        <p class="mb-8 leading-relaxed text-migs-text">{{ product.description }}</p>
        <p class="mb-4 text-sm font-semibold text-migs-logo">Precio a consultar</p>
        <ProductContactActions :product-name="product.name" />
        <p class="mt-6 border-t border-migs-border/60 pt-5 text-sm leading-relaxed text-migs-text">
          Cada modelo tiene colores y tamaños establecidos. Escríbenos para consultar disponibilidad y solicitar cambios de color, tamaño o modificaciones; te confirmaremos qué opciones hay para esta pieza.
        </p>
      </div>
    </div>
  </div>
</template>
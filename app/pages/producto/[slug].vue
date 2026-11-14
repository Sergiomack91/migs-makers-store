<!-- app/pages/producto/[slug].vue -->
<script setup lang="ts">
import { products } from '~/data/products'

const route = useRoute()
const product = products.find((item) => item.slug === route.params.slug)
const selectedSize = ref('')
const selectedColor = ref('')

if (!product) {
  throw createError({ statusCode: 404, statusMessage: 'Producto no encontrado' })
}

const productDescription = `${product.name}. ${product.description}`

useSeoMeta({
  title: () => `${product.name} | MIGS Makers`,
  description: () => productDescription,
  ogTitle: () => `${product.name} | MIGS Makers`,
  ogDescription: () => productDescription,
  ogType: 'product',
  twitterTitle: () => `${product.name} | MIGS Makers`,
  twitterDescription: () => productDescription,
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
    <NuxtLink to="/#productos" class="mb-6 inline-flex text-sm font-medium text-migs-text transition-colors hover:text-migs-logo">
      &larr; Volver al escaparate
    </NuxtLink>
    <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:gap-16">
      <div class="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-2xl bg-migs-bg">
        <img v-if="product.image" :src="product.image" :alt="product.name" class="h-full w-full object-cover object-center" />
        <div v-else class="flex flex-col items-center gap-3 text-migs-text">
          <svg class="h-16 w-16 opacity-60" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M8 16.5 24 8l16 8.5v16L24 41 8 32.5v-16Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
            <path d="m8.5 16.8 15.5 8.4 15.5-8.4M24 25.5V40" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
          </svg>
          <span class="text-sm font-medium">Imagen próximamente</span>
        </div>
      </div>

      <div class="flex flex-col">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-migs-text">{{ product.category }}</p>
        <h1 class="mb-4 mt-3 text-3xl font-semibold tracking-tight text-migs-logo sm:text-4xl">{{ product.name }}</h1>
        <p class="mb-6 inline-flex w-fit rounded-full bg-white px-3 py-1.5 text-sm font-medium text-migs-text">{{ product.material }}</p>
        <p class="mb-8 leading-relaxed text-migs-text">{{ product.description }}</p>
        <div v-if="product.sizes?.length || product.colors?.length" class="mb-6 space-y-4">
          <div v-if="product.sizes?.length">
            <label for="product-size" class="mb-1.5 block text-sm font-semibold text-migs-text">Tamaño</label>
            <select
              id="product-size"
              v-model="selectedSize"
              class="min-h-11 w-full rounded-lg border border-migs-border bg-white px-3 py-2 text-sm text-migs-text focus:outline-none focus:ring-2 focus:ring-migs-logo"
            >
              <option value="">Selecciona un tamaño</option>
              <option v-for="size in product.sizes" :key="size" :value="size">{{ size }}</option>
            </select>
          </div>
          <div v-if="product.colors?.length">
            <label for="product-color" class="mb-1.5 block text-sm font-semibold text-migs-text">Color disponible</label>
            <select
              id="product-color"
              v-model="selectedColor"
              class="min-h-11 w-full rounded-lg border border-migs-border bg-white px-3 py-2 text-sm text-migs-text focus:outline-none focus:ring-2 focus:ring-migs-logo"
            >
              <option value="">Selecciona un color</option>
              <option v-for="color in product.colors" :key="color" :value="color">{{ color }}</option>
            </select>
          </div>
        </div>
        <ProductContactActions
          :product-name="product.name"
          :size="selectedSize"
          :color="selectedColor"
        />
        <p class="mt-6 border-t border-migs-border/60 pt-5 text-sm leading-relaxed text-migs-text">
          Cada modelo tiene colores y tamaños establecidos. Escríbenos para consultar disponibilidad y solicitar cambios de color, tamaño o modificaciones; te confirmaremos qué opciones hay para esta pieza.
        </p>
      </div>
    </div>
  </div>
</template>
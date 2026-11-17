<!-- app/pages/producto/[slug].vue -->
<script setup lang="ts">
import { productColors, products } from '~/data/products'

const route = useRoute()
const product = products.find((item) => item.slug === route.params.slug)
const selectedSize = ref('')
const selectedFormat = ref('')
const selectedColor = ref('')
const productImages = product?.images ?? (product?.image ? [product.image] : [])
const selectedProductImage = ref(productImages[0] ?? '')

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
    <NuxtLink to="/productos" class="mb-6 inline-flex text-sm font-medium text-migs-text transition-colors hover:text-migs-logo">
      &larr; Volver al escaparate
    </NuxtLink>
    <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:gap-16">
      <div>
        <div class="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-2xl bg-migs-bg">
          <img v-if="selectedProductImage" :src="selectedProductImage" :alt="product.name" class="h-full w-full object-cover object-center" />
          <div v-else class="flex flex-col items-center gap-3 text-migs-text">
            <svg class="h-16 w-16 opacity-60" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <path d="M8 16.5 24 8l16 8.5v16L24 41 8 32.5v-16Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
              <path d="m8.5 16.8 15.5 8.4 15.5-8.4M24 25.5V40" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
            </svg>
            <span class="text-sm font-medium">Imagen próximamente</span>
          </div>
        </div>
        <div v-if="productImages.length > 1" class="mt-3 flex gap-3">
          <button
            v-for="(image, index) in productImages"
            :key="image"
            type="button"
            class="h-20 w-16 overflow-hidden rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-migs-logo"
            :class="selectedProductImage === image ? 'border-migs-logo' : 'border-transparent'"
            :aria-label="`Ver imagen ${index + 1} de ${product.name}`"
            :aria-pressed="selectedProductImage === image"
            @click="selectedProductImage = image"
          >
            <img :src="image" :alt="`${product.name}, imagen ${index + 1}`" class="h-full w-full object-cover" />
          </button>
        </div>
      </div>

      <div class="flex flex-col">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-migs-text">{{ product.category }}</p>
        <h1 class="mb-4 mt-3 text-3xl font-semibold tracking-tight text-migs-logo sm:text-4xl">{{ product.name }}</h1>
        <p class="mb-6 inline-flex w-fit rounded-full bg-white px-3 py-1.5 text-sm font-medium text-migs-text">{{ product.material }}</p>
        <p class="mb-8 leading-relaxed text-migs-text">{{ product.description }}</p>
        <div v-if="product.sizes?.length || product.formats?.length" class="mb-6 space-y-4">
          <div v-if="product.formats?.length">
            <label for="product-format" class="mb-1.5 block text-sm font-semibold text-migs-text">Formato</label>
            <select
              id="product-format"
              v-model="selectedFormat"
              class="min-h-11 w-full rounded-lg border border-migs-border bg-white px-3 py-2 text-sm text-migs-text focus:outline-none focus:ring-2 focus:ring-migs-logo"
            >
              <option value="">Selecciona un formato</option>
              <option v-for="format in product.formats" :key="format" :value="format">{{ format }}</option>
            </select>
          </div>
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
        </div>
        <fieldset class="mb-6 space-y-3">
          <legend class="text-sm font-semibold text-migs-text">Elige un color</legend>
          <div class="grid grid-cols-3 gap-2 sm:grid-cols-4">
            <button
              v-for="color in productColors"
              :key="color.name"
              type="button"
              class="flex min-h-20 flex-col items-center justify-center gap-1.5 rounded-xl border px-1.5 py-2 text-center transition-colors focus:outline-none focus:ring-2 focus:ring-migs-logo"
              :class="selectedColor === color.name ? 'border-migs-logo bg-migs-bg ring-1 ring-migs-logo' : 'border-migs-border/50 bg-white hover:border-migs-logo'"
              :aria-label="color.name"
              :aria-pressed="selectedColor === color.name"
              @click="selectedColor = color.name"
            >
              <span class="relative block h-8 w-8 rounded-full border border-black/10 shadow-sm" :style="{ backgroundColor: color.hex }">
                <svg v-if="selectedColor === color.name" class="absolute inset-1 h-6 w-6 text-white drop-shadow [filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.8))]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m5 12 4 4L19 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <span class="text-[11px] leading-tight text-migs-text">{{ color.name }}</span>
            </button>
          </div>
          <p class="text-xs leading-relaxed text-migs-text">
            Los colores se ofrecen como opciones de personalización; confirmaremos su disponibilidad para cada modelo.
          </p>
        </fieldset>
        <ProductContactActions
          :product-name="product.name"
          :size="selectedSize"
          :format="selectedFormat"
          :color="selectedColor"
        />
        <p class="mt-6 border-t border-migs-border/60 pt-5 text-sm leading-relaxed text-migs-text">
          El color seleccionado se incluirá en tu consulta. También puedes preguntarnos por cambios de tamaño u otras modificaciones para este modelo.
        </p>
      </div>
    </div>
  </div>
</template>
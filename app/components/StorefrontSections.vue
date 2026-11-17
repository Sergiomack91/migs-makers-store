<script setup lang="ts">
import { productCategories, products } from '~/data/products'

const props = defineProps<{
  section: 'home' | 'productos' | 'quienes-somos' | 'proceso' | 'personalizar' | 'contacto'
}>()
const { emailUrl, formspreeFormId, whatsappUrl } = useStorefrontContact()
const featuredProducts = products.filter((product) => product.isPopular)
const latestProducts = [...products].sort((first, second) => second.id - first.id).slice(0, 4)
const activeFeaturedIndex = ref(0)
const activeFeaturedProduct = computed(() => featuredProducts[activeFeaturedIndex.value])
const featuredRotationPaused = ref(false)
let featuredRotationTimer: number | undefined

function showFeaturedProduct(offset: number) {
  if (featuredProducts.length < 2) {
    return
  }

  activeFeaturedIndex.value = (activeFeaturedIndex.value + offset + featuredProducts.length) % featuredProducts.length
}

function stopFeaturedRotation() {
  if (featuredRotationTimer !== undefined) {
    window.clearInterval(featuredRotationTimer)
    featuredRotationTimer = undefined
  }
}

function startFeaturedRotation() {
  stopFeaturedRotation()

  if (props.section !== 'home' || featuredRotationPaused.value || featuredProducts.length < 2) {
    return
  }

  featuredRotationTimer = window.setInterval(() => showFeaturedProduct(1), 6000)
}

function toggleFeaturedRotation() {
  featuredRotationPaused.value = !featuredRotationPaused.value

  if (featuredRotationPaused.value) {
    stopFeaturedRotation()
  } else {
    startFeaturedRotation()
  }
}

onMounted(() => {
  if (props.section !== 'home') {
    return
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    featuredRotationPaused.value = true
    return
  }

  startFeaturedRotation()
})

onBeforeUnmount(stopFeaturedRotation)

const contactForm = reactive({
  name: '',
  email: '',
  product: '',
  message: '',
  _gotcha: '',
  privacyNoticeRead: false,
})
const formStatus = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')
const formStatusMessage = ref('')

const benefits = [
  {
    title: 'Colección propia',
    text: 'Diseñamos y fabricamos nuestros propios modelos, con colores y tamaños establecidos para cada pieza.',
    icon: 'collection',
  },
  {
    title: 'Personalización',
    text: 'Puedes consultar si es posible personalizar el color, el tamaño o algún detalle del modelo que te interesa.',
    icon: 'customize',
  },
  {
    title: 'Impresión en PLA',
    text: 'Fabricamos nuestras piezas en PLA, un material que permite conseguir buenos detalles y una amplia variedad de colores.',
    icon: 'printer',
  },
  {
    title: 'Asesoramiento directo',
    text: 'Te ayudamos a elegir la pieza más adecuada y a resolver dudas antes del pedido.',
    icon: 'support',
  },
]

const process = [
  {
    number: '01',
    title: 'Explora la colección',
    text: 'Elige una pieza de nuestro catálogo y consulta sus colores y tamaños disponibles.',
  },
  {
    number: '02',
    title: 'Cuéntanos qué cambiarías',
    text: 'Si quieres otro color, tamaño o alguna modificación, dinos qué tienes en mente.',
  },
  {
    number: '03',
    title: 'Confirmamos opciones',
    text: 'Revisamos contigo qué personalizaciones son posibles para esa pieza.',
  },
  {
    number: '04',
    title: 'Fabricamos tu pedido',
    text: 'Una vez confirmados los detalles, preparamos la pieza para que la disfrutes.',
  },
]

const faqs = [
  {
    question: '¿Podéis personalizar una pieza?',
    answer: 'Puedes consultarnos cambios de color, tamaño o modificaciones. Las opciones dependen de cada pieza y confirmaremos contigo qué es posible.',
  },
  {
    question: '¿Puedo consultar sobre un producto?',
    answer: 'Claro. Puedes escribirnos por WhatsApp o Instagram y te responderemos sobre el producto y sus opciones.',
  },
  {
    question: '¿Qué tipos de materiales usáis?',
    answer: 'Actualmente imprimimos nuestras piezas en PLA. Si una pieza requiere otro material, te lo indicaremos en su ficha.',
  },
  {
    question: '¿Trabajáis solo con piezas propias?',
    answer: 'Sí. Trabajamos con nuestra propia colección, cuyos modelos tienen colores y tamaños establecidos. También puedes consultarnos si buscas algún cambio.',
  },
]

const plaBenefits = [
  {
    title: 'Buenos detalles',
    text: 'El PLA permite reproducir formas y detalles definidos en las piezas.',
  },
  {
    title: 'Variedad de colores',
    text: 'Está disponible en muchos colores, para ofrecer distintas opciones según cada modelo.',
  },
  {
    title: 'Ligero y rígido',
    text: 'Es un material ligero y rígido, adecuado para muchos objetos decorativos y de uso cotidiano.',
  },
]

const whatsappContact = whatsappUrl('Hola, me interesa una de vuestras piezas. ¿Me podéis informar sobre los colores y tamaños disponibles y las opciones de personalización?')
const emailContact = emailUrl(
  'Consulta sobre MIGS 3D',
  'Hola, me interesa una de vuestras piezas. ¿Me podéis informar sobre los colores y tamaños disponibles y las opciones de personalización?',
)

async function submitContactForm() {
  if (!formspreeFormId) {
    formStatus.value = 'error'
    formStatusMessage.value = 'El formulario aún no está configurado. Puedes contactarnos por WhatsApp o email.'
    return
  }

  formStatus.value = 'submitting'
  formStatusMessage.value = ''

  try {
    const response = await fetch(`https://formspree.io/f/${encodeURIComponent(formspreeFormId)}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactForm),
    })

    if (!response.ok) {
      throw new Error(`Formspree returned HTTP ${response.status}`)
    }

    Object.assign(contactForm, { name: '', email: '', product: '', message: '', _gotcha: '', privacyNoticeRead: false })
    formStatus.value = 'success'
    formStatusMessage.value = '¡Gracias! Hemos recibido tu consulta y te responderemos lo antes posible.'
  } catch (error) {
    console.error('No se pudo enviar el formulario de contacto.', error)
    formStatus.value = 'error'
    formStatusMessage.value = 'No se pudo enviar el mensaje. Inténtalo de nuevo o contáctanos por WhatsApp o email.'
  }
}
</script>

<template>
  <div>
    <section v-if="props.section === 'home'" class="px-4 pb-5 pt-4 sm:px-6 lg:px-8 lg:pb-8 lg:pt-6">
      <div class="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-migs-text text-white shadow-xl shadow-migs-logo/15 lg:grid-cols-[1.05fr_0.95fr]">
        <div class="relative flex min-h-[26rem] items-center justify-center bg-migs-text px-5 py-14 text-center sm:px-10 lg:min-h-[36rem] lg:justify-start lg:px-14 lg:text-left">
          <div class="relative z-10 max-w-2xl">
            <p class="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 sm:text-sm">Diseño y fabricación en 3D</p>
            <h1 class="font-serif text-3xl font-normal uppercase leading-tight tracking-wide sm:text-4xl lg:text-5xl">
              Decoración y regalos<br class="hidden sm:block"> impresos en 3D
            </h1>
            <p class="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base lg:mx-0">
              Piezas originales para dar un toque especial a tu hogar o sorprender con un regalo único. También tenemos accesorios para juegos de mesa.
            </p>
            <div class="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <NuxtLink
                to="/productos#navidad"
                class="inline-flex min-h-12 items-center justify-center bg-migs-logo px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-migs-bg hover:text-migs-logo"
              >
                Ver Navidad
              </NuxtLink>
              <NuxtLink
                to="/productos"
                class="inline-flex min-h-12 items-center justify-center bg-white px-7 py-3 text-sm font-semibold uppercase tracking-wide text-migs-logo transition-colors hover:bg-migs-bg"
              >
                Descubre la colección
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
          class="relative aspect-[4/3] overflow-hidden bg-[#171412] lg:aspect-auto lg:min-h-[36rem]"
          role="region"
          aria-label="Carrusel de productos destacados"
          aria-roledescription="carrusel"
        >
          <img
            v-if="activeFeaturedProduct?.image"
            :src="activeFeaturedProduct.image"
            :alt="activeFeaturedProduct.name"
            fetchpriority="high"
            class="absolute inset-0 h-full w-full object-contain"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-[#171412]/75 via-transparent to-[#171412]/10 lg:bg-gradient-to-r lg:from-migs-text/35 lg:via-transparent lg:to-[#171412]/10" />
          <NuxtLink
            v-if="activeFeaturedProduct"
            :to="`/producto/${activeFeaturedProduct.slug}`"
            class="absolute left-5 top-5 z-10 max-w-[70%] rounded-lg bg-black/45 px-3 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/65"
          >
            {{ activeFeaturedProduct.name }}
          </NuxtLink>
          <div class="absolute bottom-4 right-4 z-10 flex items-center gap-2">
            <button
              type="button"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Ver producto anterior"
              @click="showFeaturedProduct(-1)"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m15 18-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <span class="min-w-10 text-center text-xs font-semibold text-white" aria-hidden="true">
              {{ activeFeaturedIndex + 1 }} / {{ featuredProducts.length }}
            </span>
            <button
              type="button"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Ver siguiente producto"
              @click="showFeaturedProduct(1)"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m9 18 6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
              :aria-label="featuredRotationPaused ? 'Reanudar el cambio automático' : 'Pausar el cambio automático'"
              @click="toggleFeaturedRotation"
            >
              <svg v-if="featuredRotationPaused" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7L8 5Z" />
              </svg>
              <svg v-else class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 5h4v14H7zM15 5h4v14h-4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section v-if="props.section === 'home'" id="destacados" class="scroll-mt-24 px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
      <div class="mx-auto max-w-7xl">
        <div class="mb-6">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-migs-text">Descubre la colección</p>
          <h2 class="mt-2 text-3xl font-semibold tracking-tight text-migs-logo sm:text-4xl">Los más destacados</h2>
        </div>
        <div
          aria-label="Productos destacados"
          role="region"
          tabindex="0"
          class="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 sm:overflow-visible sm:p-0 lg:grid-cols-4"
        >
          <article v-for="product in featuredProducts" :key="product.id" class="group flex h-full w-[82%] shrink-0 snap-start flex-col rounded-2xl sm:w-auto">
            <NuxtLink :to="`/producto/${product.slug}`" class="flex flex-1 flex-col">
              <div class="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl bg-migs-bg shadow-sm ring-1 ring-migs-border/50">
                <img
                  v-if="product.image"
                  :src="product.image"
                  :alt="product.name"
                  loading="lazy"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                >
                <div v-else class="flex flex-col items-center gap-3 text-center text-migs-text">
                  <svg class="h-14 w-14 opacity-60" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <path d="M8 16.5 24 8l16 8.5v16L24 41 8 32.5v-16Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                    <path d="m8.5 16.8 15.5 8.4 15.5-8.4M24 25.5V40" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                  </svg>
                  <span class="text-sm font-medium">Imagen próximamente</span>
                </div>
              </div>
              <div class="mt-4 flex min-h-16 items-start justify-between gap-3">
                <div>
                  <h3 class="line-clamp-2 font-semibold text-migs-logo transition-colors group-hover:text-migs-text">{{ product.name }}</h3>
                  <p class="mt-1 text-sm text-migs-text">{{ product.material }}</p>
                </div>
              </div>
            </NuxtLink>
            <div class="mt-auto w-full pt-4">
              <ProductContactActions :product-name="product.name" compact />
            </div>
          </article>
          <p v-if="featuredProducts.length === 0" class="w-full shrink-0 text-sm text-migs-text sm:col-span-2 lg:col-span-4">
            Aquí aparecerán los productos más destacados de la colección.
          </p>
        </div>
      </div>
    </section>

    <section v-if="props.section === 'home'" id="novedades" class="scroll-mt-24 px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
      <div class="mx-auto max-w-7xl">
        <div class="mb-6">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-migs-text">Recién añadidos</p>
          <h2 class="mt-2 text-3xl font-semibold tracking-tight text-migs-logo sm:text-4xl">Novedades</h2>
        </div>
        <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          <article v-for="product in latestProducts" :key="product.id" class="group flex h-full flex-col">
            <NuxtLink :to="`/producto/${product.slug}`" class="flex flex-1 flex-col">
              <div class="relative aspect-[4/5] overflow-hidden rounded-2xl bg-migs-bg shadow-sm ring-1 ring-migs-border/50">
                <img
                  v-if="product.image"
                  :src="product.image"
                  :alt="product.name"
                  loading="lazy"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                >
              </div>
              <div class="mt-4 min-h-16">
                <h3 class="line-clamp-2 font-semibold text-migs-logo transition-colors group-hover:text-migs-text">{{ product.name }}</h3>
                <p class="mt-1 text-sm text-migs-text">{{ product.category }} · {{ product.material }}</p>
              </div>
            </NuxtLink>
            <div class="mt-auto w-full pt-4">
              <ProductContactActions :product-name="product.name" compact />
            </div>
          </article>
        </div>
      </div>
    </section>

    <section v-if="props.section === 'home'" id="personalizacion" class="scroll-mt-24 px-4 pb-10 pt-5 sm:px-6 lg:px-8 lg:pb-16 lg:pt-8">
      <div class="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] bg-white p-6 ring-1 ring-migs-border/30 sm:p-10 md:flex-row md:items-center md:justify-between">
        <div class="max-w-2xl">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-migs-text">Una pieza a tu manera</p>
          <h2 class="mt-2 text-2xl font-semibold tracking-tight text-migs-logo sm:text-3xl">¿Quieres personalizar una pieza?</h2>
          <p class="mt-3 text-sm leading-relaxed text-migs-text">
            Cuéntanos qué color, tamaño o detalle tienes en mente. Te confirmaremos las opciones disponibles para el modelo que elijas.
          </p>
        </div>
        <NuxtLink
          to="/personalizar"
          class="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg bg-migs-logo px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-migs-text"
        >
          Descubre cómo personalizar
        </NuxtLink>
      </div>
    </section>

    <section v-if="props.section === 'productos'" id="productos" class="scroll-mt-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div class="mx-auto max-w-7xl">
        <div class="mb-8 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-migs-text">La colección</p>
            <h2 class="mt-2 text-3xl font-semibold tracking-tight text-migs-logo sm:text-4xl">Explora por categorías</h2>
          </div>
          <p class="max-w-md text-sm leading-relaxed text-migs-text">
            Explora nuestra selección de piezas impresas en 3D. También creamos productos personalizados bajo consulta.
          </p>
        </div>

        <nav aria-label="Categorías de productos" class="mb-10 flex flex-wrap gap-3">
          <a
            v-for="section in productCategories"
            :key="section.id"
            :href="`#${section.id}`"
            class="rounded-full border border-migs-border/50 bg-white px-4 py-2 text-sm font-medium text-migs-logo transition-colors hover:bg-migs-bg"
          >
            {{ section.title }}
          </a>
        </nav>

        <div class="space-y-14">
          <section id="destacados" class="scroll-mt-24" aria-labelledby="destacados-title">
            <div class="mb-6 flex items-end justify-between gap-4">
              <h3 id="destacados-title" class="text-2xl font-semibold tracking-tight text-migs-logo sm:text-3xl">
                Los más destacados
              </h3>
            </div>
            <div
              aria-label="Productos más destacados"
              role="region"
              tabindex="0"
              class="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 sm:overflow-visible sm:p-0 lg:grid-cols-4"
            >
              <article
                v-for="product in featuredProducts"
                :key="product.id"
                class="group flex h-full w-[82%] shrink-0 snap-start flex-col rounded-2xl sm:w-auto"
              >
                <NuxtLink :to="`/producto/${product.slug}`" class="flex flex-1 flex-col">
                  <div class="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl bg-migs-bg shadow-sm ring-1 ring-migs-border/50">
                    <img
                      v-if="product.image"
                      :src="product.image"
                      :alt="product.name"
                      loading="lazy"
                      class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    >
                    <div v-else class="flex flex-col items-center gap-3 text-center text-migs-text">
                      <svg class="h-14 w-14 opacity-60" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                        <path d="M8 16.5 24 8l16 8.5v16L24 41 8 32.5v-16Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                        <path d="m8.5 16.8 15.5 8.4 15.5-8.4M24 25.5V40" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                      </svg>
                      <span class="text-sm font-medium">Imagen próximamente</span>
                    </div>
                  </div>
                  <div class="mt-4 flex min-h-16 items-start justify-between gap-3">
                    <div>
                      <h4 class="line-clamp-2 font-semibold text-migs-logo transition-colors group-hover:text-migs-text">{{ product.name }}</h4>
                      <p class="mt-1 text-sm text-migs-text">{{ product.material }}</p>
                    </div>
                  </div>
                </NuxtLink>
                <div class="mt-auto w-full pt-4">
                  <ProductContactActions :product-name="product.name" compact />
                </div>
              </article>
              <p v-if="featuredProducts.length === 0" class="w-full shrink-0 text-sm text-migs-text sm:col-span-2 lg:col-span-4">
                Todavía no hay productos destacados.
              </p>
            </div>
          </section>

          <section
            v-for="section in productCategories.filter((item) => item.id !== 'destacados')"
            :id="section.id"
            :key="section.id"
            class="scroll-mt-24"
            :aria-labelledby="`${section.id}-title`"
          >
            <div class="mb-6 flex items-end justify-between gap-4">
              <h3 :id="`${section.id}-title`" class="text-2xl font-semibold tracking-tight text-migs-logo sm:text-3xl">
                {{ section.title }}
              </h3>
            </div>

            <div
              :aria-label="`Productos de ${section.title}`"
              role="region"
              tabindex="0"
              class="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 sm:overflow-visible sm:p-0 lg:grid-cols-4"
            >
              <article
                v-for="product in products.filter((item) => item.category === section.title)"
                :key="product.id"
                class="group flex h-full w-[82%] shrink-0 snap-start flex-col rounded-2xl sm:w-auto"
              >
                <NuxtLink :to="`/producto/${product.slug}`" class="flex flex-1 flex-col">
                  <div class="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl bg-migs-bg shadow-sm ring-1 ring-migs-border/50">
                    <img
                      v-if="product.image"
                      :src="product.image"
                      :alt="product.name"
                      loading="lazy"
                      class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    >
                    <div v-else class="flex flex-col items-center gap-3 text-center text-migs-text">
                      <svg class="h-14 w-14 opacity-60" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                        <path d="M8 16.5 24 8l16 8.5v16L24 41 8 32.5v-16Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                        <path d="m8.5 16.8 15.5 8.4 15.5-8.4M24 25.5V40" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                      </svg>
                      <span class="text-sm font-medium">Imagen próximamente</span>
                    </div>
                  </div>
                  <div class="mt-4 flex min-h-16 items-start justify-between gap-3">
                    <div>
                      <h4 class="line-clamp-2 font-semibold text-migs-logo transition-colors group-hover:text-migs-text">{{ product.name }}</h4>
                      <p class="mt-1 text-sm text-migs-text">{{ product.material }}</p>
                    </div>
                  </div>
                </NuxtLink>
                <div class="mt-auto w-full pt-4">
                  <ProductContactActions :product-name="product.name" compact />
                </div>
              </article>
              <p
                v-if="!products.some((product) => product.category === section.title)"
                class="w-full shrink-0 text-sm text-migs-text sm:col-span-2 lg:col-span-4"
              >
                Próximamente añadiremos productos a esta categoría.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section v-if="props.section === 'quienes-somos'" class="px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <div class="mx-auto max-w-7xl">
        <div class="mb-8 text-center">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-migs-text">¿Por qué elegir MIGS 3D?</p>
          <h2 class="mt-2 text-3xl font-semibold tracking-tight text-migs-logo sm:text-4xl">Colección y detalles que te acompañan</h2>
        </div>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article v-for="benefit in benefits" :key="benefit.title" class="rounded-3xl border border-migs-border/30 bg-white p-6 shadow-sm">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-migs-bg text-migs-logo">
              <svg v-if="benefit.icon === 'collection'" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
                <path d="m4.5 7.8 7.5 4.3 7.5-4.3M12 12.1V21" />
              </svg>
              <svg v-else-if="benefit.icon === 'customize'" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M12 3a9 9 0 1 0 9 9" />
                <path d="M12 7v5l3 2" />
                <path d="M19 3v5m-2.5-2.5h5" />
              </svg>
              <svg v-else-if="benefit.icon === 'printer'" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M6 8V3h12v5M6 17H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <path d="M6 14h12v7H6zM18 11h.01" />
              </svg>
              <svg v-else-if="benefit.icon === 'support'" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
                <path d="M4 13a2 2 0 0 0 0 4h2v-4H4Zm16 0a2 2 0 0 1 0 4h-2v-4h2Z" />
                <path d="M18 18a6 6 0 0 1-6 3h-1" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-migs-logo">{{ benefit.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-migs-text">{{ benefit.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section v-if="props.section === 'quienes-somos'" class="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div class="mx-auto max-w-7xl rounded-[2rem] border border-migs-border/30 bg-white p-6 sm:p-10">
        <div class="max-w-2xl">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-migs-text">Nuestro material</p>
          <h2 class="mt-2 text-3xl font-semibold tracking-tight text-migs-logo sm:text-4xl">Imprimimos en PLA</h2>
          <p class="mt-3 text-sm leading-relaxed text-migs-text">
            El PLA (ácido poliláctico) es un termoplástico que se utiliza en impresión 3D y puede fabricarse a partir de materias primas vegetales renovables, como almidón de maíz o caña de azúcar. Aunque algunos productos de PLA pueden compostarse en instalaciones industriales con condiciones controladas, no se biodegrada necesariamente en casa ni en el entorno natural. Es ligero y permite reproducir detalles, pero puede deformarse con temperaturas elevadas y no es adecuado para todos los usos.
          </p>
        </div>
        <div class="mt-8 grid gap-5 md:grid-cols-3">
          <article v-for="benefit in plaBenefits" :key="benefit.title" class="rounded-2xl bg-migs-bg p-5">
            <h3 class="font-semibold text-migs-logo">{{ benefit.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-migs-text">{{ benefit.text }}</p>
          </article>
        </div>
        <p class="mt-5 text-xs leading-relaxed text-migs-text">
          La resistencia y el acabado dependen del diseño, la configuración de impresión y el uso de cada pieza. Consúltanos si tienes dudas sobre una aplicación concreta.
        </p>
      </div>
    </section>

    <section v-if="props.section === 'proceso'" id="proceso" class="scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div class="mx-auto max-w-7xl">
        <div class="mb-10 text-center">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-migs-text">Cómo trabajamos</p>
          <h2 class="mt-2 text-3xl font-semibold tracking-tight text-migs-logo sm:text-4xl">Un proceso sencillo y claro</h2>
        </div>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article v-for="step in process" :key="step.number" class="rounded-3xl border border-migs-border/30 bg-white p-6">
            <span class="text-sm font-semibold uppercase tracking-[0.2em] text-migs-text">{{ step.number }}</span>
            <h3 class="mt-4 text-xl font-semibold text-migs-logo">{{ step.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-migs-text">{{ step.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section v-if="props.section === 'personalizar'" id="personalizacion" class="scroll-mt-24 px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
      <div class="mx-auto max-w-7xl">
        <div class="mb-8 text-center">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-migs-text">Personaliza tu pieza</p>
          <h2 class="mt-2 text-3xl font-semibold tracking-tight text-migs-logo sm:text-4xl">Tu estilo, sobre nuestros modelos</h2>
          <p class="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-migs-text">
            Cada pieza tiene opciones de color y tamaño definidas. Si necesitas algo diferente o una modificación, cuéntanos qué buscas y comprobaremos si se puede hacer para ese modelo.
          </p>
        </div>

        <div class="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-migs-border/30 bg-white p-6 text-center sm:flex-row sm:justify-center sm:text-left">
          <p class="text-sm leading-relaxed text-migs-text">
            ¿Tienes una pieza en mente? Escríbenos con el modelo y los cambios que te gustaría pedir. Te confirmaremos disponibilidad y opciones.
          </p>
          <a
            v-if="whatsappContact"
            :href="whatsappContact"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-migs-logo px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-migs-text"
          >
            Consultar personalización
          </a>
        </div>
      </div>
    </section>

    <section v-if="props.section === 'proceso'" class="px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
      <div class="mx-auto max-w-5xl rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-10">
        <div class="mb-6 text-center">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-migs-text">Preguntas frecuentes</p>
          <h2 class="mt-2 text-3xl font-semibold tracking-tight text-migs-logo">Todo lo que necesitas saber</h2>
        </div>

        <div class="space-y-4">
          <div v-for="item in faqs" :key="item.question" class="rounded-2xl border border-migs-border/20 bg-migs-bg p-5">
            <h3 class="text-base font-semibold text-migs-logo">{{ item.question }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-migs-text">{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <section v-if="props.section === 'quienes-somos'" id="quienes-somos" class="scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div class="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-migs-border/30 bg-white p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-migs-text">MIGS3D</p>
          <h2 class="mt-2 text-3xl font-semibold tracking-tight text-migs-logo sm:text-4xl">Quiénes somos</h2>
        </div>
        <div class="space-y-4 text-sm leading-relaxed text-migs-text sm:text-base">
          <p>
            Somos Mario, Israel, Guillermo y Sergio, las personas que están detrás de MIGS3D. Diseñamos y fabricamos piezas mediante impresión 3D, cuidando cada detalle del proceso. Mario se encarga de las redes sociales y de impulsar las ventas. Israel prepara los pedidos y se asegura de que todo salga perfecto. Guillermo es el diseñador jefe y lleva las cuentas del proyecto; entre todos colaboramos en el diseño y aportamos ideas. Sergio se ocupa de la página web y de proponer ideas y conceptos tecnológicos para aumentar nuestra visibilidad y automatizar procesos.
          </p>
          <p>
            Este proyecto reúne nuestro interés por el diseño y la fabricación digital. Si tienes alguna pregunta sobre nosotros o sobre una pieza, estaremos encantados de leerte.
          </p>
        </div>
      </div>
    </section>

    <section v-if="props.section === 'contacto'" id="contacto" class="scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div class="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-migs-border/50 bg-white p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div class="max-w-xl">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-migs-text">¿Quieres personalizar una pieza?</p>
          <h2 class="mt-2 text-2xl font-semibold tracking-tight text-migs-logo sm:text-3xl">Cuéntanos qué cambio tienes en mente</h2>
          <p class="mt-3 text-sm leading-relaxed text-migs-text">
            Dinos qué pieza te interesa y si quieres consultar un cambio de color, tamaño o algún detalle. Te confirmaremos las opciones disponibles.
          </p>
          <div class="mt-6">
            <ProductContactActions product-name="una pieza de la colección y sus opciones de personalización" />
          </div>
        </div>

        <form v-if="formspreeFormId" class="space-y-5" @submit.prevent="submitContactForm">
          <div class="absolute -left-[9999px]" aria-hidden="true">
            <label for="contact-website">No rellenes este campo</label>
            <input id="contact-website" v-model="contactForm._gotcha" type="text" name="_gotcha" tabindex="-1" autocomplete="off">
          </div>

          <div class="grid gap-5 sm:grid-cols-2">
            <div>
              <label for="contact-name" class="mb-2 block text-sm font-medium text-migs-logo">Nombre</label>
              <input
                id="contact-name"
                v-model.trim="contactForm.name"
                name="name"
                type="text"
                autocomplete="name"
                required
                maxlength="100"
                class="min-h-11 w-full rounded-lg border border-migs-border/60 bg-white px-3 py-2 text-sm text-migs-logo outline-none transition focus:border-migs-text focus:ring-2 focus:ring-migs-text/20"
              >
            </div>
            <div>
              <label for="contact-email" class="mb-2 block text-sm font-medium text-migs-logo">Email</label>
              <input
                id="contact-email"
                v-model.trim="contactForm.email"
                name="email"
                type="email"
                autocomplete="email"
                required
                maxlength="254"
                class="min-h-11 w-full rounded-lg border border-migs-border/60 bg-white px-3 py-2 text-sm text-migs-logo outline-none transition focus:border-migs-text focus:ring-2 focus:ring-migs-text/20"
              >
            </div>
          </div>

          <div>
            <label for="contact-product" class="mb-2 block text-sm font-medium text-migs-logo">¿Qué pieza te interesa?</label>
            <select
              id="contact-product"
              v-model="contactForm.product"
              name="product"
              class="min-h-11 w-full rounded-lg border border-migs-border/60 bg-white px-3 py-2 text-sm text-migs-logo outline-none transition focus:border-migs-text focus:ring-2 focus:ring-migs-text/20"
            >
              <option value="">Selecciona una pieza (opcional)</option>
              <option v-for="product in products" :key="product.id" :value="product.name">{{ product.name }}</option>
              <option value="Otra consulta">Otra consulta</option>
            </select>
          </div>

          <div>
            <label for="contact-message" class="mb-2 block text-sm font-medium text-migs-logo">Mensaje</label>
            <textarea
              id="contact-message"
              v-model.trim="contactForm.message"
              name="message"
              rows="5"
              required
              maxlength="3000"
              placeholder="Cuéntanos qué color, tamaño o modificación quieres consultar."
              class="w-full rounded-lg border border-migs-border/60 bg-white px-3 py-2 text-sm text-migs-logo outline-none transition placeholder:text-migs-text/70 focus:border-migs-text focus:ring-2 focus:ring-migs-text/20"
            />
          </div>

          <label class="flex items-start gap-3 text-sm leading-relaxed text-migs-text">
            <input
              v-model="contactForm.privacyNoticeRead"
              name="privacy_notice_read"
              type="checkbox"
              required
              class="mt-1 h-4 w-4 shrink-0 rounded border-migs-border text-migs-logo focus:ring-migs-text"
            >
            <span>
              He leído la
              <NuxtLink to="/aviso-legal#privacidad" target="_blank" class="font-medium text-migs-logo underline decoration-migs-border underline-offset-2">
                información de privacidad
              </NuxtLink>
              sobre el uso de mis datos para responder a esta consulta.
            </span>
          </label>

          <button
            type="submit"
            :disabled="formStatus === 'submitting'"
            class="inline-flex min-h-11 items-center justify-center rounded-lg bg-migs-logo px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-migs-text disabled:cursor-wait disabled:opacity-60"
          >
            {{ formStatus === 'submitting' ? 'Enviando…' : 'Enviar consulta' }}
          </button>
          <p
            v-if="formStatusMessage"
            class="text-sm leading-relaxed"
            :class="formStatus === 'error' ? 'text-red-700' : 'text-migs-text'"
            role="status"
            aria-live="polite"
          >
            {{ formStatusMessage }}
          </p>
        </form>

        <p v-else class="self-center rounded-2xl bg-migs-bg p-5 text-sm leading-relaxed text-migs-text">
          El formulario estará disponible próximamente. Mientras tanto, puedes contactarnos por WhatsApp o email.
        </p>
      </div>
    </section>
  </div>
</template>

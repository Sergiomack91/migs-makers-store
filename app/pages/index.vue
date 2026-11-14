<script setup lang="ts">
import { productCategories, products } from '~/data/products'

const { emailUrl, formspreeFormId, whatsappUrl } = useStorefrontContact()
const featuredProducts = products.filter((product) => product.isPopular)

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
    text: 'Revisamos contigo qué personalizaciones son posibles para esa pieza y su precio.',
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
    question: '¿Puedo consultar un presupuesto sin compromiso?',
    answer: 'Claro. Puedes escribirnos por WhatsApp o Instagram y te responderemos con información y precio.',
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
    <section id="populares" class="scroll-mt-24 px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
      <div class="mx-auto max-w-7xl">
        <div class="mb-6">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-migs-text">Descubre la colección</p>
          <h2 class="mt-2 text-3xl font-semibold tracking-tight text-migs-logo sm:text-4xl">Populares</h2>
        </div>
        <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          <article v-for="product in featuredProducts" :key="product.id" class="group flex h-full flex-col rounded-2xl">
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
                <span class="shrink-0 text-right text-xs font-semibold text-migs-text">Consultar<br>precio</span>
              </div>
            </NuxtLink>
            <div class="mt-auto w-full pt-4">
              <ProductContactActions :product-name="product.name" compact />
            </div>
          </article>
          <p v-if="featuredProducts.length === 0" class="text-sm text-migs-text">
            Aquí aparecerán los productos más populares de las demás categorías.
          </p>
        </div>
      </div>
    </section>

    <section class="px-4 pb-6 pt-5 sm:px-6 lg:px-8 lg:pb-8 lg:pt-8">
      <div class="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-migs-logo px-6 py-8 text-white shadow-xl shadow-slate-200/60 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
        <div class="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div class="pointer-events-none absolute -right-4 -top-16 h-64 w-64 rounded-full border border-white/10" />
        <div class="pointer-events-none absolute bottom-0 left-0 h-44 w-44 rounded-full bg-white/5 blur-2xl" />

        <div class="relative grid items-center gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:gap-6">
          <div class="relative z-10">
            <p class="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Diseño y fabricación 3D</p>
            <h1 class="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Piezas propias, con opciones para hacerlas más tuyas.
            </h1>
            <p class="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Cada modelo tiene colores y tamaños establecidos. ¿Te gustaría cambiar el color, las medidas o algún detalle? Consúltanos las opciones para tu pieza.
            </p>

            <div class="mt-6 flex flex-wrap gap-3">
              <a
                v-if="whatsappContact"
                :href="whatsappContact"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex min-h-12 items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-migs-logo transition-colors hover:bg-migs-bg"
              >
                Solicitar presupuesto
              </a>
              <a
                v-else-if="emailContact"
                :href="emailContact"
                class="inline-flex min-h-12 items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-migs-logo transition-colors hover:bg-migs-bg"
              >
                Solicitar presupuesto por email
              </a>
              <NuxtLink
                v-else-if="formspreeFormId"
                to="#contacto"
                class="inline-flex min-h-12 items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-migs-logo transition-colors hover:bg-migs-bg"
              >
                Contactar
              </NuxtLink>
              <NuxtLink to="#productos" class="inline-flex min-h-12 items-center rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Ver catálogo
              </NuxtLink>
            </div>

            <div class="mt-6 flex flex-wrap gap-6 text-sm text-white/80">
              <div>
                <span class="block text-2xl font-semibold text-white">Color</span>
                <span>opciones disponibles</span>
              </div>
              <div>
                <span class="block text-2xl font-semibold text-white">Tamaño</span>
                <span>medidas definidas</span>
              </div>
              <div>
                <span class="block text-2xl font-semibold text-white">Detalles</span>
                <span>cambios bajo consulta</span>
              </div>
            </div>
          </div>

          <div class="mx-auto w-full max-w-md lg:max-w-none">
            <div class="rounded-[2rem] border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
              <img
                src="/migs-impresion-3d.svg"
                alt="Ilustración de una impresora 3D fabricando una pieza"
                class="h-auto w-full rounded-[1.5rem] bg-white/5 p-4"
              >
              <div class="mt-4 rounded-2xl bg-white/10 p-4 text-sm text-white/80">
                <p class="font-semibold text-white">Nuestra colección, con opciones de personalización</p>
                <ul class="mt-3 space-y-2">
                  <li>• Colores y tamaños establecidos por modelo</li>
                  <li>• Consulta cambios de color, tamaño o detalles</li>
                  <li>• Confirmamos las opciones según cada pieza</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="productos" class="scroll-mt-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
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
          <section
            v-for="section in productCategories.filter((item) => item.title !== 'Populares')"
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

            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              <article
                v-for="product in products.filter((item) => item.category === section.title)"
                :key="product.id"
                class="group flex h-full flex-col rounded-2xl"
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
                    <span class="shrink-0 text-right text-xs font-semibold text-migs-text">Consultar<br>precio</span>
                  </div>
                </NuxtLink>
                <div class="mt-auto w-full pt-4">
                  <ProductContactActions :product-name="product.name" compact />
                </div>
              </article>
              <p
                v-if="!products.some((product) => product.category === section.title)"
                class="text-sm text-migs-text"
              >
                Próximamente añadiremos productos a esta categoría.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section id="quienes-somos" class="scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div class="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-migs-border/30 bg-white p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-migs-text">MIGS 3D</p>
          <h2 class="mt-2 text-3xl font-semibold tracking-tight text-migs-logo sm:text-4xl">Quiénes somos</h2>
        </div>
        <div class="space-y-4 text-sm leading-relaxed text-migs-text sm:text-base">
          <p>
            En MIGS 3D diseñamos y fabricamos nuestra propia colección de piezas mediante impresión 3D. Cada modelo forma parte de una selección creada para ofrecer objetos originales y cuidados.
          </p>
          <p>
            Trabajamos principalmente con PLA y cada pieza tiene opciones definidas de colores y tamaños. Si tienes una idea o quieres consultar algún cambio, cuéntanos qué necesitas: revisaremos contigo las posibilidades de cada modelo.
          </p>
        </div>
      </div>
    </section>

    <section class="px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
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

    <section class="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div class="mx-auto max-w-7xl rounded-[2rem] border border-migs-border/30 bg-white p-6 sm:p-10">
        <div class="max-w-2xl">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-migs-text">Nuestro material</p>
          <h2 class="mt-2 text-3xl font-semibold tracking-tight text-migs-logo sm:text-4xl">Imprimimos en PLA</h2>
          <p class="mt-3 text-sm leading-relaxed text-migs-text">
            El PLA es un termoplástico muy utilizado en impresión 3D. Permite crear piezas ligeras, rígidas y con buen nivel de detalle. Como cualquier material, tiene límites: puede deformarse con temperaturas elevadas y no es adecuado para todos los usos.
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

    <section id="proceso" class="scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
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

    <section id="personalizacion" class="scroll-mt-24 px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
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
            ¿Tienes una pieza en mente? Escríbenos con el modelo y los cambios que te gustaría pedir. Te confirmaremos disponibilidad y precio.
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

    <section class="px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
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

    <section id="contacto" class="scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
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

# MIGSMakers

Escaparate web de MIGSMakers para presentar diseños y productos de fabricación digital. La web no procesa compras ni pagos: las consultas de precio, disponibilidad y personalización se realizarán por WhatsApp, email o Instagram.

> **Estado del proyecto:** prototipo visual con productos de ejemplo. Los enlaces de contacto se activan al configurar sus direcciones.

## Funcionalidades actuales

- Portada visual y catálogo adaptable a móvil y escritorio.
- Fichas de producto con descripción, categoría y material.
- Acciones de consulta por producto mediante enlaces configurables a WhatsApp, email e Instagram.
- Sin carrito, checkout ni gestión de pedidos en esta aplicación.
- Interfaz construida con Nuxt, Vue y Tailwind CSS.

## Requisitos

- Node.js y npm instalados.

## Instalación y desarrollo

Desde la carpeta del proyecto, instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre la dirección que indique la terminal (por defecto, <http://localhost:3000>).

## Configurar los enlaces de contacto

Configura las variables de entorno públicas copiando `.env.example` como `.env`. El número de WhatsApp debe incluir el prefijo del país, sin `+`, espacios ni guiones:

```env
NUXT_PUBLIC_WHATSAPP_NUMBER=34600000000
NUXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/tu-cuenta/
NUXT_PUBLIC_TIKTOK_URL=https://www.tiktok.com/@tu-cuenta
NUXT_PUBLIC_VINTED_URL=https://www.vinted.es/member/tu-cuenta
NUXT_PUBLIC_WALLAPOP_URL=https://es.wallapop.com/app/user/tu-cuenta
NUXT_PUBLIC_EMAIL_ADDRESS=hola@tudominio.es
```

En Vercel, añade las mismas variables en **Project Settings → Environment Variables** y selecciona los entornos correspondientes (Production, Preview y/o Development). Usa URLs completas para las redes sociales y el número de WhatsApp con prefijo internacional, solo dígitos. Estas variables `NUXT_PUBLIC_*` se incluyen en el sitio y son visibles para los visitantes; configúralas solo con datos de contacto que quieras hacer públicos. Tras cambiarlas en Vercel, vuelve a desplegar el proyecto. En local, completa los valores en `.env` y reinicia el servidor. Si una variable está vacía, la acción correspondiente no se mostrará.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la compilación de producción. |
| `npm run preview` | Previsualiza localmente la compilación de producción. |
| `npm run generate` | Genera la versión estática del sitio. |

## Estructura principal

```text
app/
├── app.vue                     # Composición principal de la página
└── components/
    ├── ProductGrid.vue         # Portada y catálogo
    ├── ProductContactActions.vue # Contacto contextual por producto
    ├── SiteHeader.vue          # Cabecera y navegación
    └── SiteFooter.vue          # Enlaces de contacto e información legal
├── composables/
│   └── useStorefrontContact.ts # Enlaces de WhatsApp e Instagram
├── data/
│   └── products.ts             # Productos de ejemplo
└── pages/
    └── producto/[slug].vue     # Ficha de producto
public/
└── images/
    └── products/               # Fotografías de los productos
nuxt.config.ts                  # Configuración de Nuxt y Tailwind CSS
```

## Personalización

Los productos de demostración se encuentran en `app/data/products.ts`. Actualiza ahí los nombres, descripciones y materiales. Las imágenes se guardan en `public/images/products/`; por ejemplo, reemplaza `soporte-auriculares.jpg` por tu fotografía conservando el mismo nombre para que la web la use automáticamente. Si cambias el nombre del archivo, actualiza también la ruta `image` del producto en `app/data/products.ts`. Las fotos actuales son ilustrativas y deben cambiarse por fotografías de los productos reales. El aviso legal y la política de cookies deben revisarse y completarse según la actividad, los servicios y la configuración real antes de publicar.

## Creador

**Sergio Rodríguez Quintana**

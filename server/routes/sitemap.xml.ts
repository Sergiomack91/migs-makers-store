import { products } from '~/data/products'

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const configuredSiteUrl = String(config.public.siteUrl).trim()

  if (!configuredSiteUrl) {
    throw createError({
      statusCode: 503,
      statusMessage: 'Configure NUXT_PUBLIC_SITE_URL para generar el sitemap.',
    })
  }

  let siteUrl: URL
  try {
    siteUrl = new URL(configuredSiteUrl)
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: 'NUXT_PUBLIC_SITE_URL debe ser una URL valida.',
    })
  }

  if (
    !['http:', 'https:'].includes(siteUrl.protocol)
    || siteUrl.pathname !== '/'
    || siteUrl.search
    || siteUrl.hash
    || siteUrl.username
    || siteUrl.password
  ) {
    throw createError({
      statusCode: 500,
      statusMessage: 'NUXT_PUBLIC_SITE_URL debe contener solo el origen publico del sitio.',
    })
  }

  const paths = [
    '/',
    ...products.map((product) => `/producto/${encodeURIComponent(product.slug)}`),
  ]
  const urls = paths
    .map((path) => `  <url><loc>${escapeXml(new URL(path, siteUrl).href)}</loc></url>`)
    .join('\n')

  setResponseHeader(event, 'Content-Type', 'application/xml; charset=utf-8')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
})

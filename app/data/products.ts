export interface Product {
  id: number
  slug: string
  name: string
  category: string
  material: string
  description: string
  image?: string
}

export const products: Product[] = [
  {
    id: 1,
    slug: 'soporte-auriculares',
    name: 'Soporte para auriculares (ejemplo)',
    category: 'Más vendidos',
    material: 'PLA',
    description:
      'Producto de ejemplo para mostrar cómo se verá el catálogo. Consulta precio y posibles opciones de personalización.',
  },
  {
    id: 2,
    slug: 'carcasa-teclado-60',
    name: 'Accesorio de escritorio (ejemplo)',
    category: 'Varios',
    material: 'PLA',
    description:
      'Producto de ejemplo para mostrar cómo se verá el catálogo. Consulta precio y posibles opciones de personalización.',
  },
  {
    id: 3,
    slug: 'macetero-geometrico',
    name: 'Macetero decorativo (ejemplo)',
    category: 'Hogar',
    material: 'PLA',
    description:
      'Producto de ejemplo para mostrar cómo se verá el catálogo. Consulta precio y posibles opciones de personalización.',
  },
  {
    id: 4,
    slug: 'figura-articulada',
    name: 'Figura articulada (ejemplo)',
    category: 'Más vendidos',
    material: 'PLA',
    description:
      'Producto de ejemplo para mostrar cómo se verá el catálogo. Consulta precio y posibles opciones de personalización.',
  },
  {
    id: 5,
    slug: 'llavero-ejemplo',
    name: 'Llavero personalizado (ejemplo)',
    category: 'Llaveros',
    material: 'PLA',
    description:
      'Producto de ejemplo para mostrar cómo se verá la sección de llaveros. Consulta precio y posibles opciones de personalización.',
  },
]

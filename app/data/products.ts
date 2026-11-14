export const productCategories = [
  { id: 'populares', title: 'Populares' },
  { id: 'hogar', title: 'Hogar' },
  { id: 'personalizados', title: 'Personalizados' },
  { id: 'juegos-de-mesa', title: 'Juegos de mesa' },
  { id: 'letras-personalizadas', title: 'Letras personalizadas' },
  { id: 'llaveros', title: 'Llaveros' },
] as const

export type ProductCategory = Exclude<(typeof productCategories)[number]['title'], 'Populares'>

export interface Product {
  id: number
  slug: string
  name: string
  category: ProductCategory
  isPopular?: boolean
  material: string
  description: string
  sizes?: string[]
  colors?: string[]
  image?: string
}

export const products: Product[] = [
  {
    id: 2,
    slug: 'figura-personalizada-soldado',
    name: 'Figura personalizada de militar',
    category: 'Personalizados',
    isPopular: true,
    material: 'PLA',
    description:
      'Figura personalizada impresa en 3D según tus indicaciones. Consulta opciones de personalización y presupuesto.',
    image: '/images/productos/personalizados/soldado.png',
  },
  {
    id: 1,
    slug: 'figura-personalizada-futbolista',
    name: 'Figura personalizada de futbolista',
    category: 'Personalizados',
    material: 'PLA',
    description:
      'Figura personalizada impresa en 3D según la persona o el diseño que nos indiques. Consulta opciones de personalización y presupuesto.',
    image: '/images/productos/personalizados/futbolista.png',
  },
  {
    id: 3,
    slug: 'reno-decorativo',
    name: 'Reno decorativo de 17 cm',
    category: 'Hogar',
    isPopular: true,
    material: 'PLA',
    description:
      'Figura decorativa de reno impresa en 3D, en acabado marrón. Altura aproximada: 17 cm.',
    image: '/images/productos/hogar/RENO_MARRON_17_CM.png',
  },
  {
    id: 4,
    slug: 'casa-thunder-road-vendetta',
    name: 'Casa para Thunder Road: Vendetta',
    category: 'Juegos de mesa',
    isPopular: true,
    material: 'PLA',
    description:
      'Pieza impresa en 3D para ambientar tus partidas de Thunder Road: Vendetta. Consulta precio y disponibilidad.',
    image: '/images/productos/juegos-de-mesa/casathunderroadvendetta.png',
  },
  {
    id: 5,
    slug: 'rampa-thunder-road-vendetta',
    name: 'Rampa para Thunder Road: Vendetta',
    category: 'Juegos de mesa',
    material: 'PLA',
    description:
      'Pieza impresa en 3D para ambientar tus partidas de Thunder Road: Vendetta. Consulta precio y disponibilidad.',
    image: '/images/productos/juegos-de-mesa/Rampathunderroadvendetta.png',
  },
]

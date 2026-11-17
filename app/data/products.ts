export const productCategories = [
  { id: 'destacados', title: 'Los más destacados' },
  { id: 'hogar', title: 'Hogar' },
  { id: 'navidad', title: 'Navidad' },
  { id: 'personalizados', title: 'Personalizados' },
  { id: 'juegos-de-mesa', title: 'Juegos de mesa' },
  { id: 'letras-personalizadas', title: 'Letras personalizadas' },
  { id: 'llaveros', title: 'Llaveros' },
] as const

export type ProductCategory = Exclude<(typeof productCategories)[number]['title'], 'Los más destacados'>

export interface Product {
  id: number
  slug: string
  name: string
  category: ProductCategory
  isPopular?: boolean
  material: string
  description: string
  sizes?: string[]
  formats?: string[]
  colors?: string[]
  image?: string
  images?: string[]
}

export const products: Product[] = [
  {
    id: 2,
    slug: 'figura-personalizada-soldado',
    name: 'Figura personalizada de militar',
    category: 'Personalizados',
    material: 'PLA',
    description:
      'Figura personalizada impresa en 3D según tus indicaciones. Consulta las opciones de personalización.',
    image: '/images/productos/personalizados/soldado.png',
  },
  {
    id: 1,
    slug: 'figura-personalizada-futbolista',
    name: 'Figura personalizada de futbolista',
    category: 'Personalizados',
    material: 'PLA',
    description:
      'Figura personalizada impresa en 3D según la persona o el diseño que nos indiques. Consulta las opciones de personalización.',
    image: '/images/productos/personalizados/futbolista.png',
  },
  {
    id: 3,
    slug: 'reno-decorativo',
    name: 'Reno decorativo de 17 cm',
    category: 'Navidad',
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
    material: 'PLA',
    description:
      'Pieza impresa en 3D para ambientar tus partidas de Thunder Road: Vendetta. Consulta disponibilidad y opciones.',
    image: '/images/productos/juegos-de-mesa/casathunderroadvendetta.png',
  },
  {
    id: 5,
    slug: 'rampa-thunder-road-vendetta',
    name: 'Rampa para Thunder Road: Vendetta',
    category: 'Juegos de mesa',
    material: 'PLA',
    description:
      'Pieza impresa en 3D para ambientar tus partidas de Thunder Road: Vendetta. Consulta disponibilidad y opciones.',
    image: '/images/productos/juegos-de-mesa/Rampathunderroadvendetta.png',
  },
  {
    id: 6,
    slug: 'cascanueces-rojo',
    name: 'Cascanueces navideño rojo',
    category: 'Navidad',
    isPopular: true,
    material: 'PLA',
    description: `Llamativo cascanueces navideño en un vibrante color rojo que aportará un toque moderno y un ambiente festivo a tu hogar. Ideal para decorar una estantería, el recibidor o para regalar.

Su diseño minimalista y su acabado texturizado reinventan todo un clásico de la Navidad, convirtiéndolo en una pieza decorativa contemporánea y con mucha personalidad que llamará la atención en cualquier rincón.

Medidas: 20,9 cm de alto.`,
    image: '/images/productos/navidad/cascanueces-rojo.png',
  },
  {
    id: 7,
    slug: 'reyes-magos-blancos',
    name: 'Reyes Magos decorativos blancos',
    category: 'Navidad',
    material: 'PLA',
    description: `Elegante conjunto de los Reyes Magos en un impecable color blanco que aportará sofisticación y un toque de paz a tu decoración navideña. Ideal para crear un belén moderno, lucir sobre una consola o sorprender con un regalo especial.

Su diseño minimalista de líneas fluidas y envolventes reinventa la tradición, convirtiéndolos en unas figuras decorativas atemporales que encajan a la perfección en cualquier estilo de hogar.

Medidas: 12 cm de alto cada figura.`,
    image: '/images/productos/navidad/reyes-magos-blancos.png',
  },
  {
    id: 8,
    slug: 'abrazo-sagrado-natividad',
    name: 'Abrazo sagrado de la Natividad',
    category: 'Navidad',
    material: 'PLA',
    description: `Conmovedora figura del Abrazo sagrado de la Natividad en un puro color blanco que aportará ternura y un ambiente de paz a tu hogar. Ideal para presidir un mueble, crear un rincón navideño muy especial o para hacer un regalo entrañable.

Su diseño minimalista de líneas suaves y envolventes transmite calidez y protección, ofreciendo una visión contemporánea y muy emotiva de la Sagrada Familia que encajará a la perfección con cualquier estilo decorativo.

Medidas: 8,6 × 6,2 × 10 cm.`,
    image: '/images/productos/navidad/abrazo-sagrado-natividad.png',
  },
  {
    id: 9,
    slug: 'conejo-decorativo-contenedor',
    name: 'Conejo decorativo con contenedor',
    category: 'Hogar',
    isPopular: true,
    material: 'PLA',
    description: `Original figura decorativa con forma de conejo en tonos blanco y rojo que aportará un toque divertido y funcional a tu hogar. Ideal para decorar la habitación de los más pequeños, una estantería o como detalle sorpresa para regalar.

Su diseño moderno y texturizado esconde un secreto: la parte inferior sirve como un práctico contenedor, perfecto para guardar pequeños dulces, bombones o pequeños tesoros, combinando a la perfección decoración y utilidad.

Medidas: 17,2 cm de alto.`,
    image: '/images/productos/hogar/conejo-contenedor-abierto.png',
    images: [
      '/images/productos/hogar/conejo-contenedor-abierto.png',
      '/images/productos/hogar/conejo-contenedor-cerrado.png',
    ],
  },
  {
    id: 10,
    slug: 'pareja-buhos-decorativos',
    name: 'Pareja de búhos decorativos',
    category: 'Hogar',
    isPopular: true,
    material: 'PLA',
    description: `Encantadora pareja de búhos decorativos en contraste blanco y negro que aportará un toque de sabiduría y elegancia a tu hogar. Ideal para decorar una estantería, un escritorio o para hacer un regalo muy original.

Su diseño texturizado de líneas elegantes y su estilo minimalista los convierten en unas piezas muy versátiles, perfectas para lucir juntas o por separado. Una propuesta contemporánea que encajará a la perfección con cualquier tipo de decoración.

Medidas:
- Búho blanco: 9,1 × 10,8 × 11,5 cm
- Búho negro: 9,45 × 9,6 × 9,1 cm`,
    image: '/images/productos/hogar/pareja-buhos-decorativos.png',
  },
  {
    id: 11,
    slug: 'recipientes-hexagonales-magneticos',
    name: 'Recipientes hexagonales magnéticos',
    category: 'Juegos de mesa',
    isPopular: true,
    material: 'PLA',
    formats: ['Unidad individual', 'Kit de 3 unidades', 'Kit de 6 unidades', 'Kit de 9 unidades'],
    colors: ['Blanco', 'Negro', 'Rojo'],
    description: `Prácticos recipientes hexagonales para recursos que aportarán orden y un toque de color a tus partidas de juegos de mesa. Ideales para mantener tus tokens, monedas o dados perfectamente organizados en la mesa o para hacer un regalo muy útil a cualquier aficionado.

Su ingenioso diseño cuenta con un sistema magnético que te permite unir varios cuencos entre sí para crear tu zona de juego a medida y evitar que las piezas se dispersen. Están disponibles en distintos colores y puedes adquirirlos de manera individual o elegir entre cómodos kits modulares de 3, 6 o 9 unidades para adaptarse a las necesidades de tus juegos favoritos.

Medidas:
- Recipiente: 10 × 8,8 × 2,2 cm
- Formatos: Unidad individual o kits de 3, 6 o 9 unidades en varios colores.`,
    image: '/images/productos/juegos-de-mesa/recipientes-hexagonales-magneticos.png',
  },
]

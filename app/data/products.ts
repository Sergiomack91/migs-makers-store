export interface Product {
  id: number
  slug: string
  name: string
  category: string
  material: string
  description: string
  image: string
}

export const products: Product[] = [
  {
    id: 1,
    slug: 'soporte-auriculares',
    name: 'Soporte minimalista para auriculares',
    category: 'Escritorio',
    material: 'PLA Premium',
    description:
      'Un soporte de líneas limpias para mantener tus auriculares a mano y dar un toque personal a tu escritorio. Escríbenos para consultar precio, colores y opciones.',
    image: '/images/products/soporte-auriculares.jpg',
  },
  {
    id: 2,
    slug: 'carcasa-teclado-60',
    name: 'Carcasa para teclado mecánico 60%',
    category: 'Accesorios',
    material: 'Material y acabado a consultar',
    description:
      'Una carcasa compacta para personalizar tu teclado mecánico. Consúltanos la compatibilidad, los acabados disponibles y el precio.',
    image: '/images/products/carcasa-teclado-60.jpg',
  },
  {
    id: 3,
    slug: 'macetero-geometrico',
    name: 'Macetero geométrico',
    category: 'Hogar',
    material: 'PETG',
    description:
      'Una pieza decorativa de formas geométricas para dar personalidad a tus plantas. Pregúntanos por tamaños, colores y precio.',
    image: '/images/products/macetero-geometrico.jpg',
  },
  {
    id: 4,
    slug: 'figura-articulada',
    name: 'Figura articulada',
    category: 'Figuras',
    material: 'PLA Seda',
    description:
      'Una figura articulada impresa en 3D, ideal para coleccionar o regalar. Consulta los colores disponibles y el precio por mensaje.',
    image: '/images/products/figura-articulada.jpg',
  },
]

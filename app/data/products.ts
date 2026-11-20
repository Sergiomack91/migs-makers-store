export const productCategories = [
  { id: 'destacados', title: 'Los más destacados' },
  { id: 'hogar', title: 'Hogar' },
  { id: 'navidad', title: 'Navidad' },
  { id: 'personalizados', title: 'Personalizados' },
  { id: 'juegos-de-mesa', title: 'Juegos de mesa' },
  { id: 'letras-personalizadas', title: 'Letras personalizadas' },
  { id: 'llaveros', title: 'Llaveros' },
  { id: 'otros', title: 'Otros' },
] as const

export type ProductCategory = Exclude<(typeof productCategories)[number]['title'], 'Los más destacados'>

export const productColors = [
  { name: 'Verde Manzana', hex: '#B5DB81' },
  { name: 'Verde hierba', hex: '#58C680' },
  { name: 'Azul Hielo', hex: '#B5E4E9' },
  { name: 'Amarillo Limón', hex: '#F7DB4A' },
  { name: 'Morado lila', hex: '#B89AD7' },
  { name: 'Bronceado desierto', hex: '#DDCCA7' },
  { name: 'Chocolate oscuro', hex: '#4A2C22' },
  { name: 'Marrón oscuro', hex: '#725D52' },
  { name: 'Verde oscuro', hex: '#6D7950' },
  { name: 'Rojo oscuro', hex: '#A72438' },
  { name: 'Blanco Marfil', hex: '#F2E8D0' },
  { name: 'Rojo Escarlata', hex: '#D84146' },
  { name: 'Terracota', hex: '#B95332' },
  { name: 'Azul marino', hex: '#183A5B' },
  { name: 'Carbón', hex: '#252525' },
] as const

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
  model3d?: string
  modelDefaultColor?: string
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
    model3d: '/models/reno.glb',
    modelDefaultColor: '#725D52',
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
    model3d: '/models/cascanueces-rojo.glb',
    modelDefaultColor: '#D84146',
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
    model3d: '/models/tres-magos.glb',
    modelDefaultColor: '#F2E8D0',
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
    model3d: '/models/abrazo-sagrado-natividad.glb',
    modelDefaultColor: '#F2E8D0',
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
    model3d: '/models/conejo-decorativo.glb',
    modelDefaultColor: '#F2E8D0',
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
    model3d: '/models/buhos-un-color.glb',
    modelDefaultColor: '#F2E8D0',
  },
  {
    id: 11,
    slug: 'recipientes-hexagonales-magneticos',
    name: 'Recipientes hexagonales magnéticos',
    category: 'Juegos de mesa',
    isPopular: true,
    material: 'PLA',
    formats: ['Unidad individual', 'Kit de 3 unidades', 'Kit de 6 unidades', 'Kit de 9 unidades'],
    description: `Prácticos recipientes hexagonales para recursos que aportarán orden y un toque de color a tus partidas de juegos de mesa. Ideales para mantener tus tokens, monedas o dados perfectamente organizados en la mesa o para hacer un regalo muy útil a cualquier aficionado.

Su ingenioso diseño cuenta con un sistema magnético que te permite unir varios cuencos entre sí para crear tu zona de juego a medida y evitar que las piezas se dispersen. Están disponibles en distintos colores y puedes adquirirlos de manera individual o elegir entre cómodos kits modulares de 3, 6 o 9 unidades para adaptarse a las necesidades de tus juegos favoritos.

Medidas:
- Recipiente: 10 × 8,8 × 2,2 cm
- Formatos: Unidad individual o kits de 3, 6 o 9 unidades en varios colores.`,
    image: '/images/productos/juegos-de-mesa/recipientes-hexagonales-magneticos.png',
  },
  {
    id: 12,
    slug: 'gato-decorativo-farolillo-colgante',
    name: 'Gato decorativo con farolillo colgante',
    category: 'Hogar',
    material: 'PLA',
    description: `Encantadora figura decorativa de un gato blanco sosteniendo un farolillo colgante que aportará calidez, ternura y un toque mágico a tu hogar. Ideal para colocar en el borde de una estantería, una mesilla de noche o para hacer un regalo inolvidable a cualquier amante de los gatos.

Su diseño minimalista y juguetón aprovecha el borde del mueble para crear una escena llena de vida, proyectando una luz suave y acogedora desde la lámpara. Además, su práctico formato se adapta fácilmente a velas de hasta 4 cm de diámetro para iluminar cualquier rincón con total comodidad.

Medidas:
- Gato: 16 cm de alto
- Lámpara: 9,2 cm de alto (apta para velas de hasta 4 cm de diámetro)`,
    image: '/images/productos/hogar/gato-farolillo-estanteria.webp',
    images: [
      '/images/productos/hogar/gato-farolillo-estanteria.webp',
      '/images/productos/hogar/gato-decorativo-detalle.webp',
      '/images/productos/hogar/gato-farolillo-colgante.webp',
      '/images/productos/hogar/farolillo-encendido.webp',
    ],
    model3d: '/models/gato-farolillo-colgante.glb',
    modelDefaultColor: '#F2E8D0',
  },
  {
    id: 13,
    slug: 'la-casita-del-pino',
    name: 'La Casita del Pino',
    category: 'Navidad',
    material: 'PLA',
    description: `Encantadora decoración navideña «La Casita del Pino» que aportará calidez, magia y un ambiente de cuento a tu hogar. Ideal para colgar en el árbol de Navidad, iluminar un rincón especial o para hacer un regalo entrañable.

Su original diseño con forma de piña, pequeña chimenea y puerta con ventana deja pasar una luz cálida y acogedora a través de sus escamas. Gracias a su práctica cuerda superior, puedes colgarla fácilmente en las ramas del árbol o colocarla sobre cualquier superficie, adaptándose a velas de té de hasta 4 cm de diámetro.

Medidas:
- Casita: 11,2 cm de alto (apta para velas de té de hasta 4 cm de diámetro)`,
    image: '/images/productos/navidad/la-casita-del-pino.png',
    model3d: '/models/la-casita-del-pino.glb',
    modelDefaultColor: '#DDCCA7',
  },
  {
    id: 14,
    slug: 'conjunto-buey-y-mula',
    name: 'Conjunto de buey y mula',
    category: 'Navidad',
    material: 'PLA',
    description: `Bonito conjunto de buey y mula en un cálido tono arena natural que aportará ternura y armonía a tu decoración navideña. Ideal para completar un belén moderno, lucir sobre una cómoda o hacer un regalo muy especial.

Su diseño minimalista, con elegantes pliegues y líneas suaves que envuelven ambas figuras, reinventa estos clásicos personajes con un aire contemporáneo y atemporal. El complemento perfecto para acompañar a la Sagrada Familia y crear un rincón acogedor en cualquier estilo de hogar.

Medidas:
- Buey: 8,7 × 3,5 × 7 cm
- Mula: 6,5 × 2,7 × 7 cm`,
    image: '/images/productos/navidad/conjunto-buey-y-mula.png',
    model3d: '/models/conjunto-buey-y-mula.glb',
    modelDefaultColor: '#DDCCA7',
  },
  {
    id: 15,
    slug: 'adorno-gato-copo-de-nieve',
    name: 'Adorno navideño de gato y copo de nieve',
    category: 'Navidad',
    material: 'PLA',
    description: `Simpático adorno navideño de un gato colgando de un copo de nieve en un suave tono blanco que aportará ternura y un toque divertido a tu hogar. Ideal para colgar en el árbol de Navidad, dar vida a un rincón festivo o para hacer un detalle inolvidable a cualquier amante de los gatos.

Su diseño alegre y lleno de encanto captura a un pequeño gatito sonriente aferrado con sus patitas al copo de nieve, combinando la magia invernal con una escena muy entrañable. Cuenta con una práctica anilla superior para que puedas colgarlo fácilmente en cualquier rama y disfrutar de una decoración original y llena de personalidad.

Medidas:
- Adorno: 5,2 cm de alto`,
    image: '/images/productos/navidad/adorno-gato-copo-de-nieve.png',
    model3d: '/models/adorno-gato-copo-de-nieve.glb',
    modelDefaultColor: '#F2E8D0',
  },
  {
    id: 16,
    slug: 'posavasos-monstera-con-maceta',
    name: 'Posavasos Monstera con maceta',
    category: 'Hogar',
    material: 'PLA',
    description: `Original set de posavasos con forma de planta Monstera en tonos verde oliva y arena que aportará frescura, estilo y un toque natural a tu hogar. Ideal para decorar la mesa del salón, un escritorio o para sorprender con un regalo tan práctico como decorativo.

Su ingenioso diseño 2 en 1 combina utilidad y decoración a la perfección: cada una de sus hojas con delicadas nervaduras en contraste funciona como un posavasos individual, y cuando no los estés usando, se colocan sobre los tallos de su maceta texturizada para lucir como una preciosa planta que no necesita cuidados.

Medidas:
- Planta completa: 26,3 cm de alto
- Maceta: 8,67 × 8,7 × 7 cm
- Hoja (posavasos): 10,8 × 12,5 × 0,2 cm`,
    image: '/images/productos/hogar/monstera-posavasos-planta.webp',
    images: [
      '/images/productos/hogar/monstera-posavasos-planta.webp',
      '/images/productos/hogar/planta-monstera-posavasos.webp',
      '/images/productos/hogar/posavasos-hoja-monstera.webp',
      '/images/productos/hogar/set-posavasos-monstera.webp',
    ],
  },
  {
    id: 17,
    slug: 'letras-personalizadas-con-nombre',
    name: 'Letras personalizadas con nombre',
    category: 'Letras personalizadas',
    material: 'PLA',
    description: `Encantadoras letras con nombre personalizadas que aportarán un toque único, divertido y lleno de personalidad a cualquier espacio. Ideales para decorar habitaciones infantiles, escritorios, estanterías o para sorprender con un regalo inolvidable en cumpleaños, nacimientos o cualquier ocasión especial.

Su diseño totalmente a medida te permite elegir la inicial, el nombre, los colores y la temática que prefieras: desde estilos dulces con ositos, globos, nubes y estrellas hasta diseños inspirados en tus series o animes favoritos. Una pieza exclusiva y hecha con mucho mimo para reflejar los gustos de cada persona.

Medidas:
- Letra grande: 20 × 20 × 2,5 cm
- Nombre completo: 25 × 10 × 1,8 cm (largo × alto × ancho)`,
    image: '/images/productos/personalizados/letras-personalizadas-dafne.png',
    images: [
      '/images/productos/personalizados/letras-personalizadas-dafne.png',
      '/images/productos/personalizados/letras-personalizadas-anime.png',
    ],
  },
  {
    id: 18,
    slug: 'inserto-organizador-nijar',
    name: 'Inserto organizador para Níjar',
    category: 'Juegos de mesa',
    material: 'PLA',
    description: `Práctico inserto organizador para el juego de mesa Níjar en un llamativo color azul que aportará orden, comodidad y rapidez a todas tus partidas. Ideal para mantener cada componente perfectamente clasificado, ahorrar tiempo de preparación o hacer un regalo muy útil a cualquier aficionado a los juegos de mesa.

Su diseño modular cuenta con múltiples bandejas independientes y compartimentos de distintos tamaños pensados para organizar cartas, fichas y recursos sin que se mezclen. Al ser extraíbles, podrás llevar las bandejas directamente de la caja a la mesa para empezar a jugar al instante y recoger todo en cuestión de segundos.

Medidas:
- Diseñado a medida para encajar perfectamente en la caja original del juego Níjar.`,
    image: '/images/productos/juegos-de-mesa/inserto-organizador-nijar.webp',
  },
  {
    id: 19,
    slug: 'portavelas-corazon-acanalado',
    name: 'Portavelas corazón acanalado',
    category: 'Hogar',
    material: 'PLA',
    description: `Romántico portavelas con forma de corazón en un intenso color rojo que aportará calidez y un ambiente íntimo y acogedor a tu hogar. Ideal para decorar una cena especial, dar un toque de luz a la mesilla de noche o sorprender con un detalle lleno de encanto en aniversarios, San Valentín o cualquier ocasión.

Su moderno diseño acanalado le da una textura original y contemporánea que realza la luz cálida de la vela en su interior. Además, su formato práctico y compacto se adapta perfectamente a velas de té LED de hasta 40 mm de diámetro para iluminar cualquier rincón de forma segura y decorativa.

Medidas:
- Soporte: 8,6 cm de ancho × 4,1 cm de alto (apto para velas LED de hasta 40 mm de diámetro)`,
    image: '/images/productos/hogar/portavelas-corazon-rojo.png',
    images: [
      '/images/productos/hogar/portavelas-corazon-rojo.png',
      '/images/productos/hogar/portavelas-corazon-encendido.png',
    ],
    model3d: '/models/portavelas-corazon-acanalado.glb',
    modelDefaultColor: '#D84146',
  },
  {
    id: 20,
    slug: 'duo-cactus-efecto-punto',
    name: 'Dúo de cactus decorativos con efecto punto',
    category: 'Hogar',
    material: 'PLA',
    description: `Encantador dúo de cactus con efecto punto en tonos verde oliva y arena que aportará calidez, frescura y un toque artesanal a tu hogar. Ideal para decorar un escritorio, una estantería o para hacer un regalo muy original a quienes adoran las plantas pero prefieren olvidarse de regarlas.

Su cuidado diseño imita a la perfección la textura del tejido de punto tanto en los cactus como en sus macetas, rematado con pequeños detalles en las puntas que les dan un aire súper acogedor. Un conjunto versátil y lleno de encanto, perfecto para lucir juntos o por separado en cualquier rincón.

Medidas:
- Cactus pequeño: 4,2 cm de diámetro × 8,2 cm de alto
- Cactus grande: 6,3 cm de diámetro × 12 cm de alto`,
    image: '/images/productos/hogar/duo-cactus-efecto-punto.png',
  },
  {
    id: 21,
    slug: 'tarjeta-de-visita-personalizada',
    name: 'Tarjeta de visita personalizada',
    category: 'Otros',
    material: 'PLA',
    description: `Original tarjeta de visita personalizada que aportará un toque moderno, profesional y diferenciador a tu marca. Ideal para destacar en eventos, ferias, reuniones con clientes o para causar una primera impresión inolvidable.

Su diseño totalmente a medida te permite incluir tu logotipo, tus datos de contacto y un práctico código QR integrado para dirigir a tus clientes directamente a tu web o redes sociales con un solo escaneo. Una alternativa resistente, duradera y con relieve que rompe con las tradicionales tarjetas de papel.

Medidas:
- Tarjeta: 8,5 × 5,5 × 0,2 cm`,
    image: '/images/productos/otros/tarjeta-visita-personalizada.png',
  },
  {
    id: 22,
    slug: 'portal-belen-columnas-trenzadas',
    name: 'Portal de belén con columnas trenzadas',
    category: 'Navidad',
    material: 'PLA',
    description: `Bonito portal de belén en tonos naturales que aportará calidez y un ambiente acogedor a tu decoración navideña. Ideal para enmarcar la Sagrada Familia, lucir sobre una cómoda o mesa, o para hacer un regalo muy especial.

Su diseño minimalista, con elegantes columnas trenzadas y un tejado a dos aguas con un sutil acabado texturizado, ofrece el escenario perfecto para dar protagonismo a tus figuras navideñas. Una pieza atemporal y versátil que encajará a la perfección en cualquier estilo de hogar.

Medidas:
- Portal de belén: 20 × 26,3 × 17,7 cm`,
    image: '/images/productos/navidad/portal-belen-columnas-trenzadas.png',
    model3d: '/models/portal-belen-columnas-trenzadas.glb',
    modelDefaultColor: '#DDCCA7',
  },
]

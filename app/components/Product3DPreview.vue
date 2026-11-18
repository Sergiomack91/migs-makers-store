<script setup lang="ts">
import type { Group, MeshStandardMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import type { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const props = defineProps<{
  src: string
  color: string
  poster?: string
  alt: string
}>()

const container = ref<HTMLDivElement | null>(null)
const isLoading = ref(true)
const errorMessage = ref('')
const isReady = ref(false)

let scene: Scene | undefined
let camera: PerspectiveCamera | undefined
let renderer: WebGLRenderer | undefined
let controls: OrbitControls | undefined
let model: Group | undefined
let modelMaterial: MeshStandardMaterial | undefined
let resizeObserver: ResizeObserver | undefined
let meshConstructor: typeof import('three').Mesh | undefined

function renderScene() {
  if (scene && camera && renderer) {
    renderer.render(scene, camera)
  }
}

function resizeScene() {
  if (!container.value || !camera || !renderer) {
    return
  }

  const { width, height } = container.value.getBoundingClientRect()
  if (!width || !height) {
    return
  }

  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height, false)
  renderScene()
}

onMounted(async () => {
  if (!container.value) {
    return
  }

  try {
    const [three, { GLTFLoader }, { OrbitControls }] = await Promise.all([
      import('three'),
      import('three/addons/loaders/GLTFLoader.js'),
      import('three/addons/controls/OrbitControls.js'),
    ])
    meshConstructor = three.Mesh

    scene = new three.Scene()
    scene.background = new three.Color('#F7F9FA')

    camera = new three.PerspectiveCamera(35, 1, 0.1, 100000)
    renderer = new three.WebGLRenderer({ antialias: true, alpha: false })
    renderer.outputColorSpace = three.SRGBColorSpace
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.domElement.setAttribute('role', 'img')
    renderer.domElement.setAttribute('aria-label', `${props.alt}. Arrastra para girar y usa la rueda para acercar.`)
    renderer.domElement.tabIndex = 0
    Object.assign(renderer.domElement.style, {
      display: 'block',
      height: '100%',
      position: 'absolute',
      inset: '0',
      width: '100%',
    })
    container.value.appendChild(renderer.domElement)

    scene.add(new three.AmbientLight(0xffffff, 2))
    const keyLight = new three.DirectionalLight(0xffffff, 2.5)
    keyLight.position.set(1, 2, 3)
    scene.add(keyLight)
    const fillLight = new three.DirectionalLight(0xffffff, 1)
    fillLight.position.set(-2, 1, -2)
    scene.add(fillLight)

    const loader = new GLTFLoader()
    model = (await loader.loadAsync(props.src)).scene
    model.rotation.x = -Math.PI / 2
    model.updateMatrixWorld(true)

    const bounds = new three.Box3().setFromObject(model)
    const center = bounds.getCenter(new three.Vector3())
    model.position.sub(center)
    bounds.setFromObject(model)
    const size = bounds.getSize(new three.Vector3())
    const largestDimension = Math.max(size.x, size.y, size.z)

    if (!largestDimension) {
      throw new Error('El modelo 3D no contiene geometría visible.')
    }

    modelMaterial = new three.MeshStandardMaterial({
      color: props.color,
      roughness: 0.78,
    })
    let hasMesh = false
    model.traverse((object) => {
      if (object instanceof three.Mesh) {
        const previousMaterials = Array.isArray(object.material) ? object.material : [object.material]
        previousMaterials.forEach((material) => material.dispose())
        object.material = modelMaterial
        hasMesh = true
      }
    })

    if (!hasMesh) {
      throw new Error('El modelo 3D no contiene una malla compatible.')
    }

    scene.add(model)
    const distance = largestDimension / (2 * Math.tan(three.MathUtils.degToRad(camera.fov / 2))) * 1.4
    camera.position.set(distance * 0.8, distance * 0.7, distance * 1.2)
    camera.near = Math.max(largestDimension / 1000, 0.1)
    camera.far = largestDimension * 20
    camera.updateProjectionMatrix()

    controls = new OrbitControls(camera, renderer.domElement)
    controls.target.set(0, 0, 0)
    controls.enableDamping = false
    controls.enablePan = false
    controls.addEventListener('change', renderScene)
    controls.update()

    resizeObserver = new ResizeObserver(resizeScene)
    resizeObserver.observe(container.value)
    resizeScene()
    isReady.value = true
  } catch (error) {
    console.error('No se pudo cargar la vista 3D del producto.', error)
    errorMessage.value = 'No se pudo cargar la vista 3D. Mostramos la foto del producto.'
  } finally {
    isLoading.value = false
  }
})

watch(() => props.color, (color) => {
  if (modelMaterial) {
    modelMaterial.color.set(color)
    renderScene()
  }
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  controls?.removeEventListener('change', renderScene)
  controls?.dispose()

  model?.traverse((object) => {
    if (meshConstructor && object instanceof meshConstructor) {
      object.geometry.dispose()
    }
  })
  modelMaterial?.dispose()
  renderer?.dispose()
  renderer?.domElement.remove()
})
</script>

<template>
  <div
    ref="container"
    class="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-migs-bg"
  >
    <img
      v-if="poster && (!isReady || errorMessage)"
      :src="poster"
      :alt="alt"
      class="absolute inset-0 h-full w-full object-cover object-center"
    >
    <p
      v-if="isLoading"
      role="status"
      class="absolute bottom-3 left-3 rounded-lg bg-white/90 px-3 py-2 text-sm text-migs-text shadow"
    >
      Cargando figura 3D…
    </p>
    <p
      v-else-if="errorMessage"
      role="alert"
      class="absolute bottom-3 left-3 right-3 rounded-lg bg-white/95 px-3 py-2 text-sm text-migs-text shadow"
    >
      {{ errorMessage }}
    </p>
    <p
      v-else
      class="absolute bottom-3 left-3 rounded-lg bg-white/90 px-3 py-2 text-xs text-migs-text shadow"
    >
      Arrastra para girar · Usa la rueda para acercar · Color orientativo
    </p>
  </div>
</template>

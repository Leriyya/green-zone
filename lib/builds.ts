import { Product, DetailSpecs } from './products'

export const API_BASE_URL = 'http://xn--80aafhunugbapg.xn--p1ai:6660'

export type Component = {
  field_name: string
  component_name: string
}

export type BuildComponents = {
  [key: string]: Component
}

export type PCBuild = {
  id: string
  name: string
  description?: string
  price_cents: number
  new_price_cents?: number | null
  refurbished: boolean
  stock: number
  images: string[]
  components: BuildComponents
  active: boolean
  featured?: number | null
  created_at: string
}

const MAIN_KEYS = new Set(['gpu', 'cpu', 'ram', 'ssd', 'nvme', 'hdd'])

export function buildToProduct(build: PCBuild): Product {
  const comps = build.components
  const specs = Object.values(comps).map((c) => c.component_name)
  const resolvedImages = build.images.map((path) => `${API_BASE_URL}${path}`)

  const detailSpecs: DetailSpecs = {
    gpu: comps.gpu?.component_name,
    cpu: comps.cpu?.component_name,
    ram: comps.ram?.component_name,
    storage: (comps.ssd ?? comps.nvme ?? comps.hdd)?.component_name,
  }

  const additionalSpecs = Object.entries(comps)
    .filter(([key]) => !MAIN_KEYS.has(key))
    .map(([, c]) => ({ label: c.field_name, value: c.component_name }))

  return {
    id: build.id,
    name: build.name,
    subtitle: '',
    price: build.new_price_cents != null ? build.new_price_cents / 100 : build.price_cents / 100,
    oldPrice: build.new_price_cents != null ? build.price_cents / 100 : undefined,
    refurbished: build.refurbished,
    sold: build.stock === 0,
    image: resolvedImages[0] ?? '/images/placeholder.png',
    images: resolvedImages,
    specs,
    detailSpecs,
    additionalSpecs,
    type: build.featured === 1 || build.featured === 2 ? 'featured' : 'small',
    description: build.description,
  }
}

export const mockBuilds: PCBuild[] = [
  {
    id: '1',
    name: 'TITAN X OVERLORD',
    description: 'The absolute pinnacle of gaming performance. Built for creators, streamers, and competitors who demand nothing but the best. Every component hand-picked for maximum thermal efficiency and longevity.',
    price_cents: 549900,
    stock: 3,
    images: ['/images/build-titan.png', '/images/build-titan-2.png', '/images/build-titan-3.png'],
    components: {
      gpu: { field_name: 'GPU', component_name: 'RTX 4090' },
      cpu: { field_name: 'CPU', component_name: 'i9-14900K' },
      ram: { field_name: 'RAM', component_name: '64GB DDR5' },
      ssd: { field_name: 'Storage', component_name: '4TB NVMe' },
      motherboard: { field_name: 'Motherboard', component_name: 'ASUS ROG Maximus Z790' },
      power_supply: { field_name: 'PSU', component_name: 'Be Quiet! 1000W' },
    },
    refurbished: false,
    active: true,
    featured: 1,
    created_at: '2025-01-10T10:00:00Z',
  },
  {
    id: '2',
    name: 'NEON LIGHT S-1',
    description: 'Engineered for content creators who need raw power and an aesthetic that stands out on camera. RGB-synchronized throughout, whisper-quiet under load.',
    price_cents: 429900,
    stock: 0,
    images: ['/images/build-neon.png', '/images/build-neon-2.png', '/images/build-neon-3.png'],
    components: {
      gpu: { field_name: 'GPU', component_name: 'RTX 4080 Super' },
      cpu: { field_name: 'CPU', component_name: 'i7-14700K' },
      ram: { field_name: 'RAM', component_name: '32GB DDR5' },
      ssd: { field_name: 'Storage', component_name: '2TB NVMe' },
      motherboard: { field_name: 'Motherboard', component_name: 'Lian Li PC-O11D' },
      power_supply: { field_name: 'PSU', component_name: 'Corsair RM850x' },
    },
    refurbished: false,
    active: true,
    featured: 2,
    created_at: '2025-01-12T10:00:00Z',
  },
  {
    id: '3',
    name: 'GHOST PRO',
    description: 'Zero compromise on silence. Fractal Define 7 with noise-dampening panels keeps this build whisper-quiet even during intense sessions.',
    price_cents: 319900,
    new_price_cents: 279900,
    stock: 8,
    images: ['/images/build-ghost.png', '/images/build-ghost-2.png', '/images/build-ghost-3.png'],
    components: {
      gpu: { field_name: 'GPU', component_name: 'RTX 4070' },
      cpu: { field_name: 'CPU', component_name: 'i5-14600K' },
      ram: { field_name: 'RAM', component_name: '32GB DDR5' },
      ssd: { field_name: 'Storage', component_name: '1TB NVMe' },
      motherboard: { field_name: 'Motherboard', component_name: 'Fractal Define 7' },
      power_supply: { field_name: 'PSU', component_name: 'Seasonic 750W' },
    },
    refurbished: true,
    active: true,
    featured: null,
    created_at: '2025-01-15T10:00:00Z',
  },
  {
    id: '4',
    name: 'CYBER CORE',
    description: 'Maximum value without cutting corners. Every part chosen for the best price-to-performance ratio — the smart entry point into high-refresh gaming.',
    price_cents: 189900,
    stock: 0,
    images: ['/images/build-cyber.png', '/images/build-cyber-2.png', '/images/build-cyber-3.png'],
    components: {
      gpu: { field_name: 'GPU', component_name: 'RTX 4060 Ti' },
      cpu: { field_name: 'CPU', component_name: 'i5-13600K' },
      ram: { field_name: 'RAM', component_name: '16GB DDR5' },
      ssd: { field_name: 'Storage', component_name: '1TB NVMe' },
      motherboard: { field_name: 'Motherboard', component_name: 'NZXT H5 Flow' },
      power_supply: { field_name: 'PSU', component_name: 'EVGA 650W' },
    },
    refurbished: true,
    active: true,
    featured: null,
    created_at: '2025-01-18T10:00:00Z',
  },
  {
    id: '5',
    name: 'VOID RUNNER',
    description: 'AMD-powered precision machine tuned for competitive titles. Consistently high framerates at 1080p and 1440p — built to win.',
    price_cents: 219900,
    stock: 7,
    images: ['/images/build-void.png', '/images/build-void-2.png', '/images/build-void-3.png'],
    components: {
      gpu: { field_name: 'GPU', component_name: 'RX 7800 XT' },
      cpu: { field_name: 'CPU', component_name: 'Ryzen 7 7700X' },
      ram: { field_name: 'RAM', component_name: '32GB DDR5' },
      ssd: { field_name: 'Storage', component_name: '1TB NVMe' },
      motherboard: { field_name: 'Motherboard', component_name: 'DeepCool CH510' },
      power_supply: { field_name: 'PSU', component_name: 'Corsair 750W' },
    },
    refurbished: false,
    active: true,
    featured: null,
    created_at: '2025-01-20T10:00:00Z',
  },
  {
    id: '6',
    name: 'PULSE X',
    description: 'The sweet spot between price and power. Handles everything you throw at it — gaming, streaming, rendering — without breaking the bank.',
    price_cents: 369900,
    new_price_cents: 329900,
    stock: 6,
    images: ['/images/build-pulse.png', '/images/build-pulse-2.png', '/images/build-pulse-3.png'],
    components: {
      gpu: { field_name: 'GPU', component_name: 'RTX 4070 Ti' },
      cpu: { field_name: 'CPU', component_name: 'i7-13700K' },
      ram: { field_name: 'RAM', component_name: '32GB DDR5' },
      ssd: { field_name: 'Storage', component_name: '2TB NVMe' },
      motherboard: { field_name: 'Motherboard', component_name: 'Phanteks P500A' },
      power_supply: { field_name: 'PSU', component_name: 'be quiet! 850W' },
    },
    refurbished: true,
    active: true,
    featured: null,
    created_at: '2025-01-22T10:00:00Z',
  },
]

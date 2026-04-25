import { Product } from './products'

export const API_BASE_URL = 'http://xn--80aafhunugbapg.xn--p1ai:6660'

export type BuildComponents = {
  cpu?: string
  gpu?: string
  ram?: string
  ssd?: string
  motherboard?: string
  power_supply?: string
}

export type PCBuild = {
  id: string
  name: string
  description?: string
  price_cents: number
  stock: number
  images: string[]
  components: BuildComponents
  active: boolean
  featured?: number | null
  created_at: string
}

export function buildToProduct(build: PCBuild): Product {
  const { cpu, gpu, ram, ssd, motherboard, power_supply } = build.components
  const specs = [gpu, cpu, ram, ssd, motherboard, power_supply].filter(Boolean) as string[]
  const resolvedImages = build.images.map((path) => `${API_BASE_URL}${path}`)

  return {
    id: build.id,
    name: build.name,
    subtitle: '',
    price: build.price_cents / 100,
    image: resolvedImages[0] ?? '/images/placeholder.png',
    images: resolvedImages,
    specs,
    detailSpecs: { gpu, cpu, ram, storage: ssd },
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
      gpu: 'RTX 4090',
      cpu: 'i9-14900K',
      ram: '64GB DDR5',
      ssd: '4TB NVMe',
      motherboard: 'ASUS ROG Maximus Z790',
      power_supply: 'Be Quiet! 1000W',
    },
    active: true,
    featured: 1,
    created_at: '2025-01-10T10:00:00Z',
  },
  {
    id: '2',
    name: 'NEON LIGHT S-1',
    description: 'Engineered for content creators who need raw power and an aesthetic that stands out on camera. RGB-synchronized throughout, whisper-quiet under load.',
    price_cents: 429900,
    stock: 5,
    images: ['/images/build-neon.png', '/images/build-neon-2.png', '/images/build-neon-3.png'],
    components: {
      gpu: 'RTX 4080 Super',
      cpu: 'i7-14700K',
      ram: '32GB DDR5',
      ssd: '2TB NVMe',
      motherboard: 'Lian Li PC-O11D',
      power_supply: 'Corsair RM850x',
    },
    active: true,
    featured: 2,
    created_at: '2025-01-12T10:00:00Z',
  },
  {
    id: '3',
    name: 'GHOST PRO',
    description: 'Zero compromise on silence. Fractal Define 7 with noise-dampening panels keeps this build whisper-quiet even during intense sessions.',
    price_cents: 279900,
    stock: 8,
    images: ['/images/build-ghost.png', '/images/build-ghost-2.png', '/images/build-ghost-3.png'],
    components: {
      gpu: 'RTX 4070',
      cpu: 'i5-14600K',
      ram: '32GB DDR5',
      ssd: '1TB NVMe',
      motherboard: 'Fractal Define 7',
      power_supply: 'Seasonic 750W',
    },
    active: true,
    featured: null,
    created_at: '2025-01-15T10:00:00Z',
  },
  {
    id: '4',
    name: 'CYBER CORE',
    description: 'Maximum value without cutting corners. Every part chosen for the best price-to-performance ratio — the smart entry point into high-refresh gaming.',
    price_cents: 189900,
    stock: 12,
    images: ['/images/build-cyber.png', '/images/build-cyber-2.png', '/images/build-cyber-3.png'],
    components: {
      gpu: 'RTX 4060 Ti',
      cpu: 'i5-13600K',
      ram: '16GB DDR5',
      ssd: '1TB NVMe',
      motherboard: 'NZXT H5 Flow',
      power_supply: 'EVGA 650W',
    },
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
      gpu: 'RX 7800 XT',
      cpu: 'Ryzen 7 7700X',
      ram: '32GB DDR5',
      ssd: '1TB NVMe',
      motherboard: 'DeepCool CH510',
      power_supply: 'Corsair 750W',
    },
    active: true,
    featured: null,
    created_at: '2025-01-20T10:00:00Z',
  },
  {
    id: '6',
    name: 'PULSE X',
    description: 'The sweet spot between price and power. Handles everything you throw at it — gaming, streaming, rendering — without breaking the bank.',
    price_cents: 329900,
    stock: 6,
    images: ['/images/build-pulse.png', '/images/build-pulse-2.png', '/images/build-pulse-3.png'],
    components: {
      gpu: 'RTX 4070 Ti',
      cpu: 'i7-13700K',
      ram: '32GB DDR5',
      ssd: '2TB NVMe',
      motherboard: 'Phanteks P500A',
      power_supply: 'be quiet! 850W',
    },
    active: true,
    featured: null,
    created_at: '2025-01-22T10:00:00Z',
  },
]

export type DetailSpecs = {
  cpu?: string
  gpu?: string
  ram?: string
  storage?: string
}

export type Product = {
  id: string
  name: string
  subtitle: string
  price: number
  image: string
  images: string[]
  specs: string[]
  detailSpecs?: DetailSpecs
  type: 'featured' | 'small'
  fps?: number
  badge?: string
  description?: string
}

export const WHATSAPP_NUMBER = '79991234567'

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'TITAN X OVERLORD',
    subtitle: 'Ultimate Gaming Beast',
    price: 5499,
    image: '/images/build-titan.png',
    images: ['/images/build-titan.png', '/images/build-titan-2.png', '/images/build-titan-3.png'],
    specs: ['RTX 4090', 'i9-14900K', '64GB DDR5', '4TB NVMe', 'Be Quiet! 1000W', 'NZXT H9 Elite'],
    detailSpecs: { gpu: 'RTX 4090', cpu: 'i9-14900K', ram: '64GB DDR5', storage: '4TB NVMe' },
    type: 'featured',
    fps: 245,
    badge: '4K ULTRA',
    description: 'The absolute pinnacle of gaming performance. Built for creators, streamers, and competitors who demand nothing but the best. Every component hand-picked for maximum thermal efficiency and longevity.',
  },
  {
    id: '2',
    name: 'NEON LIGHT S-1',
    subtitle: 'Streamer Edition',
    price: 4299,
    image: '/images/build-neon.png',
    images: ['/images/build-neon.png', '/images/build-neon-2.png', '/images/build-neon-3.png'],
    specs: ['RTX 4080S', 'i7-14700K', '32GB DDR5', '2TB NVMe', 'Corsair RM850x', 'Lian Li PC-O11D'],
    detailSpecs: { gpu: 'RTX 4080 Super', cpu: 'i7-14700K', ram: '32GB DDR5', storage: '2TB NVMe' },
    type: 'featured',
    fps: 190,
    badge: 'STREAMER READY',
    description: 'Engineered for content creators who need raw power and an aesthetic that stands out on camera. RGB-synchronized throughout, whisper-quiet under load.',
  },
  {
    id: '3',
    name: 'GHOST PRO',
    subtitle: 'Silent Power',
    price: 2799,
    image: '/images/build-ghost.png',
    images: ['/images/build-ghost.png', '/images/build-ghost-2.png', '/images/build-ghost-3.png'],
    specs: ['RTX 4070', 'i5-14600K', '32GB DDR5', '1TB NVMe', 'Seasonic 750W', 'Fractal Define 7'],
    detailSpecs: { gpu: 'RTX 4070', cpu: 'i5-14600K', ram: '32GB DDR5', storage: '1TB NVMe' },
    type: 'small',
    fps: 144,
    description: 'Zero compromise on silence. Fractal Define 7 with noise-dampening panels keeps this build whisper-quiet even during intense sessions.',
  },
  {
    id: '4',
    name: 'CYBER CORE',
    subtitle: 'Budget Champion',
    price: 1899,
    image: '/images/build-cyber.png',
    images: ['/images/build-cyber.png', '/images/build-cyber-2.png', '/images/build-cyber-3.png'],
    specs: ['RTX 4060Ti', 'i5-13600K', '16GB DDR5', '1TB NVMe', 'EVGA 650W', 'NZXT H5 Flow'],
    detailSpecs: { gpu: 'RTX 4060 Ti', cpu: 'i5-13600K', ram: '16GB DDR5', storage: '1TB NVMe' },
    type: 'small',
    fps: 120,
    description: 'Maximum value without cutting corners. Every part chosen for the best price-to-performance ratio — the smart entry point into high-refresh gaming.',
  },
  {
    id: '5',
    name: 'VOID RUNNER',
    subtitle: 'Esports Ready',
    price: 2199,
    image: '/images/build-void.png',
    images: ['/images/build-void.png', '/images/build-void-2.png', '/images/build-void-3.png'],
    specs: ['RX 7800XT', 'R7-7700X', '32GB DDR5', '1TB NVMe', 'Corsair 750W', 'DeepCool CH510'],
    detailSpecs: { gpu: 'RX 7800 XT', cpu: 'Ryzen 7 7700X', ram: '32GB DDR5', storage: '1TB NVMe' },
    type: 'small',
    fps: 165,
    description: 'AMD-powered precision machine tuned for competitive titles. Consistently high framerates at 1080p and 1440p — built to win.',
  },
  {
    id: '6',
    name: 'PULSE X',
    subtitle: 'Mid-Range King',
    price: 3299,
    image: '/images/build-pulse.png',
    images: ['/images/build-pulse.png', '/images/build-pulse-2.png', '/images/build-pulse-3.png'],
    specs: ['RTX 4070Ti', 'i7-13700K', '32GB DDR5', '2TB NVMe', 'be quiet! 850W', 'Phanteks P500A'],
    detailSpecs: { gpu: 'RTX 4070 Ti', cpu: 'i7-13700K', ram: '32GB DDR5', storage: '2TB NVMe' },
    type: 'small',
    fps: 180,
    description: 'The sweet spot between price and power. Handles everything you throw at it — gaming, streaming, rendering — without breaking the bank.',
  },
]

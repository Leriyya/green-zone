'use client'

import { useState } from 'react'
import { Product } from '@/lib/products'
import { ModalContext } from '@/components/Modal/ModalContext'
import ProductModal from '@/components/Modal/ProductModal'

export default function CatalogProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState<Product | null>(null)

  return (
    <ModalContext.Provider value={{ openModal: setSelected, closeModal: () => setSelected(null) }}>
      {children}
      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </ModalContext.Provider>
  )
}

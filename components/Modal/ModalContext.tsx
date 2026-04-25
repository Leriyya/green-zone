'use client'

import { createContext, useContext } from 'react'
import { Product } from '@/lib/products'

type ModalContextType = {
  openModal: (product: Product) => void
  closeModal: () => void
}

export const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {},
})

export function useModal() {
  return useContext(ModalContext)
}

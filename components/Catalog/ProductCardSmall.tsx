'use client'

import { Product } from '@/lib/products'
import { useModal } from '@/components/Modal/ModalContext'
import styles from './ProductCard.module.scss'

export default function ProductCardSmall({ product }: { product: Product }) {
  const { openModal } = useModal()

  return (
    <div className={styles.small} onClick={() => openModal(product)} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && openModal(product)}>
      <div className={styles.smallImageWrap}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.smallImage}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/placeholder.png'
          }}
        />
      </div>

      <div className={styles.smallInfo}>
        <div className={styles.specs}>
          {product.fps && (
            <span className={styles.specChipSmall}>FPS: {product.fps}</span>
          )}
        </div>
        <h3 className={styles.smallName}>{product.name}</h3>
        <p className={styles.smallSubtitle}>{product.subtitle}</p>
        <div className={styles.smallPriceRow}>
          <span className={styles.smallPrice}>${product.price.toLocaleString()}</span>
          <button
            className={styles.cartBtnSmall}
            aria-label="View details"
            onClick={(e) => { e.stopPropagation(); openModal(product) }}
          >
            <span className="material-symbols-outlined">open_in_new</span>
          </button>
        </div>
      </div>
    </div>
  )
}

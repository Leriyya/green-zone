'use client'

import { Product } from '@/lib/products'
import { useModal } from '@/components/Modal/ModalContext'
import styles from './ProductCard.module.scss'

export default function ProductCardLarge({ product }: { product: Product }) {
  const { openModal } = useModal()

  return (
    <div className={styles.large} onClick={() => openModal(product)} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && openModal(product)}>
      <div className={styles.largeImageWrap}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.largeImage}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/placeholder.png'
          }}
        />
        {product.fps && (
          <span className={styles.fpsBadge}>
            LIVE FPS: {product.fps}
          </span>
        )}
      </div>

      <div className={styles.largeInfo}>
        <div className={styles.specs}>
          {product.badge && (
            <span className={styles.specChip}>{product.badge}</span>
          )}
          {product.specs.slice(0, 2).map((s) => (
            <span key={s} className={styles.specChip}>{s}</span>
          ))}
        </div>

        <div className={styles.nameWrap}>
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.subtitle}>{product.subtitle}</p>
        </div>

        <div className={styles.priceRow}>
          <span className={styles.price}>${product.price.toLocaleString()}</span>
          <button
            className={styles.cartBtn}
            aria-label="View details"
            onClick={(e) => { e.stopPropagation(); openModal(product) }}
          >
            <span className="material-symbols-outlined">open_in_new</span>
          </button>
        </div>

        <div className={styles.allSpecs}>
          {product.specs.map((s) => (
            <span key={s} className={styles.specChip}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

'use client'

import { Product } from '@/lib/products'
import { useModal } from '@/components/Modal/ModalContext'
import { useLanguage } from '@/context/LanguageContext'
import styles from './ProductCard.module.scss'

export default function ProductCardLarge({ product }: { product: Product }) {
  const { openModal } = useModal()
  const { t } = useLanguage()
  const sold = product.sold ?? false

  const specRows = [
    { label: t.modal.gpu, value: product.detailSpecs?.gpu },
    { label: t.modal.cpu, value: product.detailSpecs?.cpu },
    { label: t.modal.ram, value: product.detailSpecs?.ram },
    { label: t.modal.storage, value: product.detailSpecs?.storage },
  ].filter((r) => r.value)

  return (
    <div
      className={`${styles.large} ${sold ? styles.soldCard : ''}`}
      onClick={sold ? undefined : () => openModal(product)}
      role="button"
      tabIndex={0}
      onKeyDown={sold ? undefined : (e) => e.key === 'Enter' && openModal(product)}
    >
      <div className={styles.largeImageWrap}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.largeImage}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/placeholder.png'
          }}
        />
        {product.fps && !sold && (
          <span className={styles.fpsBadge}>
            LIVE FPS: {product.fps}
          </span>
        )}
        {sold && <span className={styles.soldOverlay}>{t.product.sold}</span>}
      </div>

      <div className={styles.largeInfo}>
        <div className={styles.specs}>
          {product.badge && (
            <span className={styles.specChip}>{product.badge}</span>
          )}
          {product.refurbished !== undefined && (
            <span className={`${styles.conditionChip} ${product.refurbished ? styles.conditionUsed : styles.conditionNew}`}>
              {product.refurbished ? t.product.used : t.product.new}
            </span>
          )}
        </div>

        <div className={styles.nameWrap}>
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.subtitle}>{product.subtitle}</p>
        </div>

        <div className={styles.priceRow}>
          <div className={styles.priceBlock}>
            {product.oldPrice && (
              <span className={styles.oldPrice}>${product.oldPrice.toLocaleString()}</span>
            )}
            <span className={styles.price}>${product.price.toLocaleString()}</span>
          </div>
          {sold ? (
            <span className={styles.soldBtn}>{t.product.sold}</span>
          ) : (
            <button
              className={styles.cartBtn}
              aria-label="View details"
              onClick={(e) => { e.stopPropagation(); openModal(product) }}
            >
              <span className="material-symbols-outlined">open_in_new</span>
            </button>
          )}
        </div>

        {specRows.length > 0 && (
          <div className={styles.allSpecs}>
            {specRows.map((r) => (
              <span key={r.label} className={styles.specChip}>{r.value}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

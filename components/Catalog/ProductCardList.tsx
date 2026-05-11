'use client'

import { Product } from '@/lib/products'
import { useModal } from '@/components/Modal/ModalContext'
import { useLanguage } from '@/context/LanguageContext'
import styles from './ProductCard.module.scss'

export default function ProductCardList({ product }: { product: Product }) {
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
      className={`${styles.listCard} ${sold ? styles.soldCard : ''}`}
      onClick={sold ? undefined : () => openModal(product)}
      role="button"
      tabIndex={0}
      onKeyDown={sold ? undefined : (e) => e.key === 'Enter' && openModal(product)}
    >
      <div className={styles.listImageWrap}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.listImage}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/placeholder.png'
          }}
        />
        {sold && <span className={styles.soldOverlay}>{t.product.sold}</span>}
      </div>

      <div className={styles.listInfo}>
        <div className={styles.listMeta}>
          <h3 className={styles.listName}>{product.name}</h3>
          <p className={styles.listSubtitle}>{product.subtitle}</p>
          {product.fps && !sold && (
            <span className={styles.specChipSmall}>FPS: {product.fps}</span>
          )}
          {product.refurbished !== undefined && (
            <span className={`${styles.conditionChip} ${product.refurbished ? styles.conditionUsed : styles.conditionNew}`}>
              {product.refurbished ? t.product.used : t.product.new}
            </span>
          )}
        </div>

        {specRows.length > 0 && (
          <div className={styles.listSpecs}>
            {specRows.map((r) => (
              <span key={r.label} className={styles.specChip}>{r.value}</span>
            ))}
          </div>
        )}

        <div className={styles.listPriceRow}>
          <div className={styles.priceBlock}>
            {product.oldPrice && (
              <span className={styles.oldPrice}>${product.oldPrice.toLocaleString()}</span>
            )}
            <span className={styles.listPrice}>${product.price.toLocaleString()}</span>
          </div>
          {sold ? (
            <span className={styles.soldBtnSmall}>{t.product.sold}</span>
          ) : (
            <button
              className={styles.cartBtnSmall}
              aria-label="View details"
              onClick={(e) => { e.stopPropagation(); openModal(product) }}
            >
              <span className="material-symbols-outlined">open_in_new</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

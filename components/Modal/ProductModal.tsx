'use client'

import { useEffect, useState, useCallback } from 'react'
import { Product, WHATSAPP_NUMBER } from '@/lib/products'
import styles from './ProductModal.module.scss'

type Props = {
  product: Product
  onClose: () => void
}

const SPEC_TILES = [
  { key: 'gpu' as const, label: 'ВИДЕОКАРТА', icon: 'display_settings' },
  { key: 'cpu' as const, label: 'ПРОЦЕССОР', icon: 'memory' },
  { key: 'ram' as const, label: 'ОПЕРАТИВКА', icon: 'memory_alt' },
  { key: 'storage' as const, label: 'ДИСК', icon: 'hard_drive' },
]

export default function ProductModal({ product, onClose }: Props) {
  const [slide, setSlide] = useState(0)
  const images = product.images ?? [product.image]
  const total = images.length

  const prev = useCallback(() => setSlide((s) => (s - 1 + total) % total), [total])
  const next = useCallback(() => setSlide((s) => (s + 1) % total), [total])

  useEffect(() => {
    setSlide(0)
  }, [product.id])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  const waText = encodeURIComponent(
    `Здравствуйте! Хочу этот компьютер: ${product.name} — $${product.price.toLocaleString()}. Можно узнать подробнее?`
  )
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Carousel — full height left column */}
        <div className={styles.carousel}>
          <div className={styles.carouselTrack} style={{ transform: `translateX(-${slide * 100}%)` }}>
            {images.map((src, i) => (
              <div key={i} className={styles.slide}>
                <img
                  src={src}
                  alt={`${product.name} — view ${i + 1}`}
                  className={styles.slideImg}
                  onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.png' }}
                />
              </div>
            ))}
          </div>

          {total > 1 && (
            <>
              <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={prev} aria-label="Previous image">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={next} aria-label="Next image">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </>
          )}

          <div className={styles.dots}>
            {images.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === slide ? styles.dotActive : ''}`}
                onClick={() => setSlide(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Info panel */}
        <div className={styles.info}>
          <div className={styles.infoTop}>
            <div className={styles.badges}>
              {product.badge && <span className={styles.badge}>{product.badge}</span>}
              {product.fps && <span className={styles.fpsBadge}>LIVE FPS: {product.fps}</span>}
            </div>
            <h2 className={styles.name}>{product.name}</h2>
            <p className={styles.subtitle}>{product.subtitle}</p>
            {product.description && (
              <p className={styles.description}>{product.description}</p>
            )}
          </div>

          {/* Spec tiles */}
          {product.detailSpecs && (
            <div className={styles.tiles}>
              {SPEC_TILES.map(({ key, label, icon }) => {
                const value = product.detailSpecs![key]
                if (!value) return null
                return (
                  <div key={key} className={styles.tile}>
                    <span className={`material-symbols-outlined ${styles.tileIcon}`}>{icon}</span>
                    <span className={styles.tileLabel}>{label}</span>
                    <span className={styles.tileValue}>{value}</span>
                  </div>
                )
              })}
            </div>
          )}

          <div className={styles.footer}>
            <span className={styles.price}>${product.price.toLocaleString()}</span>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waBtn}
            >
              <span className={styles.waIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </span>
              ХОЧУ ЭТОТ КОМПЬЮТЕР
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

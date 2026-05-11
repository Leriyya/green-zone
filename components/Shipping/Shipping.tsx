'use client'

import { useLanguage } from '@/context/LanguageContext'
import styles from './Shipping.module.scss'

const shippingMeta = [
  { id: 'vienna', icon: 'electric_bike', featured: true, detailIcons: ['schedule', 'payments'] },
  { id: 'postal', icon: 'local_shipping', featured: false, detailIcons: ['schedule', 'payments'] },
  { id: 'store', icon: 'storefront', featured: false, detailIcons: ['calendar_today', 'calendar_today'] },
  { id: 'support', icon: 'headset_mic', featured: false, detailIcons: ['calendar_today', 'calendar_today'] },
]

export default function Shipping() {
  const { t } = useLanguage()

  return (
    <section className={styles.shipping}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{t.shipping.eyebrow}</p>
          <h2 className={styles.title}>
            {t.shipping.title} <span className={styles.accent}>{t.shipping.titleAccent}</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {t.shipping.cards.map((card, i) => {
            const meta = shippingMeta[i]
            return (
              <div
                key={meta.id}
                className={`${styles.card} ${meta.featured ? styles.cardFeatured : ''}`}
              >
                <div className={styles.cardTop}>
                  <span className={`material-symbols-outlined ${styles.icon}`}>
                    {meta.icon}
                  </span>
                  <span className={styles.badge}>{card.badge}</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.description}</p>
                </div>

                <div className={styles.detailList}>
                  {card.details.map((text, j) => (
                    <div key={j} className={styles.detailItem}>
                      <span className={`material-symbols-outlined ${styles.detailIcon}`}>
                        {meta.detailIcons[j]}
                      </span>
                      <span className={styles.detailText}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

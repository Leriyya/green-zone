'use client'

import { useLanguage } from '@/context/LanguageContext'
import styles from './Services.module.scss'

const serviceIcons = ['swap_horiz', 'local_shipping', 'sports_esports', 'build', 'headset_mic']

export default function Services() {
  const { t } = useLanguage()

  return (
    <section className={styles.services}>
      <div className={styles.inner}>
        {t.services.map((s, i) => (
          <div key={s.title} className={styles.card}>
            <span className={`material-symbols-outlined ${styles.icon}`}>{serviceIcons[i]}</span>
            <h3 className={styles.title}>{s.title}</h3>
            <p className={styles.description}>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

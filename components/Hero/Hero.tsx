'use client'

import { useLanguage } from '@/context/LanguageContext'
import styles from './Hero.module.scss'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className={styles.hero}>
      <div className={styles.bg} />

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{t.hero.eyebrow}</p>
          <h1 className={styles.title}>
            GREENZONE<br />
            <span className={styles.titleAccent}>{t.hero.titleLine2}</span><br />
            {t.hero.titleLine3}
          </h1>
          <p className={styles.description}>{t.hero.description}</p>
          <div className={styles.ctas}>
            <a href="#catalog" className={styles.ctaPrimary}>
              {t.hero.cta1}
            </a>
            <a href="#contact" className={styles.ctaSecondary}>
              {t.hero.cta2}
            </a>
          </div>
        </div>

        <div className={styles.mascotWrap}>
          <div className={styles.mascotGlow} />
          <img
            src="/images/mascot.png"
            alt="GreenZone Mascot"
            className={styles.mascot}
          />
        </div>
      </div>

      <div className={styles.statusIndicator}>
        <span className={styles.dot} />
        <span className={styles.statusText}>{t.hero.status}</span>
      </div>
    </section>
  )
}

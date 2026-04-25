import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>NEXT-GEN GAMING RIGS</p>
          <h1 className={styles.title}>
            GREENZONE<br />
            <span className={styles.titleAccent}>ULTIMATE</span><br />
            POWER
          </h1>
          <p className={styles.description}>
            Engineered for dominance. Built for those who refuse to compromise.
            Custom PC builds with bleeding-edge components.
          </p>
          <div className={styles.ctas}>
            <a href="#catalog" className={styles.ctaPrimary}>
              EXPLORE BUILDS
            </a>
            <a href="#contact" className={styles.ctaSecondary}>
              GET CONSULTATION
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
        <span className={styles.statusText}>ONLINE</span>
      </div>
    </section>
  )
}

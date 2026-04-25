import styles from './Services.module.scss'

const services = [
  {
    icon: 'swap_horiz',
    title: 'TRADE-IN',
    description: 'Exchange your old hardware for store credit toward your dream build.',
  },
  {
    icon: 'local_shipping',
    title: 'DELIVERY',
    description: 'Fast, insured delivery directly to your door. Nationwide shipping.',
  },
  {
    icon: 'sports_esports',
    title: 'GAMING',
    description: 'Optimized builds for competitive gaming at any budget tier.',
  },
  {
    icon: 'build',
    title: 'PC BUILDING',
    description: 'Custom assembly by certified technicians. 3-year warranty included.',
  },
  {
    icon: 'headset_mic',
    title: 'SUPPORT',
    description: '24/7 technical support for all our builds. Remote and on-site.',
  },
]

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.inner}>
        {services.map((s) => (
          <div key={s.title} className={styles.card}>
            <span className={`material-symbols-outlined ${styles.icon}`}>{s.icon}</span>
            <h3 className={styles.title}>{s.title}</h3>
            <p className={styles.description}>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

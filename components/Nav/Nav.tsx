'use client'

import { useEffect, useState } from 'react'
import styles from './Nav.module.scss'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoGreen}>GREEN</span>ZONE PC
        </a>

        <ul className={styles.links}>
          {['CATALOG', 'BUILDS', 'TRADE-IN', 'CONTACTS'].map((item) => (
            <li key={item}>
              <a href="#" className={styles.link}>{item}</a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button className={styles.searchBtn} aria-label="Search">
            <span className="material-symbols-outlined">search</span>
          </button>
          <a href="#" className={styles.buyBtn}>BUY</a>
        </div>
      </div>
    </nav>
  )
}

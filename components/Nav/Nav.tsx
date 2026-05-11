'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { LANGS } from '@/lib/i18n'
import { useLanguage } from '@/context/LanguageContext'
import styles from './Nav.module.scss'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, t } = useLanguage()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      if (menuOpen) setMenuOpen(false)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  return (
    <nav className={`${styles.nav} ${scrolled || menuOpen ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoGreen}>GREEN</span>ZONE PC
        </a>

        <ul className={styles.links}>
          {t.nav.links.map((item) => (
            <li key={item}>
              <a href="#" className={styles.link}>{item}</a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <div className={styles.langSwitcher}>
            {LANGS.map(l => (
              <Link
                key={l}
                href={`/${l}`}
                className={`${styles.langBtn} ${lang === l ? styles.langBtnActive : ''}`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerLineTop : ''}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerLineMid : ''}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerLineBot : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            {t.nav.links.map((item) => (
              <li key={item}>
                <a href="#" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.mobileLang}>
            {LANGS.map(l => (
              <Link
                key={l}
                href={`/${l}`}
                className={`${styles.langBtn} ${lang === l ? styles.langBtnActive : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

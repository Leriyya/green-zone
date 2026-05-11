'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import styles from './Contact.module.scss'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const { t } = useLanguage()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const fields = [
    { name: 'name', label: t.contact.nameLabel, type: 'text' },
    { name: 'phone', label: t.contact.phoneLabel, type: 'tel' },
  ]

  const infoCards = [
    { icon: 'location_on', label: t.contact.address.label, value: t.contact.address.value },
    { icon: 'phone', label: t.contact.phone.label, value: t.contact.phone.value },
    { icon: 'schedule', label: t.contact.hours.label, value: t.contact.hours.value },
  ]

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <div className={styles.formSide}>
          <p className={styles.eyebrow}>{t.contact.eyebrow}</p>
          <h2 className={styles.title}>
            {t.contact.title1}<br />
            <span className={styles.accent}>{t.contact.title2}</span>
          </h2>

          <form className={styles.form} onSubmit={handleSubmit}>
            {fields.map((field) => (
              <div key={field.name} className={styles.fieldWrap}>
                <label className={styles.label} htmlFor={field.name}>{field.label}</label>
                <div className={styles.inputWrap}>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    className={styles.input}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                  />
                  <span className={styles.underline} />
                </div>
              </div>
            ))}

            <div className={styles.fieldWrap}>
              <label className={styles.label} htmlFor="message">{t.contact.messageLabel}</label>
              <div className={styles.inputWrap}>
                <textarea
                  id="message"
                  name="message"
                  className={`${styles.input} ${styles.textarea}`}
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                />
                <span className={styles.underline} />
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>
              {t.contact.submitBtn}
            </button>
          </form>
        </div>

        <div className={styles.infoSide}>
          <div className={styles.infoCards}>
            {infoCards.map((info) => (
              <div key={info.label} className={styles.infoCard}>
                <span className={`material-symbols-outlined ${styles.infoIcon}`}>{info.icon}</span>
                <div>
                  <p className={styles.infoLabel}>{info.label}</p>
                  <p className={styles.infoValue}>{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.mapWrap}>
            <div className={styles.mapPlaceholder}>
              <span className={`material-symbols-outlined ${styles.mapPin}`}>location_on</span>
              <span className={styles.mapLabel}>GREENZONE PC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

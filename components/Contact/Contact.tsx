'use client'

import { useState } from 'react'
import styles from './Contact.module.scss'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <div className={styles.formSide}>
          <p className={styles.eyebrow}>GET IN TOUCH</p>
          <h2 className={styles.title}>INITIATE<br /><span className={styles.accent}>CONTACT</span></h2>

          <form className={styles.form} onSubmit={handleSubmit}>
            {[
              { name: 'name', label: 'YOUR NAME', type: 'text' },
              { name: 'phone', label: 'PHONE NUMBER', type: 'tel' },
            ].map((field) => (
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
              <label className={styles.label} htmlFor="message">MESSAGE</label>
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
              SEND MESSAGE
            </button>
          </form>
        </div>

        <div className={styles.infoSide}>
          <div className={styles.infoCards}>
            {[
              { icon: 'location_on', label: 'ADDRESS', value: '123 Tech District,\nSilicon Valley, CA' },
              { icon: 'phone', label: 'PHONE', value: '+1 (555) 000-1234' },
              { icon: 'schedule', label: 'HOURS', value: 'Mon–Sat: 10:00–20:00\nSun: Closed' },
            ].map((info) => (
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

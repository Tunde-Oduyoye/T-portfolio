import { useState, useRef } from 'react'
import FadeIn from './FadeIn'
import { CONTACT_INFO } from '../data'
import styles from './Contact.module.css'


const EMAILJS_SERVICE_ID  = 'service_lxad4xc'
const EMAILJS_TEMPLATE_ID = 'template_3ysddds'
const EMAILJS_PUBLIC_KEY  = 'aEoDOI2SmeI0nSnpm'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async () => {
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.')
      return
    }
    setError('')
    setStatus('sending')

    try {
      // Load EmailJS from CDN at runtime (no npm install needed)
      if (!window.emailjs) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script')
          script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
          script.onload = resolve
          script.onerror = reject
          document.head.appendChild(script)
        })
        window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })
      }

      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name:  form.name,
        from_email: form.email,
        message:    form.message,
        reply_to:   form.email,
      })

      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      // Fallback: open mailto if EmailJS not yet configured
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
      const body = encodeURIComponent(`Hi Tunde,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`)
      window.location.href = `mailto:babatundeoduyoye53@gmail.com?subject=${subject}&body=${body}`
      setStatus('sent')
    }
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <FadeIn>
          <div className={styles.sectionTag}>Contact</div>
        </FadeIn>

        <div className={styles.grid}>
          <FadeIn>
            <h2 className={`${styles.heading} syne`}>
              Let's build<br />something{' '}
              <span className={styles.green}>great.</span>
            </h2>
            <p className={styles.sub}>
              Open to remote roles, freelance projects, and interesting collaborations.
              I respond within 24 hours.
            </p>

            <div className={styles.contactList}>
              {CONTACT_INFO.map(item => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    {item.label === 'Email' ? '✉' : item.label === 'LinkedIn' ? 'in' : '⌥'}
                  </div>
                  <div>
                    <div className={styles.contactLabel}>{item.label}</div>
                    <div className={styles.contactValue}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            {status === 'sent' ? (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>✅</div>
                <h3 className={`${styles.successTitle} syne`}>Message sent!</h3>
                <p className={styles.successSub}>I'll reply within 24 hours.</p>
                <button className={styles.resetBtn} onClick={() => setStatus('idle')}>
                  Send another
                </button>
              </div>
            ) : (
              <div className={styles.formCard}>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label}>Name</label>
                    <input className={styles.input} name="name" value={form.name}
                      onChange={handle} placeholder="Your name" />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Email</label>
                    <input className={styles.input} name="email" value={form.email}
                      onChange={handle} placeholder="you@email.com" type="email" />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Message</label>
                  <textarea
                    className={`${styles.input} ${styles.textarea}`}
                    name="message" value={form.message} onChange={handle}
                    placeholder="Tell me about your project or opportunity..." rows={5}
                  />
                </div>
                {error && <p className={styles.error}>{error}</p>}
                <button
                  className={`${styles.submitBtn} ${status === 'sending' ? styles.sending : ''}`}
                  onClick={submit}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useRef, useState } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Github, Linkedin, Mail, Phone, MapPin, WebhookIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'boucountaba@gmail.com',
      href: 'mailto:boucountaba@gmail.com'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+221 77 817 28 27',
      href: 'tel:+221778172827'
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value: 'Mbour, Sénégal',
      href: '#'
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/misterbou/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mouhamed-boucountaba', label: 'LinkedIn' },
    { icon: WebhookIcon, href: 'https://boucountaba.wixsite.com/boudigital', label: 'Website' },
    { icon: Mail, href: 'mailto:boucountaba@gmail.com', label: 'Email' },
  ]

  // Form refs & state
  const formRef = useRef<HTMLFormElement | null>(null)
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null)

  // Honeypot field name (bot trap)
  // Ensure your EmailJS template doesn't include this field or ignore it.
  const HONEYPOT_NAME = 'Bou Digital' // hidden field to trap bots

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    // simple client-side validation
    const form = formRef.current
    const formData = new FormData(form)
    console.log('FormData:') // Debug log;
    for (const [k, v] of formData.entries()) console.log(k, v);
    const firstName = formData.get('firstName')?.toString().trim() || ''
    const email = formData.get('email')?.toString().trim() || ''
    const message = formData.get('message')?.toString().trim() || ''
    const honeypot = formData.get(HONEYPOT_NAME)?.toString() || ''

    if (honeypot) {
      // silently ignore suspected bot
      return
    }

    if (!firstName || !email || !message) {
      setStatus({ ok: false, message: 'Merci de compléter les champs obligatoires (Prénom, Email, Message).' })
      return
    }

    setSending(true)
    setStatus(null)

    try {
      // Use EmailJS - ensure env vars are set (see README)
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      console.log('ENV:',
         { service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
           Template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
             key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY });

      setStatus({ ok: true, message: 'Message envoyé — je vous réponds sous 24-48h.' })
      form.reset()
    } catch (err) {
      console.error('Email send error', err)
      setStatus({ ok: false, message: "Une erreur est survenue lors de l'envoi. Réessayez plus tard." })
    } finally {
      setSending(false)
      // clear status after a while
      window.setTimeout(() => setStatus(null), 8000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Contactez-moi</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Je suis toujours intéressé par de nouvelles opportunités et des projets intéressants.
            Discutons de la manière dont nous pouvons collaborer !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gray-900/50 border-white/10">
              <h3 className="text-2xl text-white mb-6">Envoie-moi un message</h3>

              {/* Form wired to EmailJS */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" aria-live="polite">
                {/* Honeypot - hide from users but present for bots */}
                <input type="text" name={HONEYPOT_NAME} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="text-gray-300 text-sm mb-2 block">Prénom *</label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="Ton prénom"
                      required
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="text-gray-300 text-sm mb-2 block">Nom</label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Ton nom"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-gray-300 text-sm mb-2 block">Email *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    required
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="text-gray-300 text-sm mb-2 block">Sujet</label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Sujet de discussion"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-gray-300 text-sm mb-2 block">Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Parle-moi de ton projet..."
                    rows={5}
                    required
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500 resize-none"
                  />
                </div>

                <Button type="submit" disabled={sending} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3">
                  {sending ? 'Envoi...' : 'Envoyer le message'}
                </Button>

                {status && (
                  <p
                    role="status"
                    className={`mt-3 text-sm ${status.ok ? 'text-emerald-400' : 'text-rose-400'}`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-white mb-6">Connectons-nous</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Je suis actuellement disponible pour des missions freelance
                et des opportunités à temps plein. Que vous ayez un projet en tête 
                ou que vous souhaitiez simplement discuter de technologie,
                j'aimerais avoir de vos nouvelles.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/30 transition-all duration-300">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-white text-lg mb-4">Abonne-toi</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-emerald-500 hover:text-white transition-all duration-300"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-16 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2025-2026 Mouhamed Boucounta Ba. Conçu et réalisé avec ❤️ en utilisant React et Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
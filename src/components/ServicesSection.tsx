'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import {
  Globe,
  Smartphone,
  Palette,
  ShoppingCart,
  Layout,
  Layers,
  ArrowRight,
  Sparkles,
  Image,
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Développement Web',
    description:
      'Applications web modernes et performantes avec les dernières technologies front-end et back-end.',
    tags: ['React', 'Angular', 'Vue.js', 'TypeScript'],
    gradient: 'from-blue-500/20 to-blue-600/5',
    border: 'border-blue-500/30 hover:border-blue-400/60',
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: Smartphone,
    title: 'Développement Mobile',
    description:
      'Applications mobiles cross-platform fluides et natives pour iOS et Android.',
    tags: ['Flutter', 'React Native', 'Android'],
    gradient: 'from-emerald-500/20 to-emerald-600/5',
    border: 'border-emerald-500/30 hover:border-emerald-400/60',
    iconBg: 'bg-emerald-500/20',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Layers,
    title: 'Applications SaaS',
    description:
      'Solutions métiers sur mesure : gestion de restaurant, boutique, stock, RH, facturation...',
    tags: ['Spring Boot', 'Node.js', 'MySQL', 'PostgreSQL'],
    gradient: 'from-purple-500/20 to-purple-600/5',
    border: 'border-purple-500/30 hover:border-purple-400/60',
    iconBg: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
  },
  {
    icon: Layout,
    title: 'Site Vitrine',
    description:
      'Sites de présentation élégants et performants pour votre entreprise, marque ou activité.',
    tags: ['Next.js', 'React', 'TailwindCSS', 'SEO'],
    gradient: 'from-orange-500/20 to-orange-600/5',
    border: 'border-orange-500/30 hover:border-orange-400/60',
    iconBg: 'bg-orange-500/20',
    iconColor: 'text-orange-400',
  },
  {
    icon: ShoppingCart,
    title: 'Site E-commerce',
    description:
      'Boutiques en ligne complètes avec paiement en ligne, gestion des commandes et tableau de bord.',
    tags: ['Next.js', 'Stripe', 'WooCommerce', 'Shopify'],
    gradient: 'from-pink-500/20 to-pink-600/5',
    border: 'border-pink-500/30 hover:border-pink-400/60',
    iconBg: 'bg-pink-500/20',
    iconColor: 'text-pink-400',
  },
  {
    icon: Palette,
    title: 'Infographie & Design',
    description:
      'Création de logos, flyers, cartes de visite, affiches et visuels pour vos réseaux sociaux.',
    tags: ['Illustrator', 'Photoshop', 'Figma', 'Canva'],
    gradient: 'from-yellow-500/20 to-yellow-600/5',
    border: 'border-yellow-500/30 hover:border-yellow-400/60',
    iconBg: 'bg-yellow-500/20',
    iconColor: 'text-yellow-400',
  },
  {
    icon: Image,
    title: 'Création de Logo',
    description:
      'Logos professionnels et identité visuelle sur mesure pour donner une image forte à votre marque.',
    tags: ['Branding', 'Illustrator', 'Figma'],
    gradient: 'from-red-500/20 to-red-600/5',
    border: 'border-red-500/30 hover:border-red-400/60',
    iconBg: 'bg-red-500/20',
    iconColor: 'text-red-400',
  },
]

export function ServicesSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Collaboration & Services
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Ce que je peux faire pour vous
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Vous avez un projet web, mobile ou un besoin en design ? Je vous
            accompagne de l'idée à la réalisation avec soin et professionnalisme.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div
                className={`group h-full p-6 rounded-2xl bg-gradient-to-br ${service.gradient} border ${service.border} backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <h3 className="text-lg text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/5 text-gray-400 rounded text-xs border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden text-center bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-12"
        >
          {/* Background blur orbs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl text-white mb-4">
              Vous avez un projet en tête ?
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
              Discutons ensemble de vos besoins. Devis gratuit, réponse rapide et
              collaboration sur mesure.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                Contactez-moi
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

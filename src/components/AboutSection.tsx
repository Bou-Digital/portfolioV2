'use client'

import { motion } from 'framer-motion'
import { Card } from './ui/card'
import { Building2, Globe, Brain, Zap } from 'lucide-react'
import { useLang } from '../context/LangContext'

export function AboutSection() {
  const { t } = useLang()

  const features = [
    { icon: Building2, titleKey: 'about.f1.title' as const, descKey: 'about.f1.desc' as const },
    { icon: Globe,     titleKey: 'about.f2.title' as const, descKey: 'about.f2.desc' as const },
    { icon: Brain,     titleKey: 'about.f3.title' as const, descKey: 'about.f3.desc' as const },
    { icon: Zap,       titleKey: 'about.f4.title' as const, descKey: 'about.f4.desc' as const },
  ]

  const traits = [
    'about.trait1', 'about.trait2', 'about.trait3', 'about.trait4',
  ] as const

  return (
    <section id="à propos" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">{t('about.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl text-white mb-4">
              {t('about.h3')}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {t('about.p1').replace('Bou Digital', '').split('').length > 0 && (
                <>
                  {t('about.p1').split('Bou Digital')[0]}
                  <span className="text-emerald-400">Bou Digital</span>
                  {t('about.p1').split('Bou Digital')[1]}
                </>
              )}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t('about.p2')}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mt-6"
            >
              {traits.map((key) => (
                <span
                  key={key}
                  className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                >
                  {t(key)}
                </span>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-black/50 border-white/10 hover:border-emerald-500/50 transition-all duration-300 group">
                  <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-white text-lg mb-2">{t(feature.titleKey)}</h4>
                  <p className="text-gray-400 text-sm">{t(feature.descKey)}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
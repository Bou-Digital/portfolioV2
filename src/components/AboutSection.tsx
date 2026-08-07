'use client'

import { motion } from 'framer-motion'
import { Card } from './ui/card'
import { Code, Coffee, Lightbulb, Users } from 'lucide-react'

export function AboutSection() {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: "Écrire du code maintenable, évolutif et efficace qui résiste à l'épreuve du temps."
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Toujours à la recherche de nouvelles technologies et de solutions créatives à des problèmes complexes.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Travailler efficacement avec les équipes pour offrir des expériences utilisateur exceptionnelles.'
    },
    {
      icon: Coffee,
      title: 'Dévouement',
      description: "Engagé dans l'apprentissage continu et à rester à jour avec les tendances du secteur."
    }
  ]

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
          <h2 className="text-4xl md:text-5xl text-white mb-6">À propos de moi</h2>
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
              Passionné par la création d’expériences digitales significatives
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Développeur Full Stack Web & Mobile avec plus de 4 ans d’expérience dans la conception
              et le déploiement de solutions digitales en production en Afrique de l’Ouest.
              Fondateur de <span className="text-emerald-400">Bou Digital</span> — suite de SaaS
              multi-tenant actifs (Boutique Gestion, Restaurant Manager).
            </p>
            <p className="text-gray-300 leading-relaxed">
              Expérience internationale en remote (Suisse), livraisons Play Store, architecture
              microservices, intégration IoT et IA appliquée. Certifié FORCE-N en Intelligence
              Artificielle. Rigoureux, orienté résultats, à l’aise en Agile et en remote.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mt-6"
            >
              {['Résolution de problèmes', 'Esprit d’équipe', 'Apprentissage rapide', 'Sens du détail'].map((trait, index) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                >
                  {trait}
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
                  <h4 className="text-white text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
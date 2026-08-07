'use client'

import { motion } from 'framer-motion'
import { Card } from './ui/card'
import { GraduationCap, Award } from 'lucide-react'

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Mobile Frontend',
      skills: [
        { name: 'Flutter', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'React Native', level: 88, color: 'from-blue-500 to-blue-700' },
        { name: 'Android (Java/Kotlin)', level: 60, color: 'from-cyan-400 to-cyan-600' },

      ]
    },
    {
      title: 'Web Frontend',
      skills: [
        { name: 'Angular', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'HTML', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'React/Next.js', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'TypeScript', level: 90, color: 'from-blue-500 to-blue-700' },
        { name: 'Tailwind CSS', level: 88, color: 'from-cyan-400 to-cyan-600' },
        { name: 'Vue.js', level: 75, color: 'from-green-400 to-green-600' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Spring Boot', level: 90, color: 'from-green-500 to-green-700' },
        { name: 'Node.js', level: 90, color: 'from-green-500 to-green-700' },
        { name: 'Express.js', level: 85, color: 'from-yellow-400 to-yellow-600' },
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', level: 90, color: 'from-green-500 to-green-700' },
        { name: 'SQLite', level: 82, color: 'from-cyan-400 to-cyan-600' },
      ]
    },
    {
      title: 'Design & UX',
      skills: [
        { name: 'Figma', level: 92, color: 'from-gray-400 to-gray-600' },
        { name: 'Illustrator', level: 90, color: 'from-blue-600 to-blue-800' },
        { name: 'Photoshop', level: 90, color: 'from-orange-400 to-orange-600' },
        { name: 'Canva', level: 88, color: 'from-pink-400 to-pink-600' }
      ]
    },
    {
      title: 'DevOps & Outils',
      skills: [
        { name: 'Git/GitHub', level: 92, color: 'from-gray-400 to-gray-600' },
        { name: 'Docker', level: 82, color: 'from-blue-600 to-blue-800' },
        { name: 'CI/CD', level: 78, color: 'from-orange-400 to-orange-600' },
        { name: 'Nginx', level: 78, color: 'from-green-400 to-green-600' },
        { name: 'Play Store', level: 85, color: 'from-emerald-400 to-emerald-600' }
      ]
    },
    {
      title: 'IA & Outils AI',
      skills: [
        { name: 'Claude / Claude Code', level: 92, color: 'from-orange-400 to-orange-600' },
        { name: 'ChatGPT', level: 90, color: 'from-emerald-400 to-emerald-600' },
        { name: 'ElevenLabs (voix off)', level: 82, color: 'from-purple-400 to-purple-600' },
        { name: 'Midjourney / DALL-E', level: 78, color: 'from-pink-400 to-pink-600' },
        { name: 'Prompt Engineering', level: 88, color: 'from-yellow-400 to-yellow-600' }
      ]
    }
  ]

  return (
    <section id="compétences" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Compétences et Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Voici les technologies et outils que j'utilise pour concrétiser les idées
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-gray-900/50 border-white/10 backdrop-blur-sm">
                <h3 className="text-xl text-white mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                        duration: 0.6 
                      }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-gray-400 text-xs">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                            duration: 1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl text-white mb-8">Technologies avec lesquelles je travaille</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              'Flutter(Dart)', 'Html', 'CSS', 'JavaScript', 'Angular', 'Java(Spring Boot)', 
              'React', 'TypeScript', 'Node.js', 'Next.js', 'Python', 'MySQL', 
              'Docker', 'Git', 'Tailwind', 'Firebase', 'Figma'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white/5 text-gray-400 rounded-lg border border-white/10 text-sm hover:bg-white/10 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Formation & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl text-white text-center mb-10">Formation & Certifications</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Award,
                period: 'Jan – Juil 2025',
                title: 'Certification IA appliquée',
                org: 'FORCE-N — Programme national sénégalais',
                color: 'from-emerald-500/20 to-emerald-600/5',
                border: 'border-emerald-500/30',
                iconColor: 'text-emerald-400',
                iconBg: 'bg-emerald-500/20',
              },
              {
                icon: GraduationCap,
                period: '2018 – 2021',
                title: 'Licence Informatique & Réseaux',
                org: 'AFI L\'UE — Dakar, Sénégal',
                color: 'from-blue-500/20 to-blue-600/5',
                border: 'border-blue-500/30',
                iconColor: 'text-blue-400',
                iconBg: 'bg-blue-500/20',
              },
              {
                icon: GraduationCap,
                period: '2017 – 2018',
                title: 'Baccalauréat Série S2',
                org: 'Lycée Demba Diop — Mbour',
                color: 'from-purple-500/20 to-purple-600/5',
                border: 'border-purple-500/30',
                iconColor: 'text-purple-400',
                iconBg: 'bg-purple-500/20',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} border ${item.border}`}
              >
                <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center mb-4`}>
                  <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <p className="text-gray-400 text-xs mb-1">{item.period}</p>
                <h4 className="text-white font-medium mb-1">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.org}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
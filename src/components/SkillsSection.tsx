'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Smartphone, Monitor, Server, Database, Paintbrush, Terminal, Brain, BookOpen } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Level = 'En production' | 'Sur projets' | 'Notions'

const levelBadge = (l: Level) =>
  l === 'En production' ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' :
  l === 'Sur projets'   ? 'bg-blue-500/15 text-blue-400 border-blue-500/30' :
                          'bg-gray-500/15 text-gray-400 border-gray-500/30'

const levelDot = (l: Level) =>
  l === 'En production' ? 'bg-emerald-400' :
  l === 'Sur projets'   ? 'bg-blue-400' :
                          'bg-gray-500'

type Category = {
  title: string
  icon: LucideIcon
  gradient: string
  iconBg: string
  skills: { name: string; level: Level }[]
}

export function SkillsSection() {
  const skillCategories: Category[] = [
    {
      title: 'Mobile Frontend',
      icon: Smartphone,
      gradient: 'from-purple-500/50 via-purple-500/10 to-transparent',
      iconBg: 'bg-purple-500/20 text-purple-400',
      skills: [
        { name: 'Flutter', level: 'En production' },
        { name: 'React Native', level: 'Sur projets' },
        { name: 'Android (Java/Kotlin)', level: 'Notions' },
      ]
    },
    {
      title: 'Web Frontend',
      icon: Monitor,
      gradient: 'from-blue-500/50 via-blue-500/10 to-transparent',
      iconBg: 'bg-blue-500/20 text-blue-400',
      skills: [
        { name: 'Angular', level: 'En production' },
        { name: 'HTML / CSS', level: 'En production' },
        { name: 'React / Next.js', level: 'En production' },
        { name: 'TypeScript', level: 'En production' },
        { name: 'Tailwind CSS', level: 'Sur projets' },
        { name: 'Vue.js', level: 'Notions' },
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      gradient: 'from-emerald-500/50 via-emerald-500/10 to-transparent',
      iconBg: 'bg-emerald-500/20 text-emerald-400',
      skills: [
        { name: 'Spring Boot', level: 'En production' },
        { name: 'Node.js', level: 'Sur projets' },
        { name: 'Express.js', level: 'Sur projets' },
        { name: 'PHP', level: 'Sur projets' },
        { name: 'Python', level: 'Sur projets' },
      ]
    },
    {
      title: 'Database',
      icon: Database,
      gradient: 'from-cyan-500/50 via-cyan-500/10 to-transparent',
      iconBg: 'bg-cyan-500/20 text-cyan-400',
      skills: [
        { name: 'MySQL', level: 'En production' },
        { name: 'SQLite', level: 'Sur projets' },
        { name: 'Supabase', level: 'Sur projets' },
      ]
    },
    {
      title: 'Design & UX',
      icon: Paintbrush,
      gradient: 'from-pink-500/50 via-pink-500/10 to-transparent',
      iconBg: 'bg-pink-500/20 text-pink-400',
      skills: [
        { name: 'Figma', level: 'En production' },
        { name: 'Illustrator', level: 'Sur projets' },
        { name: 'Photoshop', level: 'Sur projets' },
        { name: 'Canva', level: 'Sur projets' },
      ]
    },
    {
      title: 'DevOps & Outils',
      icon: Terminal,
      gradient: 'from-amber-500/50 via-amber-500/10 to-transparent',
      iconBg: 'bg-amber-500/20 text-amber-400',
      skills: [
        { name: 'Git / GitHub', level: 'En production' },
        { name: 'Docker', level: 'En production' },
        { name: 'Play Store', level: 'En production' },
        { name: 'CI/CD', level: 'Sur projets' },
        { name: 'Nginx', level: 'Sur projets' },
        { name: 'Vercel', level: 'Sur projets' },
        { name: 'Codemagic', level: 'Sur projets' },
      ]
    },
    {
      title: 'IA & Outils AI',
      icon: Brain,
      gradient: 'from-violet-500/50 via-violet-500/10 to-transparent',
      iconBg: 'bg-violet-500/20 text-violet-400',
      skills: [
        { name: 'Claude / Claude Code', level: 'En production' },
        { name: 'ChatGPT', level: 'En production' },
        { name: 'Prompt Engineering', level: 'En production' },
        { name: 'ElevenLabs (voix off)', level: 'Sur projets' },
        { name: 'Midjourney / DALL-E', level: 'Sur projets' },
      ]
    },
    {
      title: 'Formation & Pédagogie',
      icon: BookOpen,
      gradient: 'from-teal-500/50 via-teal-500/10 to-transparent',
      iconBg: 'bg-teal-500/20 text-teal-400',
      skills: [
        { name: 'Animation de cours informatiques', level: 'En production' },
        { name: 'Formation en présentiel', level: 'En production' },
        { name: 'Vulgarisation technique (TikTok)', level: 'Sur projets' },
        { name: 'Création de supports pédagogiques', level: 'Sur projets' },
      ]
    }
  ]

  const allSkills = skillCategories.flatMap(c => c.skills)
  const counts = {
    prod: allSkills.filter(s => s.level === 'En production').length,
    proj: allSkills.filter(s => s.level === 'Sur projets').length,
    not:  allSkills.filter(s => s.level === 'Notions').length,
  }

  return (
    <section id="compétences" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">Compétences et Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-5" />
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Technologies et outils que j'utilise pour concrétiser les idées
          </p>

          {/* Stats + légende */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'En production', count: counts.prod, dot: 'bg-emerald-400', badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' },
              { label: 'Sur projets',   count: counts.proj, dot: 'bg-blue-400',    badge: 'bg-blue-500/15 text-blue-400 border-blue-500/30' },
              { label: 'Notions',       count: counts.not,  dot: 'bg-gray-500',    badge: 'bg-gray-500/15 text-gray-400 border-gray-500/30' },
            ].map(({ label, count, dot, badge }) => (
              <span key={label} className={`inline-flex items-center gap-2 text-xs px-4 py-1.5 rounded-full font-semibold border ${badge}`}>
                <span className={`w-2 h-2 rounded-full ${dot}`} />
                {label}
                <span className="opacity-60">· {count}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Grille catégories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: ci * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-80px' }}
              className={`p-[1px] rounded-2xl bg-gradient-to-br ${cat.gradient}`}
            >
              <div className="bg-[#0d0d11] rounded-[calc(1rem-1px)] p-5 h-full">

                {/* Categorie header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/8">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${cat.iconBg}`}>
                    <cat.icon className="w-4 h-4" />
                  </div>
                  <span className="text-gray-200 text-sm font-semibold">{cat.title}</span>
                </div>

                {/* Skills */}
                <div className="space-y-1">
                  {cat.skills.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                      transition={{ delay: ci * 0.07 + si * 0.04, duration: 0.35 }}
                      viewport={{ once: true, margin: '-80px' }}
                      className="flex items-center justify-between gap-2 px-2 py-1.5 rounded-lg cursor-default"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className={`w-[7px] h-[7px] rounded-full flex-shrink-0 ${levelDot(skill.level)}`} />
                        <span className="text-gray-300 text-xs truncate">{skill.name}</span>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border whitespace-nowrap flex-shrink-0 ${levelBadge(skill.level)}`}>
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl text-white mb-8">Technologies avec lesquelles je travaille</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Flutter', 'Spring Boot', 'Angular', 'React / Next.js',
              'TypeScript', 'Node.js', 'Python', 'PHP', 'MySQL',
              'Docker', 'Git', 'Tailwind', 'Figma', 'Supabase', 'Vercel'
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.06, backgroundColor: 'rgba(255,255,255,0.1)' }}
                transition={{ delay: 0.2 + i * 0.03, duration: 0.3 }}
                viewport={{ once: true, margin: '-60px' }}
                className="px-4 py-2 bg-white/5 text-gray-400 rounded-lg border border-white/10 text-sm cursor-default"
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
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true, margin: '-60px' }}
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
                gradient: 'from-emerald-500/50 via-emerald-500/10 to-transparent',
                iconBg: 'bg-emerald-500/20 text-emerald-400',
              },
              {
                icon: GraduationCap,
                period: '2018 – 2021',
                title: 'Licence Informatique & Réseaux',
                org: "AFI L'UE — Dakar, Sénégal",
                gradient: 'from-blue-500/50 via-blue-500/10 to-transparent',
                iconBg: 'bg-blue-500/20 text-blue-400',
              },
              {
                icon: GraduationCap,
                period: '2017 – 2018',
                title: 'Baccalauréat Série S2',
                org: 'Lycée Demba Diop — Mbour',
                gradient: 'from-purple-500/50 via-purple-500/10 to-transparent',
                iconBg: 'bg-purple-500/20 text-purple-400',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                viewport={{ once: true, margin: '-60px' }}
                className={`p-[1px] rounded-2xl bg-gradient-to-br ${item.gradient}`}
              >
                <div className="bg-[#0d0d11] rounded-[calc(1rem-1px)] p-6 h-full">
                  <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center mb-4`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="text-gray-500 text-xs mb-1">{item.period}</p>
                  <h4 className="text-white font-medium mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'

const FILTERS = ['Tous', 'SaaS', 'Mobile', 'IoT', 'Design'] as const
type Filter = typeof FILTERS[number]

const PROJECTS = [
  {
    title:    "Application SOPELEC — Verification de Factures d'Electricite",
    title_en: "SOPELEC App — Electricity Bill Verification",
    company:  "SOPEC — Sacre-Coeur 3 VDN, Dakar",
    description:    "Developpement d'une application mobile iOS et Android de verification de factures d'electricite : capture photo/PDF, extraction automatique par IA, modules BT/MT-HT avec detection d'anomalies, authentification OTP et systeme de quota. Publication App Store via Codemagic CI/CD, backend Spring Boot securise avec Docker secrets.",
    description_en: "Development of an iOS and Android mobile app for electricity bill verification: photo/PDF capture, automatic AI extraction, BT/MT-HT modules with anomaly detection, OTP authentication and quota system. App Store publication via Codemagic CI/CD, secure Spring Boot backend with Docker secrets.",
    image: import.meta.env.BASE_URL + "sopec.webp",
    objectPosition: 'top',
    technologies: ["Flutter", "Spring Boot", "Docker", "Codemagic", "OTP", "CI/CD", "iOS", "Android"],
    live: "https://sopec-group.com",
    featured: true,
    categories: ['Mobile'],
  },
  {
    title:    "Menu Numerique TV — Restaurant Chez Fatou Mbour",
    title_en: "Digital TV Menu — Chez Fatou Restaurant Mbour",
    company:  "Restaurant Chez Fatou — Saly Carrefour, Mbour",
    description:    "Application web full-stack d'affichage de menu sur ecran TV en salle : defilement automatique des plats avec photos, horloge temps reel, theme personnalisable par couleur de marque. Panel d'administration complet (plats, categories, prix, upload d'images). Architecture multi-tenant deployee sur Vercel. Fix Samsung Tizen TV : migration vers inline styles pour contourner les limitations CSS modernes (oklch, @layer).",
    description_en: "Full-stack web app for displaying the menu on an in-room TV screen: automatic dish scroll with photos, real-time clock, brand-color customizable theme. Full admin panel (dishes, categories, prices, image upload). Multi-tenant architecture deployed on Vercel. Samsung Tizen TV fix: migrated to inline styles to bypass modern CSS limitations (oklch, @layer).",
    image: import.meta.env.BASE_URL + "chezfatou.jpg",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Vercel"],
    live: "#",
    featured: true,
    categories: ['SaaS'],
  },
  {
    title:    "Modules Mobile & Backend Walalma",
    title_en: "Walalma Mobile & Backend Modules",
    company:  "Bou Digital (prestation pour Nadji.Bi Senegal SUARL) — Remote",
    companyUrl: "https://nadjibi.com",
    description:    "Developpement et integration de 9 modules logiciels sur 3 couches techniques (Angular, Spring Boot, Flutter) sur la plateforme Walalma en production. Filtrage automatique du stock par plateforme, module Mouvement de Stock complet (DTOs, endpoints REST), et 3 modules Flutter avec indicateurs temps reel.",
    description_en: "Development and integration of 9 software modules across 3 technical layers (Angular, Spring Boot, Flutter) on the Walalma production platform. Automatic stock filtering by platform, complete Stock Movement module (DTOs, REST endpoints), and 3 Flutter modules with real-time indicators.",
    image: import.meta.env.BASE_URL + "walalma.jpeg",
    technologies: ["Flutter", "Angular", "Spring Boot", "MySQL"],
    live: "https://app.walalma.com",
    featured: true,
    categories: ['Mobile', 'SaaS'],
  },
  {
    title:    "Dashboard Walalma — Tableau de bord solaire",
    title_en: "Walalma Dashboard — Solar Monitoring Board",
    company:  "Bou Digital (prestation pour Nadji.Bi Senegal SUARL) — Remote",
    companyUrl: "https://nadjibi.com",
    description:    "Tableau de bord web de supervision pour proprietaires de plateformes solaires : controle a distance des machines (ON/OFF), suivi de production en temps reel, blocage automatique en cas de non-paiement, rapports analytiques avec exports PDF/Excel.",
    description_en: "Web supervision dashboard for solar platform owners: remote machine control (ON/OFF), real-time production monitoring, automatic blocking on non-payment, analytical reports with PDF/Excel exports.",
    image: import.meta.env.BASE_URL + "walalma2.jpeg",
    technologies: ["Angular", "Spring Boot", "MySQL"],
    live: "https://app.walalma.com",
    featured: true,
    categories: ['SaaS', 'IoT'],
  },
  {
    title:    "Restaurant SaaS Manager",
    title_en: "Restaurant SaaS Manager",
    company:  "Bou Digital — Projet entrepreneurial",
    description:    "SaaS multi-tenant de gestion de restaurants avec isolation complete des donnees par tenant : menu digital via QR Code, gestion des commandes en temps reel, caisse, stocks et rapports de ventes automatises. Site vitrine + dashboard + app mobile.",
    description_en: "Multi-tenant restaurant management SaaS with full data isolation per tenant: digital menu via QR Code, real-time order management, POS, stock, and automated sales reports. Landing page + dashboard + mobile app.",
    image: import.meta.env.BASE_URL + "restaurant-dashboard.png",
    technologies: ["Angular", "Spring Boot", "Flutter", "MySQL"],
    live: "https://bou-digital.github.io/portfolioV2/saas/#restauranthub",
    featured: true,
    categories: ['SaaS', 'Mobile'],
  },
  {
    title:    "Boutique Gestion — SaaS Commercial",
    title_en: "Boutique Gestion — Business SaaS",
    company:  "Bou Digital — Projet entrepreneurial",
    description:    "SaaS B2B/B2C adapte a 8 secteurs d'activite : caisse (POS) complete, catalogue QR Code, analytics financier (benefice net, taux de marge, top produits), architecture multi-boutiques avec suivi des abonnements, App client PWA et App livreur.",
    description_en: "B2B/B2C SaaS adapted to 8 business sectors: full POS, QR Code catalog, financial analytics (net profit, margin rate, top products), multi-shop architecture with subscription tracking, PWA client app and delivery app.",
    image: import.meta.env.BASE_URL + "boutique-dashboard.png",
    technologies: ["Angular", "TypeScript", "Tailwind CSS", "Spring Boot", "MySQL", "Docker", "PWA"],
    live: "https://bou-digital.github.io/portfolioV2/saas/#boutique",
    featured: true,
    categories: ['SaaS'],
  },
  {
    title:    "Developpeur Mobile Freelance — Application Va Bene",
    title_en: "Mobile Developer Freelance — Va Bene App",
    company:  "Faseya (Restaurant Va Bene, Suisse) — Contrat de prestation",
    description:    "Maintenance et evolution de l'application mobile de commande du restaurant Va Bene (Suisse).",
    description_en: "Maintenance and evolution of the Va Bene restaurant ordering mobile app (Switzerland).",
    image: import.meta.env.BASE_URL + "vabene1.jpeg",
    technologies: ["React Native", "Node.js", "API REST", "Firebase"],
    live: "https://vabenepizza.ch/fr",
    featured: true,
    categories: ['Mobile'],
  },
  {
    title:    "Responsable Digital — Projet PanoMagik",
    title_en: "Digital Manager — PanoMagik Project",
    company:  "Nadji.Bi Group SA — Mbour",
    companyUrl: "https://nadjibi.com",
    description:    "Pilotage et developpement d'un ecosysteme digital complet pour la gestion d'installations solaires.",
    description_en: "Management and development of a complete digital ecosystem for solar installation management.",
    image: import.meta.env.BASE_URL + "panomagik.jpg",
    technologies: ["Flutter", "Angular", "Spring Boot", "MySQL", "IoT"],
    live: "https://panomagik.com",
    featured: true,
    categories: ['IoT', 'Mobile'],
  },
  {
    title:    "Sama Pump",
    title_en: "Sama Pump",
    company:  "Nadji.Bi Group SA — Mbour",
    companyUrl: "https://nadjibi.com",
    description:    "Application de suivi des pompes solaires — publication sur Google Play.",
    description_en: "Solar pump monitoring app — published on Google Play.",
    image: import.meta.env.BASE_URL + "samapompe.png",
    technologies: ["Flutter", "Spring Boot", "MySQL", "IoT"],
    live: "https://play.google.com/store/apps/details?id=com.nadjibi.app_pompe&hl=fr",
    featured: true,
    categories: ['Mobile', 'IoT'],
  },
  {
    title:    "Woomal Mbay Contacts",
    title_en: "Woomal Mbay Contacts",
    company:  "Nadji.Bi Group SA — Mbour",
    companyUrl: "https://nadjibi.com",
    description:    "Gestion des contacts pour le programme Woomal Mbay.",
    description_en: "Contact management for the Woomal Mbay program.",
    image: import.meta.env.BASE_URL + "wcontact.jpeg",
    technologies: ["Flutter", "Spring Boot", "MySQL"],
    live: "https://play.google.com/store/apps/details?id=com.nadjibi.woomal_mbay_contact&hl=fr",
    featured: true,
    categories: ['Mobile'],
  },
  {
    title:    "Programme Woomal Mbay — Android & Web",
    title_en: "Woomal Mbay Program — Android & Web",
    company:  "Nadji.Bi Group SA — Mbour",
    companyUrl: "https://nadjibi.com",
    description:    "Developpement d'applications mobiles internes et deploiement sur le Play Store d'une solution integree pour la gestion de pompes solaires connectees.",
    description_en: "Development of internal mobile apps and Play Store deployment of an integrated solution for connected solar pump management.",
    image: import.meta.env.BASE_URL + "woomalmbay.jpg",
    technologies: ["Flutter", "Angular", "Spring Boot", "MySQL", "IoT"],
    live: "https://nadjibi.com",
    featured: false,
    categories: ['Mobile', 'IoT'],
  },
  {
    title:    "Projet Walalma v1 — Developpement initial",
    title_en: "Walalma v1 Project — Initial Development",
    company:  "Nadji.Bi Group SA — Mbour",
    companyUrl: "https://nadjibi.com",
    description:    "Conception et developpement d'un ensemble d'applications mobiles et du dashboard de supervision. Applications Walalma Manager, Walalma Client et Walalma Caissier.",
    description_en: "Design and development of a set of mobile applications and the supervision dashboard. Walalma Manager, Walalma Client and Walalma Caissier apps.",
    image: import.meta.env.BASE_URL + "walalma.jpeg",
    technologies: ["Flutter", "Angular", "Spring Boot", "MySQL", "IoT"],
    live: "https://admin.panomagik.com/",
    featured: false,
    categories: ['Mobile', 'IoT'],
  },
  {
    title:    "Infographiste / Responsable Digital",
    title_en: "Graphic Designer / Digital Manager",
    company:  "Partenariat avec l'association Emaano — Dakar",
    description:    "Creation de contenus visuels et soutien a la communication digitale de l'association.",
    description_en: "Visual content creation and digital communication support for the association.",
    image: import.meta.env.BASE_URL + "bou.png",
    technologies: ["Figma", "Illustrator", "Photoshop", "Canva"],
    live: "#",
    featured: false,
    categories: ['Design'],
  },
]

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>('Tous')
  const { t, lang } = useLang()

  const projects = PROJECTS.map(p => ({
    ...p,
    title: lang === 'en' ? p.title_en : p.title,
    description: lang === 'en' ? p.description_en : p.description,
  }))

  const featuredProjects = activeFilter === 'Tous'
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.featured && p.categories.includes(activeFilter))

  const otherProjects = activeFilter === 'Tous'
    ? projects.filter(p => !p.featured)
    : projects.filter(p => !p.featured && p.categories.includes(activeFilter))

  return (
    <section id="projets" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">{t('projects.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            {t('projects.sub')}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                  activeFilter === f
                    ? 'bg-emerald-500 border-emerald-500 text-white'
                    : 'border-white/20 text-gray-400 hover:border-emerald-500/50 hover:text-white'
                }`}
              >
                {f === 'Tous' ? t('projects.filter.all') : f}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-black/50 border-white/10 overflow-hidden hover:border-emerald-500/50 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-84 object-cover ${'objectPosition' in project && project.objectPosition === 'top' ? 'object-top' : 'object-center'} transition-transform duration-500 group-hover:scale-90`}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {project.live !== "#" && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <h5 className="text-gray-400 italic mb-2">
                    {'companyUrl' in project && project.companyUrl ? (
                      <a href={project.companyUrl as string} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors duration-200">{project.company}</a>
                    ) : project.company}
                  </h5>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl text-white text-center mb-8">{t('projects.other')}</h3>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-black/30 border-white/10 hover:border-white/30 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-90"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-3 right-3 flex space-x-2">
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="text-lg text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  {'companyUrl' in project && project.companyUrl ? (
                    <p className="text-gray-400 text-xs italic mb-1">
                      <a href={project.companyUrl as string} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors duration-200">{project.company}</a>
                    </p>
                  ) : null}
                  <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 7).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3"
          >
            {t('projects.see_all')}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

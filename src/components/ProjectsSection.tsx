'use client'

import { Card } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { motion } from 'framer-motion'


export function ProjectsSection() {
  const projects = [
    {
      title: "Modules Mobile & Backend Walalma",
      company: "Bou Digital (prestation pour Nadji.Bi Sénégal SUARL) — Remote",
      description: "Développement et intégration de 9 modules logiciels sur 3 couches techniques (Angular, Spring Boot, Flutter) sur la plateforme Walalma en production. Filtrage automatique du stock par plateforme, module Mouvement de Stock complet (DTOs, endpoints REST), et 3 modules Flutter avec indicateurs temps réel.",
      image: import.meta.env.BASE_URL + "walalma.jpeg",
      technologies: ["Flutter", "Angular", "Spring Boot", "MySQL"],
      live: "https://app.walalma.com",
      featured: true
    },
    {
      title: "Dashboard Walalma — Tableau de bord solaire",
      company: "Bou Digital (prestation pour Nadji.Bi Sénégal SUARL) — Remote",
      description: "Tableau de bord web de supervision pour propriétaires de plateformes solaires : contrôle à distance des machines (ON/OFF), suivi de production en temps réel, blocage automatique en cas de non-paiement, rapports analytiques avec exports PDF/Excel.",
      image: import.meta.env.BASE_URL + "walalma2.jpeg",
      technologies: ["Angular", "Spring Boot", "MySQL"],
      live: "https://app.walalma.com",
      featured: true
    },
    {
      title: "Restaurant SaaS Manager",
      company: "Bou Digital — Projet entrepreneurial",
      description: "SaaS multi-tenant de gestion de restaurants avec isolation complète des données par tenant : menu digital via QR Code, gestion des commandes en temps réel, caisse, stocks et rapports de ventes automatisés. Site vitrine + dashboard + app mobile.",
      image: import.meta.env.BASE_URL + "restaurant-dashboard.png",
      technologies: ["Angular", "Spring Boot", "Flutter", "MySQL"],
      live: "https://restaurant-manager.mooo.com",
      featured: true
    },
    {
      title: "Boutique Gestion — SaaS Commercial",
      company: "Bou Digital — Projet entrepreneurial",
      description: "SaaS B2B/B2C adapté à 8 secteurs d'activité : caisse (POS) complète, catalogue QR Code, analytics financier (bénéfice net, taux de marge, top produits), architecture multi-boutiques avec suivi des abonnements, App client PWA et App livreur.",
      image: import.meta.env.BASE_URL + "boutique-dashboard.png",
      technologies: ["Angular", "TypeScript", "Tailwind CSS", "Spring Boot", "MySQL", "Docker", "PWA"],
      live: "https://gestion-boutique.mooo.com",
      featured: true
    },
    {
      title: "Développeur Mobile Freelance — Application Va Bene",
      company: "Faseya (Restaurant Va Bene, Suisse) — Contrat de prestation",
      description: "Maintenance et évolution de l'application mobile de commande du restaurant Va Bene (Suisse).",
      image: import.meta.env.BASE_URL + "vabene1.jpeg",
      technologies: ["React Native", "Node.js", "API REST", "Firebase"],
      live: "https://vabenepizza.ch/fr",
      featured: true
    },
    {
      title: "Responsable Digital — Projet PanoMagik",
      company: "Nadji.Bi Group SA — Mbour",
      description: "Pilotage et développement d'un écosystème digital complet pour la gestion d'installations solaires.",
      image: import.meta.env.BASE_URL + "panomagik.jpg",
      technologies: ["Flutter", "Angular", "Spring Boot", "MySQL", "IoT"],
      github: "#",
      live: "https://admin.panomagik.com/",
      featured: true
    },
    {
      title: "Sama Pump",
      company: "Nadji.Bi Group SA — Mbour",
      description: "Application de suivi des pompes solaires — publication sur Google Play.",
      image: import.meta.env.BASE_URL + "samapompe.png",
      technologies: ["Flutter", "Spring Boot", "MySQL", "IoT"],
      github: "#",
      live: "https://play.google.com/store/apps/details?id=com.nadjibi.app_pompe&hl=fr",
      featured: true
    },
    {
      title: "Woomal Mbay Contacts",
      company: "Nadji.Bi Group SA — Mbour",
      description: "Gestion des contacts pour le programme Woomal Mbay.",
      image: import.meta.env.BASE_URL + "wcontact.jpeg",
      technologies: ["Flutter", "Spring Boot", "MySQL"],
      github: "#",
      live: "https://play.google.com/store/apps/details?id=com.nadjibi.woomal_mbay_contact&hl=fr",
      featured: true
    },
    {
      title: "Développeur Sénior Android & Web — Programme Woomal Mbay",
      company: "Nadji.Bi Group SA — Mbour",
      description: "Développement d'applications mobiles internes et déploiement sur le Play Store d'une solution intégrée pour la gestion de pompes solaires connectées.",
      image: import.meta.env.BASE_URL + "woomalmbay.jpg",
      technologies: ["Flutter", "Angular", "Spring Boot", "MySQL", "IoT"],
      live: "https://app.woomalmbay.com/",
      featured: false
    },
    {
      title: "Développeur Junior — Projet Walalma",
      company: "Nadji.Bi Group SA — Mbour",
      description: "Conception et développement d'un ensemble d'applications mobiles et du dashboard de supervision. Applications Walalma Manager, Walalma Client et Walalma Caissier.",
      image: import.meta.env.BASE_URL + "walalma.jpeg",
      technologies: ["Flutter", "Angular", "Spring Boot", "MySQL", "IoT"],
      live: "https://admin.panomagik.com/",
      featured: false
    },
    {
      title: "Infographiste / Responsable Digital",
      company: "Partenariat avec l'association Emaano — Dakar",
      description: "Création de contenus visuels et soutien à la communication digitale de l'association.",
      image: import.meta.env.BASE_URL + "bou.png",
      technologies: ["Figma", "Illustrator", "Photoshop", "Canva"],
      github: "#",
      live: "#",
      featured: false
    }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

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
          <h2 className="text-4xl md:text-5xl text-white mb-6">Projets les Plus Importants</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Voici quelques-uns de mes projets récents qui mettent en valeur mes compétences et ma passion pour le développement web et mobile.
          </p>
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
                    className="w-full h-84 object-cover transition-transform duration-500 group-hover:scale-90"
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
                    {project.company}
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl text-white text-center mb-8">Autres Projets</h3>
        </motion.div>

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
            Voir tous les projets
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

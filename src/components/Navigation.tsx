'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const resumePath = `${import.meta.env.BASE_URL || '/'}CV_Boucounta_22.06.26_Principal.pdf`

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* CV button with download icon */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-sm hover:opacity-95 transition-opacity duration-150"
            aria-label="Télécharger le CV"
            title="Télécharger le CV"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Télécharger CV</span>
          </motion.a>

          
          
          <div className="hidden md:flex items-center space-x-8">
            {['accueil', 'à propos', 'compétences', 'projets', 'services', 'contact'].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-white transition-colors duration-200 capitalize"
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
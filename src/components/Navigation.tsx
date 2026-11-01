'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Download, Menu, X, Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import { useTheme } from '../context/ThemeContext'
import type { TranslationKey } from '../i18n/translations'

const NAV_ITEMS: { id: string; key: TranslationKey }[] = [
  { id: 'accueil',      key: 'nav.home' },
  { id: 'à propos',    key: 'nav.about' },
  { id: 'compétences', key: 'nav.skills' },
  { id: 'projets',     key: 'nav.projects' },
  { id: 'services',    key: 'nav.services' },
  { id: 'contact',     key: 'nav.contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, setLang, t } = useLang()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setMobileOpen(false)
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const resumePath = `${import.meta.env.BASE_URL || '/'}CV_Boucounta_22.06.26_Principal.pdf`
  const saasPath = `${import.meta.env.BASE_URL || '/'}saas/`

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
          {/* CV download button */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-sm hover:opacity-95 transition-opacity duration-150"
            aria-label={t('nav.download')}
            title={t('nav.download')}
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">{t('nav.download')}</span>
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors duration-200 capitalize"
              >
                {t(item.key)}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              href={saasPath}
              className="px-3 py-1 text-emerald-400 hover:text-emerald-300 border border-emerald-500/40 hover:border-emerald-400 rounded-lg text-sm font-semibold transition-all duration-200"
            >
              {t('nav.saas')}
            </motion.a>

            {/* Lang switcher + theme toggle */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-1 pl-4 border-l border-white/10"
            >
              <button
                onClick={() => setLang('fr')}
                className={`text-xs font-bold px-2 py-1 rounded transition-colors duration-150 ${
                  lang === 'fr' ? 'text-white bg-white/10' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                FR
              </button>
              <span className="text-white/20 text-xs">|</span>
              <button
                onClick={() => setLang('en')}
                className={`text-xs font-bold px-2 py-1 rounded transition-colors duration-150 ${
                  lang === 'en' ? 'text-white bg-white/10' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                EN
              </button>
              <button
                onClick={toggleTheme}
                className="ml-2 p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-150"
                aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
                title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </motion.div>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-1">
              {NAV_ITEMS.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white py-3 text-left capitalize border-b border-white/5 transition-colors duration-200"
                >
                  {t(item.key)}
                </button>
              ))}
              <a
                href={saasPath}
                className="text-emerald-400 hover:text-emerald-300 py-3 font-semibold border-b border-white/5 transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
              >
                {t('nav.saas')} ↗
              </a>
              {/* Lang switcher + theme toggle mobile */}
              <div className="flex items-center gap-2 py-3">
                <button
                  onClick={() => setLang('fr')}
                  className={`text-xs font-bold px-3 py-1.5 rounded border transition-colors duration-150 ${
                    lang === 'fr'
                      ? 'text-white bg-white/10 border-white/20'
                      : 'text-gray-500 border-white/10 hover:text-gray-300'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`text-xs font-bold px-3 py-1.5 rounded border transition-colors duration-150 ${
                    lang === 'en'
                      ? 'text-white bg-white/10 border-white/20'
                      : 'text-gray-500 border-white/10 hover:text-gray-300'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={toggleTheme}
                  className="ml-1 p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-150 border border-white/10"
                  aria-label={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { SkillsSection } from './components/SkillsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ServicesSection } from './components/ServicesSection'
import { ContactSection } from './components/ContactSection'
import { LangProvider } from './context/LangContext'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
    <LangProvider>
      <div className="dark min-h-screen bg-black text-white">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ServicesSection />
          <ContactSection />
        </main>
      </div>
    </LangProvider>
    </ThemeProvider>
  )
}
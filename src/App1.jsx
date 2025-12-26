import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, ExternalLink, Download, Code2, Smartphone, Globe, Phone, MessageCircle } from "lucide-react";
import Experiences from "./components/old/Experiences";

// 👉 Quick instructions
// - This is a single-file React portfolio you can paste into a Vite/Next.js project or preview here.
// - Edit the data in the CONFIG section below.
// - Tailwind CSS is assumed. If not present, you can replace classes with your own CSS.
// - All buttons/links are placeholders—swap with your URLs.

/* ==========================
   CONFIG — EDIT ME
========================== */
const PROFILE = {
  name: "Mouhamed Boucounta Ba",
  title: "Développeur Full Stack Web & Mobile",
  location: "Mbour, Sénégal",
  email: "boucountaba@gmail.com",
  phone: "+221778172827",
  whatsappUrl: "https://wa.me/221778172827",
  linkedin: "https://www.linkedin.com/in/mouhamed-boucountaba",
  github: "https://github.com/misterbou/",
  website: "https://boucountaba.wixsite.com/boudigital",
  resumeUrl: import.meta.env.BASE_URL + "CV_Boucounta_Ba 02.12.25 V5.pdf", // 👉 Replace with your uploaded PDF URL
  avatarUrl: import.meta.env.BASE_URL + "avatar.jpeg" ,// Placez votre photo ici (public/avatar.jpg)
  summary:
    "Développeur Full Stack (Flutter, Angular, Spring Boot) avec 3+ ans d'expérience en applications web et mobiles. Focus UX, intégrations IoT et solutions à impact.",
  skills: {
    frontend: ["Angular", "React", "Vue.js", "HTML5", "CSS3", "TypeScript"],
    mobile: ["Flutter", "React Native", "Android (Java/Kotlin)"],
    backend: ["Java (Spring Boot)", "Node.js", "Express.js"],
    database: ["MySQL", "Firebase"],
    tools: ["Git", "Figma", "Illustrator", "Photoshop", "Canva"],
  },
};

const PROJECTS = [
  {
    title: "PanoMagik",
    subtitle: "Écosystème de gestion des installations solaires",
    stack: ["Flutter", "Angular", "Spring Boot", "MySQL", "IoT"],
    description:
      "Trois apps mobiles + un dashboard web pour la collecte de prospects, le pipeline commercial, la gestion client et la consultation des données IoT.",
    links: [{ label: "Aperçu", url: "https://www.panomagik.com/" }],
  },
  {
    title: "Woomal Mbay Dashboard",
    subtitle: "Supervision technique et reporting",
    stack: ["Angular", "Spring Boot", "API externes"],
    description:
      "Tableau de bord pour le suivi global des pompes solaires connectées et des activités commerciales.",
    links: [{ label: "Aperçu", url: "https://app.woomalmbay.com/#/" }],
  },
  {
    title: "Sama Pump",
    subtitle: "Application Play Store",
    stack: ["Flutter", "Firebase"],
    description:
      "Application de suivi des pompes solaires — publication sur Google Play.",
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.nadjibi.app_pompe&hl=fr",
      },
    ],
  },
  {
    title: "Woomal Mbay Contacts",
    subtitle: "Application Play Store",
    stack: ["Flutter"],
    description: "Gestion des contacts pour le programme Woomal Mbay.",
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.nadjibi.woomal_mbay_contact&hl=fr",
      },
    ],
  },
];

/* ==========================
   UI HELPERS
========================== */
const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl shadow-sm border border-slate-200 bg-white transition-all hover:shadow-md hover:-translate-y-0.5 ${className}`}>{children}</div>
);

const TAG_STYLES = {
  Angular: 'bg-[#DD0031]/10 text-[#DD0031] border-[#DD0031]/20',
  React: 'bg-[#087EA4]/10 text-[#087EA4] border-[#087EA4]/20',
  'Vue.js': 'bg-[#42b883]/10 text-[#42b883] border-[#42b883]/20',
  HTML5: 'bg-orange-50 text-orange-700 border-orange-200',
  CSS3: 'bg-sky-50 text-sky-700 border-sky-200',
  TypeScript: 'bg-sky-50 text-sky-700 border-sky-200',
  Flutter: 'bg-[#02569B]/10 text-[#02569B] border-[#02569B]/20',
  'React Native': 'bg-blue-50 text-blue-700 border-blue-200',
  'Android (Java/Kotlin)': 'bg-lime-50 text-lime-700 border-lime-200',
  'Java (Spring Boot)': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Spring Boot': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Node.js': 'bg-lime-50 text-lime-700 border-lime-200',
  'Express.js': 'bg-neutral-50 text-neutral-700 border-neutral-200',
  MySQL: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  Firebase: 'bg-amber-50 text-amber-700 border-amber-200',
  Git: 'bg-slate-50 text-slate-700 border-slate-200',
  Figma: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200',
  Illustrator: 'bg-orange-50 text-orange-700 border-orange-200',
  Photoshop: 'bg-blue-50 text-blue-700 border-blue-200',
  Canva: 'bg-teal-50 text-teal-700 border-teal-200',
  IoT: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  'API externes': 'bg-indigo-50 text-indigo-700 border-indigo-200'
};

const badgeStyle = (label) => TAG_STYLES[label] || 'bg-white border-slate-200 text-slate-700';

const Badge = ({ children }) => {
  const label = typeof children === 'string' ? children : String(children);
  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${badgeStyle(label)}`}>
      {children}
    </span>
  );
};

const SectionTitle = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-2 mb-4">
    {Icon && <Icon className="w-5 h-5 text-[#0A6EBD]" />} 
    <h2 className="text-xl font-semibold tracking-tight">{children}</h2>
  </div>
);

/* ==========================
   APP
========================== */
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E9F5FF] via-white to-[#F5F0FF] text-slate-900">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="font-semibold">{PROFILE.name.split(" ")[0]}<span className="text-[#0A6EBD]">.</span></div>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#projets" className="hover:underline hover:text-[#0A6EBD]">Projets</a>
            <a href="#competences" className="hover:underline hover:text-[#0A6EBD]">Compétences</a>
            <a href="#contact" className="hover:underline hover:text-[#0A6EBD]">Contact</a>
            <a
              href={PROFILE.resumeUrl}
              className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm border-[#0A6EBD] text-[#0A6EBD] hover:bg-[#0A6EBD] hover:text-white transition-colors"
            >
              <Download className="w-4 h-4" /> CV
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#0A6EBD] to-[#7C3AED] bg-clip-text text-transparent">
              {PROFILE.name}
            </h1>
            <p className="mt-2 text-lg text-slate-700">{PROFILE.title}</p>
            <p className="mt-4 text-slate-700 max-w-prose">{PROFILE.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#0A6EBD] text-white px-4 py-2 hover:bg-[#085a97]"
              >
                <Mail className="w-4 h-4" /> Me contacter
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 border-[#0A6EBD] text-[#0A6EBD] hover:bg-[#0A6EBD] hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href={`tel:${PROFILE.phone}`}
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 border-slate-300 hover:bg-slate-50"
              >
                <Phone className="w-4 h-4" /> {PROFILE.phone}
              </a>
              <a
                href={PROFILE.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] text-white px-4 py-2 hover:opacity-90"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href={PROFILE.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 border-slate-300 hover:bg-slate-50"
              >
                <Globe className="w-4 h-4" /> Site Web  
              </a>
            </div>
            
            <div className="mt-4 flex items-center gap-4 text-slate-600">
              <p className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" /> {PROFILE.location}</p>
              <a className="inline-flex items-center gap-1 hover:underline" href={PROFILE.github} target="_blank" rel="noreferrer">
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex justify-center md:justify-end mb-6">
             {PROFILE.avatarUrl && (
                <img
                  src={PROFILE.avatarUrl}
                  alt={`${PROFILE.name} portrait`}
                  className="w-40 h-40 md:w-56 md:h-56 rounded-2xl object-cover ring-4 ring-white shadow-lg"
                />
              )}
            </div>

            <Card className="p-6">
              <SectionTitle icon={Code2}>Stack en un coup d'œil</SectionTitle>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                {PROFILE.skills.frontend.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
                {PROFILE.skills.mobile.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
                {PROFILE.skills.backend.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
                {PROFILE.skills.database.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
                {PROFILE.skills.tools.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
     {/*  <section id="projets" className="mx-auto max-w-6xl px-4 pb-10">
        <SectionTitle icon={Globe}>Projets sélectionnés</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="p-5 h-full">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-slate-700 text-sm">{p.subtitle}</p>
                  </div>
                  <Smartphone className="w-5 h-5 text-slate-500" />
                </div>
                <p className="mt-3 text-sm text-slate-700">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  {p.links.map((l) => (
                    <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-[#0A6EBD] hover:underline">
                      <ExternalLink className="w-4 h-4" /> {l.label}
                    </a>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* nouveau composant */}
      <Experiences/>

      {/* Skills */}
      <section id="competences" className="mx-auto max-w-6xl px-4 pb-10">
        <SectionTitle icon={Code2}>Compétences</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-5">
            <h4 className="font-medium mb-2">Frontend</h4>
            <div className="flex flex-wrap gap-2">
              {PROFILE.skills.frontend.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
            <h4 className="font-medium mt-4 mb-2">Mobile</h4>
            <div className="flex flex-wrap gap-2">
              {PROFILE.skills.mobile.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <h4 className="font-medium mb-2">Backend</h4>
            <div className="flex flex-wrap gap-2">
              {PROFILE.skills.backend.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
            <h4 className="font-medium mt-4 mb-2">Bases de données & Outils</h4>
            <div className="flex flex-wrap gap-2">
              {PROFILE.skills.database.concat(PROFILE.skills.tools).map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-16">
        <Card className="p-6">
          <SectionTitle icon={Mail}>Contact</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-700">
                Intéressé par une collaboration, une mission freelance ou un poste au Canada ?
                Écrivez-moi et je vous réponds rapidement.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-xl bg-[#0A6EBD] text-white px-4 py-2 hover:bg-[#085a97]">
                  <Mail className="w-4 h-4" /> {PROFILE.email}
                </a>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 border-[#0A6EBD] text-[#0A6EBD] hover:bg-[#0A6EBD] hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a href={`tel:${PROFILE.phone}`} className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-slate-50">
                  <Phone className="w-4 h-4" /> {PROFILE.phone}
                </a>
                <a href={PROFILE.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] text-white px-4 py-2 hover:opacity-90">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a
                  href={PROFILE.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 border-slate-300 hover:bg-slate-50"
                >
                  <Globe className="w-4 h-4" /> Site Web 
                </a>

              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Documents</h4>
              <a href={PROFILE.resumeUrl} className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-slate-50">
                <Download className="w-4 h-4" /> Télécharger mon CV (PDF)
              </a>
              <p className="mt-3 text-sm text-slate-600">Ajoutez votre lien PDF dans PROFILE.resumeUrl.</p>
            </div>
          </div>
        </Card>
      </section>

      <footer className="py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {PROFILE.name}. Tous droits réservés.
      </footer>
    </div>
  );
}

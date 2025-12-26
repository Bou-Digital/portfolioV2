// Données d'expériences extraites du texte fourni.
// Modifie les champs si nécessaire (dates, libellés, bullets).
const experiences = [
  {
    id: 1,
    title: "Développeur Mobile Freelance — Application Va Bene",
    company: "Faseya (Restaurant Va Bene, Suisse) — Contrat de prestation",
    period: "Nov. 2025 – Présent",
    summary:
      "Maintenance et évolution de l'application mobile de commande du restaurant Va Bene (Suisse).",
    highlights: [
      "Intégration de nouvelles API et fonctionnalités : paiement en ligne (Wallee), gestion des favoris, notifications push, fidélité et coupons.",
      "Correction de bugs critiques : notifications non envoyées, lenteur de validation, dysfonctionnements du module de commande.",
      "Optimisation des performances et amélioration de l'expérience utilisateur.",
      "Collaboration à distance avec l’équipe Faseya et le client final en Suisse."
    ],
    tech: ["React Native", "Node.js", "API REST", "Firebase"],
    links: [{ label: "Aperçu", url: "https://vabenepizza.ch/fr" }],
  },
  {
    id: 2,
    title: "Responsable Digital — Projet PanoMagik",
    company: "Nadji.Bi Group SA — Mbour",
    period: "Janvier 2025 – Juillet 2025",
    summary:
      "Pilotage et développement d’un écosystème digital complet pour la gestion d’installations solaires.",
    highlights: [
      "Développement de 3 applications mobiles (Flutter) et d’un tableau de bord web (Angular).",
      "Conception et déploiement d’outils de collecte de prospects, suivi commercial, gestion clients et intégration IoT.",
      "Développement Full‑Stack (Flutter, Angular, Spring Boot, MySQL).",
      "Amélioration du suivi client et réduction du temps de traitement des dossiers."
    ],
    tech: ["Flutter", "Angular", "Spring Boot", "MySQL", "IoT"],
    links: [{ label: "Aperçu", url: "https://admin.panomagik.com/" }],
  },
  {
    id: 3,
    title: "Développeur Sénior Android & Web — Programme Woomal Mbay",
    company: "Nadji.Bi Group SA — Mbour",
    period: "Mars 2023 – Décembre 2024",
    summary:
      "Participation au développement d’une solution intégrée pour la gestion de pompes solaires connectées.",
    highlights: [
      "Développement d’applications mobiles internes et déploiement sur le Play Store.",
      "Création du dashboard Woomal Mbay pour la supervision et le reporting.",
      "Travail sur intégrations API et supervision technique pour le client (Banque Agricole)."
    ],
    tech: ["Flutter", "Spring Boot", "Angular", "API externes"],
    links: [
      {
        label: "Aperçu",
        url: "https://app.woomalmbay.com/#/",
      },
    ],
  },
  {
    id: 4,
    title: "Sama Pump",
    company: "Nadji.Bi Group SA — Mbour",
    summary: "Application Play Store",
    highlights: [
      "Application de suivi des pompes solaires — publication sur Google Play."],
    tech: ["Flutter", "Spring Boot", "MySQL",],
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.nadjibi.app_pompe&hl=fr",
      },
    ],
  },
  {
    id: 5,
    title: "Woomal Mbay Contacts",
     company: "Nadji.Bi Group SA — Mbour",
    summary: "Application Play Store",
    highlights: ["Gestion des contacts pour le programme Woomal Mbay."],
    tech: ["Flutter", "Spring Boot", "MySQL",],
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.nadjibi.woomal_mbay_contact&hl=fr",
      },
    ],
  },
  {
    id: 6,
    title: "Développeur Junior — Projet Walalma",
    company: "Nadji.Bi Group SA — Mbour",
    period: "2022 – 2023",
    summary:
      "Conception et développement d’un ensemble d’applications mobiles et du dashboard de supervision.",
    highlights: [
      "Développement des applications Walalma Manager, Walalma Client et Walalma Caissier.",
      "Mise en place du dashboard Walalma pour la supervision centralisée.",
      "Travail en collaboration avec des partenaires institutionnels et maintenance technique."
    ],
    tech: ["Flutter", "Angular", "Spring Boot"],
    links: [{ label: "Aperçu", url: "https://app.walalma.com/#/" }],
  },
  {
    id: 7,
    title: "Infographiste / Responsable Digital",
    company: "Partenariat avec l'association Emaano — Dakar",
    period: "Juillet 2021",
    summary:
      "Création de contenus visuels et soutien à la communication digitale de l'association.",
    highlights: [
      "Création de visuels : bannières, affiches et contenus pour réseaux sociaux.",
      "Design de maquettes d’interfaces pour les projets web de l'association.",
      "Appui à la communication digitale et valorisation des activités sociales."
    ],
    tech: ["Figma", "Illustrator", "Photoshop", "Canva"]
  }
];

export default experiences;
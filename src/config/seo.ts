export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
  type?: string;
}

const baseUrl = 'https://batex.ch';

export const seoConfig: Record<string, SEOConfig> = {
  home: {
    title: 'Bâtex - Entreprise de Rénovation en Suisse | Baris Ozcan',
    description: 'Bâtex, dirigée par Baris Ozcan, menuisier certifié avec plus de 15 ans d\'expérience. Rénovation, menuiserie, peinture, aménagement intérieur et extérieur en Suisse. Devis gratuit et service de qualité.',
    keywords: 'rénovation suisse, menuiserie, peinture, aménagement, Baris Ozcan, Bâtex, construction, rénovation intérieure, rénovation extérieure',
    image: `${baseUrl}/public/accueil.jpeg`,
    url: baseUrl,
    type: 'website'
  },
  about: {
    title: 'À Propos - Bâtex | Baris Ozcan - Menuisier Certifié en Suisse',
    description: 'Découvrez l\'expertise de Baris Ozcan, menuisier certifié avec plus de 15 ans d\'expérience. Bâtex, votre partenaire de confiance pour tous vos projets de rénovation en Suisse.',
    keywords: 'Baris Ozcan, menuisier certifié, expérience rénovation, Bâtex histoire, expertise construction, Suisse',
    image: `${baseUrl}/public/baris_ozcan.png`,
    url: `${baseUrl}/a-propos`,
    type: 'profile'
  },
  menuiserie: {
    title: 'Menuiserie - Bâtex | Fabrication et Installation sur Mesure',
    description: 'Menuiserie sur mesure : portes, fenêtres, escaliers, placards. Fabrication et installation par Baris Ozcan, menuisier certifié. Devis gratuit en Suisse.',
    keywords: 'menuiserie sur mesure, portes fenêtres, escaliers, placards, fabrication menuiserie, installation, Suisse',
    image: `${baseUrl}/public/menuiserie2.avif`,
    url: `${baseUrl}/services/menuiserie`,
    type: 'website'
  },
  peinture: {
    title: 'Peinture - Bâtex | Peinture Intérieure et Extérieure en Suisse',
    description: 'Service de peinture professionnel : intérieur et extérieur. Préparation, application, finitions. Travail soigné et durable par Bâtex.',
    keywords: 'peinture intérieure, peinture extérieure, peinture professionnelle, finitions, préparation murs, Suisse',
    image: `${baseUrl}/public/renovation.jpg`,
    url: `${baseUrl}/services/peinture`,
    type: 'website'
  },
  recouvrement: {
    title: 'Recouvrement de Sols - Bâtex | Parquet, Carrelage, Moquette',
    description: 'Installation et rénovation de sols : parquet, carrelage, moquette, stratifié. Pose professionnelle et finitions soignées par Bâtex.',
    keywords: 'recouvrement sols, parquet, carrelage, moquette, stratifié, pose sols, rénovation sols, Suisse',
    image: `${baseUrl}/public/sol.jpg`,
    url: `${baseUrl}/services/recouvrement`,
    type: 'website'
  },
  fauxMurs: {
    title: 'Faux Murs et Cloisons - Bâtex | Aménagement Intérieur',
    description: 'Construction de faux murs, cloisons et aménagement intérieur. Solutions sur mesure pour optimiser votre espace avec Bâtex.',
    keywords: 'faux murs, cloisons, aménagement intérieur, construction, optimisation espace, Suisse',
    image: `${baseUrl}/public/faux-plafond.jpg`,
    url: `${baseUrl}/services/faux-murs`,
    type: 'website'
  },
  jardin: {
    title: 'Aménagement Jardin - Bâtex | Terrasses et Espaces Extérieurs',
    description: 'Aménagement de jardins, terrasses et espaces extérieurs. Construction de terrasses en bois, aménagement paysager par Bâtex.',
    keywords: 'aménagement jardin, terrasses bois, espaces extérieurs, paysagisme, construction terrasses, Suisse',
    image: `${baseUrl}/public/exterieur.jpg`,
    url: `${baseUrl}/services/jardin`,
    type: 'website'
  },
  sanitaires: {
    title: 'Sanitaires - Bâtex | Rénovation Salles de Bain et WC',
    description: 'Rénovation complète de salles de bain et WC. Installation sanitaire, carrelage, plomberie. Travail soigné et fonctionnel par Bâtex.',
    keywords: 'rénovation salle de bain, WC, sanitaires, carrelage, plomberie, installation sanitaire, Suisse',
    image: `${baseUrl}/public/sanitaire.jpg`,
    url: `${baseUrl}/services/sanitaires`,
    type: 'website'
  },
  toiture: {
    title: 'Toiture - Bâtex | Réparation et Rénovation de Toits',
    description: 'Réparation et rénovation de toitures. Entretien, réparation fuites, isolation. Service complet de toiture par Bâtex.',
    keywords: 'toiture, réparation toit, rénovation toiture, isolation, fuites toiture, entretien toiture, Suisse',
    image: `${baseUrl}/public/toiture.jpg`,
    url: `${baseUrl}/services/toiture`,
    type: 'website'
  },
  galerie: {
    title: 'Galerie - Bâtex | Réalisations et Projets de Rénovation',
    description: 'Découvrez nos réalisations en rénovation, menuiserie et aménagement. Galerie de projets Bâtex en Suisse.',
    keywords: 'galerie projets, réalisations rénovation, menuiserie, aménagement, portfolio Bâtex, Suisse',
    image: `${baseUrl}/public/Galerie/batex-renovation-1.jpeg`,
    url: `${baseUrl}/galerie`,
    type: 'website'
  },
  contact: {
    title: 'Contact - Bâtex | Devis Gratuit Rénovation Suisse',
    description: 'Contactez Bâtex pour un devis gratuit de rénovation. Baris Ozcan, menuisier certifié, à votre service en Suisse.',
    keywords: 'contact Bâtex, devis gratuit, rénovation, Baris Ozcan, menuisier, Suisse',
    image: `${baseUrl}/public/accueil.jpeg`,
    url: `${baseUrl}/contact`,
    type: 'website'
  },
  notFound: {
    title: 'Page Non Trouvée - Bâtex',
    description: 'La page que vous recherchez n\'existe pas. Retournez à l\'accueil de Bâtex pour découvrir nos services de rénovation.',
    keywords: 'page non trouvée, erreur 404, Bâtex, rénovation suisse',
    image: `${baseUrl}/public/accueil.jpeg`,
    url: `${baseUrl}/404`,
    type: 'website'
  }
};

export const getSEOConfig = (path: string): SEOConfig => {
  const pathMap: Record<string, string> = {
    '/': 'home',
    '/a-propos': 'about',
    '/services/menuiserie': 'menuiserie',
    '/services/peinture': 'peinture',
    '/services/recouvrement': 'recouvrement',
    '/services/faux-murs': 'fauxMurs',
    '/services/jardin': 'jardin',
    '/services/sanitaires': 'sanitaires',
    '/services/toiture': 'toiture',
    '/galerie': 'galerie',
    '/contact': 'contact'
  };

  const key = pathMap[path] || 'notFound';
  return seoConfig[key];
};
